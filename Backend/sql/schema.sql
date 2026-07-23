-- Run this in your Supabase project's SQL Editor (Database > SQL Editor > New query)

-- 1. Profiles table: extends Supabase's built-in auth.users with a role
create table if not exists profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text,
  role text not null default 'user' check (role in ('user', 'admin')),
  is_active boolean not null default true,
  created_at timestamp with time zone default now()
);

-- 2. Automatically create a profile row whenever someone signs up
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, role)
  values (new.id, new.email, 'user');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();

-- 3. Row Level Security: users can read their own profile,
--    but only admins (checked server-side) can modify roles.
alter table profiles enable row level security;

create policy "Users can view their own profile"
  on profiles for select
  using (auth.uid() = id);

-- Note: admin actions (listing all users, changing roles) go through
-- your Express backend using the SUPABASE_SERVICE_ROLE_KEY, which
-- bypasses RLS. Never expose the service role key to the frontend.

-- 4. Optional: link uploaded records to the user who created them
create table if not exists document_records (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  file_name text not null,
  file_hash text not null,
  tx_hash text not null,
  previous_tx_hash text,
  created_at timestamp with time zone default now()
);

alter table document_records enable row level security;

create policy "Users can view their own records"
  on document_records for select
  using (auth.uid() = user_id);

-- To make yourself an admin after signing up once through the app:
-- update profiles set role = 'admin' where email = 'your-email@example.com';
// Backend-only Supabase client, using the SERVICE ROLE key.
// This key bypasses Row Level Security — it must NEVER be sent to the
// frontend or exposed in any client-side code. Only used here, server-side.
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error(
    '\nMissing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env — see .env.example.\n'
  );
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

module.exports = { supabase };
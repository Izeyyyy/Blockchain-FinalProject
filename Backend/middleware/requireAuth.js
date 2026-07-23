// Verifies the Supabase access token sent from the frontend
// (as: Authorization: Bearer <access_token>)
// Since only admin accounts exist in this app, being logged in
// IS being an admin — there's no separate role to check.

const { supabase } = require('../supabaseClient');

async function requireAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

    if (!token) {
      return res.status(401).json({ error: 'Missing or invalid Authorization header.' });
    }

    const { data: userData, error: userError } = await supabase.auth.getUser(token);
    if (userError || !userData?.user) {
      return res.status(401).json({ error: 'Invalid or expired session.' });
    }

    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('is_active, email')
      .eq('id', userData.user.id)
      .single();

    if (profileError || !profile) {
      return res.status(401).json({ error: 'User profile not found.' });
    }

    if (!profile.is_active) {
      return res.status(403).json({ error: 'This account has been deactivated.' });
    }

    req.user = { id: userData.user.id, email: profile.email };
    next();
  } catch (err) {
    console.error('Auth middleware error:', err);
    res.status(500).json({ error: 'Authentication check failed.' });
  }
}

module.exports = { requireAuth };
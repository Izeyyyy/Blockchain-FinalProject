// Verifies the Supabase access token sent from the frontend
// (as: Authorization: Bearer <access_token>)
// and attaches the logged-in user + their profile (role) to req.user

const { supabase } = require('../supabaseClient');

async function requireAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

    if (!token) {
      return res.status(401).json({ error: 'Missing or invalid Authorization header.' });
    }

    // Verify the token with Supabase and get the user it belongs to
    const { data: userData, error: userError } = await supabase.auth.getUser(token);
    if (userError || !userData?.user) {
      return res.status(401).json({ error: 'Invalid or expired session.' });
    }

    // Look up their role/status from the profiles table
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('role, is_active, email')
      .eq('id', userData.user.id)
      .single();

    if (profileError || !profile) {
      return res.status(401).json({ error: 'User profile not found.' });
    }

    if (!profile.is_active) {
      return res.status(403).json({ error: 'This account has been deactivated.' });
    }

    req.user = {
      id: userData.user.id,
      email: profile.email,
      role: profile.role,
    };

    next();
  } catch (err) {
    console.error('Auth middleware error:', err);
    res.status(500).json({ error: 'Authentication check failed.' });
  }
}

module.exports = { requireAuth };
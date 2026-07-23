// Use this AFTER requireAuth — it assumes req.user is already set.
// Blocks any request from a non-admin user.

function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required.' });
  }
  next();
}

module.exports = { requireAdmin };
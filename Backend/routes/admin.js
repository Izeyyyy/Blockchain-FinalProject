const express = require('express');
const { supabase } = require('../supabaseClient');
const { readIndex } = require('../localIndex');
const { requireAuth } = require('../middleware/requireAuth');
const { requireAdmin } = require('../middleware/requireAdmin');

const router = express.Router();

// All routes below require a logged-in admin
router.use(requireAuth, requireAdmin);

// GET /admin/dashboard — records + basic stats
router.get('/dashboard', (req, res) => {
  const records = readIndex();

  const totalUploads = records.length;
  const totalVerifications = records.filter((r) => r.lastVerifyResult !== undefined).length;
  const validCount = records.filter((r) => r.lastVerifyResult === true).length;
  const tamperedCount = records.filter((r) => r.lastVerifyResult === false).length;

  res.json({
    stats: { totalUploads, totalVerifications, validCount, tamperedCount },
    records,
  });
});

// GET /admin/users — list all registered users and their roles
router.get('/users', async (req, res) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, email, role, is_active, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    return res.status(500).json({ error: 'Failed to fetch users.', details: error.message });
  }

  res.json({ count: data.length, users: data });
});

// PATCH /admin/users/:id/role — promote/demote a user
router.patch('/users/:id/role', async (req, res) => {
  const { role } = req.body;
  if (!['user', 'admin'].includes(role)) {
    return res.status(400).json({ error: "Role must be 'user' or 'admin'." });
  }

  // Prevent an admin from accidentally demoting themselves and locking everyone out
  if (req.params.id === req.user.id && role !== 'admin') {
    return res.status(400).json({ error: 'You cannot remove your own admin role.' });
  }

  const { data, error } = await supabase
    .from('profiles')
    .update({ role })
    .eq('id', req.params.id)
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: 'Failed to update role.', details: error.message });
  }

  res.json({ message: 'Role updated.', user: data });
});

// PATCH /admin/users/:id/status — activate/deactivate an account
router.patch('/users/:id/status', async (req, res) => {
  const { is_active } = req.body;
  if (typeof is_active !== 'boolean') {
    return res.status(400).json({ error: 'is_active must be true or false.' });
  }

  if (req.params.id === req.user.id && is_active === false) {
    return res.status(400).json({ error: 'You cannot deactivate your own account.' });
  }

  const { data, error } = await supabase
    .from('profiles')
    .update({ is_active })
    .eq('id', req.params.id)
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: 'Failed to update status.', details: error.message });
  }

  res.json({ message: 'Status updated.', user: data });
});

module.exports = router;
const express = require('express');
const { supabase } = require('../supabaseClient');
const { readIndex } = require('../localIndex');
const { requireAuth } = require('../middleware/requireAuth');

const router = express.Router();

// All routes below require a logged-in admin account
router.use(requireAuth);

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

// GET /admin/users — list all admin accounts
router.get('/users', async (req, res) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, email, is_active, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    return res.status(500).json({ error: 'Failed to fetch users.', details: error.message });
  }

  res.json({ count: data.length, users: data });
});

// PATCH /admin/users/:id/status — activate/deactivate an admin account
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
const express = require('express');
const router = express.Router();
const { login, getMe, setupAdmin } = require('../controllers/authController');
const { protect, admin } = require('../middlewares/auth');

router.post('/login', login);
router.post('/setup', setupAdmin);
router.get('/me', protect, admin, getMe);

module.exports = router;

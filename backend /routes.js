const express = require('express');
const { signup, login, changePassword } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/change-password', changePassword);

module.exports = router;
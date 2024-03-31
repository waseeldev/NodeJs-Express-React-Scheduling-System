const express = require('express');
const router = express.Router();
const { login } = require('../controllers/userController');
const { validatePostLoginInput } = require('../middlewares/validateUserLogin');

router.post('/login',validatePostLoginInput ,login);

module.exports = router;

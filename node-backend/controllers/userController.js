// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/index');
const { encryptPassword, comparePasswords } = require('../utils/encryption');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(401).json({ message: 'Invalid username or password' });
    // console.log(await encryptPassword(password));
    // console.log(await comparePasswords(password,user.password));
    const isValidPassword = await comparePasswords(password, user.password);
    if (!isValidPassword) return res.status(401).json({ message: 'Invalid username or password' });
    
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

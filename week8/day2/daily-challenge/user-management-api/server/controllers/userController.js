const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

exports.register = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.createUser(username, hashedPassword);
    res.status(201).json(user);
  };

  
exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findUserByUsername(username);
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (isValidPassword) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

exports.getAllUsers = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.status(200).json(users);
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findUserById(id);
  res.status(200).json(user);
};

exports.updateUserById = async (req, res) => {
  const { id } = req.params;
  const updatedUser = await userModel.updateUserById(id, req.body);
  res.status(200).json(updatedUser);
};
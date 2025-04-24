const express = require('express');
const authController = require('./auth-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/auth', route);

  // login user
  route.post('/login', authController.login);
};
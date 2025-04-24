const express = require('express');
const peopleController = require('./people-controller');
const { authenticateToken } = require('../../../utils/authenticate-token');
const route = express.Router();

module.exports = (app) => {
  app.use('/people', route);

  // Mendapatkan data semua people
  route.get('/', authenticateToken, peopleController.getPeoples);

  // Mendapatkan data people berdasarkan id
  route.get('/:id', authenticateToken, peopleController.getPeople);
};

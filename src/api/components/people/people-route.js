const express = require('express');

const peopleController = require('./people-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/people', route);

  // Mendapatkan data semua people
  route.get('/', peopleController.getPeople);

  // Mendapatkan data people berdasarkan id
  route.get('/:id', peopleController.getPeopleById);
};

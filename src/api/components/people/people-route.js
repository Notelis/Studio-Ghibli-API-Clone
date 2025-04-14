const express = require('express');

const peopleController = require('./people-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/people', route);

  // Get list of people
  route.get('/', peopleController.getPeople);

  // Get List of people by id
  route.get('/:id', booksController.getPeopleById);
};
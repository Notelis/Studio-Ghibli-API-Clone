const express = require('express');

const peopleController = require('../../../models');

const route = express.Router();

module.exports = (app) => {
  app.use('/people', route);

  // Get list of all people
  route.get('/', peopleController.getPeople);

  // Get people by id
  route.get('/:id', peopleController.getPeopleById);
};

module.exports = {
  getAllPeople,
  getPersonById,
};

const express = require('express');

const peopleController = require('./people-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/books', route);

  // Get list of books
  route.get('/', peopleController.getPeople);

  // Create a new book
  route.get('/:id', booksController.getPeopleById);
};

getPeopleById
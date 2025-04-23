const express = require('express');

const filmsController = require('./films-controller');

const { authenticateToken } = require('../../../utils/authenticate-token');

const route = express.Router();

module.exports = (app) => {
  app.use('/films', route);

  route.get('/', authenticateToken, filmsController.getFilms);

  route.get('/:id', authenticateToken, filmsController.getFilm);
};
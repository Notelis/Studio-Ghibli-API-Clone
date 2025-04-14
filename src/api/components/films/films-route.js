const express = require('express');

const filmsController = require('./films-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/films', route);
  route.get('/', filmsController.getFilms);
  route.get('/:id', filmsController.getFilmById);
  route.get('/:director', filmsController.getFilmByDirector);
  route.get('/:producer', filmsController.getFilmByProducer);
};
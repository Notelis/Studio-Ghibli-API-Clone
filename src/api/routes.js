const express = require('express');

const films = require('./components/films/films-route');
const locations = require('./components/locations/locations-route');
const people = require('./components/people/people-route');
const species = require('./components/species/species-route');
const vehicle = require('./components/vehicle/vehicle-route');
const auth = require('./components/authentication/auth-route')

module.exports = () => {
  const app = express.Router();
  films(app);
  locations(app);
  people(app);
  species(app);
  vehicle(app);
  auth(app);

  return app;
};
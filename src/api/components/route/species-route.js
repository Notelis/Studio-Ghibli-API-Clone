const express = require('express');

const speciesController = require('./species-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/species', route);

  // Get all species
  route.get('/', speciesController.getSpecies);

  // Get species by ID
  route.get('/:id', speciesController.getSpeciesById);

  // Create new species (extra)
  route.post('/', speciesController.createSpecies);

  // Update species (extra)
  route.put('/:id', speciesController.updateSpecies);

  // Delete species (extra)
  route.delete('/:id', speciesController.deleteSpecies);
};
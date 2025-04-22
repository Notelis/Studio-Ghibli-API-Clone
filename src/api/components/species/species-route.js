const express = require('express');

const speciesController = require('./species-controller');

const { authenticateToken } = require('../../../utils/authenticate-token');

const route = express.Router();
 
module.exports = (app) => {
    app.use('/species', route);
 
    // Get all species (but only if authenticated)
    route.get('/', authenticateToken, speciesController.getSpecies);

    // Get species by ID (also only if authenticated)
    route.get('/:id', authenticateToken, speciesController.getSpeciesById);

   // Get all species
   //route.get('/', speciesController.getSpecies);
   
   // Get species by ID
   //route.get('/:id', speciesController.getSpeciesById);
 };

 

 
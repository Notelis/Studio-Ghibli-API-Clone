const express = require('express');
const vehicleController = require('./vehicle-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/vehicles', route);

  // Get all vehicles
  route.get('/', vehicleController.getVehicles);

  // Get vehicle by ID
  route.get('/:id', vehicleController.getVehicleById);
};

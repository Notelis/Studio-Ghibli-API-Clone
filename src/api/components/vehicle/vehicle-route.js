const express = require('express');
const vehicleController = require('./vehicle-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/vehicles', route);

  //  get all vehicles use authentication
  route.get('/', authenticateToken, vehicleController.getVehicles);

  // get all vehicles by id but use authentication
  route.get('/:id', authenticateToken, vehicleController.getVehicleById);

  // Get all vehicles
  //route.get('/', vehicleController.getVehicles);

  // Get vehicle by ID
  //route.get('/:id', vehicleController.getVehicleById);
};

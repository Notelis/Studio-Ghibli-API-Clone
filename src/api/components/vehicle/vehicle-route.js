const express = require('express');

const vehicleController = require('./vehicle-controller');

const { authenticateToken } = require('../../../utils/authenticate-token');

const route = express.Router();

module.exports = (app) => {
  app.use('/vehicles', route);

  // get all vehicles if use authentication
  route.get('/', authenticateToken, vehicleController.getVehicles);

  //get alll vehicles bby id if use authentication
  route.get('/:id', authenticateToken, vehicleController.getVehicleById);

  // Get all vehicles
  //route.get('/', vehicleController.getVehicles);

  // Get vehicle by ID
  //route.get('/:id', vehicleController.getVehicleById);
};

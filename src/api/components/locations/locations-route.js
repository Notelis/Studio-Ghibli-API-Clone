const express = require('express');
const locationsController = require('./locations-controller');
const { authenticateToken } = require('../../../utils/authenticate-token');
const route = express.Router();

module.exports = (app) => {
    app.use('/locations', route);

    route.get('/', authenticateToken, locationsController.getLocations);

    route.get('/:id', authenticateToken, locationsController.getLocationById);
};

const express = require('express');
const locationsController = require('./locations-controller');
const route = express.Router();

module.exports = (app) => {
    app.use('/locations', route);

    route.get('/', locationsController.getLocations);

    route.get('/:id', locationsController.getLocationById);
};

const locationsService = require('./locations-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getLocations(request, response, next) {
  try {
    const { name } = request.query;
    const locations = await locationsService.getLocations({ name });

    return response.status(200).json(locations);
  } catch (error) {
    next(error);
  }
}

async function getLocationById(request, response, next) {
    try {
    const id = request.params;
      const locationsId = await locationsService.getLocationById(id);
  
      return response.status(200).json(locationsId);
    } catch (error) {
      return next(error);
    }
  }

  async function getLocationByTerrain(request, response, next) {
    try {
      const { terrain } = request.query;
      const locationsTerrain = await locationsService.getLocationByTerrain(terrain);

      return response.status(200).json(locationsTerrain);
    } catch (error) {
      return next(error);
    }
}

module.exports = {
  getLocations,
  getLocationById,
  getLocationByTerrain,
};
const locationsService = require('./locations-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getLocations(request, response, next) {
  try {
    const locations = await locationsService.getLocations();

    return response.status(200).json(locations);
  } catch (error) {
    next(error);
  }
}

async function getLocationById(request, response, next) {
    try {
      const locationsId = await locationsService.getLocationById();
  
      return response.status(200).json(locationsId);
    } catch (error) {
      return next(error);
    }
  }

module.exports = {
  getLocations,
  getLocationById,
};
const locationsService = require('./locations-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getLocations(request, response, next) {
  try {
    const { name, terrain, limit, offset } = request.query;
  
    const parsedLimit = parseInt(limit, 10) || 0;
    const parsedOffset = parseInt(offset, 10) || 0;
  
    const locations = await locationsService.getLocations({
      name,
      terrain,
      limit: parsedLimit,
      offset: parsedOffset,
    });

    return response.status(200).json(locations);
  } catch (error) {
    next(error);
  }
}

async function getLocationById(request, response, next) {
  try {
    const { id } = request.params;
    const locationsId = await locationsService.getLocationById(id);

    if (!locationsId) {
      throw errorResponder(errorTypes.RESOURCE_NOT_FOUND, 'Location not found');
    }
      
    return response.status(200).json(locationsId);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getLocations,
  getLocationById,
};
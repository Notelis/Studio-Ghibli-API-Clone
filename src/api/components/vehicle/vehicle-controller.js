const vehicleService = require('./vehicle-service'); 
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getVehicles(request, response, next) {
  try {
    const { fields, limit, offset } = request.query;
    const vehicles = await vehicleService.getVehicles({ fields, limit, offset });

    return response.status(200).json(vehicles);
  } catch (error) {
    return next(error);
  }
}

async function getVehicleById(request, response, next) {
  try {
    const { id } = request.params;
    const vehicle = await vehicleService.getVehicleById(id);

    if (!vehicle) {
      return next(errorResponder(errorTypes.NOT_FOUND, 'Vehicle not found'));
    }

    return response.status(200).json(vehicle);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getVehicles,
  getVehicleById,
};

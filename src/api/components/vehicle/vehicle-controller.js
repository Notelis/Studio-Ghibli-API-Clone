const vehicleService = require('./vehicle-service'); 
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getVehicles(request, response, next) {
  try {
    const {limit, offset, name, vehicle_class } = request.query;

    // Menyiapkan parsed limit dan offset
    const parsedLimit = parseInt(limit, 10) || 50; 
    const parsedOffset = parseInt(offset, 10) || 0; 
    

    const filter = {};

    if (name) {
      filter.name = new RegExp(name, 'i');  // Menambahkan filter untuk name
    }

    if (vehicle_class) {
      filter.vehicle_class = new RegExp(vehicle_class, 'i');  // Menambahkan filter untuk vehicle_class
    }

    const vehicles = await vehicleService.getVehicles({
      filters: filter,
      limit: parsedLimit,
      offset: parsedOffset
    });

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

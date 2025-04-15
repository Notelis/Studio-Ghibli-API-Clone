const vehiclesRepository = require('./vehicles-repository');

async function getVehicles(offset = 0, limit = 50) {
  return vehiclesRepository.getVehicles(offset, limit);
}

async function getVehicleById(id) {
  return vehiclesRepository.getVehicleById(id);
}

async function createVehicle(data) {
  return vehiclesRepository.createVehicle(data);
}

module.exports = {
  getVehicles,
  getVehicleById,
  createVehicle, 
};

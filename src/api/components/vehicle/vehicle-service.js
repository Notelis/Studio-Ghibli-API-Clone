const vehiclesRepository = require('./vehicle-repository');

async function getVehicles({ offset = 0, limit = 50 }) {
  return vehiclesRepository.getVehicles(offset, limit);
}

async function getVehicleById(id) {
  return vehiclesRepository.getVehicleById(id);
}



module.exports = {
  getVehicles,
  getVehicleById, 
};

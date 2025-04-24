const vehiclesRepository = require('./vehicle-repository');

async function getVehicles({ filters = {}, offset = 0, limit = 50 }) {

  const { fields } = filters;
  
  return vehiclesRepository.getVehicles(filters, limit, offset);
}

async function getVehicleById(id) {
  return vehiclesRepository.getVehicleById(id);
}



module.exports = {
  getVehicles,
  getVehicleById, 
};

const { Vehicles } = require('../../../models');

async function getVehicles(filter={}, limit= 0, offset=0) {
  const query = {};

  if(filter.name) {
    query.name = new RegExp(filter.name, 'i');
  }

  if (filter.vehicle_class) {
    query.vehicle_class = new RegExp(filter.vehicle_class, 'i');
  }

  return Vehicles.find(query)
    .skip(offset)
    .limit(limit);
}

async function getVehicleById(id) {
  return Vehicles.findById(id);
}

module.exports = {
  getVehicles,
  getVehicleById,
};


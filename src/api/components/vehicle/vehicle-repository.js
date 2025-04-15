const { Vehicles } = require('../../../models');

async function getVehicles(offset = 0, limit = 10) {
  return Vehicles.find({})
    .skip(Number(offset))
    .limit(Math.min(Number(limit), 250)); 
}

async function getVehicleById(id) {
  return Vehicles.findOne({ id });
}

module.exports = {
  getVehicles,
  getVehicleById,
};


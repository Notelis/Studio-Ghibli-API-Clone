<<<<<<< Updated upstream
const vehiclesRepository = require('./vehicles-repository');

async function getVehicles(offset = 0, limit = 50) {
  return vehiclesRepository.getVehicles(offset, limit);
}

async function getVehicleById(id) {
  return vehiclesRepository.getVehicleById(id);
}

async function createVehicle(data) {
  return vehiclesRepository.createVehicle(data);
=======
const vehicleRepository = require('./vehicle-repository');

// Mendapatkan semua data kendaraan
async function getVehicles() {
  return vehicleRepository.getVehicles();
}

// Mendapatkan kendaraan berdasarkan ID
async function getVehicle(id) {
  return vehicleRepository.getVehicle(id);
}

// Opsional: Mendapatkan kendaraan berdasarkan nama, jika kamu punya fitur pencarian by name
async function getVehicleByName(name) {
  return vehicleRepository.getVehicleByName({ name });
>>>>>>> Stashed changes
}

module.exports = {
  getVehicles,
<<<<<<< Updated upstream
  getVehicleById,
  createVehicle, 
=======
  getVehicle,
  getVehicleByName, // opsional, bisa dihapus jika tidak diperlukan
>>>>>>> Stashed changes
};

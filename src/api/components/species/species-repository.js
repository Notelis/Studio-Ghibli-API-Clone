const { Species } = require('../../../models');

// Get all species

async function getSpecies() {
  return Species.find({});
}

// Get a species by ID

async function getSpeciesById(id) {
  return Species.findById(id);
}

module.exports = {
  getSpecies,
  getSpeciesById,
};

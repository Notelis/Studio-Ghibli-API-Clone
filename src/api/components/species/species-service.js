const speciesRepository = require('./species-repository');

// Get all species

async function getSpecies({ offset = 0, limit = 50 }) {
  return speciesRepository.getSpecies();
}

// Get a single species by ID

async function getSpeciesById(id) {
  return speciesRepository.getSpeciesById(id);
}

module.exports = {
  getSpecies,
  getSpeciesById,
};

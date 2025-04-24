const { Species } = require('../../../models');

async function getSpecies(filter = {}, limit = 0, offset = 0) {
  const query = {};

  if (filter.name) {
    query.name = new RegExp(filter.name, 'i');
  }

  return Species.find(query)
    .skip(offset)
    .limit(limit);
}

async function getSpeciesById(id) {
  return Species.findById(id);
}

module.exports = {
  getSpecies,
  getSpeciesById,
};


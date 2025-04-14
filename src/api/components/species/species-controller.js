const speciesService = require('./species-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getSpecies(request, response, next) {
  try {
    const speciesList = await speciesService.getSpecies();
    
    return response.status(200).json(speciesList);
  } catch (error) {
    return next(error);
  }
}

async function getSpeciesById(request, response, next) {
  try {
    const species = await speciesService.getSpeciesById(request.params.id);

    if (!species) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Species not found');
    }

    return response.status(200).json(species);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getSpecies,
  getSpeciesById,
};

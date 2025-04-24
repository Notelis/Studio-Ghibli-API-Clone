const speciesService = require('./species-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getSpecies(request, response, next) {
  try {
    const { name, limit, offset } = request.query;

    const parsedLimit = parseInt(limit, 10) || 0;
    const parsedOffset = parseInt(offset, 10) || 0;

    const speciesList = await speciesService.getSpecies({
      name,
      limit: parsedLimit,
      offset: parsedOffset,
    });

    return response.status(200).json(speciesList);
  } catch (error) {
    return next(error);
  }
}

async function getSpeciesById(request, response, next) {
  try {
    const { id } = request.params;
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

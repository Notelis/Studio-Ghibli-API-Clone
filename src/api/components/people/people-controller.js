const peopleService = require('./people-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getPeoples(request, response, next) {
  try {
    const { name } = request.query;
    const people = await peopleService.getPeoples({ name });

    return response.status(200).json(people);
  } catch (error) {
    return next(error);
  }
}

async function getPeople(request, response, next) {
    try {
      const { id } = request.params;
      const peopleId = await peopleService.getPeople(id);
      
      if (!peopleId) {
        throw errorResponder(errorTypes.RESOURCE_NOT_FOUND, 'Person not found');
      }
  
      return response.status(200).json(peopleId);
    } catch (error) {
      return next(error);
    }
  }

module.exports = {
  getPeoples,
  getPeople,
};
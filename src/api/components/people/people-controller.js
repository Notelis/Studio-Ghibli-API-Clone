const peopleService = require('./people-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getPeople(request, response, next) {
  try {
    const { name } = request.query;
    const people = await peopleService.getPeople({ name });

    return response.status(200).json(people);
  } catch (error) {
    return next(error);
  }
}

async function getPeopleById(request, response, next) {
    try {
      const id = request.params;
      const peopleId = await peopleService.getPeopleById(id);
  
      return response.status(200).json(peopleId);
    } catch (error) {
      return next(error);
    }
  }

module.exports = {
  getPeople,
  getPeopleById,
};
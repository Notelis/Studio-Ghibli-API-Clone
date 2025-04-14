const peopleService = require('./people-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getPeople(request, response, next) {
  try {
    const people = await peopleService.getPeople();

    return response.status(200).json(people);
  } catch (error) {
    return next(error);
  }
}

async function getPeopleById(request, response, next) {
    try {
      const peopleId = await peopleService.getPeopleById();
  
      return response.status(200).json(peopleId);
    } catch (error) {
      return next(error);
    }
  }

module.exports = {
  getPeople,
  getPeopleById,
};
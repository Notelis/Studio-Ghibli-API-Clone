const peopleRepository = require('./people-repository');

async function getPeoples({ name, limit, offset }) {
  return peopleRepository.getPeoples({ name }, limit, offset);
}


async function getPeople(id) {
  return peopleRepository.getPeople(id);
}

module.exports = {
  getPeoples,
  getPeople,
};
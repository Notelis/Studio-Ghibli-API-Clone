const peopleRepository = require('./people-repository');

async function getPeoples() {
  return peopleRepository.getPeoples();
}

async function getPeople(id) {
  return peopleRepository.getPeople(id);
}

module.exports = {
  getPeoples,
  getPeople,
};
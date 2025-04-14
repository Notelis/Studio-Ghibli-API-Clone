const peopleRepository = require('./people-repository');

async function getPeoples() {
  return peopleRepository.getPeoples();
}

async function getPeople(id) {
  return peopleRepository.getPeople(id);
}

async function getPeopleByName(name) {
  return peopleRepository.getPeopleByName({ name });
}

module.exports = {
    getPeoples,
    getPeople,
    getPeopleByName,
  };
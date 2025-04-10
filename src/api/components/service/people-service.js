const peopleRepository = require('./people-repository');

async function getPeoples() {
  return peopleRepository.getPeoples();
}

async function getPeople(id) {
  return peopleRepository.getPeople(id);
}

async function nameExists(name) {
  const people = await peopleRepository.getUserByName(name);
  return !!people; // Return true if people exists, false otherwise
}

async function createPeople(data) {
  return peopleRepository.createPeople(data);
}

async function deletePeople(id) {
  return peopleRepository.deletePeople(id);
}
module.exports = {
    getPeoples,
    getPeople,
    nameExists,
    createPeople,
    deletePeople,
  };
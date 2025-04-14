const { people } = require('../../../models');

//Mendapatkan data people
async function getPeoples() {
  return people.find({});
}

//Mencari people melalui id
async function getPeople(id) {
  return people.findOne({ id });
}

//Mencari people melalui name
async function getPeopleByName(name) {
  return people.findByName({ name });
}

module.exports = {
  getPeoples,
  getPeople,
  getPeopleByName,
};
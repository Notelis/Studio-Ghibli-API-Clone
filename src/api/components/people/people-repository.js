const { people } = require('../../../models');

//Mendapatkan data people
async function getPeoples() {
  return people.find({});
}

//Mencari people melalui id
async function getPeople(id) {
  return people.findById(id);
}

module.exports = {
  getPeoples,
  getPeople,
};
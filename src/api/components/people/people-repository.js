const { People } = require('../../../models');

//Mendapatkan data people
async function getPeoples() {
  return People.find({});
}

//Mencari people melalui id
async function getPeople(id) {
  return People.findById(id);
}

module.exports = {
  getPeoples,
  getPeople,
};
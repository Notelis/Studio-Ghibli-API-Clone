const { People } = require('../../../models');

//Mendapatkan data people
async function getPeoples(filter = {}, limit = 0, offset = 0) {
  const query = {};

  if (filter.name) {
    query.name = new RegExp(filter.name, 'i');
  }

  return People.find(query)
    .skip(offset)
    .limit(limit);
}

//Mencari people melalui id
async function getPeople(id) {
  return People.findById(id);
}

module.exports = {
  getPeoples,
  getPeople,
};
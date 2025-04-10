const { people } = require('../../../models');

//Mendapatkan data people
async function getPeoples() {
  return people.find({});
}

//Mencari people melalui id
async function getPeople(id) {
  return people.findById(id);
}

//Mencari people melalui name
async function getUserByName(name) {
  return people.findOne({ name });
}

//Membuat people baru
async function createPeople(data) {
  return people.create({ data });
}

//Menghapus people menggunakan id
async function deletePeople(id) {
  return people.deleteOne({ id });
}

module.exports = {
  getPeoples,
  getPeople,
  getPeopleByName,
  createPeople,
  deletePeople,
};
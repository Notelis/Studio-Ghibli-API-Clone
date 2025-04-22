const filmsRepository = require('./films-repository');

async function getFilms() {
  return filmsRepository.getFilms();
}

async function getFilm(id) {
  return filmsRepository.getFilm(id);
}

module.exports = {
    getFilms,
    getFilm,
};
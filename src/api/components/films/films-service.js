const filmsRepository = require('./films-repository');

async function getFilms({ producer, director, name, limit, offset }) {
  return filmsRepository.getFilms({ producer, director, name }, limit, offset);
}

async function getFilm(id) {
  return filmsRepository.getFilm(id);
}

module.exports = {
    getFilms,
    getFilm,
};
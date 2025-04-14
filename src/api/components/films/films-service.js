const filmsRepository = require('./films-repository');

async function getFilms() {
  return filmsRepository.getFilms();
}

async function getFilm(id) {
  return filmsRepository.getFilm(id);
}

async function getFilmByTitle(title) {
  return filmsRepository.getFilmByTitle({ title });
}

async function getFilmByDirector(director) {
    return filmsRepository.getFilmByDirector({ director })
}

async function getFilmByProducer(producer) {
    return filmsRepository.getFilmByProducer({ producer })
}

module.exports = {
    getFilms,
    getFilm,
    getFilmByTitle,
    getFilmByDirector,
    getFilmByProducer,
};
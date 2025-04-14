const { films } = require('../../..models');

async function getFilms() {
    return films.find({});
}

async function getFilm(id){
    return films.findById(id);
}

async function getFilmByTitle(title){
    return films.findByTitle({ title });
}

async function getFilmByDirector(director){
    return films.findByDirector({ director });
}

async function getFilmByProducer(producer){
    return films.findByProducer({ producer });
}

module.exports = {
    getFilms,
    getFilm,
    getFilmByTitle,
    getFilmByDirector,
    getFilmByProducer,
}
const { films } = require('../../../models');

async function getFilms(filter = {}, limit = 0, offset = 0) {
    const query = {};
  
    if (filter.title) {
      query.title = new RegExp(filter.title, 'i');
    }
    if (filter.producer) {
        query.producer = new RegExp(filter.producer, 'i');
    }
    if (filter.director) {
        query.diretor = new RegExp(filter.director, 'i');
    }
  
    return films.find(query)
      .skip(offset)
      .limit(limit);
}

async function getFilm(id) {
    return films.findById(id);
  }

module.exports = {
    getFilms,
    getFilm,
}
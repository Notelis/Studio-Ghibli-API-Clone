const filmsService = require('./films-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getFilms(request, response, next) {
  try {
    const { title } = request.query;
    const films = await filmsService.getfilms({ title });

    return response.status(200).json(films); 
   } catch (error) { 
    return next(error);
   }
}

async function getFilmById(request, response, next) {
    try { 
        const id = request.params;
        const filmId = await filmsService.getFilm(id);
        
        return response.status(200).json(filmId);
    } catch (error) {
        return next(error);
    }
}

async function getFilmByDirector(request, response, next) {
    try {
        const { director } = request.query;
        const filmDirector = await filmsService.getFilmByDirector({ director });

        return response.status(200).json(filmDirector);
    } catch (error) {
        return next(error);
    }
}

async function getFilmByProducer(request, response, next) {
    try {
        const { producer } = request.query;
        const filmProducer = await filmsService.getFilmByProducer({ producer });

        return response.status(200).json(filmProducer);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
  getFilms,
  getFilmById,
  getFilmByDirector,
  getFilmByProducer,
};
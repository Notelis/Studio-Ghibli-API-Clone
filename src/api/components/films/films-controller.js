const filmsService = require('./films-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getFilms(request, response, next) {
    try {
        const { director, producer, title, limit, offset } = request.query;
    
        const parsedLimit = parseInt(limit, 10) || 0;
        const parsedOffset = parseInt(offset, 10) || 0;
    
        const people = await filmsService.getFilms({
          director,
          producer,
          title,
          limit: parsedLimit,
          offset: parsedOffset,
        });
    
        return response.status(200).json(people);
        } catch (error) {
        return next(error);
    }
}

async function getFilm(request, response, next) {
    try { 
        const { id } = request.params;
        const filmId = await filmsService.getFilm(id);
      
      if (!filmId) {
        throw errorResponder(errorTypes.RESOURCE_NOT_FOUND, 'Film not found');
      }
  
      return response.status(200).json(filmId);
    } catch (error) {
      return next(error);
    }
}

module.exports = {
  getFilms,
  getFilm,
};
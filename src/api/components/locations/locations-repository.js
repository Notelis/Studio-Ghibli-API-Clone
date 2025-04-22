const { locations } = require('../../../models');

async function getLocations(filter = {}, limit = 0, offset = 0) {
    const query = {};
  
    if (filter.name) {
      query.name = new RegExp(filter.name, 'i');
    }

    if (filter.terrain) {
        query.terrain = new RegExp(filter.terrain, 'i');
      }
  
    return People.find(query)
      .skip(offset)
      .limit(limit);
  }

async function getLocationById(id){
    return locations.findById(id);
}

module.exports = {
    getLocations,
    getLocationById,
}
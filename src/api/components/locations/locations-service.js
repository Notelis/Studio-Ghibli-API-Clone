const locationsRepository = require('./locations-repository');

async function getLocations({ name, terrain, limit, offset }) {
    return locationsRepository.getLocations({ name, terrain }, limit, offset);
}

async function getLocationById(id){
    return locationsRepository.getLocationById(id);
}

module.exports = {
    getLocations,
    getLocationById,
}
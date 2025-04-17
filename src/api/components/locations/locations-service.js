const locationsRepository = require('./locations-repository');

async function getLocations() {
    return locationsRepository.getLocations();
}

async function getLocationById(id){
    return locationsRepository.getLocationById(id);
}

async function getLocationByTerrain(terrain){
    return locationsRepository.getLocationByTerrain({ terrain });
}

module.exports = {
    getLocations,
    getLocationById,
    getLocationByTerrain,
}
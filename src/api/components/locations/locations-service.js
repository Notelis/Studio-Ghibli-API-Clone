const locationsRepository = require('./locations-repository');

async function getLocations() {
    return locationsRepository.getLocations();
}

async function getLocation(id){
    return locationsRepository.getLocation(id);
}

async function getLocationByTerrain(terrain){
    return locationsRepository.getLocationByTerrain({ terrain });
}

module.exports = {
    getLocations,
    getLocation,
    getLocationByTerrain,
}
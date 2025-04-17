const { locations } = require('../../../models');

async function getLocations() {
    return locations.find({});
}

async function getLocationById(id){
    return locations.findById(id);
}

async function getLocationByTerrain(terrain){
    return locations.findByTerrain({ terrain });
}

module.exports = {
    getLocations,
    getLocationById,
    getLocationByTerrain,
}
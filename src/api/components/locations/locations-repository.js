const { locations } = require('../../..models');

async function getLocations() {
    return locations.find({});
}

async function getLocation(id){
    return locations.findById(id);
}

async function getLocationByTerrain(terrain){
    return locations.findOne({ terrain });
}

module.exports = {
    getLocations,
    getLocation,
    getLocationByTerrain,
}
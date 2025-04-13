const { locations } = require('../../..models');

async function getLocations() {
    return locations.find({});
}

async function getLocation(id){
    return locations.findById(id);
}

async function getLocationByStreet(street){
    return locations.findOne({ street });
}

async function createLocation(name, street){
    return locations.create({ name, street });
}

async function deleteLocation(id){
    return locations.deleteOne({ _id: id});
}

module.exports = {
    getLocations,
    getLocation,
    getLocationByStreet,
    createLocation,
    deleteLocation
}
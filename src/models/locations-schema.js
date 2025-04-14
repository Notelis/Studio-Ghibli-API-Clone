module.exports = (db) =>
    db.model(
      'Locations',
      db.Schema({
        id: String, unique,
        name: String,
        climate: String,
        terrain: String,
        surface_water: String,
        residents: [String],
        films: [String],
        url: String, unique,
      })
    );
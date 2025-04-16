module.exports = (db) =>
    db.model(
      'Locations',
      db.Schema({
        id: {
          type: String, 
          unique: true,
        },
        name: String,
        climate: String,
        terrain: String,
        surface_water: String,
        residents: [String],
        films: [String],
        url: {
          type: String, 
          unique: true,
        },
      })
    );
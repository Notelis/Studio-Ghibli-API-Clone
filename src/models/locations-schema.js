module.exports = (db) =>
    db.model(
      'Locations',
      db.Schema({
        id: { 
          String, 
          default: uuidv4,
          unique,
        },
        name: String,
        climate: String,
        terrain: String,
        surface_water: String,
        residents: [String],
        films: [String],
        url: String, unique,
      })
    );
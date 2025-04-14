module.exports = (db) =>
    db.model(
      'people',
      db.Schema({
        id: { 
          type: String, 
          default: uuidv4,
          unique,
        },
        name: String,
        age: String,
        gender: String,
        eye_color: String,
        hair_color: String,
        films: [String],
        species: String,
        url: String, unique,
      })
    );
module.exports = (db) =>
  db.model(
    'people',
    new db.Schema({
      name: String,
      gender: String,
      age: String,
      eye_color: String,
      hair_color: String,
      films: [String],
      species: String,
      url: {
        type: String,
        unique: true,
      },
    })
  );
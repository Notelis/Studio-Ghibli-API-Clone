const { v4: uuidv4 } = require('uuid');

module.exports = (db) =>
  db.model(
    'people',
    new db.Schema({
      id: { 
        type: String, 
        default: uuidv4,
        unique: true,
      },
      name: String,
      age: String,
      gender: String,
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
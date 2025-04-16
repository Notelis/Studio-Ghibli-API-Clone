const { v4: uuidv4 } = require('uuid');

module.exports = (db) =>
  db.model(
    'Species',
    db.Schema({
      id: { 
        type: String, 
        default: uuidv4, 
        unique: true 
      },
      name: String,
      classification: String,
      eye_colors: String,
      hair_colors: String,
      people: [String],
      films: [String],
      url: { 
        type: String, 
        unique: true },
    })
  );     

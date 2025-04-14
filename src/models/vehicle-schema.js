const { v4: uuidv4 } = require('uuid');

module.exports = (db) =>
  db.model(
    'vehicles',
    db.Schema({
      id: {
        type: String,
        default: uuidv4,
        unique: true,
      },
      name: String,
      description: String,
      vehicle_class: String,
      length: String,
      pilot: String,
      films: [String],
      url: {
        type: String,
        unique: true,
      },
    })
  );

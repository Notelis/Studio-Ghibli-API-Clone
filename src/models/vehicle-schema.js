module.exports = (db) =>
  db.model(
    'vehicles',
    db.Schema({
      name: String,
      description: String,
      vehicle_class: String,
      length: String,
      pilot: String,
      films: [String],
      url: String,
    })
  );

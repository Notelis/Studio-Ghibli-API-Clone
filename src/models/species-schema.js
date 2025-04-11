module.exports = (db) =>
    db.model(
      'Species',
      db.Schema({
        name: String,
        classification: String,
        eye_colors: String,
        hair_colors: String,
        people: [String],
        films: [String],
        url: String,
      })
    );
  
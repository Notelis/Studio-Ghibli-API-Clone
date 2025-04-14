module.exports = (db) =>
    db.model(
      'films',
      db.Schema({
        id: { 
          String, 
          default: uuidv4,
          unique,
        },
        title: String,
        original_title: String,
        original_title_romanised: String,
        description: String,
        director: String,
        producer: String,
        release_date: String,
        running_time: String,
        rt_score: String,
        people: [String],
        species: [String],
        locations: [String],
        vehicles: [String],
        url: String, unique,
      })
    );
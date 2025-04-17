module.exports = (mongoose) => {
  const speciesSchema = new mongoose.Schema({
    name: String,
    classification: String,
    eye_colors: String,
    hair_colors: String,
    people: [String],
    films: [String],
    url: String,
  }, { collection: 'species' });

  return mongoose.model('Species', speciesSchema, 'species');
 };
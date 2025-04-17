module.exports = (mongoose) => {
  const peopleSchema = new mongoose.Schema({
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
  }, { collection: 'people' });

  return mongoose.model('People', peopleSchema, 'people');
};

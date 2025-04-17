module.exports = (mongoose) => {
const vehicleSchema = new mongoose.Schema({
  id: { 
    type: String, 
    unique: true,
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
  url: {
    type: String,
    unique: true,
  },
}, { collection: 'films' });

return mongoose.model('films', vehicleSchema, 'films');
};
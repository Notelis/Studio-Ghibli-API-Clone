module.exports = (mongoose) => {
  const vehicleSchema = new mongoose.Schema({
    name: String,
    classification: String,
    eye_colors: String,
    hair_colors: String,
    people: [String],
    films: [String],
    url: String,
  }, { collection: 'vehicle' });

  return mongoose.model('Vehicles', vehicleSchema, 'vehicle');
 };
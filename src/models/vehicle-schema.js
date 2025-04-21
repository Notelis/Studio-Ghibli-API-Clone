module.exports = (mongoose) => {
  const vehicleSchema = new mongoose.Schema({
    name: String,
    description: String,
    vehicle_class: String,
    length: String,
    pilot: String,
    films: [String],
    url: String,
  }, { collection: 'vehicle' });

  return mongoose.model('Vehicles', vehicleSchema, 'vehicle');
};

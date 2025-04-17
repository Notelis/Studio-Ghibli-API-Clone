module.exports = (mongoose) => {
  const vehicleSchema = new mongoose.Schema({
    id: {
      type: String, 
      unique: true,
    },
    name: String,
    climate: String,
    terrain: String,
    surface_water: String,
    residents: [String],
    films: [String],
    url: {
      type: String, 
      unique: true,
    },
  }, { collection: 'locations' });

  return mongoose.model('locations', vehicleSchema, 'locations');
  };
const mongoose = require("mongoose");

const TrafficDataSchema = new mongoose.Schema({
  cameraId: { type: String, required: true }, // Унікальний ідентифікатор камери
  timestamp: { type: Date, default: Date.now }, // Час запису
  vehicleCount: { type: Number, default: 0 }, // Кількість транспортних засобів
  averageSpeed: { type: Number, default: 0 }, // Середня швидкість (км/год)
  congestionLevel: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "low",
  }, // Рівень заторів
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  }, // Місцезнаходження камери/датчика
});

module.exports = mongoose.model("TrafficData", TrafficDataSchema);

const mongoose = require("mongoose");

const RouteSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Назва маршруту
  startPoint: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  }, // Початкова точка
  endPoint: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  }, // Кінцева точка
  distance: { type: Number, required: true }, // Відстань (км)
  assignedTransport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Transport",
  }, // Прив'язаний транспортний засіб
  status: {
    type: String,
    enum: ["planned", "in_progress", "completed"],
    default: "planned",
  }, // Статус маршруту
  createdAt: { type: Date, default: Date.now }, // Дата створення
});

module.exports = mongoose.model("Route", RouteSchema);

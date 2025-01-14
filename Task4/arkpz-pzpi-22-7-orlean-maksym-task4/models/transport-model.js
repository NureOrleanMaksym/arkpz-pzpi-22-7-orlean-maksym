const mongoose = require("mongoose");

const TransportSchema = new mongoose.Schema({
  licensePlate: { type: String, required: true, unique: true }, // Номерний знак
  model: { type: String, required: true }, // Модель автомобіля
  manufacturer: { type: String, required: true }, // Виробник
  year: { type: Number, required: true }, // Рік випуску
  status: {
    type: String,
    enum: ["active", "inactive", "maintenance"],
    default: "active",
  }, // Статус транспорту
  currentLocation: {
    latitude: { type: Number, required: false }, // Поточна широта
    longitude: { type: Number, required: false }, // Поточна довгота
  },
  lastUpdate: { type: Date, default: Date.now }, // Час останнього оновлення даних
});

module.exports = mongoose.model("Transport", TransportSchema);

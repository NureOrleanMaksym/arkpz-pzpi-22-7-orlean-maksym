const Transport = require("../models/transport-model");

class TransportController {
  async createTransport(req, res, next) {
    try {
      const { licensePlate, model, manufacturer, year, status } = req.body;
      const newTransport = await Transport.create({ licensePlate, model, manufacturer, year, status });
      return res.status(201).json(newTransport);
    } catch (e) {
      next(e);
    }
  }

  async getAllTransports(req, res, next) {
    try {
      const transports = await Transport.find();
      return res.json(transports);
    } catch (e) {
      next(e);
    }
  }

  async updateTransport(req, res, next) {
    try {
      const { id } = req.params;
      const updatedTransport = await Transport.findByIdAndUpdate(id, req.body, { new: true });
      return res.json(updatedTransport);
    } catch (e) {
      next(e);
    }
  }

  async deleteTransport(req, res, next) {
    try {
      const { id } = req.params;
      await Transport.findByIdAndDelete(id);
      return res.json({ message: "Transport deleted successfully" });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TransportController();

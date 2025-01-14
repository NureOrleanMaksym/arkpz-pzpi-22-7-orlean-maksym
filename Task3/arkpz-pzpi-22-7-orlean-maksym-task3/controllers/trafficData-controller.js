const TrafficData = require("../models/trafficData-model");

class TrafficDataController {
  async createTrafficData(req, res, next) {
    try {
      const { cameraId, vehicleCount, averageSpeed, congestionLevel, location } = req.body;
      const newData = await TrafficData.create({ cameraId, vehicleCount, averageSpeed, congestionLevel, location });
      return res.status(201).json(newData);
    } catch (e) {
      next(e);
    }
  }

  async getAllTrafficData(req, res, next) {
    try {
      const data = await TrafficData.find();
      return res.json(data);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TrafficDataController();

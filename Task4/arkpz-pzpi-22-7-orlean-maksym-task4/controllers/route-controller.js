const Route = require("../models/route-model");

class RouteController {
  async createRoute(req, res, next) {
    try {
      const { name, startPoint, endPoint, distance, assignedTransport, status } = req.body;
      const newRoute = await Route.create({ name, startPoint, endPoint, distance, assignedTransport, status });
      return res.status(201).json(newRoute);
    } catch (e) {
      next(e);
    }
  }

  async getAllRoutes(req, res, next) {
    try {
      const routes = await Route.find().populate("assignedTransport");
      return res.json(routes);
    } catch (e) {
      next(e);
    }
  }

  async updateRoute(req, res, next) {
    try {
      const { id } = req.params;
      const updatedRoute = await Route.findByIdAndUpdate(id, req.body, { new: true });
      return res.json(updatedRoute);
    } catch (e) {
      next(e);
    }
  }

  async deleteRoute(req, res, next) {
    try {
      const { id } = req.params;
      await Route.findByIdAndDelete(id);
      return res.json({ message: "Route deleted successfully" });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new RouteController();

const Router = require("express").Router;
const TrafficDataController = require("../controllers/trafficData-controller");

const router = new Router();

router.post("/", TrafficDataController.createTrafficData);
router.get("/", TrafficDataController.getAllTrafficData);

module.exports = router;

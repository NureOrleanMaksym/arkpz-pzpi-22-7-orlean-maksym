const Router = require("express").Router;
const RouteController = require("../controllers/route-controller");

const router = new Router();

router.post("/", RouteController.createRoute);
router.get("/", RouteController.getAllRoutes);
router.put("/:id", RouteController.updateRoute);
router.delete("/:id", RouteController.deleteRoute);

module.exports = router;

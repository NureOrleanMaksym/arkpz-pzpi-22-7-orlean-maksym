const Router = require("express").Router;
const { body } = require("express-validator");
const userController = require("../controllers/user-controller");
const authMiddleware = require("../middlewares/auth-middleware");

// Імпорт підроутів
const adminRouter = require("./admin-routes");
const routeRouter = require("./route-routes");
const trafficDataRouter = require("./trafficData-routes");
const transportRouter = require("./transport-routes");

// Створення основного роутера
const router = new Router();

// Головні роути користувача
router.post("/registration", body("email").isEmail(), body("password").isLength({ min: 3, max: 32 }), userController.registration);

router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/refresh", userController.refresh);
router.get("/users", authMiddleware, userController.getUsers);

// Підключення інших роутів
router.use("/admin", adminRouter);
router.use("/transports", transportRouter);
router.use("/routes", routeRouter);
router.use("/traffic-data", trafficDataRouter);

module.exports = router;

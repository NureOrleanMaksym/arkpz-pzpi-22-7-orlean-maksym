const Router = require("express").Router;
const TransportController = require("../controllers/transport-controller");

const router = new Router();

router.post("/", TransportController.createTransport);
router.get("/", TransportController.getAllTransports);
router.put("/:id", TransportController.updateTransport);
router.delete("/:id", TransportController.deleteTransport);

module.exports = router;

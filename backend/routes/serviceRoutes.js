const {
  createNewServiceController,
  getAllServicesController,
} = require("../controllers/serviceController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

// get all services
router.get("/", authMiddleware, getAllServicesController);

// create new service
router.post("/", authMiddleware, createNewServiceController);

module.exports = router;

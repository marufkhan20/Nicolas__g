const {
  createNewServiceController,
  getAllServicesController,
  getSingleServiceController,
} = require("../controllers/serviceController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

// get all services
router.get("/", getAllServicesController);

// get service
router.get("/:id", getSingleServiceController);

// create new service
router.post("/", authMiddleware, createNewServiceController);

module.exports = router;

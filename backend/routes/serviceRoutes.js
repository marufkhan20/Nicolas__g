const {
  createNewServiceController,
  getAllServicesController,
  getSingleServiceController,
  deleteServiceController,
  editServiceController,
} = require("../controllers/serviceController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

// get all services
router.get("/", getAllServicesController);

// get service
router.get("/:id", getSingleServiceController);

// create new service
router.post("/", authMiddleware, createNewServiceController);

// edit service
router.put("/:id", authMiddleware, editServiceController);

// delete service
router.delete("/:id", authMiddleware, deleteServiceController);

module.exports = router;

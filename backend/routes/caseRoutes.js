const {
  getAllCasesController,
  createNewCaseController,
  getSingleCaseController,
} = require("../controllers/caseController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

// get all services
router.get("/", getAllCasesController);

// get single service
router.get("/:id", getSingleCaseController);

// create new service
router.post("/", authMiddleware, createNewCaseController);

module.exports = router;

const {
  getAllCasesController,
  createNewCaseController,
  getSingleCaseController,
  deleteCaseController,
  editCaseController,
} = require("../controllers/caseController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

// get all services
router.get("/", getAllCasesController);

// get single service
router.get("/:id", getSingleCaseController);

// create new service
router.post("/", authMiddleware, createNewCaseController);

// edit case
router.put("/:id", authMiddleware, editCaseController);

// delete case
router.delete("/:id", authMiddleware, deleteCaseController);

module.exports = router;

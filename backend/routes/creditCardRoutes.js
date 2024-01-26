const {
  uploadCreditCardInformationController,
  getAllCreditCardsByUserIController,
  createNewCreditCardController,
  editCreditCardController,
  deleteCreditCardController,
  getCreditCardController,
} = require("../controllers/creditCardController");
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require("../services/upload");

const router = require("express").Router();

// get all credit cards by user id
router.get("/by-user-id", authMiddleware, getAllCreditCardsByUserIController);

// get credit card
router.get("/:id", authMiddleware, getCreditCardController);

// create new credit card
router.post("/", authMiddleware, createNewCreditCardController);

// upload credit card information
router.post(
  "/upload-credit-card-info",
  authMiddleware,
  upload.single("file"),
  uploadCreditCardInformationController
);

// edit credit card
router.put("/:id", authMiddleware, editCreditCardController);

// delete credit card
router.delete("/:id", authMiddleware, deleteCreditCardController);

module.exports = router;

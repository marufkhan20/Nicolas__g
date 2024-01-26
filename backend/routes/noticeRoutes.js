const {
  uploadNoticeInformationController,
  getAllNoticesByUserIController,
  createNewNoticeController,
  editNoticeController,
  deleteNoticeController,
  getNoticeController,
} = require("../controllers/noticeController");
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require("../services/upload");

const router = require("express").Router();

// get all notices by user id
router.get("/by-user-id", authMiddleware, getAllNoticesByUserIController);

// get notice
router.get("/:id", authMiddleware, getNoticeController);

// create new notice
router.post("/", authMiddleware, createNewNoticeController);

// upload notice information
router.post(
  "/upload-notice-info",
  authMiddleware,
  upload.single("file"),
  uploadNoticeInformationController
);

// edit notice
router.put("/:id", authMiddleware, editNoticeController);

// delete notice
router.delete("/:id", authMiddleware, deleteNoticeController);

module.exports = router;

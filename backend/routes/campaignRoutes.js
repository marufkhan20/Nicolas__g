const {
  getAllCampaignController,
  getSingleCampaignController,
  sendMailController,
  exportReportsController,
} = require("../controllers/campaignController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

// get all campaign
router.get("/:type", authMiddleware, getAllCampaignController);

// get single campaign
router.get("/single-campaign/:id", authMiddleware, getSingleCampaignController);

// send email
router.post("/send-mail", authMiddleware, sendMailController);

// export reports
router.get("/export-reports/:type", authMiddleware, exportReportsController);

module.exports = router;

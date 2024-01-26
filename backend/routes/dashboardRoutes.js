const {
  geAllDashboardInformationController,
} = require("../controllers/dashboardController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/", authMiddleware, geAllDashboardInformationController);

module.exports = router;

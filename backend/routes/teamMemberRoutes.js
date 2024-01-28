const {
  getAllTeamMembersController,
  createNewTeamMemberController,
} = require("../controllers/teamMemberController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

// get all team members
router.get("/", authMiddleware, getAllTeamMembersController);

// create new team member
router.post("/", authMiddleware, createNewTeamMemberController);

module.exports = router;

const {
  getAllTeamMembersController,
  createNewTeamMemberController,
  deleteTeamMemberController,
  editTeamMemberController,
  getTeamMemberController,
} = require("../controllers/teamMemberController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

// get all team members
router.get("/", getAllTeamMembersController);

// get team member
router.get("/:id", getTeamMemberController);

// create new team member
router.post("/", authMiddleware, createNewTeamMemberController);

// edit team member
router.put("/:id", authMiddleware, editTeamMemberController);

// delete team member
router.delete("/:id", authMiddleware, deleteTeamMemberController);

module.exports = router;

const { Schema, model } = require("mongoose");

const teamMemberSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    name: String,
    description: String,
    profilePic: String,
    position: String,
  },
  {
    timestamps: true,
  }
);

const TeamMember = model("TeamMember", teamMemberSchema);

module.exports = TeamMember;

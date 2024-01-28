const TeamMember = require("../models/TeamMember");
const cloudinary = require("../services/cloudinary");

// get all team members controller
const getAllTeamMembersController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const teamMembers = await TeamMember.find({ user: _id });
    res.status(200).json(teamMembers);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

// create new team member controller
const createNewTeamMemberController = async (req, res) => {
  try {
    const { name, description, profilePic, position } = req.body || {};
    const { _id } = req.user || {};

    // Helper function to upload an image and return a Promise
    const uploadImage = (image) => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream((error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result?.secure_url);
            }
          })
          .end(image);
      });
    };

    // Upload profile image
    let profilePicSrc;
    if (profilePic) {
      profilePicSrc = await uploadImage(profilePic);
    }

    const newTeamMember = new TeamMember({
      user: _id,
      name,
      description,
      profilePic: profilePicSrc,
      position,
    });

    await newTeamMember.save();

    res.status(201).json(newTeamMember);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getAllTeamMembersController,
  createNewTeamMemberController,
};

const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendMail = require("../services/emailService");

// register controller
const registerController = async (req, res) => {
  const { name, username, password } = req.body;

  try {
    // check user already existing
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({
        error: {
          username:
            "Username is already exist, Please try to another username!",
        },
      });
    }

    // password hash
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) {
          return res.status(500).json({
            error: err,
          });
        }

        // Create New User
        const newUser = new User({
          name,
          username,
          password: hash,
        });

        let user = await newUser.save();

        if (user?._id) {
          res.status(201).json(user);
        }
      });
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

// login controller
const loginController = async (req, res) => {
  const { username, password } = req.body;

  // check user available
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).json({
      error: {
        username: "User not found! Please try again!!",
      },
    });
  }

  // check password correct or incorrect
  bcrypt.compare(password, user.password, async function (err, result) {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    }

    if (!result) {
      return res.status(400).json({
        error: {
          password: "Username or Password Incorrect!",
        },
      });
    }

    // prepare the user object to generate token
    const userObject = {
      _id: user._id,
      name: user.name,
      username: user.username,
    };

    // generate token
    const token = jwt.sign(userObject, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY,
    });

    res.status(200).json({
      user: userObject,
      token,
    });
  });
};

// forgot password controller
const fortgotPasswordController = async (req, res) => {
  try {
    const { username } = req.body || {};

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({
        error: {
          username: "User Not found!!",
        },
      });
    }

    if (user?._id) {
      // prepare the user object to generate token
      const userObject = {
        _id: user._id,
        username: user.username,
      };

      // generate token
      const token = jwt.sign(userObject, process.env.JWT_SECRET, {
        expiresIn: "10m",
      });

      // generate 4 digit random verify code
      const verifyLink = `${process.env.CLIENT_URL}/reset-password/${token}`;

      // send mail with verify code
      sendMail({
        from: process.env.ADMIN_EMAIL,
        to: username,
        subject: "Forgot Your Account Password.",
        html: require("../services/forgotEmailTemplate")(verifyLink),
      });

      res.status(200).json(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
};

// reset password controller
const resetPasswordController = async (req, res) => {
  try {
    let { token } = req.params || {};
    const { password } = req.body || {};

    if (!token) {
      return res.status(401).json({
        error: {
          password: "Verification Failure!!",
        },
      });
    }

    token = token.replace("Bearer ", "");

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (decode?._id) {
      // password hash
      const saltRounds = 10;
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          }

          // get user
          const user = await User.findById(decode?._id);

          // Create New User
          user.password = hash;

          await user.save();

          res.status(200).json(user);
        });
      });
    }
  } catch (err) {
    console.error(err);
    res.status(401).json({
      error: {
        password: "Token Expire!!",
      },
    });
  }
};

// change password controller
const changePasswordController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const { password } = req.body || {};

    // update password
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) {
          return res.status(500).json({
            error: err,
          });
        }

        const updatedUser = await User.findByIdAndUpdate(_id, {
          $set: { password: hash },
        });

        if (updatedUser?._id) {
          res.status(201).json(updatedUser);
        }
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  registerController,
  loginController,
  fortgotPasswordController,
  resetPasswordController,
  changePasswordController,
};

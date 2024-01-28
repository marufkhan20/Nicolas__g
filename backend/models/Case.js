const { Schema, model } = require("mongoose");

const caseSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    thumbnail: String,
    title: String,
    category: String,
    serviceProvided: String,
    videoUrl: String,
    projectLogo: String,
    description: String,
    projectUrl: String,
    credits: Array,
    sections: Array,
  },
  { timestamps: true }
);

const Case = model("Case", caseSchema);

module.exports = Case;

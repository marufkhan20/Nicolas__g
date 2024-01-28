const { Schema, model } = require("mongoose");

const serviceSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: String,
    shortDescription: String,
    thumbnail: String,
    description: Object,
    sectionTitle: String,
    sectionSubTitle: String,
    sectionDescription: String,
    sectionImages: Array,
  },
  {
    timestamps: true,
  }
);

const Service = model("Service", serviceSchema);

module.exports = Service;

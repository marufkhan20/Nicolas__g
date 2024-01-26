const { Schema, model } = require("mongoose");

const campaignSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    type: String,
    name: String,
    creditCards: [
      {
        type: Schema.Types.ObjectId,
        ref: "CreditCard",
      },
    ],
    notices: [
      {
        type: Schema.Types.ObjectId,
        ref: "Notice",
      },
    ],
    date: Date,
  },
  { timestamps: true }
);

const Campaign = model("Campaign", campaignSchema);

module.exports = Campaign;

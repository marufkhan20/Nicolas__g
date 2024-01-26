const { Schema, model } = require("mongoose");

const creditCardSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    no: String,
    hub: String,
    location: String,
    aanNo: String,
    maskNo: String,
    product: String,
    activity: String,
    custName: String,
    customerAddress: String,
    emailId: String,
    custMobileNo: String,
    noticeBalance: String,
    overdueAmount: String,
    clmName: String,
    clmNo: String,
    limit: String,
    amountExceededCreditLimit: String,
    concliatoName: String,
    campDate: String,
    campLocation: String,
    noticeDate: String,
    referenceNo: String,
    pdfFormat: String,
    pdfLink: String,
  },
  { timestamps: true }
);

const CreditCard = model("CreditCard", creditCardSchema);

module.exports = CreditCard;

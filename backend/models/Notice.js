const { Schema, model } = require("mongoose");

const noticeSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    no: String,
    noticeDate: String,
    location: String,
    aan: String,
    arqnName: String,
    noticeBalance: String,
    maskCard: String,
    activity: String,
    mode: String,
    email: String,
    address: String,
    mobile: String,
    clmName: String,
    clmMob: String,
    product: String,
    branchAdd: String,
    advocate: String,
    campDate: String,
    loanNo: String,
    customerName: String,
    state: String,
    region: String,
    callManager: String,
    npaStage: String,
    amtfin: String,
    emi: String,
    tenture: String,
    disbDate: String,
    totalDue: String,
    customerName2: String,
    address3: String,
    address4: String,
    city: String,
    zipCode: String,
    model: String,
    chasisNo: String,
    engineNo: String,
    regNo: String,
    concilator: String,
    bankAddress: String,
    conciliationDate: String,
    noticeSentOn: String,
    uniqueId: String,
    allocationDate: String,
    legalCaseId: String,
    mailId: String,
    legalManager: String,
    remark: String,
    modeOfDispatch: String,
    pdfFormat: String,
    pdfLink: String,
  },
  { timestamps: true }
);

const Notice = model("Notice", noticeSchema);

module.exports = Notice;

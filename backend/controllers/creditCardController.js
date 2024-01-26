const xlsx = require("xlsx");
const CreditCard = require("../models/CreditCard");
const Campaign = require("../models/Campaign");
const { generatePdfTemplate } = require("../services/generatePdfTemplate");

// get all credit cards by user id controller
const getAllCreditCardsByUserIController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const creditCards = await CreditCard.find({ user: _id }).sort({
      createdAt: "desc",
    });
    res.status(200).json(creditCards);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
};

// get credit card controller
const getCreditCardController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const creditCard = await CreditCard.findById(id);
    res.status(200).json(creditCard);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
};

// create new credit card controller
const createNewCreditCardController = async (req, res) => {
  try {
    const { activity } = req.body || {};
    const { _id } = req.user || {};

    // generate pdf template
    const fileName = await generatePdfTemplate(activity, req.body);

    // create new credit card
    const newCreditCard = new CreditCard({
      user: _id,
      ...req.body,
      pdfFormat: activity,
      pdfLink: fileName,
    });
    await newCreditCard.save();

    // create new template
    const newCampaign = new Campaign({
      user: _id,
      type: "credit-card",
      name: "New Campaign",
      creditCards: [newCreditCard?._id],
      date: new Date(),
    });

    await newCampaign.save();

    res.status(201).json(newCreditCard);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
};

// upload credit card information controller
const uploadCreditCardInformationController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const { type, name } = req.body || {};

    const buffer = req.file.buffer;
    const workbook = xlsx.read(buffer, { type: "buffer" });

    // Assuming the first sheet is the one you want to process
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    const data = xlsx.utils.sheet_to_json(sheet);

    // Convert object properties to lowercase and remove spaces and dots
    const propertyMapping = {
      "S.NO": "no",
      HUB: "hub",
      LOCATION: "location",
      "AAN NO.": "aanNo",
      "MASK NO.": "maskNo",
      PRODUCT: "product",
      ACTIVITY: "activity",
      "CUST NAME": "custName",
      "CUSTOMER ADDRESS": "customerAddress",
      "EMAIL ID ": "emailId",
      "CUST MOBILE NO.": "custMobileNo",
      "NOTICE BALANCE": "noticeBalance",
      "OVERDUE AMOUNT": "overdueAmount",
      "CLM NAME": "clmName",
      "CLM NO.": "clmNo",
      LIMIT: "limit",
      "AMOUNT EXCEEDED CREDIT LIMIT": "amountExceededCreditLimit",
      "CONCILIATOR NAME": "conciliatorName",
      "CAMP DATE": "campDate",
      "CAMP LOCATION": "campLocation",
      "NOTICE DATE": "noticeDate",
      "REFERENCE NO": "referenceNo",
    };

    const transformedData = data.map((item) => {
      const newItem = {};
      for (const key in item) {
        newItem[propertyMapping[key] || key] = item[key];
      }
      return newItem;
    });

    // create new credit card
    const creditCardsId = [];

    for (const item of transformedData) {
      const fileName = await generatePdfTemplate(item?.activity, item);

      // create new credit card
      const newCreditCard = new CreditCard({
        user: _id,
        ...item,
        pdfFormat: item?.activity,
        pdfLink: fileName,
      });
      const savedCreditCard = await newCreditCard.save();

      if (savedCreditCard?._id) {
        creditCardsId.push(savedCreditCard._id);
      }
    }

    if (creditCardsId?.length > 0) {
      const newCampaign = new Campaign({
        user: _id,
        type,
        name,
        creditCards: creditCardsId,
        date: new Date(),
      });

      await newCampaign.save();
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

// edit credit card controller
const editCreditCardController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const updatedCreditCard = await CreditCard.findByIdAndUpdate(id, req.body);
    res.status(200).json(updatedCreditCard);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
};

// delete credit card controller
const deleteCreditCardController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const deletedCreditCard = await CreditCard.findByIdAndDelete(id);
    res.status(200).json(deletedCreditCard);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  getAllCreditCardsByUserIController,
  getCreditCardController,
  createNewCreditCardController,
  uploadCreditCardInformationController,
  editCreditCardController,
  deleteCreditCardController,
};

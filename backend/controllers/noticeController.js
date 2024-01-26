const xlsx = require("xlsx");
const Campaign = require("../models/Campaign");
const { generatePdfTemplate } = require("../services/generatePdfTemplate");
const Notice = require("../models/Notice");

// get all notices by user id controller
const getAllNoticesByUserIController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const notices = await Notice.find({ user: _id }).sort({
      createdAt: "desc",
    });
    res.status(200).json(notices);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
};

// get notice controller
const getNoticeController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const notice = await Notice.findById(id);
    res.status(200).json(notice);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
};

// create new notice controller
const createNewNoticeController = async (req, res) => {
  try {
    const { activity } = req.body || {};
    const { _id } = req.user || {};

    // generate pdf template
    const fileName = await generatePdfTemplate(activity, req.body);

    // create new credit card
    const newNotice = new Notice({
      user: _id,
      ...req.body,
      pdfFormat: activity,
      pdfLink: fileName,
      campDate: new Date(),
    });
    await newNotice.save();

    // create new template
    const newCampaign = new Campaign({
      user: _id,
      type: "notice",
      name: "New Campaign",
      notices: [newNotice?._id],
      date: new Date(),
    });

    await newCampaign.save();

    res.status(201).json(newNotice);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
};

// upload notice information controller
const uploadNoticeInformationController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const { name } = req.body || {};

    const buffer = req.file.buffer;
    const workbook = xlsx.read(buffer, { type: "buffer" });

    // Assuming the first sheet is the one you want to process
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    const data = xlsx.utils.sheet_to_json(sheet);

    // Convert object properties to lowercase and remove spaces and dots
    const propertyMapping = {
      "S.NO": "no",
      "NOTICE DATE": "noticeDate",
      Location: "location",
      AAN: "aan",
      ARQNNAME: "arqnName",
      "NOTICE BALANCE": "noticeBalance",
      MASKCARD: "maskCard",
      Activity: "activity",
      Mode: "mode",
      EMAIL: "email",
      ADDRESS: "address",
      Mobile: "mobile",
      "CLM NAME": "clmName",
      "CLM MOB.": "clmMob",
      PRODUCT: "product",
      "Branch add": "branchAdd",
      ADVOCATE: "advocate",
      "CAMP DATE": "campDate",
    };

    const transformedData = data.map((item) => {
      const newItem = {};
      for (const key in item) {
        newItem[propertyMapping[key] || key] = item[key];
      }
      return newItem;
    });

    // create new notice
    const noticessId = [];

    for (const item of transformedData) {
      const fileName = await generatePdfTemplate(item?.activity, item, res);

      // create new credit card
      const newNotice = new Notice({
        user: _id,
        ...item,
        pdfFormat: item?.activity,
        pdfLink: `/uploads/${fileName}`,
      });
      await newNotice.save();

      if (newNotice?._id) {
        noticessId.push(newNotice._id);
      }
    }

    if (noticessId?.length > 0) {
      const newCampaign = new Campaign({
        user: _id,
        type: "notice",
        name,
        notices: noticessId,
        date: new Date(),
      });

      await newCampaign.save();
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err?.message);
    res.status(500).json({
      errorform: err,
    });
  }
};

// edit notice controller
const editNoticeController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const updatedNotice = await Notice.findByIdAndUpdate(id, req.body);
    res.status(200).json(updatedNotice);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
};

// delete notice controller
const deleteNoticeController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const deletedNotice = await Notice.findByIdAndDelete(id);
    res.status(200).json(deletedNotice);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  getAllNoticesByUserIController,
  getNoticeController,
  createNewNoticeController,
  uploadNoticeInformationController,
  editNoticeController,
  deleteNoticeController,
};

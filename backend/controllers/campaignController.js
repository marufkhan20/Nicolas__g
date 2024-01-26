const Campaign = require("../models/Campaign");
const axios = require("axios");
const sendMail = require("../services/emailService");
const campaignMailTemplate = require("../templates/email-template/campaignMailTemplate");
const CreditCard = require("../models/CreditCard");
const Notice = require("../models/Notice");
const MailInfo = require("../models/MailInfo");
const json2xls = require("json2xls");
const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

// get all compaign controller
const getAllCampaignController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const { type } = req.params || {};

    const campaigns = await Campaign.find({
      user: _id,
      type,
    }).sort({
      createdAt: "desc",
    });
    res.status(200).json(campaigns);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
};

// get single campign controller
const getSingleCampaignController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const campaign = await Campaign.findById(id).populate([
      "creditCards",
      "notices",
    ]);
    res.status(200).json(campaign);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
};

// send mail controller
const sendMailController = async (req, res) => {
  try {
    const { data, type } = req.body || {};
    const { _id } = req.user || {};

    for (const item of data) {
      if (type === "credit-card") {
        const creditCard = await CreditCard.findById(item);

        if (creditCard?._id && creditCard?.emailId) {
          await sendMail({
            to: creditCard?.emailId,
            subject: "Credit Card Notice",
            html: campaignMailTemplate({
              data: creditCard,
            }),
          });
        }

        if (creditCard?._id && creditCard?.custMobileNo) {
          // send whatsapp messages
          const url = "https://api.interakt.ai/v1/public/message/";
          const headers = {
            "Content-Type": "application/json",
            Authorization: `Basic WGtKMzdiX19xelJLdDZQQXkzYXFhODFIUG5kWTktdjZXS2g2V1dlUTRFZzo=`, // Add your authorization header if needed
          };
          const requestBody = {
            // countryCode: "+880",
            countryCode: "+91",
            // phoneNumber: `1960038965`,
            phoneNumber: `${creditCard?.custMobileNo}`,
            callbackData: "some text here",
            type: "Template",

            template: {
              name: "common",
              languageCode: "en",
              headerValues: ["header_variable_value"],
              buttonValues: { 1: ["12344"] },
              bodyValues: [
                creditCard?.custName || "empty",
                creditCard?.maskNo || "empty",
                creditCard?.noticeDate || "empty",
                creditCard?.noticeBalance || "empty",
                creditCard?.clmName || "empty",
                creditCard?.clmNo || "empty",
                `${process.env.SERVER_URL}${creditCard?.pdfLink}` || "empty",
              ],
            },
          };
          const ress = await axios.post(url, requestBody, { headers });
          console.log("resss", ress);
        }
      } else if (type === "notice") {
        const notice = await Notice.findById(item);

        if (
          notice?._id &&
          notice?.email &&
          notice?.mode?.toLowerCase().includes("email")
        ) {
          await sendMail({
            to: notice?.email?.toLowerCase(),
            subject: "Credit Card Notice",
            html: campaignMailTemplate({ data: notice }),
          });
        }

        if (
          notice?._id &&
          notice?.mobile &&
          notice?.mode?.toLowerCase().includes("whatsapp")
        ) {
          // send whatsapp messages
          const url = "https://api.interakt.ai/v1/public/message/";
          const headers = {
            "Content-Type": "application/json",
            Authorization: `Basic ${process.env.INTERAKT_SECRET_KEY}`, // Add your authorization header if needed
          };
          const requestBody = {
            countryCode: "+91",
            // countryCode: "+880",
            phoneNumber: `${notice?.mobile}`,
            // phoneNumber: `1960038965`,
            callbackData: "some text here",
            type: "Template",
            template: {
              name: "common",
              languageCode: "en",
              headerValues: ["header_variable_value"],
              buttonValues: { 1: ["12344"] },
              bodyValues: [
                notice?.arqnName || "empty",
                notice?.maskCard || "empty",
                notice?.noticeDate || "empty",
                notice?.noticeBalance || "empty",
                notice?.clmName || "empty",
                notice?.clmNo || "empty",
                `${process.env.SERVER_URL}${notice?.pdfLink}` || "empty",
              ],
            },
          };
          await axios.post(url, requestBody, { headers });
        }
      }
    }

    // create new mail info
    const newMailInfo = new MailInfo({
      user: _id,
      name: "Email And Whatsapp",
      date: new Date(),
      status: "success",
    });

    await newMailInfo.save();
    console.log("hello", newMailInfo);

    res.status(200).json({ success: true });
  } catch (err) {
    const { _id } = req.user || {};

    // create new mail info
    const newMailInfo = new MailInfo({
      user: _id,
      name: "Email And Whatsapp",
      date: new Date(),
      status: "failed",
    });

    await newMailInfo.save();

    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
};

// export reports controller
const exportReportsController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const { type } = req.params || {};

    let reportData = [];

    if (type === "notice") {
      reportData = await Notice.find({ user: _id });
    } else if (type === "credit-card") {
      reportData = await CreditCard.find({ user: _id });
    }

    if (reportData?.length > 0) {
      reportData = reportData.map((report) => {
        delete report?._doc?._id;
        delete report?._doc?.user;
        delete report?._doc?.createdAt;
        delete report?._doc?.updatedAt;
        delete report?._doc?.__v;
        return {
          ...report?._doc,
          pdfLink: `${process.env.SERVER_URL}${report?._doc?.pdfLink}`,
          emailStatus: "success",
          whatsappStatus: "success",
        };
      });
    }

    const workbook = XLSX.utils.book_new();
    const sheetName = "Sheet1";
    const worksheet = XLSX.utils.json_to_sheet(reportData, {
      // header: Object.keys(reportData[0]),
      // header: ["firstname", "lastName"],
      // skipHeader: true,
    });

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

    const excelFilePath = "output.xlsx";

    // Save the workbook to an Excel file
    XLSX.writeFile(workbook, excelFilePath);

    res.download(excelFilePath, excelFilePath, (err) => {
      if (err) {
        console.error("Error sending file:", err);
        res.status(500).send("Internal Server Error");
      }

      // Delete the file after sending
      fs.unlinkSync(excelFilePath);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getAllCampaignController,
  getSingleCampaignController,
  sendMailController,
  exportReportsController,
};

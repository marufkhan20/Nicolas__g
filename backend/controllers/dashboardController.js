const Campaign = require("../models/Campaign");
const CreditCard = require("../models/CreditCard");
const MailInfo = require("../models/MailInfo");
const Notice = require("../models/Notice");

// get all dashboard information controller
const geAllDashboardInformationController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const totalCreditCards = await CreditCard.countDocuments({ user: _id });
    const totalNotices = await Notice.countDocuments({ user: _id });
    const totalCreditCardCampaigns = await Campaign.countDocuments({
      type: "credit-card",
      user: _id,
    });
    const totalNoticeCampaigns = await Campaign.countDocuments({
      type: "notice",
      user: _id,
    });

    const mailInfo = await MailInfo.find({ user: _id }).sort({
      createdAt: "desc",
    });

    res.status(200).json({
      totalCreditCards,
      totalNotices,
      totalCreditCardCampaigns,
      totalNoticeCampaigns,
      mailInfo,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  geAllDashboardInformationController,
};

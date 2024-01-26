const {
  ARBITRATION_PERFORMA,
  DLN_PERFORMA,
  AMENDED_HINDI_PERFORMA_CONCILIATION_ASSETS,
  PERFORMA_406_420,
  PERFORMA_ABROAD_NOTICE,
  PERFORMA_ABROAD_NOTICE_ASSETS_CASES_PERSONAL_LOAN,
  PERFORMA_ASSESTS_VERIFICATION_NOTICE_AVN,
  PERFORMA_BROKEN_SETTLEMENT_LETTER,
  PERFORMA_CIVIL_SUIT_NOTICE,
  PERFORMA_CONCILIATION,
  PERFORMA_DEMAND_NOTICE_ASSETS_CASES_NEW,
  PERFORMA_HIGHT_PETROL_TRANSACTION,
  PERFORMA_OTS,
  PERFORMA_OVER_LIMIT_NOTICES_EXCESSIVE_USE_OF_PETROL,
  PERFORMA_PASA_MINIMUM_DUE_AND_MAXIMUM,
  PERFORMA_PASA_NOTICES_ECS_CASES_ASSETS,
  PERFORMA_PDN,
  PERFORMA_SALARY_ATTACHMENT_NOTICE,
  PERFORMA_SUMMONS_CASES_ORDER_ATTACHED,
  PERFORMA_SUMMONS_ORDER_ATTACHED_ASSETS_CASES,
  PERFORMA_WARRANT_CASES_ORDER_ATTACHED,
  PERFORMA_WARRANT_CASES_ORDER_ATTACHED_ASSETS_EMAIL_PURPOSE,
} = require("../templates/templateNames");
const path = require("path");
const puppeteer = require("puppeteer");
const fs = require("fs").promises;
const {
  amendedHindiPerformaConciliationAssets,
  arbitrationPerforma,
  dlnPerforma,
  performa406420,
  performaAbroadNotice,
  performaAbroadNoticeAssetsCasesPersonalLoan,
  performaAssestsVerificationNoticeAvn,
  performaBrokenSettlementLetter,
  performaCivilSuitNotice,
  performaConciliation,
  performaDemandNoticeAssetsCasesNew,
  performaHighPetrolTransaction,
  performaOts,
  performaOverLimitNoticesExcessiveUseOfPetrol,
  performaPasaMinimumDueAndMaximum,
  performaPasaNoticesEcsCasesAssets,
  performaPdn,
  performaSalaryAttachmentNotice,
  performaSummonsCasesOrderAttached,
  performaSummonsOrderAttachedAssetsCases,
  performaWarrantCasesOrderAttached,
  performaWarrantCasesOrderAttachedAssetsEmailPurpose,
} = require("../templates/credit-card");

const generatePdfTemplate = async (activityName, data, res) => {
  let template;
  const activity = activityName?.toLowerCase();

  switch (activity) {
    case ARBITRATION_PERFORMA:
      template = arbitrationPerforma;
      break;

    case DLN_PERFORMA:
      template = dlnPerforma;
      break;

    case AMENDED_HINDI_PERFORMA_CONCILIATION_ASSETS:
      template = amendedHindiPerformaConciliationAssets;
      break;

    case PERFORMA_406_420:
      template = performa406420;
      break;

    case PERFORMA_ABROAD_NOTICE:
      template = performaAbroadNotice;
      break;

    case PERFORMA_ABROAD_NOTICE_ASSETS_CASES_PERSONAL_LOAN:
      template = performaAbroadNoticeAssetsCasesPersonalLoan;
      break;
    case PERFORMA_ASSESTS_VERIFICATION_NOTICE_AVN:
      template = performaAssestsVerificationNoticeAvn;
      break;
    case PERFORMA_BROKEN_SETTLEMENT_LETTER:
      template = performaBrokenSettlementLetter;
      break;

    case PERFORMA_CIVIL_SUIT_NOTICE:
      template = performaCivilSuitNotice;
      break;

    case PERFORMA_CONCILIATION:
      template = performaConciliation;
      break;

    case PERFORMA_DEMAND_NOTICE_ASSETS_CASES_NEW:
      template = performaDemandNoticeAssetsCasesNew;
      break;

    case PERFORMA_HIGHT_PETROL_TRANSACTION:
      template = performaHighPetrolTransaction;
      break;

    case PERFORMA_OTS:
      template = performaOts;
      break;

    case PERFORMA_OVER_LIMIT_NOTICES_EXCESSIVE_USE_OF_PETROL:
      template = performaOverLimitNoticesExcessiveUseOfPetrol;
      break;

    case PERFORMA_PASA_MINIMUM_DUE_AND_MAXIMUM:
      template = performaPasaMinimumDueAndMaximum;
      break;

    case PERFORMA_PASA_NOTICES_ECS_CASES_ASSETS:
      template = performaPasaNoticesEcsCasesAssets;
      break;

    case PERFORMA_PDN:
      template = performaPdn;
      break;

    case PERFORMA_SALARY_ATTACHMENT_NOTICE:
      template = performaSalaryAttachmentNotice;
      break;

    case PERFORMA_SUMMONS_CASES_ORDER_ATTACHED:
      template = performaSummonsCasesOrderAttached;
      break;

    case PERFORMA_SUMMONS_ORDER_ATTACHED_ASSETS_CASES:
      template = performaSummonsOrderAttachedAssetsCases;
      break;

    case PERFORMA_WARRANT_CASES_ORDER_ATTACHED:
      template = performaWarrantCasesOrderAttached;
      break;

    case PERFORMA_WARRANT_CASES_ORDER_ATTACHED_ASSETS_EMAIL_PURPOSE:
      template = performaWarrantCasesOrderAttachedAssetsEmailPurpose;
      break;

    default:
      template = arbitrationPerforma;
      break;
  }

  // generate pdf reports
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/chromium-browser",
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  // Replace this with your actual HTML content
  const htmlContent = template(data);

  // Set the HTML content of the page
  await page.setContent(htmlContent);

  // Generate PDF and send it as a response
  const pdfBuffer = await page.pdf({ format: "A4", scale: 1 });

  // Specify the path where you want to save the PDF file
  const fileName = `${Date.now()}-${Math.round(Math.random() * 1e9)}.pdf`;

  const pdfPath = path.resolve("/", `../public/${fileName}`);

  // Write the PDF buffer to the file
  fs.writeFileSync(pdfPath, pdfBuffer);

  // Close the browser
  await browser.close();

  // res.status(200).json({ fileName });
  return fileName;
};

module.exports = {
  generatePdfTemplate,
};

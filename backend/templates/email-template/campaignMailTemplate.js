module.exports = ({ data }) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <style>
      .bold {
        font-weight: 700;
      }
      .mt-10 {
        margin-top: 10px;
      }
    </style>
  </head>
  <body>
    <span style="font-weight: 700">Hey ${
      data?.custName || data?.customerName
    }</span>
    <p class="bold mt-10">
      Ref: Invitation to conciliation as per provisions of Section 62 of the
      Arbitration and Conciliation Act, 1996 / Your Credit Card No.
      ${data?.maskNo} (Alternate Account No.) ${data?.aanNo}
    </p>
    <p>
      Madam/Sir, Under instructions from and on behalf of our client M/s HDFC
      BANK LTD having its registered office at ‘HDFC Bank House Senapati Bapat
      Marg, Lower Parel-(West), Mumbai-400013 and Branch at HDFC Bank LTd, Sco
      2-3, 1st,2nd floor, Phase 11, Mohali, Near Punjab Mandi board, I address
      you as under:
    </p>
    <p>
      1. That you had availed credit card facility from my client under Credit
      Card No. ${data?.maskNo} (Alternate Account No. ) 1018720004900040
    </p>
    <p>
      2. That you failed to adhere to the terms and conditions of the card
      member agreement by not making the payment of the outstanding amount in
      time and the same was not paid despite repeated requests, reminders, and
      personal visits made by my client.
    </p>
    <p>
      3. That as of the date, an amount of Rs. ${
        data?.noticeBalance
      } is due and payable by
      you in the aforesaid credit card account to my client. However, my client,
      in the interest of good customer relationship, intends to explore the
      possibility of a settlement through the process of conciliation and
      accordingly intends to refer the dispute to CONCILIATOR, AT HDFC Bank Ltd
      1st Floor Rathi Chamber, Basni Industrial Area, Jodhpur, Rajasthan between
      11 a.m. to 4 p.m. on who would act as a conciliator for an amicable
      settlement.
    </p>
    <p>
      4. In case you are interested in settling the matter amicably, and out of
      court, by the process of conciliation, as aforementioned, it would
      facilitate the settlement with the Bank. In case, however, you fail/avoid
      to come forward for conciliation until the said date, the present
      invitation shall be deemed to have lapsed/rejected, and in such an event,
      our client shall be constrained to initiate appropriate legal proceedings
      against you under applicable laws for the recovery of their dues at your
      risk, cost, and consequence. The present communication may also be treated
      as a final opportunity from my client towards the amicable settlement.
    </p>
    <p>
      5. This is to put to your notice that in the event of you rejecting the
      present invitation, I have instructions from my client to initiate further
      appropriate legal proceedings for the recovery of the amount due from you.
    </p>
    <p>
      6. This notice is issued to you without prejudice to the rights and claims
      available to my client under Credit Card Usage Guide.
    </p>

    <p class="mt-10">
      IN case you want any clarification/settlement in the account of the
      outstanding amount, you are free to contact the following persons of our
      client (Mon-Sat 10:00 AM to 5:00 PM) on working days or Email:
      EmailReplyLegal.DebtManagement@hdfcbank.com (Kindly share your contact
      number in the reply to us)) Name of Officers and their Contact No. Karan
      at 8035420642 (Prefix “0” before dialing Number).
    </p>
    <p>
      Note: In compliance with data security standards, the credit card number
      is being masked, and the full alternate account number has been used in
      this notice.
    </p>
    <p>
      Further Note: Please Ignore the present notice/communication if the
      Card/CD Loan Account is already Re-Structured or Paid.
    </p>

    <p class="mt-10">Yours faithfully</p>
    <p>DEVENDRA SINGH</p>
    <p class="bold">
      Click this link to get your credit card <a href="${
        process.env.SERVER_URL
      }${data?.pdfLink}">Click here...</a>
    </p>
  </body>
</html>
`;

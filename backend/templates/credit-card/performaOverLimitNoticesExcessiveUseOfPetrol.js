module.exports = (data) =>
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
  
      <style>
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          padding: 0;
          line-height: normal;
          font-weight: 700;
        }
        span {
          font-weight: 500;
          line-height: 30px;
        }
        .flex {
          display: flex;
        }
        .flex-col {
          flex-direction: column;
        }
        .items-center {
          align-items: center;
        }
        .items-end {
          align-items: end;
        }
        .justify-start {
          justify-content: left;
        }
        .justify-center {
          justify-content: center;
        }
        .justify-between {
          justify-content: space-between;
        }
        .grid {
          display: grid;
        }
        .grid-cols-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .grid-cols-4 {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }
        .w-full {
          width: 100%;
        }
        .w-50 {
          width: 50%;
        }
        .mt-5 {
          margin-top: 5px;
        }
        .bold {
          font-weight: 700;
        }
        .text-sm {
          font-size: 14px;
        }
        .block {
          display: block;
        }
        .gap-5 {
          gap: 5px;
        }
        .gap-10 {
          gap: 10px;
        }
        .underline {
          text-decoration: underline;
        }
        .leading-normal {
          line-height: normal;
        }
        .ml-10 {
          margin-left: 10px;
        }
      </style>
    </head>
    <body style="padding: 100px 90px; background-color: white">
      <div class="flex flex-col items-end">
        <h2>ARUN KUMAR</h2>
        <h3>ADVOCATE</h3>
      </div>
  
      <div class="flex justify-between">
        <div class="flex flex-col">
          <span style="line-height: 20px">Rasi: </span>
          <span style="line-height: 20px">H.No. 973, Near Shiv Mandir,</span>
          <span style="line-height: 20px">Village Gandhra</span>
          <span style="line-height: 20px">Rohtak (Haryana)</span>
          <span style="line-height: 20px">Pin Code-124001</span>
        </div>
        <div class="flex flex-col">
          <span style="line-height: 20px">Office: </span>
          <span style="line-height: 20px">Chamber No.113, District Court,</span>
          <span style="line-height: 20px">Rohtak. (Haryana)</span>
        </div>
      </div>
      <hr
        style="
          height: 2px;
          margin: 0;
          margin-top: 5px;
          padding: 0;
          border: none;
          background: black;
        "
      />
      <hr
        style="
          height: 4px;
          margin: 3px 0;
          padding: 0;
          border: none;
          background: black;
        "
      />
      <hr
        style="
          height: 2px;
          margin: 0;
          padding: 0;
          border: none;
          background: black;
        "
      />
  
      <div class="mt-5 flex items-center justify-between text-sm">
        <span>Ref: ${data?.referenceNo}</span>
        <span class="bold" style="font-size: 16px">THROUGH ${
          data?.modeOfDispatch
        }</span>
        <span>Dated: ${data?.noticeDate}</span>
      </div>
  
      <div class="w-50">
        <span>${data?.noticeDate}</span><br />
        <span>To,</span>
        <div style="border: 1px solid black; padding: 5px">
          <h3>${data?.custName || data?.customerName}</h3>
          <span class="bold">${data?.customerAddress} Mob No. ${
    data?.custMobileNo
  }</span>
        </div>
      </div>
  
      <span style="margin-top: 15px; display: block"> Dear Sir/Madam, </span>
      <span class="mt-5 block"
        ><span class="bold">Subject: </span> Notice for exceeding credit limit in
        your HDFC Bank Credit Card No. <span class="bold">${
          data?.maskNo
        }</span> AAN
        <span class="bold">${data?.aanNo}</span> of HDFC Bank Ltd.
      </span>
  
      <br />
      <span
        >Under Instructions from our client HDFC Bank Limited this notice is being
        issued as under;
      </span>
      <br />
      <span
        >This is in reference to your captioned credit card account pertaining to
        HDFC Bank Ltd. <span class="bold">(“Bank”)</span>, it has been observed
        that you have exceeded your approved credit limit (details of which is
        mentioned hereunder) –</span
      >
      <div class="w-full">
        <span
          >That my client state that you have availed
          <span class="bold">Credit Card</span> from my client the details whereof
          is given hereunder:-</span
        >
        <div class="grid grid-cols-4 w-full" style="border: 1px solid black">
          <h3
            style="
              padding: 2px 5px;
              border-right: 1px solid black;
              border-bottom: 1px solid black;
            "
          >
            Name of the Card holder
          </h3>
          <h3
            style="
              padding: 2px 5px;
              border-right: 1px solid black;
              border-bottom: 1px solid black;
            "
          >
            Card Number/AAN
          </h3>
          <h3
            style="
              padding: 2px 5px;
              border-right: 1px solid black;
              border-bottom: 1px solid black;
            "
          >
            Approved/Existing Credit Limit
          </h3>
          <h3 style="padding: 2px 5px; border-bottom: 1px solid black">
            Exceeded Credit Limit Amount
          </h3>
          <span style="padding: 2px 5px; border-right: 1px solid black"
            >${data?.custName}</span
          >
          <span style="padding: 2px 5px; border-right: 1px solid black"
            >${data?.aanNo}</span
          >
          <span style="padding: 2px 5px; border-right: 1px solid black"
            >${data?.limit}/-</span
          >
          <span style="padding: 2px 5px; border"
            >${data?.amountExceededCreditLimit}/</span
          >
        </div>
      </div>
  
      <br />
      <span
        >Please note that the credit limit for each card holder is determined as
        per Bank norms, and the customers has to adhere to same and should not
        exceed the approved limit at any point of time as per the terms and
        conditions under Card member agreement. Contrary to this condition, if the
        outstanding balance in the card account exceeds the approved credit limit,
        the over limit amount shall be paid immediately along with the applicable
        over limit charges as per terms of the Card Member Agreement and Most
        Important Terms and Conditions.</span
      >
  
      <br />
      <br />
      <span
        >For better understanding of the charges and rates specified under Card
        Member Agreement, please refer to ‘Most Important Terms and Conditions’
        (MITC) which contains information relating to “Fees and Charges”, “Cash
        Advance Fees”, “Late fee charges” and “Finance Charges”, which was
        provided to you while availing of the Credit Card.</span
      >
  
      <br /><br />
      <span
        >Hence we hereby request you to make payment of exceeded credit limit
        amounting to
        <span class="bold">Rs. ${
          data?.amountExceededCreditLimit
        }/-</span> against the
        credit card outstanding of
        <span class="bold">Rs. ${
          data?.noticeBalance
        }/-</span> (within seven (7) days
        from the date of this notice, failing which my client reserves its legal
        right to recover the outstanding dues along with applicable charges.</span
      >
  
      <br />
      <br />
      <span
        >You have been advised to maintain the approved credit limit in future in
        order to avoid levying of charges and interest in the card account, the
        non-payment of dues will have severe impact on your credit rating and may
        result in weak credit score which will make it considerably difficult for
        you to obtain credit in the future from the financial Institutions.
      </span>
  
      <br />
      <br />
      <span class="bold"
        >"For any further clarification you may please contact Mr./Ms. ${
          data?.clmName
        }-
        ${data?.clmNo} (Collection team name)</span
      >
      <br />
      <span class="bold"
        >NOTE: Kindly ignore this notice if this payment was already made</span
      >
  
      <div class="flex flex-col mt-5">
        <span class="leading-normal"> Yours faithfully, </span>
        <div>
          <img src="https://i.ibb.co/cYbyzvm/sing.jpg" alt="sign" />
        </div>
        <span>(Arun Kumar Advocate)</span>
      </div>
    </body>
  </html>
  `;

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
  
      <span class="mt-5 block underline"
        ><span class="bold">SUBJECT : </span>
        <span class="bold">
          LEGAL NOTICE IN RESPECT OF CREDIT CARD NO. ${data?.maskNo}.
        </span>
      </span>
  
      <span class="bold" style="margin-top: 15px; display: block">
        Dear Sir/Madam,
      </span>
      <span
        >Under the instructions of my client HDFC BANK LTD., a Company registered
        under the Companies Act, 1956 having its having its Registered Office at
        HDFC Bank House, Senapati Bapat Marg, Lower Parel (West), Mumbai -13 and
        one of its Branch office at HDFC Bank. Ltd., Alpha Building, 1st Floor,
        Kanjurmarg (E), Mumbai – 400042 (hereinafter referred to as ‘My client’ or
        ‘the Bank’) under whose instructions I have to address you as under:
      </span>
  
      <div class="mt-5 flex flex-col gap-10">
        <div class="flex gap-5">
          <span>1. </span>
          <span
            >That you availed Credit Card facility vide Card no.
            <span class="bold"
              >${data?.maskNo}, AAN number: ${
    data?.aanNo
  }. The credit card was sanctioned to
              you on the basis of submission of the requisite documents including
              the salary being drawn by you under the employment with Government
              bodies/ Private organization</span
            >
          </span>
        </div>
        <div class="flex gap-5">
          <span>2. </span>
          <div class="w-full">
            <span
              >Under the terms & conditions of the said Agreement, you had agreed
              to repay the dues to my client as per due date along with interest
              and other charges.
            </span>
          </div>
        </div>
        <div class="flex gap-5">
          <span>3. </span>
          <span
            >. My client states that you have failed to maintain financial
            discipline and committed default in repayment of the dues of the bank
            and the bank in exercise of the terms of the agreement shall initiate
            appropriate proceedings against you before Court of Law.
          </span>
        </div>
        <div class="flex gap-5">
          <span>4. </span>
          <span class="bold"
            >You may note that before the Court, the Bank may seek interalia
            following relief: -</span
          >
        </div>
        <div class="bold ml-10">
          <li>
            Attachment of your salary by suitable direction to your officiating
            head of the department and deposition of the salary amount in the
            court;
          </li>
          <br />
          <li>
            Attachment of your movable and immovable assets as per due process of
            law ;
          </li>
          <br />
          <li>
            Warrant of arrest against you and civil imprisonment as per due
            process of the law;
          </li>
          <br />
          <li>
            Restraining you from creating any third-party interest in your owned
            property;
          </li>
        </div>
        <div class="flex gap-5 bold">
          <span class="bold">5. </span>
          <span class="bold">
            Please note that in the event you fail to respond to this notice, my
            client reserves the right to share your conduct with reference to the
            financial assistance taken from the Bank with your department head for
            the purpose of service of all notices summons/notices issued/to be
            issued.
          </span>
        </div>
        <div class="flex gap-5">
          <span>6. </span>
          <span>
            You are hereby called upon to make the payment of
            <span class="bold">Rs. ${
              data?.noticeBalance
            }/-</span> to my client within
            seven (7) days from the receipt of this notice, failing which my
            client shall be constrained to take further steps as stated above
            entirely at your risk, cost and consequences thereof, which you may
            please note with care and caution
          </span>
        </div>
      </div>
  
      <br />
      <span class="mt-5"
        >You may call our client’s representative Mr./ Mrs.
        <span class="bold">${data?.clmName}-${data?.clmNo}</span>
        for further assistance. A copy of the notice has been retained in my
        office for further reference
      </span>
      <br />
      <span class="bold"
        >Note- "Please ignore this Notice, if the dues are already paid or
        settled"</span
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

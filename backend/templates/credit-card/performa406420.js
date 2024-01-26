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
  
      <span class="mt-5 block"
        ><span class="bold">Subject</span> :- Notice / Intimation before
        initiating Criminal complaint against you for nonpayment of credit card
        amount outstanding <span class="bold">Rs. ${
          data?.noticeBalance
        }/-</span> on
        <span class="bold">Credit Card No. ${data?.maskNo}</span> AAN no.
        <spna class="bold">${data?.aanNo}</spna>
      </span>
  
      <span style="margin-top: 15px; display: block"> Dear Sir/Madam, </span>
      <span
        >Under instructions from and on behalf of our client
        <span class="bold">HDFC BANK LTD</span>, having its Registered Office at
        HDFC Bank House, Senapati Bapat Marg, Lower Parel (West), Mumbai -13 and
        one of its Branch office at HDFC Bank. Ltd., Alpha Building, 1st Floor,
        Kanjurmarg (E), Mumbai – 400042 and one of its Branch office at HDFC Bank.
        Ltd., 401-402, Model Town Rohtak-124001 (hereinafter referred to as ‘My
        client’ or ‘the Bank’) under whose instructions I have to address you as
        under:
      </span>
  
      <div class="mt-5 flex flex-col gap-10">
        <div class="flex gap-5">
          <span>1. </span>
          <span
            >You availed credit card facility and utilized the facility to meet
            your needs and requirements. You assured to repay utilized amount
            regularly as per the terms and conditions without any default.
          </span>
        </div>
        <div class="flex gap-5">
          <span>2. </span>
          <div class="w-full">
            <span
              >Our client state that, after availing and utilizing the Credit Card
              to meet your needs and requirements, you have failed and neglected
              to pay utilized amount to our client. Therefore, now client have
              realized that, you have no intention to fulfil and comply with your
              commitments of paying credit card dues without making default, which
              was made by you at the time of availing credit card facility in this
              way you have deceived our client to issue Credit Card to you which
              has caused financial loss to our client owing to the defaults
              committed by you and thus you have cheated and breached trust of our
              client and thus you have committed offences under section 405, 406
              ,417 and 420 of Indian penal code, 1860, punishable up to 3-7 years
              of imprisonment or fine or both . That, your Credit Card is having
              Total outstanding of <span class="bold">Rs.${
                data?.noticeBalance
              }/-</span>
            </span>
          </div>
        </div>
        <div class="flex gap-5">
          <span>3. </span>
          <span
            >Our client requested through their authorized person on several time
            through telephonic messages/ visits / by sending Notices to pay the
            outstanding amount in the account, but you have always been ignoring
            and avoiding request of our client and so far, have not paid said
            outstanding amount due.
          </span>
        </div>
        <div class="flex gap-5">
          <span>4. </span>
          <span
            >By this Notice Our client is offering you an opportunity to pay the
            outstanding amount otherwise it may attract legal consequences on you
            with cost on your part.</span
          >
        </div>
        <div class="flex gap-5">
          <span>5. </span>
          <span>
            PLEASE THEREFORE TAKE NOTICE that, you are hereby called to pay the
            outstanding amount of
            <span class="bold">Rs. ${
              data?.noticeBalance
            }/-</span> within 7 days from
            receipt of this notice failing which our client will initiate civil as
            well as criminal proceeding entirely at your own risk as to costs and
            consequences,
          </span>
        </div>
        <div class="flex gap-5">
          <span>6. </span>
          <span>
            Further, this notice is for notifying you, that if you do not pay the
            outstanding amount, our client will initiate criminal proceeding
            against you for cheating and breach of trust of our client. Please
            also note that your defaults have impacted your CREDIT SCORE which may
            affect your ability to avail loan in future
          </span>
        </div>
      </div>
  
      <span class="mt-5"
        >For any further information you may call our client authorised person Mr
        <span class="bold">${data?.clmName}-${
    data?.clmNo
  }</span>. If you have changed your
        resident address/office address than you may furnish this information to
        our client immediately
      </span>
  
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

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
        ><span class="bold">Subject</span> Invitation for Settlement of Credit
        Card outstanding - pertaining to the Credit Card No
        <span class="bold">${data?.maskNo}, AAN ${data?.aanNo}.</span>
      </span>
  
      <span style="margin-top: 15px; display: block"> Dear Sir/Madam, </span>
      <span
        >On behalf of and under instructions of
        <span class="bold">HDFC BANK LTD</span>, having its Registered Office at
        HDFC Bank House, Senapati Bapat Marg, Lower Parel (West), Mumbai -13 and
        one of its Branch office at HDFC Bank. Ltd., Alpha Building, 1st Floor,
        Kanjurmarg (E), Mumbai – 400042 one of its Branch office at HDFC Bank.
        Ltd., 401-402, Model Town, Rohtak 124001 (hereinafter referred to as ‘My
        client’ or ‘the Bank’) under whose instructions I have to address you as
        under:
      </span>
      <br />
      <br />
      <span
        >This is in reference to the credit card facility availed by you in the
        captioned card account and it is found that you have failed to maintain
        financial discipline and to discharge their repayment obligations as
        agreed under the terms and conditions of the Card member agreement to
        repay the loan amount which would result into initiation of legal action
        in upcoming days in near future. However, to avoid such future litigation
        and taking into account of the unprecedented situation, our client has
        decided to engage the customers for amicable settlement of their credit
        card outstanding which may be done by the customers by submitting their
        settlement proposals to my client/Bank.</span
      >
  
      <div class="mt-5 flex flex-col gap-10">
        <div class="flex gap-5">
          <span>1. </span>
          <span>
            My client states and submits that, you being the customer(s) availed
            Credit Card <span class="bold">${data?.maskNo}</span> (bearing AAN:
            <span class="bold">${data?.aanNo}</span> for a sum of
            <span class="bold">Rs ${
              data?.noticeBalance
            }/-</span> by entering into a
            Credit Card facility and agreed to make repayment of the said utilized
            amount due. Please note as a result of continuous default n repayment,
            your above referred Credit facility having total outstanding amount of
            <span class="bold">Rs. ${
              data?.noticeBalance
            }/-</span> is due and payable to
            my client.
          </span>
        </div>
        <div class="flex gap-5">
          <span>2. </span>
          <div class="w-full">
            <span
              >My Client further submits that, Now, with a view to amicably settle
              the credit card outstanding appearing against your credit card
              account(s), you may submit a settlement proposal to my client and/or
              may contact it’s Officer Mr/Ms.
              <span class="bold">${data?.clmName}-${
    data?.clmNo
  }</span> on his mobile number
              for due consideration of proposal by my client. My Client hopes that
              you will take this offer as an opportunity to settle the credit card
              account and to avoid the future litigations.
            </span>
          </div>
        </div>
        <div class="flex gap-5">
          <span>3. </span>
          <span
            >My Client states and submits that, the contents of this letter shall
            not be presumed to be an approval from my client on any settlement
            offer so submitted by you, and my client exercises complete discretion
            in accepting or rejecting the settlement offer/s without assigning any
            reason.
          </span>
        </div>
        <div class="flex gap-5">
          <span>4. </span>
          <span
            >My Client states and submits that, the objective of this present
            Notice is to only provide an opportunity to the customer/s to amicably
            resolve and settle the loan account and the outstanding’s by
            submitting their settlement proposal and discussing it with my client
            and nothing in this letter shall be construed to create any obligation
            either on my client or on you being the card member/ customer unless
            the settlement terms are reduced in writing and signed by you as a
            card member/customer and my client.
          </span>
        </div>
        <div class="flex gap-5">
          <span>5. </span>
          <span>
            My Client further submits that, present letter is issued without
            prejudice to the rights of my clients to continue/initiate legal
            proceedings against you for recovering the outstanding dues in terms
            of contractual rights created in favor of my client under Credit Card
            Agreement(s) duly agreed by you in the event the settlement offer
            being rejected by my client.
          </span>
        </div>
        <div class="flex gap-5">
          <span>6. </span>
          <span>
            For any further clarification you may please contact above name
            officer on given Contact number.
          </span>
        </div>
        <div class="flex gap-5">
          <span>7. </span>
          <span>
            Settlement proposal should be received by my client on and before
            <span class="bold">CONCILIATION DATE</span> and any such proposal
            received after <span class="bold">CONCILIATION DATE</span> shall not
            be considered by my client.
          </span>
        </div>
      </div>
  
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

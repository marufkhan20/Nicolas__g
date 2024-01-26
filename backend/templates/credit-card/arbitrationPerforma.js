module.exports = (data) => `<!DOCTYPE html>
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
    </style>
  </head>
  <body
    style="
      padding: 100px 90px;
      background-color: white;
    "
  >
    <div class="flex flex-col items-end">
      <h2>ARUN KUMAR</h2>
      <h3>ADVOCATE</h3>
    </div>

    <div class="flex justify-between">
      <div class="flex flex-col">
        <span>Rasi: </span>
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
      <span class="bold">Through Normal Post</span>
      <span>Dated: ${data?.noticeDate}</span>
    </div>

    <div class="w-50">
      <span>To,</span>
      <div style="border: 1px solid black; padding: 5px">
        <h3>${data?.custName || data?.customerName}</h3>
        <span>${data?.customerAddress} Mob No. ${data?.custMobileNo}</span>
      </div>
    </div>

    <span class="mt-5 bold block"
      >Subject: Demand Notice for Payment of dues amounting to
      Rs.${data?.noticeBalance}/- in your Credit Card Account No. ${
  data?.maskNo
} (AAN
      No. ${data?.aanNo}).
    </span>

    <span style="margin-top: 15px; display: block">
      Under instruction from and on behalf of my client HDFC BANK LTD. having
      its Registered Office at HDFC Bank House, Senapati Bapat Marg, Lower Parel
      (West), Mumbai -13 and also having one of its Branch at 401-402, First
      Floor, Model Town Rohtak124001 (hereinafter referred to as my client) I,
      <span class="bold">Arun Kumar, Advocate</span> do hereby address and serve
      upon you this notice and state as under:-
    </span>

    <div class="mt-5 flex flex-col gap-10">
      <div class="flex gap-5">
        <span>1) </span>
        <span
          >That my client is Banking Company within the meaning of the Banking
          Regulation Act, 1949 and inter-alia engaged in the business of Banking
          and providing Loans and advances and other financial services at the
          abovementioned address.</span
        >
      </div>
      <div class="flex gap-5">
        <span>2) </span>
        <div class="w-full">
          <span
            >That my client state that you have availed
            <span class="bold">Credit Card</span> from my client the details
            whereof is given hereunder:-</span
          >
          <div class="grid grid-cols-3 w-full" style="border: 1px solid black">
            <h3
              style="
                padding: 2px 5px;
                border-right: 1px solid black;
                border-bottom: 1px solid black;
              "
            >
              MASKED CARD NUMBER
            </h3>
            <h3
              style="
                padding: 2px 5px;
                border-right: 1px solid black;
                border-bottom: 1px solid black;
              "
            >
              AAN
            </h3>
            <h3 style="padding: 2px 5px; border-bottom: 1px solid black">
              TOTAL OUTSTANDING (Rs.)
            </h3>
            <span style="padding: 2px 5px; border-right: 1px solid black"
              >${data?.maskNo}</span
            >
            <span style="padding: 2px 5px; border-right: 1px solid black"
              >${data?.aanNo}</span
            >
            <span style="padding: 2px 5px; border">${
              data?.noticeBalance
            }/-</span>
          </div>
        </div>
      </div>
      <div class="flex gap-5">
        <span>3) </span>
        <span
          >That my client states that, after availing the said Credit Card, you
          have failed to pay the credit card due as per the terms and conditions
          of the credit card Application & Card Member Agreement inspite of
          giving you sufficient time to meet the liability. That my client
          repeatedly reminded and requested you over telephone and in person to
          pay and clear up the outstanding dues but you failed and neglected to
          pay any attention to the request of my client as a consequence of
          which my client has withdrawn the said credit card and has permanently
          blocked the said credit card from further usage. Therefore, dispute
          and differences have arisen in respect of the said credit card which
          can be resolved through arbitration as contemplated in the said
          application & Card Member Agreement.</span
        >
      </div>
      <div class="flex gap-5">
        <span>4) </span>
        <span
          >That my client further state that as per the record maintained by the
          bank a sum of <span class="bold">Rs. ${
            data?.noticeBalance
          }/-</span> is due
          and payable by you to my Client under your above referred credit card
          and therefore my client has instructed me to issue this Notice of
          Demand upon you to pay and clear up the aforesaid total outstanding
          amount together with further interest accrued thereon.</span
        >
      </div>
      <div class="flex gap-5">
        <span>5) </span>
        <span
          >I, therefore, as instructed by my client call upon you by this Notice
          of Demand to pay the total outstanding amount of
          <span class="bold">Rs. ${
            data?.noticeBalance
          }/-</span> within 7 (seven) days
          from the receipt of this notice failing which my client shall be
          constrained to refer the dispute to the Sole Arbitrator to be
          appointed by
          <span class="underline"
            >my client for adjudication of dispute as per the terms of the
            Arbitration Clause in the CARD MEMBER AGREEMENT</span
          >
          to recover the said amount being due with further charges, costs and
          expenses incurred by my client. Please note that in case the amount
          payable as above is not paid to my client within a stipulated time,
          you shall be responsible for the costs and consequences thereof of
          which please take note.
        </span>
      </div>
      <div class="flex gap-5">
        <span>6) </span>
        <span
          >That my client is open to negotiate and settle the amount amicably
          before initiating unpleasant actions against you.
          <span class="bold"
            >You may contact my client at the aforesaid address and call for any
            further clarification to Mr./ Ms. ${data?.clmName}- ${
  data?.clmNo
}</span
          >
        </span>
      </div>
    </div>

    <div class="flex flex-col mt-5">
      <span
        >I retain a copy of this notice for further proceedings, if necessary.
        Yours faithfully
      </span>
      <div>
        <img src="https://i.ibb.co/cYbyzvm/sing.jpg" alt="sign" />
      </div>
      <span>(Arun Kumar Advocate)</span>
    </div>
  </body>
</html>
`;

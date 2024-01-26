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
  
      <span style="margin-top: 15px; display: block"> Dear Sir/Madam </span>
      <span
        >Under instructions from my client M/s. HDFC Bank Ltd., Card Services
        Division having their office at CEEBROS, No.110, Nelson Manickam Road,
        Aminjikarai, Chennai – 600 029, and one of its branch office at 401-402,
        Model Town, Rohtak 124001, I am issuing the following notice to you
      </span>
  
      <br />
      <span
        >Whereas you consistently defaulted in payment of the dues in your credit
        card account <span class="bold">${data?.maskNo} / AAN:${
    data?.aanNo
  }</span> and upon
        your request and in consideration of the exceptional circumstances, my
        client offered you a settlement towards amicable closure of your card
        account.</span
      >
      <br />
      <span
        >My client offered a settlement amount of
        <span class="bold">Rs.«Settlement_Amount»/-</span> in the month of
        <span class="bold">«Settlement_Month»</span> vide settlement letter
        <span class="bold">«Settlement_Letter_Number»</span>, payable in monthly
        installments as mentioned in the Settlement Letter.
      </span>
      <br />
      <span
        >You were aware that failure to make payment on the dates stipulated
        therein would entitle my client to invalidate the Settlement offer and to
        withdraw the Waivers granted.</span
      >
      <br />
      <span
        >Whereas despite knowledge of the terms of Settlement, you have failed to
        make payments in terms of the Settlement, thereby the Settlement offered
        to you became null and void and was revoked. No future Settlement shall be
        entertained in your card account and you have become liable to pay the
        entire outstanding as on date.</span
      >
  
      <br />
      <span
        >Whereas you have intentionally cheated and caused wrongful loss to my
        client, for which acts you are liable to be prosecuted under the Indian
        Penal Code.
      </span>
  
      <br />
      <span
        >You are hereby called upon to pay the current outstanding of
        <span class="bold">Rs.${
          data?.noticeBalance
        }/-</span> towards your credit card
        account along with Rs.500/- towards notice charges, within 15 days of
        receipt of this legal notice failing which my client will be constrained
        to initiate appropriate legal action against you, both civil and criminal,
        at your risk and costs.
      </span>
  
      <br />
      <br />
      <span
        >In case you want any clarification/settlement in the account of
        outstanding amount you are free to contact the following persons of my
        client (Mon-Sat 10.00AM to 5.00 PM) or Email
        <span class="underline bold" style="color: blue"
          >EmailReplyLegal.DebtManagement@hdfcbank.com</span
        ></span
      >
  
      <br />
      <br />
      <span
        >Name of the Bank officer and their contact Nos.
        <span class="bold">${data?.clmName}-${data?.clmNo}</span>
      </span>
  
      <br />
      <br />
      <span
        ><span class="bold">Note:-</span> In compliance of the data security
        standards the cerdit card No. is masked and full alternate account number
        has been used in this notice.</span
      >
  
      <br />
      <br />
      <span class="bold"
        >“Please ignore this notice if payment is already made.”</span
      >
  
      <div class="flex flex-col mt-5">
        <span class="leading-normal"> Yours faithfully, </span>
        <div>
          <img src="https://i.ibb.co/cYbyzvm/sing.jpg" alt="sign" />
        </div>
        <span class="bold">(Arun Kumar Advocate)</span>
      </div>
    </body>
  </html>
  `;

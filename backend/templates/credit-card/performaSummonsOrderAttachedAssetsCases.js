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
        ><span class="bold">Subject: </span> Intimation of issuance of Summons in
        legal action taken by HDFC Bank U/s 25C of PASA, 2007 / Sec138 of N.I.
        Act,1881 with respect to your HDFC Bank Loan Agreement No.
        <span class="bold">${data?.loanNo}</span>.
      </span>
  
      <span style="margin-top: 15px; display: block"> Dear Sir/Madam, </span>
      <span
        >Under instructions from and on behalf of our client M/s HDFC BANK LTD, I
        address this notice as under:
      </span>
  
      <div class="mt-5 flex flex-col gap-10">
        <div class="flex gap-5">
          <span
            >That you had availed <span class="bold">${
              data?.product
            }</span> (Product)
            facility from my client vide Loan Agreement No.
            <span class="bold">${data?.loanNo}</span>.
          </span>
        </div>
        <div class="flex gap-5">
          <div class="w-full">
            <span
              >That you failed to adhere to the terms and conditions of the said
              Loan agreement by not making the payment of the outstanding amount
              in time and the same was not paid despite repeated, request,
              reminder and personal visit made by my client.
            </span>
          </div>
        </div>
        <div class="flex gap-5">
          <span
            >Please note that due to your continuous default in making payment of
            the outstanding dues of your Loan, my client (‘HDFC Bank’) has
            initiated legal action U/s 25 C of PASA Act and or U/s 138 of
            Negotiable Instrument Act before the court of competent jurisdiction
            at District Court
            <span class="bold">«Court_Name_», «Court_Place»</span> (State).
          </span>
        </div>
        <div class="flex gap-5">
          <span
            >In the said case, this is to inform you that Learned Court has been
            pleased to issue summons against you seeking your presence on the next
            date.</span
          >
        </div>
        <div class="flex gap-5">
          <span class="bold">
            Please find attached herewith the order passed by the Learned Court
            for your kind reference.
          </span>
        </div>
        <div class="flex gap-5">
          <span>
            You are therefore requested to ensure your presence on the date fixed,
            <span class="bold">as mentioned in the order attached,</span> so as to
            avoid adverse orders liable to be passed by the Learned Court.
          </span>
        </div>
        <div class="flex gap-5">
          <span>
            You may approach Bank officers to know further details and discussion
            in this regard and can reach out to Mr .
            <span class="bold">${data?.clmName}</span> on Contact No. (LL).
            <span class="bold">${
              data?.clmMob
            }</span> between 10.00 AM to 5.00PM on
            all working days.
          </span>
        </div>
  
        <div class="flex gap-5">
          <span>
            You may also note that non-payment of the dues by you on time may also
            affect your credit history reported by the Banks on CIBIL or other
            similar platform.
          </span>
        </div>
      </div>
  
      <br />
      <span class="mt-5"
        >This notice is issued to you without prejudice to the rights and claims
        available to our client under the said Loan agreement. Kindly ignore the
        same, if payment has already been made and inform the bank regarding the
        same.
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

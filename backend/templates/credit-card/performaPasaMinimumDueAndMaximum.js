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
        ><span class="bold">SUB: </span>
        <span class="bold"
          >Notice of demand under Section 25 of the Payment and Settlement Systems
          Act, 2007 (“Act”) for dishonor of electronic fund transfer in respect to
          Your HDFC Bank Credit Card Number ${data?.maskCard} (AAN# ${
    data?.aan
  })</span
        >
      </span>
  
      <span style="margin-top: 15px; display: block"> Dear Sir/Madam, </span>
      <span
        >Under instructions from and on behalf of my client M/s. HDFC Bank
        Limited, a Banking Company registered under the Companies Act, 1956,
        having its branch office at
        <span class="bold"
          >HDFC Bank House, 3rd Floor, Tower B, Plot No. I-15, Sec. 101, Alpha IT
          City, Mohali, Punjab-160062,</span
        >
        I, Arun Kumar Advocate, serve upon you, the above said Noticee, the
        following notice:
      </span>
  
      <div class="mt-5 flex flex-col gap-10">
        <div class="flex gap-5">
          <span>1. </span>
          <span></span>
            That you the Noticee had availed a Credit Card facility from my Client
            vide Card No. <span class="bold">${data?.maskCard} (AAN# ${
    data?.aan
  }).</span>
          </span>
        </div>
        <div class="flex gap-5">
          <span>2. </span>
          <div class="w-full">
            <span
              >That towards the discharge of <span class="bold">Minimum Due Amount</span> on the above said Card issued by my Client, you the
              Noticee, had agreed to pay the same to my Client through Auto Debit facility and in this regard you had issued
              standing instructions to my Client to debit a sum of <span class="bold">Rs. «BOUNCE_AMOUNT»/-</span> from your Bank Account No.
              <span class="bold">«ACCOUNT_NO»</span> maintained with my Client.
            </span>
          </div>
        </div>
        <div class="flex gap-5">
          <span>3. </span>
          <span
            >That in view of the above, my Client executed the Direct/Auto Debit Facility on <span class="bold">«BOUNCE_DATE»</span> for an
            amount of <span class="bold">Rs. «BOUNCE_AMOUNT»/-</span> towards the <span class="bold">Minimum Due Amount</span> in your above mentioned Credit
            Card account, and the same was returned dishonoured on <span class="bold">«BOUNCE_DATE»</span> for the reason
            .
            <span class="bold"></span>.
            
          </span>
        </div>
        <div class="flex gap-5">
          <span>4. </span>
          <span
            >It is pertinent to bring to your Notice that dishonour of the Direct/Auto Debit Transaction (i.e. dishonour of
            electronic funds transfer as per Section 25 of the Act) & non-payment in response to this Notice shall constitute
            in commission of offences punishable under the Act with imprisonment for a term, which may extend to two
            (2) years, or with fine which may extend to twice the amount of the electronic funds transfer, or with both. In
            addition to the punishment, the Courts are also empowered to grant compensation, at the cost of the defaulter
            (i.e. you the Noticee herein) to the Complainant (i.e. my Client) towards the interest, expenditure & costs
            incurred by the Complainant in pursuing the Complaint.</span
          >
        </div>
        <div class="flex gap-5">
          <span>5. </span>
          <span>
            That vide present demand Notice, I on behalf of my client hereby call upon you the Noticee to pay and
  liquidate aforesaid amount of the dishonoured transaction for Direct/Auto Debit of <span class="bold">Rs. «BOUNCE_AMOUNT»/-
    along with Rs.500/- towards notice charges</span> without any delay and demur but not later that 15 (fifteen) days
  from the receipt of this Notice, to my Client; failing which, I have strict instructions from my Client to initiate
  appropriate legal proceedings against you the Noticee without any further reference and at the costs, risks and
  consequences of which you Noticee shall be solely liable. Please note that issuance of the present Notice does
  not constitute waiver of my Client’s other legal rights to initiate further/ other legal proceedings, apart from
  already stated herein above, for the recovery of the above said amount and the Notice is being issued without
  prejudice to my Client’s right to enforce the other terms and conditions of the Agreement and any other
  documents executed by you with my Client.
  
          </span>
        </div>
      </div>
  
      <br>
      <span>
        I trust you would see the seriousness of my Client’s intentions and suitably act in compliance of this Notice and
  your failure to do so would render you the Noticee liable for the costs and consequences thereof of which you
  would be solely liable. For any further clarification in respect of the present Notice, you may please contact my
  Client’s Officer <span class="bold">Mr. ${data?.clmName}-${
    data?.clmMob
  }(Mon-sat 10:00 AM to 5:00 PM) on working days
    Note: In compliance to data security standards the credit card no. is being masked and full
    alternate account number has been used in this notice.</span>
      </span>
  
      <br>
      <span class="mt-5"
        >Please note a copy of the present Notice is retained by self for reference and record.
      </span>
  
      <div class="flex flex-col mt-5">
        <span class="leading-normal"> Yours faithfully, </span>
        <div>
          <img src="https://i.ibb.co/cYbyzvm/sing.jpg" alt="sign" />
        </div>
        <span>(Arun Kumar Advocate)</span>
      </div>
  
      <span><span class="bold">Further Note: </span>Please Ignore the present notice/communication, if the Card/CD Loan Account is already ReStructured or Paid.
      </span>
    </body>
  </html>
  `;

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
  
      <span class="mt-5 block bold"
        ><span class="bold">Ref: </span> Demand Cum Vehicle Inspection Notice by
        HDFC Bank in ${data?.product}. Bearing Loan Account No. ${data?.loanNo}.
      </span>
  
      <span style="margin-top: 15px; display: block"> Dear Sir/Madam, </span>
      <span
        >Under Instructions from our client HDFC Bank Limited this notice is being
        issued as under:
      </span>
  
      <div class="mt-5 flex flex-col gap-10">
        <div class="flex gap-5">
          <span>1. </span>
          <span
            >That you had availed ${data?.product} facility from our client
            under the referred
            <span class="bold">Loan Account No. ${data?.loanNo}.</span>
          </span>
        </div>
        <div class="flex gap-5">
          <span>2. </span>
          <div class="w-full">
            <span
              >That you have failed to maintain financial discipline and defaulted
              in making payment of Equated Monthly Installments on time to my
              client resulting in levy of penal interest, late payment and other
              charges in terms of the Loan Agreement. Please note that an amount
              of <span class="bold">Rs. ${data?.totalDue}/-</span> is overdue
              as on date <span class="bold">${
                data?.noticeDate
              }</span> and payable by
              you in captioned loan account.
            </span>
          </div>
        </div>
        <div class="flex gap-5">
          <span>3. </span>
          <span
            >That the Bank during follow up for loan repayment requested you to
            bring the vehicle for inspection, but you have failed in doing so and
            thus, our client apprehend that the vehicle hypothecated in favor of
            the bank might have been misappropriated or likely to be
            misappropriated at your end by transferring or selling the vehicle to
            some third party in violation of terms of the loan and without consent
            of the Bank. Through this notice you are directed to bring the
            hypothecated vehicle bearing Registration No.
            <span class="bold"
              >${data?.regNo}, Engine No. ${data?.engineNo}, Chasis No. ${
    data?.chasisNo
  }, Model
              No. ${data?.model} for inspection at «VEHICLE_INSPECTION_PLACE» on
              «VEHICLE_INSPECTION_DATE»</span
            >
            failing which it shall be presumed that you have
            misappropriated/sold/transferred the vehicle by illegal means and
            suitable action as per law shall be taken against you.
          </span>
        </div>
        <div class="flex gap-5">
          <span>4. </span>
          <span
            >That through this demand notice you are directed to immediate clear
            the outstanding Over Due Amount of
            <span class="bold">Rs. ${data?.totalDue}/-</span> failing my client
            shall reserve the right to initiate appropriate legal proceedings
            (civil and criminal) against you to recover the outstanding dues of
            the loan account.</span
          >
        </div>
        <div class="flex gap-5">
          <span>5. </span>
          <span>
            The present communication may also be treated as a final opportunity
            from our client, towards the amicable settlement of loan amount.
          </span>
        </div>
        <div class="flex gap-5">
          <span>6. </span>
          <span>
            This is to put to your notice that in event of you fail to make the
            payment of overdue amount, I have instructions from our client to
            initiate further appropriate legal proceeding for the recovery of the
            amount due from you.
          </span>
        </div>
        <div class="flex gap-5">
          <span>7. </span>
          <span>
            This notice is issued to you without prejudice to the right and claims
            available to our client under the Loan Agreement duly executed by you.
            Kindly ignore the same if payment has already been made.
          </span>
        </div>
      </div>
  
      <br />
      <span class="mt-5"
        >In case you want any clarification/settlement on account of the
        outstanding amount you are free to contact
        <span class="bold">Mr. ${data?.clmName}</span> at contact no. 0
        <span class="bold">${data?.clmMob}</span>
        between 10:00 AM to 05:00 PM (All Working Days).
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

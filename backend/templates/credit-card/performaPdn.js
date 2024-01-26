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
      <span class="bold">E-mail add: vashistarun61@gmail.com</span>
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
        ><span class="bold">Subject</span> :-
        <span class="bold"
          >Suit to be filed against you for failure to pay the outstanding dues
          towards your HDFC Bank Credit Card No: ${data?.maskNo} (AAN# ${
    data?.aanNo
  })
        </span>
      </span>
  
      <span style="margin-top: 15px; display: block"> Dear Sir/Madam, </span>
      <span
        >Under instructions from and on behalf of my client HDFC Bank Limited, a
        Banking Company incorporated and registered under the Companies Act, 1956,
        we address you as under:
      </span>
  
      <br />
      <br />
      <span
        >My client states that you have availed credit card facility vide credit
        card no. <span class="bold"> ${data?.maskNo} (AAN# ${
    data?.aanNo
  })</span> and utilized
        the said Credit Card facility provided by my client as per your
        convenience at various occasions and you have thereafter defaulted and
        neglected to make payment of the outstanding dues as per the monthly
        statements raised by my client and issued to you.
      </span>
  
      <br />
      <br />
      <span
        >My client states that despite repeated request and reminders from them,
        you have intentionally delayed and defaulted in making payment of the due
        amounts</span
      >
      <br />
      <span
        >In the circumstances, my client has instructed me to initiate a
        <span class="bold"
          >Civil Suit Under Order XXXVII and also claim relief in terms of Order
          XXXVIII Rule V to furnish security / attachment</span
        >
        against you under the code of Civil Procedure for the recovery of
        outstanding amount; within 7 days from the date of this notice, seeking
        the following among other directions;</span
      >
      <br />
      <span class="bold ml-10"
        >a) A decree for an amount of Rs. ${
          data?.noticeDate
        }/- along with interest @
        18% p. a. from the date of filing of Suit till the date of payment and /
        or realization of the said amount.</span
      >
      <br />
      <span class="bold ml-10"
        >b) A direction to furnish security within such time and in such sum as
        may be specified by this Hon’ble court failing which;</span
      >
      <br />
      <span class="bold ml-10"
        >c) An Order of Attachment of Immovable / Movable property of the
        Defendant</span
      >
      <br />
      <span class="bold ml-10">d) Cost of the Suit.</span>
  
      <br />
      <br />
      <span
        >Without Prejudice, if you are still ready and willing to pay the
        outstanding Amount of
        <span class="bold">Rs. ${
          data?.noticeBalance
        }/-</span> please immediately
        contact my client’s legal department at
        <span class="bold"
          >HDFC Bank Ltd., 401-402, Main Delhi Road, Model Town Rohtak.</span
        ></span
      >
      <br />
      <span class="bold">Officer: ${data?.clmName}-${data?.clmNo}</span>
      <br />
      <span class="bold">
        E-Mail: EmailReplyLegal.DebtManagement@hdfcbank.com.</span
      >
  
      <br />
      <br />
      <span class="bold"
        >while sending email in reply to this notice please also share your
        contact number with us.
      </span>
  
      <br />
      <span class="bold"
        >If the aforesaid amount is not received by my client within stipulated
        period of 7 (Seven) days of receipt of this notice, we would proceed with
        the filing of the Summary Suit in the appropriate Court</span
      >
  
      <br />
      <br />
      <span class="bold"
        >Note: In compliance to data security standards the credit card no. is
        being masked and full alternate account number has been used in this
        notice.
      </span>
  
      <br />
      <div class="flex flex-col mt-5">
        <div>
          <img src="https://i.ibb.co/cYbyzvm/sing.jpg" alt="sign" />
        </div>
        <span>(Arun Kumar Advocate)</span>
      </div>
    </body>
  </html>
  `;

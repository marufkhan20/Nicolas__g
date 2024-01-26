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
        .italic {
          font-style: italic;
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
        <span>To,</span>
        <div style="border: 1px solid black; padding: 5px">
          <h3>${data?.custName || data?.customerName}</h3>
          <span class="bold">${data?.customerAddress} Mob No. ${
    data?.custMobileNo
  }</span>
        </div>
      </div>
  
      <span class="mt-5 block"
        ><span class="bold">Ref: </span>Invitation to conciliation as per
        provisions of Section 62 of the Arbitration and Conciliation Act, 1996 for
        amicable settlement of outstanding dues on your HDFC Bank Credit Card
        <No class="span bold">${data?.maskNo} (AAN# ${data?.aanNo})</No>
      </span>
  
      <span style="margin-top: 15px; display: block">Sir/Madam, </span>
      <span
        >Under instructions from and on behalf of our client
        <span class="bold">M/s HDFC BANK LTD</span> having its Registered Office
        at HDFC Bank House, Senapati Bapat Marg, Lower Parel (West), Mumbai -13
        and one of its Branch office at HDFC Bank. Ltd., Alpha Building, 1st
        Floor, Kanjurmarg (E), Mumbai – 400042 and one of its branch at 401-402,
        Model Town Rohtak- 124001 (hereinafter referred to as ‘My client’ or ‘the
        Bank’) under whose instructions I have to address you as under:
      </span>
  
      <div class="mt-5 flex flex-col gap-10">
        <div class="flex gap-5">
          <span>1. </span>
          <span
            >That you had availed credit card facility from my client vide Credit
            Card <No class="span bold">${data?.aanNo} (AAN# ${
    data?.aanNo
  }).</No>
          </span>
        </div>
        <div class="flex gap-5">
          <span>2. </span>
          <div class="w-full">
            <span
              >That you failed to adhere to the terms and conditions of the card
              member agreement by not making the payment of the outstanding amount
              in time and the same was not paid despite repeated, request,
              reminder and personal visit made by my client.
            </span>
          </div>
        </div>
        <div class="flex gap-5">
          <span>3. </span>
          <span
            >That as on date an amount of
            <span class="bold">Rs. ${
              data?.noticeBalance
            }/-</span> is due and payable by
            you in the aforesaid credit card account to my client. However my
            client in the interest of good customer relationship intends to
            explore the possibility of a settlement, through process of
            conciliation and accordingly intends to refer the dispute to,
            <span class="bold">Mr./Ms. LALIT SHARMA</span> who would act as a
            conciliator for an amicable settlement.
          </span>
        </div>
        <div class="flex gap-5">
          <span>4. </span>
          <span
            >In case you are interested in settling the matter amicably, and out
            of court; by the process of conciliation, as aforementioned, you are
            called upon to attend the conciliation camp, being organized at the
            <span class="bold">${data?.campLocation}</span> on
            <span class="bold"
              >${data?.campDate} from 11:00 AM to 04:30PM.</span
            >
            In case, however, you fail/avoid to come forward for conciliation, on
            the said date, the present invitation shall be deemed to have
            lapsed/rejected and in such event, our client shall be constrained to
            initiate appropriate legal proceedings against you under applicable
            laws for the recovery of their dues at your risk, cost and
            consequence. The present communication may also be treated as a final
            opportunity from my client, towards the amicable settlement.</span
          >
        </div>
        <div class="flex gap-5">
          <span>5. </span>
          <span>
            This is to put to your notice that in the event of you rejecting the
            present invitation I have instructions from my client to initiate
            further appropriate legal proceeding for the recovery of the amount
            due from you.
          </span>
        </div>
        <div class="flex gap-5">
          <span>6. </span>
          <span>
            This notice is issued to you without prejudice to the rights and
            claims available to my client under Credit Card Usage Guide
          </span>
        </div>
      </div>
  
      <br />
      <span class="mt-5 bold italic"
        >IN case you want any clarification/settlement in the account of
        outstanding amount you are free to contact the following Officer of our
        client between 10:00am to 05:00 pm (All Working Days)
      </span>
  
      <br />
      <span
        >Name of Officers and their Contact Nos.
        <span class="bold">${data?.clmName}-${data?.clmNo}.</span></span
      >
      <br />
      <span class="bold italic"
        >Note: In compliance to data security standards the credit card no. is
        being masked and full alternate account number has been used in this
        notice.
      </span>
  
      <div class="flex flex-col">
        <div>
          <img src="https://i.ibb.co/cYbyzvm/sing.jpg" alt="sign" />
        </div>
        <span>(Arun Kumar Advocate)</span>
      </div>
    </body>
  </html>
  `;

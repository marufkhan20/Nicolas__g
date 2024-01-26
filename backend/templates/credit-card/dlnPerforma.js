// {
//   referenceNo,
//   noticeDate,
//   custName,
//   customerAddress,
//   custMobileNo,
//   noticeBalance,
//   maskNo,
//   aanNo,
//   clmName,
//   clmNo,
// }

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
        .leading-normal {
          line-height: normal;
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
  
      <span style="margin-top: 15px; display: block"> Sir/Madam, </span>
      <span
        >I on behalf of and under instructions from my client HDFC Bank Ltd.,
        having office amongst other places at
        <span class="bold"
          >HDFC Bank Ltd., Delhi Road, Model Town, Rohtak-124001,</span
        >
        do hereby issue the following notice to you:-</span
      >
  
      <div class="mt-5 flex flex-col gap-10">
        <div class="flex gap-5">
          <span>1. </span>
          <span
            >My client states that you had approached them for availing a Credit
            Card facility and in pursuance of the same and based on the details
            furnished in the credit card application and the documents furnished
            in support thereof, you were issued a
            <span class="bold"
              >Credit Card vide credit card no. ${data?.maskNo}(AAN# ${
  data?.aanNo
}).</span
            >
          </span>
        </div>
        <div class="flex gap-5">
          <span>2. </span>
          <div class="w-full">
            <span
              >My client states that you had availed the credit card facility and
              utilized the Credit Card for your benefit; however it is noted that
              despite purchases/cash withdrawals at various places using the
              credit card, you have failed to make payment towards the credit card
              dues.
            </span>
          </div>
        </div>
        <div class="flex gap-5">
          <span>3. </span>
          <span
            >My client states that after having utilized the credit card and
            having understood the terms & conditions governing such usage have
            continued to act in negligence by being irregular in remitting the
            card dues and have not even paid the minimum amount due.
          </span>
        </div>
        <div class="flex gap-5">
          <span>4. </span>
          <span
            >My client submits that they had on several occasions attempted to
            contact you and remind you of your credit card outstanding and the
            payment due dates, thereby to regularize your card account. It is
            noted that you did not intend to co-operate with my client but
            refrained from attending my client’s calls and further refused to meet
            up with my client</span
          >
        </div>
        <div class="flex gap-5">
          <span>5. </span>
          <span
            >My client states that the total amount outstanding in your credit
            card account above mentioned is
            <span class="bold">Rs. ${data?.noticeBalance}/-</span> as on date.
          </span>
        </div>
        <div class="flex gap-5">
          <span>6. </span>
          <span>
            My client states that you have willfully defaulted in making payments
            towards the transactions entered by you and have demonstrated an
            intention to delay the legitimate payments due to the bank which is
            evident from your above conduct. You are also fully aware of the fact
            that my client has been put to loss towards the transactions made by
            you by utilizing the credit card. You have thereby caused a wrongful
            loss to my client and your act amounts to criminal breach of trust.
          </span>
        </div>
      </div>
  
      <span class="mt-5"
        >Therefore, I on behalf of my client hereby call upon you forthwith to pay
        the credit card outstanding dues of
        <span class="bold">Rs.${data?.noticeBalance}/- as on ${
  data?.noticeDate
}</span> to my
        client immediately from the date of receipt of this notice failing which
        my client would be constrained to initiate appropriate legal proceedings
        against you for recovery of the above outstanding dues, holding you solely
        liable for all the costs and consequences arising thereof.</span
      >
  
      <span class="mt-5"
        >In the event you seek any clarifications or you intend for an amicable
        settlement, you may contact my client’s legal department at
        <span class="bold"
          >HDFC Bank Ltd., Delhi Road, Model Town, Rohtak-124001.</span
        >
      </span>
  
      <div class="flex flex-col mt-5">
        <span class="bold">Officer: ${data?.clmName}-${data?.clmNo} </span>
        <span class="bold"
          >For E-Mail Reply
          <Reply:span class="underline">
            Legal.DebtManagement@hdfcbank.com
          </Reply:span></span
        >
        <span class="bold leading-normal"
          >Note: In compliance to data security standards the credit card no. is
          being masked and full alternate account number has been used in this
          notice.</span
        >
        <div>
          <img src="https://i.ibb.co/cYbyzvm/sing.jpg" alt="sign" />
        </div>
        <span>(Arun Kumar Advocate)</span>
      </div>
    </body>
  </html>
  `;

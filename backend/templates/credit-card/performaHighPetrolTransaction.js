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
        .grid-cols-5 {
          grid-template-columns: repeat(5, minmax(0, 1fr));
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
  
        .notice {
          margin-top: 20px;
          text-align: center;
          text-decoration: underline;
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
        <span>«NOTICE_DATE»</span><br />
        <span>To,</span>
        <div style="border: 1px solid black; padding: 5px">
          <h3>${data?.custName || data?.customerName}</h3>
          <span class="bold">${data?.customerAddress} Mob No. ${
    data?.custMobileNo
  }</span>
        </div>
      </div>
  
      <h2 class="notice">LEGAL NOTICE</h2>
  
      <span class="mt-5 block bold underline"
        ><span class="bold">Subject: </span> Notice for unusual/excessive
        utilization of credit limit for your below mention credit Card
      </span>
  
      <div class="grid grid-cols-5 w-full" style="border: 1px solid black">
        <h3
          style="
            padding: 2px 5px;
            border-right: 1px solid black;
            border-bottom: 1px solid black;
          "
        >
          Type
        </h3>
        <h3
          style="
            padding: 2px 5px;
            border-right: 1px solid black;
            border-bottom: 1px solid black;
          "
        >
          Card/ Loan No.
        </h3>
        <h3
          style="
            padding: 2px 5px;
            border-right: 1px solid black;
            border-bottom: 1px solid black;
          "
        >
          AAN/ Loan No.
        </h3>
        <h3
          style="
            padding: 2px 5px;
            border-right: 1px solid black;
            border-bottom: 1px solid black;
          "
        >
          Customer Name
        </h3>
        <h3 style="padding: 2px 5px; border-bottom: 1px solid black">
          Outstanding
        </h3>
        <span style="padding: 2px 5px; border-right: 1px solid black"
          >Credit Card</span
        >
        <span style="padding: 2px 5px; border-right: 1px solid black"
          >${data?.maskNo}</span
        >
        <span style="padding: 2px 5px; border-right: 1px solid black"
          >${data?.aanNo}</span
        >
        <span style="padding: 2px 5px; border-right: 1px solid black"
          >${data?.custName}</span
        >
        <span style="padding: 2px 5px; border">${data?.noticeBalance}/-</span>
      </div>
  
      <br />
      <br />
      <span
        >I on behalf of and under instructions from my client HDFC Bank Ltd.,
        having office amongst other places at HDFC Bank Ltd. HDFC Bank Ltd. SCO -
        2 & 3, Phase -11, Above ICICI Bank, Mohali 160062 Punjab, do hereby issue
        the following notice to you:-
      </span>
  
      <div class="mt-5 flex flex-col gap-10">
        <div class="flex gap-5">
          <span>1. </span>
          <span
            >My client states that you had approached them for availing a Credit
            Card facility and in pursuance of the same and based on the details
            furnished in the credit card application and the documents furnished
            in support thereof, you were issued a Credit Card vide credit card no.
            <span class="bold">${data?.maskNo} (AAN ${data?.aanNo}).</span>
          </span>
        </div>
        <div class="flex gap-5">
          <span>2. </span>
          <div class="w-full">
            <span
              >My client further states that you had availed the credit card
              facility and utilized the Credit Card for your benefit; however it
              is noted that despite purchases/cash withdrawals at various places
              using the credit card, you have failed to make payment towards the
              credit card dues
            </span>
          </div>
        </div>
        <div class="flex gap-5">
          <span>3. </span>
          <span
            >My client also states that after having utilized the credit card and
            having understood the terms & conditions governing such usage, you
            have continued to act in negligence by being irregular in remitting
            the card dues and have not even paid the minimum amount due
          </span>
        </div>
        <div class="flex gap-5">
          <span>4. </span>
          <span
            >That as per agreement, bank has a right to run periodic check on the
            Credit Card to check various parameters. During one of such routine
            checks it was noticed that your credit card was used multiple times at
            a particular fuel station / wallet / cash point / rental which is
            found to be prima facie uncommon and atypical. This peculiar and
            continual pattern is not only unusual but also an excessive
            utilization observed on your card as compared to the previous usage.
          </span>
        </div>
        <div class="flex gap-5">
          <span>5. </span>
          <span>
            That my client came to know and observed that you have done several
            frivolous transactions from your credit card which otherwise not
            practically possible, therefore there is great suspicious that you
            have not used the Credit Card as per the terms and conditions of the
            Master Credit Card Agreement and violated the same
          </span>
        </div>
        <div class="flex gap-5">
          <span>6. </span>
          <span>
            That such unusual and excessive utilization on the card, is an
            infringement of the clauses of the Card Member Agreement. Please be
            noted, your act of misusing the credit card is in clear violation of
            the regulatory guidelines, and the bank has every right to take
            restrictive action on the credit card such as withdrawal of the
            features/benefits as well as a complete termination of the credit
            card.
          </span>
        </div>
        <div class="flex gap-5">
          <span>7. </span>
          <span>
            That my client submits that they had on several occasions attempted to
            contact you and remind you of your credit card outstanding and the
            payment due dates, thereby to regularize your card account and also
            remind you to use the credit card as per the agreed terms and
            conditions of the Master Credit Card Agreement. It is noted that you
            did not intend to co-operate with my client and refrained from
            attending my client’s calls. You, further refused to meet up with my
            client and completely refused to make the outstanding payments of the
            Credit Card hence you have no intention to pay the outstanding of the
            credit card facility availed by you.
          </span>
        </div>
        <div class="flex gap-5">
          <span>8. </span>
          <span>
            That such unusual and excessive utilization on the card, is an
            infringement of the clauses of the Card Member Agreement. Please be
            noted, your act of misusing the credit card is in clear violation of
            the regulatory guidelines, and the bank has every right to take
            restrictive action on the credit card such as withdrawal of the
            features/benefits as well as a complete termination of the credit
            card.
          </span>
        </div>
        <div class="flex gap-5">
          <span>9. </span>
          <span>
            That as on <span class="bold">${data?.noticeDate}</span> huge
            amount of <span class="bold">Rs. ${
              data?.noticeBalance
            }/-</span> is due and
            outstanding against you in relation to above mentioned credit card
            facility availed by you.
          </span>
        </div>
        <div class="grid grid-cols-5 w-full" style="border: 1px solid black">
          <h3
            style="
              padding: 2px 5px;
              border-right: 1px solid black;
              border-bottom: 1px solid black;
            "
          >
            Type
          </h3>
          <h3
            style="
              padding: 2px 5px;
              border-right: 1px solid black;
              border-bottom: 1px solid black;
            "
          >
            Card/ Loan No.
          </h3>
          <h3
            style="
              padding: 2px 5px;
              border-right: 1px solid black;
              border-bottom: 1px solid black;
            "
          >
            AAN/ Loan No.
          </h3>
          <h3
            style="
              padding: 2px 5px;
              border-right: 1px solid black;
              border-bottom: 1px solid black;
            "
          >
            Customer Name
          </h3>
          <h3 style="padding: 2px 5px; border-bottom: 1px solid black">
            Outstanding
          </h3>
          <span style="padding: 2px 5px; border-right: 1px solid black"
            >Credit Card</span
          >
          <span style="padding: 2px 5px; border-right: 1px solid black"
            >${data?.maskNo}</span
          >
          <span style="padding: 2px 5px; border-right: 1px solid black"
            >${data?.aanNo}</span
          >
          <span style="padding: 2px 5px; border-right: 1px solid black"
            >${data?.custName}</span
          >
          <span style="padding: 2px 5px; border">${data?.noticeBalance}/-</span>
        </div>
        <div class="flex gap-5">
          <span>10. </span>
          <span>
            That my client states that you have willfully defaulted in making
            payments towards the transactions entered by you and have demonstrated
            an intention to delay the legitimate payments due to the bank which is
            evident from your above conduct. You are also fully aware of the fact
            That my client has been put to loss towards the transactions made by
            you by utilizing the credit card. You have thereby caused a wrongful
            loss to my client and your act amounts to criminal breach of trust.
          </span>
        </div>
        <div class="flex gap-5">
          <span>11. </span>
          <span>
            That now it is apparent that you have an intention from the very
            beginning to cheat my client, because in pursuance to said guilty
            intention, you have applied for issuance of Credit Card and also
            assured that you will make the timely payments and use the credit card
            as per the terms and conditions, whereas on the basis of your
            assurances and promises, my client got convinced and induced to issue
            the credit card and now you have committed default in making the due
            payments of credit card as mentioned above and done the various
            suspicious transactions thus my client suffered the losses due to your
            guilty intention and by the act to breach the trust, however if my
            client was aware about your guilty intention earlier definitely they
            would not have issued the Credit card facility to you,
            <span class="bold"
              >therefore you have committed the offence of cheating, criminal
              breach of trust and criminal misappropriation by not making the due
              payment of Credit Card facility,</span
            >
            therefore caused wrongful loss to my client and wrongful gain to
            yourself, whereas you are liable for the punishment upto 7 years for
            committing the aforesaid criminal offences besides the civil liability
            to pay the outstanding dues of the credit card facility as mentioned
            above.
          </span>
        </div>
      </div>
  
      <br />
      <br />
      <span
        >Therefore, I on behalf of my client hereby call upon you forthwith to pay
        the credit card dues of <span class="bold">Rs.«NOTICE_BALANCE»/-</span> as
        total due and minimum due amount is
        <span class="bold">Rs.«Minimum_Dues»/-</span>(due as on
        <span class="bold">${data?.noticeDate}</span>) to my client within 7
        days from the date of receipt of this notice, failing which my client
        would be constrained to initiate appropriate legal proceedings including
        to register an FIR or to file a complaint for cheating, criminal breach of
        trust and criminal misappropriation, beside to initiate the recovery
        proceedings for recovery of the above outstanding dues against you and my
        client will also update your defaulted profile on CIBIL portal, whereas it
        is made clear that you will also solely responsible for the expenses
        incurred by my client for initiating any proceedings against you.</span
      >
  
      <br />
      <br />
      <span
        >It has been observed that a typical trend is showing in the said location
        where credit card is being misused at Petrol Pumps / Wallets / Cash Point
        / Rental for high value transactions indicating different modus being
        adopted by a few credit card holders for arranging cash from the said
        establishments. This activity also indicates somewhat a well planned and
        organized crime to cheat the banks by illegal use of credit card.
        Necessary action will also be taken in this regard.
      </span>
  
      <br />
      <br />
      <span
        >Please call <span class="bold">${data?.clmName}</span> for further
        clarification
        <span class="bold">(DID Number Kindly add Zero before Dailing)</span>.
      </span>
  
      <br />
      <br />
      <span class="bold"
        >Note: Copy of this notice retained in our office for future
        reference</span
      >
  
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

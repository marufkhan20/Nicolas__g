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
        <span class="bold" style="font-size: 16px">Through Email</span>
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
        ><span class="bold">Sub :- </span> Notice for cheating, criminal breach of
        trust and criminal misappropriation for not making the due payments in
        respect to Your HDFC Bank Credit Card
        <span class="bold">No: ${data?.maskCard} (AAN# ${
    data?.aan
  })</span> as well as
        pre-intimation regarding to take necessary action for Cancelation of Visa
        by informing your defaulted profile to Ministry of External Affairs and
        taking further necessary steps for impounding of the passport through
        Passport Authorities
      </span>
  
      <span style="margin-top: 15px; display: block"> Sir/Madam, </span>
      <span
        >I on behalf of and under instructions from my client HDFC Bank Ltd.,
        having office amongst other places at HDFC Bank Ltd. SCO - 2 & 3, Mandi
        Board Phase -11, Above ICICI Bank, Mohali 160062 Punjab, do hereby issue
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
            <span class="bold">${data?.maskCard} (AAN ${data?.aan}).</span>
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
            up with my client.
          </span>
        </div>
        <div class="flex gap-5">
          <span>5. </span>
          <span>
            My client states that the total amount outstanding in your credit card
            account above mentioned is
            <span class="bold">Rs.${data?.noticeBalance}/-.</span>
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
        <div class="flex gap-5">
          <span>7. </span>
          <span>
            That my client came to know that you now shifted to abroad and
            intentionally not making the payment of outstanding Credit Card dues,
            which is the clear violation of the master terms and conditions of the
            Credit Card.
          </span>
        </div>
        <div class="flex gap-5">
          <span>8. </span>
          <span>
            That now it is apparent that you have an intention from the very
            beginning to cheat my client, because in pursuance to said guilty
            intention, you have applied for issuance of Credit Card and also
            assured that you will make the timely payments, whereas on the basis
            of your assurances and promises, my client got convinced and induced
            to issue the credit card and now you have committed default in making
            the due payments of credit card, thus my client suffered the losses
            due to your guilty intention and by the act to breach the trust,
            however if my client was aware about your guilty intention earlier
            definitely they would not have issued the Credit card to you,
            therefore you have committed the offence of cheating, criminal breach
            of trust and criminal misappropriation by not making the due payment
            of Credit Card, therefore caused wrongful loss to my client and
            wrongful gain yourself, whereas you are liable for the punishment upto
            7 years for committing the aforesaid criminal offences besides the
            civil liability to pay the outstanding dues of the credit card.
          </span>
        </div>
      </div>
  
      <div class="mt-5">
        <span
          >Therefore, we on behalf of my client hereby call upon you forthwith to
          pay the credit card outstanding dues of Rs.${
            data?.noticeBalance
          }/- to my
          client within 7 days from the date of receipt of this notice failing
          which my client would be constrained to take following actions</span
        >
        <div class="mt-5 ml-10">
          <span
            >a) initiate appropriate legal proceedings including to register a FIR
            or to file a complaint for cheating, criminal breach of trust and
            criminal misappropriation, beside to initiate the recovery proceedings
            for recovery of the above outstanding dues against you and;</span
          >
          <br />
          <span
            >b) my client will also update your defaulted profile on CIBIL portal
            as per relevant guidelines and;</span
          >
          <br />
          <span
            >c) also take necessary action for cancelation of Visa by informing
            your defaulted profile to Ministry of External Affairs and to
            concerned embassy and;</span
          >
          <br />
          <span
            >d) also take further necessary steps for impounding of the passport
            through Passport Authorities
          </span>
        </div>
      </div>
  
      <br />
      <span
        >whereas it is made clear that you will also solely responsible for the
        expenses incurred by my client for initiating any proceedings against
        you</span
      >
  
      <br />
      <br />
      <span
        >Pls note that the amount paid shall be subject to reconciliation with the
        SOA and any interest or other sum/charges which is yet to be levied in
        terms of card agreement shall also be payable by you.</span
      >
  
      <br />
      <br />
      <span class="mt-5"
        >Please call Mr./ Ms. <span class="bold">${data?.clmName}-${
    data?.clmMob
  }</span> for
        further clarification.
        <span class="bold">(DID No. Kindly add Zero before Dialing).</span>
      </span>
  
      <div class="flex flex-col mt-5">
        <span class="leading-normal"> Yours faithfully, </span>
        <div>
          <img src="https://i.ibb.co/cYbyzvm/sing.jpg" alt="sign" />
        </div>
        <span>(Arun Kumar Advocate)</span>
      </div>
  
      <br />
      <span
        >Note: Copy of this notice retained in my office for future
        reference.</span
      >
    </body>
  </html>
  `;

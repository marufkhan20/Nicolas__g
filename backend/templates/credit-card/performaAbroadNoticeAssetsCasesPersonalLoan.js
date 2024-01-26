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
        ><span class="bold">Subject</span> :- Notice for cheating, criminal breach
        of trust and criminal misappropriation for not making the outstanding
        amount in respect <span class="bold">${
          data?.product
        }</span> bearing Loan Account
        No. <span class="bold">${data?.loanNo}</span> as well as pre-intimation
        regarding to take necessary action for Cancelation of Visa by informing
        your defaulted profile to Ministry of External Affairs and taking further
        necessary steps for impounding of the passport through Passport
        Authorities.
      </span>
  
      <span style="margin-top: 15px; display: block"> </span>
      <span
        >I on behalf of and under instructions from my client HDFC Bank Ltd.,
        having office amongst other places at HDFC Bank Ltd., 401-402, Model Town,
        Rohtak -124001 Haryana do hereby issue the following notice to you:-
      </span>
  
      <div class="mt-5 flex flex-col gap-10">
        <div class="flex gap-5">
          <span>1. </span>
          <span
            >That you approached my client for availing an
            <span class="bold">${
              data?.product
            }</span> facility and after understanding
            and accepting the terms and conditions of loan agreement by you, an
            Agreement was entered into between you and my client.
          </span>
        </div>
        <div class="flex gap-5">
          <span>2. </span>
          <div class="w-full">
            <span
              >That vide loan account no. <span class="bold">${
                data?.loanNo
              }</span>, the
              loan was duly disbursed to you, which you agreed to pay back along
              with agreed interest in monthly installments.
            </span>
          </div>
        </div>
        <div class="flex gap-5">
          <span>3. </span>
          <span
            >That you did not stick to the payment schedule as agreed and the
            cheques/standing instructions issued by you got dishonored regularly.
            Further my client submits that they had on several occasions attempted
            to contact you and remind you of your loan outstanding and the payment
            due dates, thereby to regularize your account. It is noted that you
            did not intend to co-operate with my client but refrained from
            attending my client’s calls and further refused to meet up with my
            client.
          </span>
        </div>
        <div class="flex gap-5">
          <span>4. </span>
          <span
            >My client states that as on today the total amount payable in
            <span class="bold">${
              data?.product
            }</span> account above mentioned is
            <span class="bold">Rs.${data?.noticeBalance}/-</span>.
          </span>
        </div>
        <div class="flex gap-5">
          <span>5. </span>
          <span>
            My client states that you have willfully defaulted in making payments
            towards the above-mentioned Loan Account and an intention to delay the
            legitimate payments due to the bank is evident from your conduct. You
            are also fully aware of the fact that my client has been put to loss
            as you did not make the payment of monthly installments intentionally.
            You have thereby caused a wrongful loss to my client and your act
            amounts to criminal breach of trust.
          </span>
        </div>
        <div class="flex gap-5">
          <span>6. </span>
          <span>
            That my client came to know that you now shifted to abroad and
            intentionally not making the payment of outstanding amount, which is
            the clear violation of Loan Agreement.
          </span>
        </div>
        <div class="flex gap-5">
          <span>7. </span>
          <span>
            That now it is apparent that you have an intention from the very
            beginning to cheat my client, because in pursuance to said guilty
            intention, you have applied for
            <span class="bold">${
              data?.product
            }</span> and also assured that you will
            make the timely payments, whereas on the basis of your assurances and
            promises, my client got convinced and induced to disburse
            <span class="bold">${
              data?.product
            }</span> and now you have committed default
            in making the due payments of the loan, thus my client suffered the
            losses due to your dishonest intentions and by the act to breach the
            trust, however if my client was aware about your dishonest intentions
            earlier, definitely they would not have disbursed
            <span class="bold">${
              data?.product
            }</span> to you. Therefore, you have
            committed the offence of cheating, criminal breach of trust and
            criminal misappropriation by not making the payment of Loan
            Installments, therefore caused wrongful loss to my client and wrongful
            gain yourself, whereas you are liable for the punishment up to 7 years
            for committing the aforesaid criminal offences besides the civil
            liability to pay the outstanding loan amount.
            <br />
  
            Therefore, I on behalf of my client hereby call upon you to pay the
            amount of <span class="bold">Rs.${data?.noticeBalance}/-</span> to
            my client within 7 days from the date of receipt of this notice
            failing which my client would be constrained to take following
            actions-
          </span>
        </div>
      </div>
  
      <br />
      <span
        >a) initiate appropriate legal proceedings including to register a FIR or
        to file a complaint for cheating, criminal breach of trust and criminal
        misappropriation, beside to initiate the recovery proceedings for recovery
        of the above outstanding amount against you and;
      </span>
      <br />
      <span
        >b) my client will also update your defaulted profile on CIBIL portal as
        per relevant guidelines and;
      </span>
      <br />
      <span
        >c) also take necessary action for cancelation of Visa by informing your
        defaulted profile to Ministry of External Affairs and to concerned embassy
        and;</span
      >
      <br />
      <span
        >d) also take further necessary steps for impounding of the passport
        through Passport Authorities</span
      >
  
      <br />
      <span class="mt-5"
        >whereas it is made clear that you will also solely responsible for the
        expenses incurred by my client for initiating any proceedings against you.
      </span>
  
      <br /><br /><span
        >Pls note that the amount paid shall be subject to reconciliation with the
        SOA and any interest or other sum/charges which is yet to be levied in
        terms of loan agreement shall also be payable by you.
      </span>
  
      <br /><br /><span
        >Please call Ms/ Mr.. <span class="bold">${
          data?.clmName
        }</span> at Mobile no.
        <span class="bold">${
          data?.clmMob
        }</span> for further clarification.</span
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

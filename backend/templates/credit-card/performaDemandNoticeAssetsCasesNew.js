module.exports = (data) => `
<!DOCTYPE html>
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
      ><span class="bold">Subject</span> :- Demand for Payment of Outstanding in
      respect to Your HDFC Bank <span class="bold">${data?.product}</span> vide
      agreement No. <span class="bold">${data?.loanNo}</span>.
    </span>

    <span style="margin-top: 15px; display: block"> Dear Sir/Madam, </span>
    <span
      >I, on behalf of, and under instructions from my client HDFC Bank Ltd.,
      having office amongst other places at HDFC BANK Ltd, 401, 402, Model Town
      Rohtak 124001 do hereby issue the following notice to you: -
    </span>

    <div class="mt-5 flex flex-col gap-10">
      <div class="flex gap-5">
        <span>1. </span>
        <span
          >My client states that you had approached them for
          <span class="bold">${
            data?.product
          }</span> facility and in pursuance of the
          same and based on the details furnished in the application and the
          documents furnished in support thereof, you were issued a
          <span class="bold">${data?.product}</span> vide Agreement bearing No.
          <span class="bold">${data?.loanNo}</span>.
        </span>
      </div>
      <div class="flex gap-5">
        <span>2. </span>
        <div class="w-full">
          <span>
            My client states that you had availed the
            <span class="bold">${
              data?.product
            }</span> facility for your benefit; but
            you have failed to make payment towards the installment’s dues as
            per schedule.
          </span>
        </div>
      </div>
      <div class="flex gap-5">
        <span>3. </span>
        <span
          >My client states that after having utilized the abovesaid loan and
          having understood the terms & conditions governing such usage have
          continued to act in negligence by being irregular in remitting the
          installments dues and have not even paid the amount due.
        </span>
      </div>
      <div class="flex gap-5">
        <span>4. </span>
        <span
          >My client submits that they had on several occasions attempted to
          contact you and remind you of your payment outstanding and the payment
          due dates. It is noted that you did not intend to co-operate with my
          client but refrained from attending my client’s calls and further
          refused to meet up with my client.</span
        >
      </div>
      <div class="flex gap-5">
        <span>5. </span>
        <span>
          My client states that the amount outstanding is
          <span class="bold">Rs. ${data?.noticeBalance}/-</span> as on
          <span class="bold">${data?.noticeDate}</span>.
        </span>
      </div>
      <div class="flex gap-5">
        <span>6. </span>
        <span>
          My client states that you have willfully defaulted in making payments
          and have demonstrated an intention to delay the legitimate payments
          due to the bank which is evident from your above conduct. You are also
          fully aware of the fact that my client has been put to loss and you
          have, thereby, caused a wrongful loss to my client and your act
          amounts to criminal breach of trust.
        </span>
      </div>
    </div>

    <br />
    <span class="mt-5"
      >Therefore, I on behalf of my client, hereby call upon you to pay the
      outstanding dues as on <span class="bold">${data?.noticeDate}</span> of
      <span class="bold">Rs. ${data?.noticeBalance}/-</span> to my client
      immediately, from the date of receipt of this notice, failing which my
      client would be constrained to initiate appropriate legal proceedings
      against you for recovery of the above outstanding dues, holding you solely
      liable for all the costs and consequences arising thereof.
    </span>

    <br /><br /><span
      >In the event you seek any clarifications or you intend for an amicable
      settlement, you may contact my client’s officer:
      <span class="bold">${data?.clmName}</span> -
      <span class="bold">${data?.clmMob}</span>.</span
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

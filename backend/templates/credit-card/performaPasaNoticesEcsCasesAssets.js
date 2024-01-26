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
        ><span class="bold">Subject</span> :- Legal Demand Notice u/s 25 of the
        Payment and Settlement Systems Act 2007(ACT) in respect to your HDFC Bank
        <span class="bold">${data?.product}</span> bearing Loan Account No.
        <span class="bold">${data?.loanNo}</span> amounting to
        <span class="bold">Rs. «LOAN_AMT»/-</span>.
      </span>
  
      <span style="margin-top: 15px; display: block"> Dear Sir/Madam, </span>
      <span
        >Under the instruction, authority and on behalf of my client HDFC BANK
        LTD. a Banking Company registered under the Companies Act, 1956 having its
        registered office at HDFC Bank House, Senapati Bapat Marg, Lower Parel,
        Mumbai and having its one of the Branch office at Model Town, Rohtak, I
        Arun Kumar, Advocate do hereby serve upon you the following legal demand
        notice:-
      </span>
  
      <div class="mt-5 flex flex-col gap-10">
        <div class="flex gap-5">
          <span>1. </span>
          <span
            >That you the Noticee has availed a
            <span class="bold">${
              data?.product
            }</span> from my client i.e. HDFC Bank Ltd.
            vide Loan Agreement No. ${data?.loanNo} amounting to
            <span class="bold">Rs. «LOAN_AMT»/-</span>. As per the terms and
            conditions of the aforesaid loan agreement and as per repayment
            schedule you the Noticee are under obligation to repay the amount of
            the loan along with interest in
            <span class="bold">${
              data?.tenture
            }</span> monthly installments of Rs
            <span class="bold">«EMI_AMT»/-.</span>
          </span>
        </div>
        <div class="flex gap-5">
          <span>2. </span>
          <div class="w-full">
            <span
              >That towards the discharge of your legal enforceable debt i.e. the
              payment of amount of your loan’s monthly installments, you the
              Noticee, had agreed to pay the same to my client through Direct
              Debit Facility and in this regard you had issued instruction to my
              client to debit a sum of
              <span class="bold">Rs. «ECSAmount»/-</span> from your Bank Account
              No. <span class="bold">«CUSTOMER_ACCOUNT_NUMBER»</span> maintained
              by you with, <span class="bold">«BANK__NAME», ${
                data?.branchAdd
              }</span> in
              every month.
            </span>
          </div>
        </div>
        <div class="flex gap-5">
          <span>3. </span>
          <span
            >That in view of your above stated instruction vide ECS No.
            <span class="bold">«ECS_number»</span> my client executed the Direct
            Debit Facility for an amount of
            <span class="bold">Rs «ECSAmount»/-</span> towards the amount of ONE
            Installment in your above stated loan facility and the same was
            returned dishonored on
            <span class="bold">«BOUNCED_DATE__REPRESENTATION»</span> with remarks
            <span class="bold">«BOUNCING_REASON»</span> and my client as per the
            terms and conditions of the loan agreement as well as SI Mandate again
            executed the said facility for an amount
            <span class="bold">Rs. «ECSAmount»/-</span> of the aforesaid
            installment and the same was returned unpaid and dishonored on
            <span class="bold"> «BOUNCED_DATE__REPRESENTATION» </span> with
            remarks <span class="bold">«BOUNCING_REASON»</span> vide ECS No.
            <span class="bold">«ECS_number».</span>
          </span>
        </div>
        <div class="flex gap-5">
          <span>4. </span>
          <span
            >That it is pertinent to bring to your notice that dishonor of the
            Direct Debit Transaction i.e. Dishonour of electronic funds transfer
            as per Section 25 of the Act and non-payment in response to this
            Notice shall constitute a commission of offences punishable under the
            Act with imprisonment for a term, which may extent to two (2) years,
            or with fine which may extend to twice the amount of the electronic
            funds transfer, or with both. In addition to the punishment, The
            Courts are also empowered to grant compensation, at the cost of the
            defaulter (i.e. you the Noticee herein) to the complainant (i.e. my
            client) towards the interest, expenditure and costs incurred by the
            Complainant in pursuing the Complaint under the Act.</span
          >
        </div>
        <div class="flex gap-5">
          <span>5. </span>
          <span>
            That vide present demand notice, I on behalf of my client hereby call
            upon you the Noticee to pay and liquidate aforesaid amount of the
            dishonoured transactions for Direct Debit of
            <span class="bold">Rs. «ECSAmount»/-</span> along with cost of the
            notice charges without any delay and demur but not later than 15
            (fifteen days) from the receipt of this Notice, to my client, failing
            which, I have strict instructions from my client to initiate
            appropriate legal proceedings against you the Noticee without any
            further reference and at the costs, risk and consequence of which you
            Noticee shall be solely liable.
          </span>
        </div>
        <div class="flex gap-5">
          <span>6. </span>
          <span>
            Please note that issuance of the present Notice does not constitute
            waiver of my client’s other legal rights to initiate further/other
            legal proceedings, apart from already stated herein above for the
            recovery of the above said amount and the Notice is being sent without
            prejudice to my Client’s right to enforce the other terms and
            conditions of the Agreement and any other documents executed by you
            with my client.
          </span>
        </div>
        <div class="flex gap-5">
          <span>7. </span>
          <span>
            copy of the present Notice is retained by me for further reference and
            record. Place: Rohtak.
          </span>
        </div>
      </div>
  
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

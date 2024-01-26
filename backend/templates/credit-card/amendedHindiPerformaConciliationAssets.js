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
        .notice {
          text-align: center;
          text-decoration: underline;
          margin: 20px 0;
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
  
      <h3 class="notice">नोटिस समझौता कैम्प</h3>
  
      <span class="mt-5 block"
        ><span class="bold">विषयः </span> आपके द्वारा एच0डी0एफ0सी0 बैंक से लिए गए
        ऋण खाता संख्या <span class="bold">${
          data?.loanNo
        }</span> की बकाया देनदारी के
        समझौता बारे।
      </span>
  
      <br />
      <span
        >आप ने हमारे बैंक से लोन लिया था तथा इस बारे आप ने बैंक के साथ एक संविदा,
        <span class="bold">(Contract)</span> बजरिए ऋण खाता संख्या
        <span class="bold">${
          data?.loanNo
        }</span> निश्पादित (Execute) किया था। उपरोक्त
        ऋण खाता संविदा <span class="bold">(Contract)</span> की शर्तों के मुताबिक,
        आपको मासिक किश्तें देनी थी।
      </span>
  
      <div class="mt-5 flex flex-col gap-10">
        <div class="flex gap-5">
          <span>1. </span>
          <span
            >उपरोक्त ऋण खाता संविदा <span class="bold">(Contract)</span> की शर्तों
            के मुताबिक, आपको अपनी मासिक किश्त का भुगतान नियमित रूप से बैंक को करना
            था। लेकिन आप अपनी किश्तें समय पर अदा नही कर रहे थे जिसकी वजह से अब
            आपको लोन संविदा कि शर्तो के नियमानुसार उपरोक्त लोन में बकाया राशि
            <span class="bold">${data?.totalDue}/- as on «OVERDUE_DATE»</span>
            है जिसे आप पैनल्टी तथा ब्याज
            <span class="bold"
              >(as per terms and conditions of Loan agreement)</span
            >
            के साथ देने के लिए बाध्य है। उपरोक्त देनदारी का भुगतान करने में आप
            पूर्णतया असमर्थ रहे हैं। जिस बारे हमारे बैंक के अधिकारी व कर्मचारी
            आपसे कई बार व्यकितगत भेंट कर चुके हैं तथा अलग तरीको के द्वारा सुचित कर
            चुके है परन्तु सब निष्फल रहा।
          </span>
        </div>
        <div class="flex gap-5">
          <span>2. </span>
          <div class="w-full">
            <span
              >आपको यह जानकर खुशी होगी कि आपके द्वारा लिए गए उपरोक्त ऋण के निपटारे
              के लिए एच0डी0एफ0सी0 बैंक लिमिटिड के द्वारा दिनांक
              <span class="bold">${data?.campDate}</span> समय
              <span class="bold">11:00 TO 04:00</span>, स्थान
              <span class="bold"
                >ARUN KUMAR, ADVOCATE, CHAMBER NO. 113, DISTT. COURT ROHTAK
                HARYANA- 124001</span
              >
              पर ऋण समझौता कैम्प का आयोजन किया जा रहा है। तथा श्री
              <span class="bold">LALIT SHARMA</span> को उपरोक्त मामला निपटाने के
              लिए सुलहकर्ता मनोनीत किया जा रहा है। जिसमें आपके द्वारा ऋण की बकाया
              देनदारी बारे, एकमुश्त राशि जमा करवाकर इस अवसर का लाभ उठा सकते हैं।
              जिसमें आपको बैंक के सक्षम अधिकारी की अनुमति से ब्याज व पैनल्टी में
              छूट का फायदा भी मिल सकता है।
            </span>
          </div>
        </div>
        <div class="flex gap-5">
          <span>3. </span>
          <span
            >डिफाल्ट के कारण आप सबका नाम उपरोक्त ऋण अनुबंध खाता के सन्दर्भ में
            <span class="bold"
              >Credit Information Bureau (India) Ltd. (CIBIL)</span
            >
            में आ रहा है जिसके कारण आप भविष्य में किसी भी बैंक या अन्य वितिय
            संस्थान से किसी भी प्रकार का ऋण प्राप्त नही कर सकेंगे।
          </span>
        </div>
        <div class="flex gap-5">
          <span></span>
          <span
            >अतः यदि आप बैंक की इस पहल पर अपना मामला सुलह/समझौते के द्वारा
            समाप्त/निपटारा करना चाहते है तो आप निहित समय पर दिए गए स्थान पर
            पहुंचे। यदि आप इस अवसर का लाभ उठाने में असमर्थ रहते हे तो उस स्थिति
            में बैंक को आपके खिलाफ सक्षम अदालत में आपके हर्जे व खर्चे पर कानूनी
            कार्यवाही प्रारम्भ करने के लिए मजबूर होना पड़ेगा।
          </span>
        </div>
      </div>
  
      <span class="mt-5"></span>
        नोटः अतः इस अवसर का लाभ उठायें तथा किसी भी अदालती कार्यवाही से पूर्व ही
        अपना ऋण सम्बन्धी मामला निपटाएं। अपने लोन से सम्बन्धित किसी भी प्रकार की
        जानकारी के लिए आप श्री <span class="bold">«CLM_NAME»</span> प्रबन्धक लीगल से सम्पर्क कर सकते है।
        जिनका मोबाईल न. <span class="bold">${data?.clmMob}</span> है।
      </span>
  
      <br>
      <br>
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

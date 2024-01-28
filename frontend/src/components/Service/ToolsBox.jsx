const ToolsBox = ({ toolBoxRef, service }) => {
  return (
    <section className="py-[60px] md:py-[90px] xl:py-[120px] bg-primary-light text-white px-5 sm:px-0">
      <div
        className="sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[35%] mx-auto text-center"
        ref={toolBoxRef}
      >
        {service?.sectionTitle && (
          <h2 className="text-[30px] sm:text-[70px] md:text-[120px] font-sans leading-none">
            {service?.sectionTitle}
          </h2>
        )}
        {service?.sectionSubTitle && (
          <div className="relative flex justify-center">
            <h2 className="text-[30px] sm:text-[70px] md:text-[120px] absolute top-0 left-[50%] translate-x-[-50%] mx-auto text-primary italic">
              {service?.sectionSubTitle}
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[280px] h-[50px] sm:w-[460px] sm:h-[100px] md:w-[520px] md:h-[200px]"
              viewBox="0 0 1061.378 214.023"
              style={{ opacity: 1 }}
            >
              <path
                id="Path_8"
                data-name="Path 8"
                d="M430.624,2084.318c-10.27-15.973-205.475,23.228-205.475,76.272S493.3,2254.033,757.7,2255.143s537.089-29.366,526.521-94.552-211.73-117.442-526.521-117.442-430.137,24.064-472.276,33.507"
                transform="translate(-224.149 -2042.149)"
                fill="none"
                stroke="#67ebce"
                strokeLinecap="round"
                strokeWidth="5"
                style={{ strokeDashoffset: 0, strokeDasharray: "none" }}
              ></path>
            </svg>
          </div>
        )}
        {service?.sectionDescription && (
          <p className="text-lg font-sans mt-5 md:mt-0">
            {service?.sectionDescription}
          </p>
        )}

        {service?.sectionImages && (
          <div className="flex gap-10 justify-center flex-wrap items-center mt-[120px]">
            {service?.sectionImages?.map((image) => (
              <div key={image}>
                <img className="w-24" src={image} alt="tool" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ToolsBox;

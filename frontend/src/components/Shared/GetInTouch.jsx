"use client";
import useAnimation from "@/hooks/useAnimation";
import Link from "next/link";

const GetInTouch = () => {
  const sectionRef = useAnimation();
  return (
    <section className="py-[70px] sm:py-[120px] md:py-[160px] lg:py-[200px] xl:py-[250px] bg-primary font-sans px-5 sm:px-0">
      <div
        className="container flex items-center justify-center flex-col text-center getInTouch"
        ref={sectionRef}
      >
        <h2 className="text-[35px] sm:text-[70px] md:text-[84px] leading-[40px] sm:leading-[60px] md:leading-[80px] ready">
          Ready to make the <br />
          Leap?
        </h2>
        <Link href="#" className="relative">
          <h2 className="text-[30px] sm:text-[64px] md:text-[74px] absolute top-0 left-14 mx-auto text-white">
            Get in touch
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[280px] h-[50px] sm:w-[460px] sm:h-[100px] md:w-[520px] md:h-[120px]"
            viewBox="0 0 1061.378 214.023"
            style={{ opacity: 1 }}
          >
            <path
              id="Path_8"
              data-name="Path 8"
              d="M430.624,2084.318c-10.27-15.973-205.475,23.228-205.475,76.272S493.3,2254.033,757.7,2255.143s537.089-29.366,526.521-94.552-211.73-117.442-526.521-117.442-430.137,24.064-472.276,33.507"
              transform="translate(-224.149 -2042.149)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="5"
              style={{ strokeDashoffset: 0, strokeDasharray: "none" }}
            ></path>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default GetInTouch;

"use client";
import gsap from "gsap";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    // GSAP animation code
    gsap.from(".hero", { opacity: 0, duration: 1, y: 150 });
    gsap.to(".hero", { opacity: 1, duration: 1, y: 0 });
  }, []);
  return (
    <header className="relative min-h-screen py-20 flex flex-col justify-center items-center px-5">
      <div className="shapes">
        <figure
          className="name-shape"
          data-mobile={{
            position: {
              x: "40%",
              y: "5%",
              rotation: "",
              scale: 0.4,
            },
          }}
          style={{
            top: "50%",
            left: "50%",
            transform: "translate3d(-50%,-50%,0) rotate(100deg)",
            width: "1500px",
            height: "1500px",
          }}
        >
          <video
            width="1500"
            height="1500"
            src="https://omen.studio/wp-content/uploads/2022/03/blob_2_2.mp4"
            playsInline
            muted
            loop
          ></video>
        </figure>
      </div>

      <div className="text-center flex flex-col items-center hero">
        <h2 className="text-[60px] sm:text-[80px] lg:text-[120px] xl:text-[140px] 2xl:text-[170px] leading-[80px] lg:leading-[120px] xl:leading-[140px] 2xl:leading-[170px]">
          Crafting impactful
        </h2>
        <div className="relative">
          <h2 className="text-[50px] sm:text-[80px] lg:text-[120px] xl:text-[140px] 2xl:text-[170px] absolute top-0 left-14 mx-auto">
            experiences
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1061.378 214.023"
            style={{ opacity: 1 }}
            className="w-[370px] sm:w-[600px] lg:w-[800px] xl:w-[900px] 2xl:w-[1100px] h-[80px] sm:h-[140px] lg:h-[210px] xl:h-[240px] 2xl:h-[280px]"
          >
            <path
              id="Path_8"
              data-name="Path 8"
              d="M430.624,2084.318c-10.27-15.973-205.475,23.228-205.475,76.272S493.3,2254.033,757.7,2255.143s537.089-29.366,526.521-94.552-211.73-117.442-526.521-117.442-430.137,24.064-472.276,33.507"
              transform="translate(-224.149 -2042.149)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="2"
              style={{ strokeDashoffset: 0, strokeDasharray: "none" }}
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Hero;

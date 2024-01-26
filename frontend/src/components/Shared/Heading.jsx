"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Heading = ({ title }) => {
  useEffect(() => {
    // Use ScrollTrigger here
    gsap.to(".heading", {
      opacity: 0,
      duration: 2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".heading",
        start: "top center", // Adjust as needed
        onEnter: () => {
          gsap.to(".heading", {
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
          });
        },
        scrub: 1, // Smoothly animates the property as you scroll
        // once: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <div className="text-center flex flex-col justify-center items-center gap-1 heading">
      <h2 className="text-[30px] font-light">{title}</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width=""
        height="6.238"
        viewBox="0 0 200.346 6.238"
        style={{ opacity: 1 }}
      >
        <path
          id="Path_79"
          data-name="Path 79"
          d="M0,8.852C175.35.07,200,7.7,200,7.7"
          transform="translate(0.05 -3.613)"
          fill="none"
          stroke="#212121"
          strokeWidth="2"
          style={{ strokeDashoffset: 0, strokeDasharray: "none" }}
        />
      </svg>
    </div>
  );
};

export default Heading;

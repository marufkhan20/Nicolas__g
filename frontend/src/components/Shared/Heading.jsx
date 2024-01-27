"use client";
import useAnimation from "@/hooks/useAnimation";

const Heading = ({ title, className }) => {
  const sectionRef = useAnimation(`.heading-${className}`);
  return (
    <div
      className={`text-center flex flex-col justify-center items-center gap-1 heading-${className}`}
      ref={sectionRef}
    >
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

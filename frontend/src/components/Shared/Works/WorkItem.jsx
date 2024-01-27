"use client";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";

const WorkItem = ({ image, subTitle, title, className }) => {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      x: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      x: -500,
      ease: "power4.out",
    });
  };

  useEffect(() => {
    if (intersection && intersection.intersectionRatio < 0.2) {
      fadeOut(sectionRef.current);
    } else {
      fadeIn(sectionRef.current);
    }
  }, [intersection]);
  return (
    <Link
      ref={sectionRef}
      href="#"
      className={`bg-blur work-item translate-x-[-150%] ${className}`}
    >
      <div>
        <img src={`/images/works/${image}`} alt="work" className="w-full" />
      </div>
      <div className="px-6 pt-3 pb-9">
        <h4 className="font-normal text-lg font-sans">{subTitle}</h4>
        <h2 className="text-[30px] sm:text-[35px] md:text-[45px] font-sans">
          {title}
        </h2>
        <ul className="text-lg md:text-[22px] flex flex-wrap items-center gap-3 mt-3">
          <li className="flex items-center gap-5">
            <Link href="#">Branding</Link>
            <img src="/images/border.svg" alt="" />
          </li>
          <li className="flex items-center gap-5">
            <Link href="#">Interior design</Link>
            <img src="/images/border.svg" alt="" />
          </li>
          <li className="flex items-center gap-5">
            <Link href="#">UI/UX</Link>
            <img src="/images/border.svg" alt="" />
          </li>
          <li>
            <Link href="#">Development</Link>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default WorkItem;

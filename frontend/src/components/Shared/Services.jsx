"use client";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import Heading from "./Heading";

const Services = () => {
  // const sectionRef = useAnimation(".services");
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: "0",
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: 100,
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
    <section className="py-[40px] md:py-[70px] xl:py-[100px]">
      <div className="container">
        <Heading title="Your partner in" className="service" />

        <div
          className="mt-[100px] flex flex-col gap-6 sm:gap-10 md:gap-14 lg:gap-20 items-center services"
          ref={sectionRef}
        >
          <Link
            href="#"
            className="text-[45px] sm:text-[60px] md:text-[70px] lg:text-[84px]"
          >
            Branding
          </Link>
          <Link
            href="#"
            className="text-[45px] sm:text-[60px] md:text-[70px] lg:text-[84px]"
          >
            UX/UI Design
          </Link>
          <Link
            href="#"
            className="text-[45px] sm:text-[60px] md:text-[70px] lg:text-[84px]"
          >
            Development
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

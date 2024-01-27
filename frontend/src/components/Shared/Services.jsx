"use client";
import useAnimation from "@/hooks/useAnimation";
import Link from "next/link";
import Heading from "./Heading";

const Services = () => {
  const sectionRef = useAnimation(".services");
  return (
    <section className="py-[40px] md:py-[70px] xl:py-[100px]">
      <div className="container">
        <Heading title="Your partner in" className="services" />

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

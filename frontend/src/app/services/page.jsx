"use client";
import Services from "@/components/Services";
import GetInTouch from "@/components/Shared/GetInTouch";
import useAnimation from "@/hooks/useAnimation";
import gsap from "gsap";
import { useEffect } from "react";

const ServicesPage = () => {
  useEffect(() => {
    // GSAP animation code
    gsap.from(".services-hero", { opacity: 0, duration: 1, y: 150 });
    gsap.to(".services-hero", { opacity: 1, duration: 1, y: 0 });
  }, []);

  const sectionRef = useAnimation();
  return (
    <main>
      <section className="pt-[180px] pb-[100px] sm:pt-[350px] lg:pb-[250px] px-5 sm:px-0">
        <div className="container services-hero">
          <div>
            <h2 className="text-[45px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[100px]">
              <span className="font-sans">What we do for you</span> for you
            </h2>
          </div>
        </div>
      </section>
      <section ref={sectionRef}>
        <img src="/images/services-banner.jpg" alt="services banner" />
      </section>

      <Services />
      <GetInTouch />
    </main>
  );
};

export default ServicesPage;

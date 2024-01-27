"use client";
import GetInTouch from "@/components/Shared/GetInTouch";
import Services from "@/components/Shared/Services";
import Works from "@/components/Shared/Works";
import useAnimation from "@/hooks/useAnimation";
import gsap from "gsap";
import { useEffect } from "react";

const WorksPage = () => {
  useEffect(() => {
    // GSAP animation code
    gsap.from(".works-hero", { opacity: 0, duration: 1, y: 150 });
    gsap.to(".works-hero", { opacity: 1, duration: 1, y: 0 });
  }, []);

  const sectionRef = useAnimation();
  return (
    <main>
      <section className="pt-[180px] pb-[150px] sm:pt-[350px] lg:pb-[250px] px-5 sm:px-0">
        <div className="container grid md:grid-cols-2 items-center justify-between gap-5 flex-wrap works-hero">
          <div>
            <h2 className="text-[45px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[100px]">
              <span className="font-sans">Our</span> Cases
            </h2>
          </div>
          <p className="font-sans text-lg">
            This is where we showcase our finest accomplishments and success
            stories. Each case is a testament to our passion, expertise, and
            unwavering commitment to delivering exceptional results.
          </p>
        </div>
      </section>
      <section ref={sectionRef}>
        <img src="/images/works-banner.jpg" alt="work banner" />
      </section>

      <Works title={false} />
      <Services />
      <GetInTouch />
    </main>
  );
};

export default WorksPage;

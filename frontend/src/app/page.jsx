"use client";
import CallToAction from "../components/Home/CallToAction";
import Companies from "../components/Home/Companies";
import Hero from "../components/Home/Hero";
import GetInTouch from "../components/Shared/GetInTouch";
import Services from "../components/Shared/Services";
import Works from "../components/Shared/Works";
import useAnimation from "../hooks/useAnimation";

const Home = () => {
  const sectionRef = useAnimation(".hero-description");
  return (
    <main>
      <Hero />

      <div
        className="container hero-description py-[40px] md:py-[70px] xl:py-[100px] md:w-[60%] 2xl:w-[40%] mx-auto text-center px-5"
        ref={sectionRef}
      >
        <p>
          We are a{" "}
          <span className="font-bold">
            strategic design and development studio
          </span>
          , crafting exceptional brands and digital experiences for ambitious
          organisations. At the intersection of{" "}
          <span className="font-bold">strategy</span>,{" "}
          <span className="font-bold">technology</span>, and
          <span className="font-bold">creativity</span>, we help businesses
          stand out and achieve their full potential.
        </p>
      </div>

      <Services />
      <Works />
      <CallToAction />
      <GetInTouch />
      <Companies />
    </main>
  );
};

export default Home;

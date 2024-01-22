import CallToAction from "@/components/Home/CallToAction";
import Companies from "@/components/Home/Companies";
import GetInTouch from "@/components/Home/GetInTouch";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Works from "@/components/Home/Works";

const Home = () => {
  return (
    <main>
      <Hero />

      <div className="container py-[40px] md:py-[70px] xl:py-[100px] md:w-[60%] 2xl:w-[40%] mx-auto text-center px-5">
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

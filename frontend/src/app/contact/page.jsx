"use client";
import Button from "@/components/ui/Button";
import useAnimation from "@/hooks/useAnimation";
import gsap from "gsap";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    // GSAP animation code
    gsap.from(".contact-hero", { opacity: 0, duration: 1, y: 150 });
    gsap.to(".contact-hero", { opacity: 1, duration: 1, y: 0 });
  }, []);

  const sectionRef = useAnimation(0.1);
  const formRef = useAnimation();
  const aboutRef = useAnimation();
  return (
    <main>
      <section className="pt-[180px] pb-[150px] sm:pt-[350px] pb:pb-[250px]">
        <div className="container flex items-center justify-center flex-col contact-hero">
          <h2 className="text-[45px] sm:text-[70px] md:text-[120px] leading-[40px] sm:leading-[60px] md:leading-[100px] font-sans">
            Get
          </h2>
          <div className="relative">
            <h2 className="text-[40px] sm:text-[64px] md:text-[120px] absolute top-0 left-14 mx-auto">
              in touch
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[240px] h-[70px] sm:w-[370px] sm:h-[100px] md:w-[550px] md:h-[180px]"
              viewBox="0 0 1061.378 214.023"
              style={{ opacity: 1 }}
            >
              <path
                id="Path_8"
                data-name="Path 8"
                d="M430.624,2084.318c-10.27-15.973-205.475,23.228-205.475,76.272S493.3,2254.033,757.7,2255.143s537.089-29.366,526.521-94.552-211.73-117.442-526.521-117.442-430.137,24.064-472.276,33.507"
                transform="translate(-224.149 -2042.149)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="5"
                style={{ strokeDashoffset: 0, strokeDasharray: "none" }}
              ></path>
            </svg>
          </div>
        </div>
      </section>

      <section className="font-sans px-5 sm:px-0">
        <div
          className="container bg-primary-light grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-16 py-20"
          ref={sectionRef}
        >
          <div>
            <h2 className="text-[35px] sm:text-[65px] mb-8">Address</h2>
            <div className="text-[25px] font-normal flex flex-col">
              <h4 className="font-bold">Atelier15 coworking</h4>
              <span>Rue Gheude 19,</span>
              <span>1070 Anderlecht</span>
              <span>Belgium</span>
            </div>
          </div>
          <div>
            <h2 className="text-[35px] sm:text-[65px] mb-8">E-mail</h2>
            <div className="text-[25px] font-normal flex flex-col">
              <h4 className="font-bold">Work with us</h4>
              <span>custom2@gmail.com</span>
              <h4 className="font-bold mt-5">Join the team</h4>
              <span>team@gmail.com</span>
            </div>
          </div>
          <div>
            <h2 className="text-[35px] sm:text-[65px] mb-8">Phone</h2>
            <div className="text-[25px] font-normal flex flex-col">
              <h4 className="font-bold">Dutch speaking?</h4>
              <span>+32 479 261 532</span>
              <h4 className="font-bold mt-5">French speaking?</h4>
              <span>+32 479 261 532</span>
              <h4 className="font-bold mt-5">English speaking?</h4>
              <span>+32 479 261 532</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-[180px] px-5 sm:px-0 sm:w-[70%] md:w-[50%] mx-auto font-sans"
        ref={formRef}
      >
        <h2 className="text-[40px] md:text-[50px] xl:text-[60px] 2xl:text-[75px] text-center">
          The easy way to reach us
        </h2>
        <form action="" className="mt-20 flex flex-col gap-16">
          <div className="grid sm:grid-cols-2 gap-4 gap-y-20">
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="text-[25px] font-semibold">
                Your name
              </label>
              <input
                className="bg-transparent text-[30px] border-b-2 border-secondary outline-none"
                type="text"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="lastName" className="text-[25px] font-semibold">
                Your last name
              </label>
              <input
                className="bg-transparent text-[30px] border-b-2 border-secondary outline-none"
                type="text"
                id="lastName"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-[25px] font-semibold">
                E-mail
              </label>
              <input
                className="bg-transparent text-[30px] border-b-2 border-secondary outline-none"
                type="email"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="Phone" className="text-[25px] font-semibold">
                Phone
              </label>
              <input
                className="bg-transparent text-[30px] border-b-2 border-secondary outline-none"
                type="text"
                id="Phone"
              />
            </div>
          </div>

          <div>
            <h3 htmlFor="name" className="text-[25px] font-semibold">
              Reason of contact
            </h3>
            <div className="mt-6 flex items-center gap-4 flex-wrap">
              <button className="text-lg px-6 py-2 rounded-full border border-secondary">
                I have a question
              </button>
              <button className="text-lg px-6 py-2 rounded-full border border-secondary">
                I need a quote
              </button>
              <button className="text-lg px-6 py-2 rounded-full border border-secondary">
                {`Let's`} have a drink
              </button>
            </div>
          </div>

          <div>
            <Button>Send</Button>
          </div>
        </form>
      </section>

      <section className="font-sans pb-20 px-5 sm:px-0">
        <div className="container" ref={aboutRef}>
          <div
            className={`flex justify-between flex-col-reverse lg:flex-row
          gap-10 items-center`}
          >
            <div className="w-full lg:w-[40%]">
              <h2 className="text-[40px] sm:text-[60px] sm:leading-[60px] lg:leading-[70px] lg:text-[70px] xl:text-[90px] xl:leading-[90px] mb-6">
                More about omen.studio
              </h2>
              <p className="text-lg mb-16">
                Get to know the team behind the screens – because finding a team
                that not only meets your criteria, but also clicks with you on a
                personal level, is essential to the success of your projects.
                We’re in for the long haul so we believe that chemistry is just
                as important as qualifications.
              </p>
              <Button>Discover</Button>
            </div>
            <div className="w-full lg:w-[40%]">
              <img
                src={`/images/contact.png`}
                className="rounded-tl-full rounded-tr-full"
                alt="service"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

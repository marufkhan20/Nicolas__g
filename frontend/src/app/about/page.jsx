"use client";
import GetInTouch from "@/components/Shared/GetInTouch";
import Heading from "@/components/Shared/Heading";
import Button from "@/components/ui/Button";
import useAnimation from "@/hooks/useAnimation";
import axiosRequest from "@/lib/axiosUtils";
import gsap from "gsap";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosRequest(`/api/team-members`); // Adjust the endpoint
        console.log("Data from server:", result);
        setTeamMembers(result);
      } catch (error) {
        // Handle errors here
        console.error("Error in component:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // GSAP animation code
    gsap.from(".services-hero", { opacity: 0, duration: 1, y: 150 });
    gsap.to(".services-hero", { opacity: 1, duration: 1, y: 0 });
  }, []);

  const sectionRef = useAnimation();
  const aboutRef = useAnimation();
  const compassRef = useAnimation();
  const teamRef = useAnimation();
  const joinRef = useAnimation();
  return (
    <main>
      <section className="pt-[180px] pb-[100px] sm:pt-[350px] lg:pb-[250px] px-5 sm:px-0">
        <div className="container services-hero">
          <div>
            <h2 className="text-[45px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[100px]">
              <span className="font-sans">We’re a creative studio</span>
            </h2>
          </div>
        </div>
      </section>
      <section ref={sectionRef}>
        <img src="/images/about/about.png" alt="about banner" />
      </section>

      <section className="font-sans py-8 sm:py-12 md:py-20 lg:py-32 px-5 sm:px-0">
        <div className="container" ref={aboutRef}>
          <div
            className={`flex justify-between flex-col-reverse lg:flex-row
          gap-10 items-center`}
          >
            <div className="w-full lg:w-[40%]">
              <h2 className="text-[40px] sm:text-[60px] sm:leading-[60px] lg:leading-[70px] lg:text-[70px] xl:text-[90px] xl:leading-[90px] mb-6">
                Passion is our fuel
              </h2>
              <p className="text-lg mb-16">
                Welcome to our studio, where we blend creativity, innovation,
                and expertise to deliver outstanding digital experiences. At our
                core, we’re a team of passionate professionals who love what we
                do – and who are dedicated to helping our clients succeed in a
                constantly-evolving digital landscape. Far beyond our skills or
                experience, what really sets us apart is the human connection we
                build with our clients through dedication and delivered
                promises.
              </p>
            </div>
            <div className="w-full lg:w-[40%]">
              <img
                src={`/images/about/about-2.png`}
                className="rounded-tl-full rounded-tr-full"
                alt="service"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="font-sans py-8 sm:py-12 md:py-20 lg:py-32 px-5 sm:px-0">
        <div className="container" ref={compassRef}>
          <div
            className={`flex justify-between flex-col-reverse lg:flex-row
          gap-10 items-center`}
          >
            <div className="w-full lg:w-[40%]">
              <img
                src={`/images/about/about-3.png`}
                className="rounded-tl-full rounded-tr-full"
                alt="service"
              />
            </div>
            <div className="w-full lg:w-[40%]">
              <h2 className="text-[40px] sm:text-[60px] sm:leading-[60px] lg:leading-[70px] lg:text-[70px] xl:text-[90px] xl:leading-[90px] mb-6">
                Values are our compass
              </h2>
              <p className="text-lg mb-16">
                Our studio, we believe that having a strong philosophy is key to
                achieving success. Our philosophy defines who we are and how we
                conduct ourselves in business. We strive to be honest and
                ethical, to provide the best possible services for our clients,
                and to always put our customers first.
              </p>
              <Button>See manifesto</Button>
            </div>
          </div>
        </div>
      </section>

      {/* team members */}
      <section className="font-sans py-8 sm:py-12 md:py-20 lg:py-32 px-5 sm:px-0">
        <div className="container">
          <Heading title="Our Team" />

          <div className="mt-20 grid lg:grid-cols-2 gap-20">
            {teamMembers?.map((member) => (
              <div className="member-item" key={member?._id}>
                <div>
                  <img
                    src={member?.profilePic}
                    alt="member"
                    className="rounded-tl-full rounded-tr-full w-full"
                  />
                </div>
                <div className="py-10 flex flex-col justify-center text-center bg-primary-light relative">
                  <h2 className="text-[40px] sm:text-[50px] sm:leading-[50px] lg:leading-[60px] lg:text-[60px] xl:text-[70px] xl:leading-[70px] mb-6">
                    {member?.name}
                  </h2>
                  <span className="text-3xl">{member?.position}</span>

                  <div className="absolute top-0 left-0 right-0 bottom-0 w-full py-10 bg-primary-light opacity-0 invisible member-description transition-all duration-300">
                    <span className="text-3xl">{member?.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="font-sans py-8 sm:py-12 md:py-20 lg:py-32 px-5 sm:px-0">
        <div className="container" ref={joinRef}>
          <div
            className={`flex justify-between flex-col-reverse lg:flex-row
          gap-10 items-center`}
          >
            <div className="w-full lg:w-[40%]">
              <h2 className="text-[40px] sm:text-[60px] sm:leading-[60px] lg:leading-[70px] lg:text-[70px] xl:text-[90px] xl:leading-[90px] mb-6">
                Join us at Atelier15
              </h2>
              <p className="text-lg mb-16">
                Our latest project, Atelier15 – Coworking Brussels, is designed
                to be a hub of creativity and innovation, where entrepreneurs
                from different industries can come together to share ideas,
                knowledge, and resources. By working side-by-side in a
                supportive and flexible environment, our members can tap into
                new opportunities, inspire and get inspired by others.
              </p>
              <Button>Discover</Button>
            </div>
            <div className="w-full lg:w-[40%]">
              <img
                src={`/images/about/about-4.png`}
                className="rounded-tl-full rounded-tr-full"
                alt="service"
              />
            </div>
          </div>
        </div>
      </section>

      <GetInTouch />
    </main>
  );
};

export default AboutPage;

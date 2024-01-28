"use client";
import RelatedCases from "@/components/Service/RelatedCases";
import Heading from "@/components/Shared/Heading";
import useAnimation from "@/hooks/useAnimation";
import axiosRequest from "@/lib/axiosUtils";
import gsap from "gsap";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const WorkPage = () => {
  const [work, setWork] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosRequest(`/api/cases/${id}`); // Adjust the endpoint
        console.log("Data from server:", result);
        setWork(result);
      } catch (error) {
        // Handle errors here
        console.error("Error in component:", error);
      }
    };

    fetchData();
  }, [id]);

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
            <h2 className="text-[45px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[120px]">
              <span className="font-sans">{work?.category}</span>
            </h2>
            <h2 className="text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] -mt-5">
              <span className="font-sans">{work?.title}</span>
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-10 mt-20 font-sans">
            <div className="w-full lg:w-[30%]">
              <Link
                href="#"
                className="flex items-center gap-6 transition-all hover:gap-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28.531"
                  height="16.09"
                  viewBox="0 0 28.531 16.09"
                >
                  <g
                    id="Group_13260"
                    data-name="Group 13260"
                    transform="translate(-1310.212 -1832.537)"
                  >
                    <path
                      id="Path_4597"
                      data-name="Path 4597"
                      d="M0,0C7.58,4.887,8.45,10.1,8.45,10.1S7.532,4.2,14.283,0"
                      transform="matrix(0.07, -0.998, 0.998, 0.07, 1327.474, 1847.37)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                    ></path>
                    <path
                      id="Path_4601"
                      data-name="Path 4601"
                      d="M26,0C9.331,3.211,10.67-.129.431,1.963c-.086.016-.257.055-.431.092"
                      transform="matrix(0.998, 0.07, -0.07, 0.998, 1310.632, 1838.085)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                    ></path>
                  </g>
                </svg>
                <h3 className="text-[25px] font-bold">Services provided</h3>
              </Link>
            </div>
            <div className="w-full lg:w-[70%] flex items-center justify-between flex-wrap gap-10 text-[25px]">
              {work?.serviceProvided &&
                work?.serviceProvided?.split(",")?.map((item) => (
                  <Link key={item} href="#">
                    {item}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {work?.videoUrl && (
        <section ref={sectionRef}>
          <video autoPlay muted>
            <source src={work?.videoUrl} type="video/mp4"></source>
          </video>
        </section>
      )}

      <section className="font-sans py-8 sm:py-12 md:py-20 lg:py-32 px-5 sm:px-0">
        <div className="container">
          <div className="bg-primary-light px-16 py-20 flex items-center justify-between gap-20">
            <div className="w-[60%] flex flex-col gap-10 justify-start">
              <div>
                <img src={work?.projectLogo} alt="" className="h-24" />
              </div>
              <p className="text-lg">{work?.description}</p>
              <a className="text-lg font-bold" href="#" target="_blank">
                {work?.projectUrl}
              </a>
            </div>
            <div className="w-[30%]">
              <h3 className="text-2xl mb-10 font-semibold">Credits</h3>
              <ul className="text-lg flex flex-col gap-4">
                {work?.credits?.map((credit) => (
                  <li
                    key={credit?.id}
                    className="flex gap-10 justify-between w-full"
                  >
                    <span className="font-semibold">
                      {credit?.positionName}
                    </span>
                    <span className="text-right">{credit?.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {work?.sections?.length > 0 &&
        work?.sections?.map((section) => {
          return section?.type === "details-section" ? (
            <section className="py-[60px] md:py-[90px] xl:py-[120px] bg-primary-light text-white px-5 sm:px-0">
              <div className="sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[35%] mx-auto text-center">
                <Heading title={section?.no} />
                <div className="flex items-center gap-8">
                  <h2 className="text-[30px] sm:text-[70px] md:text-[120px] font-sans leading-none">
                    {section?.title}
                  </h2>
                  {section?.subTitle && (
                    <div className="relative flex justify-center">
                      <h2 className="text-[30px] sm:text-[70px] md:text-[120px] absolute top-0 left-[50%] translate-x-[-50%] mx-auto text-primary italic">
                        {section?.subTitle}
                      </h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[280px] h-[50px] sm:w-[460px] sm:h-[100px] md:w-[520px] md:h-[200px]"
                        viewBox="0 0 1061.378 214.023"
                        style={{ opacity: 1 }}
                      >
                        <path
                          id="Path_8"
                          data-name="Path 8"
                          d="M430.624,2084.318c-10.27-15.973-205.475,23.228-205.475,76.272S493.3,2254.033,757.7,2255.143s537.089-29.366,526.521-94.552-211.73-117.442-526.521-117.442-430.137,24.064-472.276,33.507"
                          transform="translate(-224.149 -2042.149)"
                          fill="none"
                          stroke="#67ebce"
                          strokeLinecap="round"
                          strokeWidth="5"
                          style={{
                            strokeDashoffset: 0,
                            strokeDasharray: "none",
                          }}
                        ></path>
                      </svg>
                    </div>
                  )}
                </div>
                <p className="text-lg font-sans mt-5 md:mt-0">
                  {section?.description}
                </p>
              </div>
            </section>
          ) : section?.type === "image-section" ? (
            <section className="py-[60px] md:py-[90px] xl:py-[120px] px-5 sm:px-0">
              <div className={section?.container && "container"}>
                <img src={section?.image} className="w-full" alt="" />
              </div>
            </section>
          ) : section?.type === "information-section" ? (
            <section className="font-sans pb-20 px-5 sm:px-0">
              <div className="container">
                <div
                  className={`flex justify-between flex-col-reverse lg:flex-row
          gap-10 items-center`}
                >
                  <div className="w-full lg:w-[40%]">
                    <h2 className="text-[40px] sm:text-[60px] sm:leading-[60px] lg:leading-[70px] lg:text-[70px] xl:text-[90px] xl:leading-[90px] mb-6">
                      {section?.title}
                    </h2>
                  </div>
                  <div className="w-full lg:w-[50%]">
                    <p className="text-lg mb-16">{section?.description}</p>
                  </div>
                </div>
              </div>
            </section>
          ) : section.type === "images-section" ? (
            <section className="py-[60px] md:py-[90px] xl:py-[120px] px-5 sm:px-0">
              <div className="container grid grid-cols-3 gap-8">
                {section?.images?.map((image) => (
                  <img key={image} src={image} className="w-full" alt="" />
                ))}
              </div>
            </section>
          ) : section?.type === "video-section" ? (
            <section>
              <video autoPlay muted>
                <source src={section?.videoUrl} type="video/mp4"></source>
              </video>
            </section>
          ) : null;
        })}

      <RelatedCases />
    </main>
  );
};

export default WorkPage;

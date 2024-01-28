"use client";
import RelatedCases from "@/components/Service/RelatedCases";
import ToolsBox from "@/components/Service/ToolsBox";
import GetInTouch from "@/components/Shared/GetInTouch";
import Button from "@/components/ui/Button";
import useAnimation from "@/hooks/useAnimation";
import axiosRequest from "@/lib/axiosUtils";
import gsap from "gsap";
import parse from "html-react-parser";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SingleServicePage = () => {
  const [service, setService] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosRequest(`/api/services/${id}`); // Adjust the endpoint
        console.log("Data from server:", result);
        setService(result);
      } catch (error) {
        // Handle errors here
        console.error("Error in component:", error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    // GSAP animation code
    gsap.from(".service-hero", { opacity: 0, duration: 1, y: 200 });
    gsap.to(".service-hero", { opacity: 1, duration: 1, y: 0 });
  }, []);

  const headingRef = useAnimation();
  const detailsRef = useAnimation();
  const toolBoxRef = useAnimation();
  const relatedCaseRef = useAnimation();
  const discoverRef = useAnimation();
  return (
    <main>
      <section className="pt-[180px] pb-[100px] sm:pt-[200px] lg:pb-[250px] px-5 sm:px-0 font-sans">
        <div className="container service-hero">
          <div>
            <div
              className={`flex justify-between flex-col-reverse lg:flex-row gap-10 items-center`}
            >
              <div className="w-full lg:w-[40%]">
                <img
                  src={service?.thumbnail}
                  className="rounded-tl-full rounded-tr-full"
                  alt="service"
                />
              </div>
              <div className="w-full lg:w-[40%]">
                <h2 className="text-[40px] sm:text-[70px] sm:leading-[70px] lg:leading-[90px] lg:text-[90px] xl:text-[120px] xl:leading-[120px] my-6">
                  {service?.title}
                </h2>
                <p className="text-lg mb-16">{service?.shortDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {service?.description && (
        <section className="font-sans pb-[60px]  sm:pb-[150px] lg:pb-[200px] px-5 sm:px-0">
          <div className="container">
            {/* <div className="text-center" ref={headingRef}>
            <h2 className="text-[45px] leading-[45px] sm:text-[60px] sm:leading-[60px] md:text-[70px] md:leading-[70px] lg:text-[80px] lg:leading-[80px] xl:text-[100px] xl:leading-[100px] mb-16 sm:w-[60%] xl:w-[40%] mx-auto">
              User-based approach
            </h2>
            <p className="w-full sm:w-[80%] md:w-[70%] lg:w-[45%] mx-auto text-lg">
              As tempting as it might be, we promise to resist the temptation of
              blindly following our personal taste or gut feeling. The needs and
              objectives of end-users are the true north star that guides our
              UX/UI design process. This user-centric approach requires our
              designers to gain a deep understanding of the user’s perspective
              to create digital products that provide them with an intuitive and
              easy-to-use interface.
            </p>
          </div> */}

            <div>
              <div>
                <h3 className="text-[30px]">{service?.description?.title}</h3>
                <svg
                  width="75"
                  height="10"
                  viewBox="0 0 75 4"
                  fill="#212121"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ opacity: 1 }}
                >
                  <path
                    d="M1 2.70185C23.7965 3.62172 61.716 2.23108 74 1"
                    stroke="#212121"
                    style={{ strokeDashoffset: 0, strokeDasharray: "none" }}
                  ></path>
                </svg>
              </div>

              <div className="mt-6 flex flex-col gap-20" ref={detailsRef}>
                {service?.description?.details?.map((detail) => (
                  <div
                    key={detail?.name}
                    className="flex justify-between gap-10 flex-col md:flex-row"
                  >
                    <div className="w-full md:w-1/2">
                      <h2 className="text-[38px] sm:text-[45px] md:text-[55px]">
                        {detail?.name}
                      </h2>
                    </div>
                    <div className="w-full md:w-1/2 text-xl">
                      {/* <p>
                        A successful kick-off relies heavily on a thorough
                        comprehension of the project’s needs, requirements, and
                        challenges. Hence the importance of this first phase, in
                        which we delve into your business and user requirements
                        to ensure that they are in perfect alignment.
                      </p>
                      <br />
                      <p>
                        By conducting this thorough analysis, we can outline the
                        project scope and draft the project requirements,
                        setting the foundation for a successful project.
                      </p>

                      <ul className="flex flex-col gap-6 mt-10">
                        <li className="flex items-center gap-3">
                          <img
                            className="w-7"
                            src="/images/icons/arrow.svg"
                            alt="arrow"
                          />
                          <span>User interviews</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <img
                            className="w-7"
                            src="/images/icons/arrow.svg"
                            alt="arrow"
                          />
                          <span>Stakeholder interviews</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <img
                            className="w-7"
                            src="/images/icons/arrow.svg"
                            alt="arrow"
                          />
                          <span>User personas & stories</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <img
                            className="w-7"
                            src="/images/icons/arrow.svg"
                            alt="arrow"
                          />
                          <span>Use cases & journey maps</span>
                        </li>
                      </ul> */}
                      {parse(detail?.details)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {(service?.sectionImages ||
        service?.sectionSubTitle ||
        service?.sectionTitle ||
        service?.sectionDescription) && (
        <ToolsBox service={service} toolBoxRef={toolBoxRef} />
      )}

      <RelatedCases relatedCaseRef={relatedCaseRef} />

      <section className="pb-[60px]  sm:pb-[150px] lg:pb-[200px] px-5 sm:px-0">
        <div
          className="container flex justify-between items-center gap-10 flex-col md:flex-row"
          ref={discoverRef}
        >
          <div className="w-full md:w-[60%] overflow-hidden">
            <h2 className="text-[40px] sm:text-[70px] sm:leading-[70px] lg:leading-[90px] lg:text-[90px] xl:text-[120px] xl:leading-[120px] my-6 font-sans">
              Discover
            </h2>
            <h2 className="text-[40px] sm:text-[70px] sm:leading-[70px] lg:leading-[90px] lg:text-[90px] xl:text-[120px] xl:leading-[120px] my-6">
              UX / UI design
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="76.287"
              viewBox="0 0 677.747 76.287"
              style={{ opacity: 1, width: "80%" }}
            >
              <path
                id="Path_4828"
                data-name="Path 4828"
                d="M-4676.009-16760.25c242.587,29.016,702.616,36.473,675.478,10.3s-545.27-37.9-617.313,0,342.611,54.021,343.845,35.393-84.495,1.475-139.178,14.7"
                transform="translate(4676.127 16775.178)"
                fill="none"
                stroke="#fff"
                strokeWidth="4"
                style={{ strokeDashoffset: 0, strokeDasharray: "none" }}
              />
            </svg>
          </div>

          <div className="w-full md:w-[40%] font-sans">
            <p className="text-lg mb-10">
              With your new look and feel now firmly established, we can start
              to craft a digital environment that accurately reflects your brand
              values and identity. By working together, brand- and UX designers
              can ensure that your digital experiences are well-rounded and
              fine-tuned to your target audience.
            </p>
            <Button href="#">Discover</Button>
          </div>
        </div>
      </section>

      <GetInTouch />
    </main>
  );
};

export default SingleServicePage;

"use client";
import RelatedCases from "@/components/Service/RelatedCases";
import ToolsBox from "@/components/Service/ToolsBox";
import GetInTouch from "@/components/Shared/GetInTouch";
import Button from "@/components/ui/Button";
import useAnimation from "@/hooks/useAnimation";
import gsap from "gsap";
import { useEffect } from "react";

const SingleServicePage = () => {
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
                  src={`/images/services/1.png`}
                  className="rounded-tl-full rounded-tr-full"
                  alt="service"
                />
              </div>
              <div className="w-full lg:w-[40%]">
                <h2 className="text-[40px] sm:text-[70px] sm:leading-[70px] lg:leading-[90px] lg:text-[90px] xl:text-[120px] xl:leading-[120px] my-6">
                  UX / UI design
                </h2>
                <p className="text-lg mb-16">
                  UX/UI design is an essential part of creating products and
                  services that are both easy to use and provide a positive
                  experience for the user. Based on a user-based approach, our
                  designers will ensure that your digital products seamlessly
                  integrate with your brand and provide users with a tailored
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="font-sans pb-[60px]  sm:pb-[150px] lg:pb-[200px] px-5 sm:px-0">
        <div className="container">
          <div className="text-center" ref={headingRef}>
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
          </div>

          <div className="mt-[100px] sm:mt-[150px] lg:mt-[200px]">
            <div>
              <h3 className="text-[30px]">Methodology</h3>
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
              <div className="flex justify-between gap-10 flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <h2 className="text-[38px] sm:text-[45px] md:text-[55px]">
                    Kick-off
                  </h2>
                </div>
                <div className="w-full md:w-1/2 text-xl">
                  <p>
                    A successful kick-off relies heavily on a thorough
                    comprehension of the project’s needs, requirements, and
                    challenges. Hence the importance of this first phase, in
                    which we delve into your business and user requirements to
                    ensure that they are in perfect alignment.
                  </p>
                  <br />
                  <p>
                    By conducting this thorough analysis, we can outline the
                    project scope and draft the project requirements, setting
                    the foundation for a successful project.
                  </p>

                  <ul className="flex flex-col gap-6 mt-10">
                    <li className="flex items-center gap-3">
                      <img src="/images/icons/arrow.svg" alt="arrow" />
                      <span>User interviews</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <img src="/images/icons/arrow.svg" alt="arrow" />
                      <span>Stakeholder interviews</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <img src="/images/icons/arrow.svg" alt="arrow" />
                      <span>User personas & stories</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <img src="/images/icons/arrow.svg" alt="arrow" />
                      <span>Use cases & journey maps</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between gap-10 flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <h2 className="text-[38px] sm:text-[45px] md:text-[55px]">
                    Architecture
                  </h2>
                </div>
                <div className="w-full md:w-1/2 text-xl">
                  <p>
                    A well thought out sitemap provides a clear and concise
                    visual representation of the website’s navigation structure.
                    The sitemap includes all the main pages, sections, and
                    subsections, ensuring that users can easily find their way
                    around your website and access the information they need
                    with ease.
                  </p>
                  <br />
                  <p>
                    Wireframes are the next crucial step in the webdesign
                    process, allowing clients, designers and developers to
                    quickly visualize the layout and structure of each page.
                    When we start implementing the first content, we’ll move
                    from low fidelity to mid fidelity wireframes. Once validated
                    we’ll start adding the visual layer to our now pretty boring
                    but essential black/white skeletons.
                  </p>

                  <ul className="flex flex-col gap-6 mt-10">
                    <li className="flex items-center gap-3">
                      <img src="/images/icons/arrow.svg" alt="arrow" />
                      <span>Sitemap</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <img src="/images/icons/arrow.svg" alt="arrow" />
                      <span>Lo-fi wireframes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <img src="/images/icons/arrow.svg" alt="arrow" />
                      <span>Mid-fi wireframes</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between gap-10 flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <h2 className="text-[38px] sm:text-[45px] md:text-[55px]">
                    Prototype
                  </h2>
                </div>
                <div className="w-full md:w-1/2 text-xl">
                  <p>
                    It’s time to leverage our designers’ expertise and transform
                    the previously elaborated brand guidelines into a
                    comprehensive set of UI guidelines. This will enable us to
                    create a high-fidelity wireframe. Every detail, including
                    buttons, hover effects, animations and icons, will be
                    carefully considered and fine-tuned to ensure the wireframe
                    reflects our brand identity and resonates with our target
                    audience.
                  </p>
                  <br />
                  <p>
                    A meticulous attention to detail and pixel-perfect approach
                    will make the hand-over process to our development team as
                    smooth and efficient as possible, leaving close to no room
                    for ambiguity or uncertainty.
                  </p>

                  <ul className="flex flex-col gap-6 mt-10">
                    <li className="flex items-center gap-3">
                      <img src="/images/icons/arrow.svg" alt="arrow" />
                      <span>Hi-fi wireframe</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <img src="/images/icons/arrow.svg" alt="arrow" />
                      <span>pixel perfect prototype</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <img src="/images/icons/arrow.svg" alt="arrow" />
                      <span>UI styleguide</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToolsBox toolBoxRef={toolBoxRef} />

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
                stroke="#212121"
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

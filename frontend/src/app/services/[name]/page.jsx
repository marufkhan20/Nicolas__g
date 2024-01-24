const SingleServicePage = () => {
  return (
    <main>
      <section className="pt-[180px] pb-[100px] sm:pt-[200px] lg:pb-[250px] px-5 sm:px-0 font-sans">
        <div className="container">
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

      <section className="font-sans pb-[200px]">
        <div className="container">
          <div className="text-center">
            <h2 className="text-[45px] leading-[45px] sm:text-[60px] sm:leading-[60px] md:text-[70px] md:leading-[70px] lg:text-[80px] lg:leading-[80px] xl:text-[100px] xl:leading-[100px] mb-16 w-[40%] mx-auto">
              User-based approach
            </h2>
            <p className="w-full sm:w-[70%] md:w-[45%] mx-auto text-lg">
              As tempting as it might be, we promise to resist the temptation of
              blindly following our personal taste or gut feeling. The needs and
              objectives of end-users are the true north star that guides our
              UX/UI design process. This user-centric approach requires our
              designers to gain a deep understanding of the user’s perspective
              to create digital products that provide them with an intuitive and
              easy-to-use interface.
            </p>
          </div>

          <div className="mt-[200px]">
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

            <div className="mt-6 flex flex-col gap-20">
              <div className="flex justify-between gap-10">
                <div className="w-1/2">
                  <h2 className="text-[55px]">Kick-off</h2>
                </div>
                <div className="w-1/2 text-xl">
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
              <div className="flex justify-between gap-10">
                <div className="w-1/2">
                  <h2 className="text-[55px]">Architecture</h2>
                </div>
                <div className="w-1/2 text-xl">
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
              <div className="flex justify-between gap-10">
                <div className="w-1/2">
                  <h2 className="text-[55px]">Prototype</h2>
                </div>
                <div className="w-1/2 text-xl">
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

      <section className="py-[60px] md:py-[90px] xl:py-[120px] bg-secondary text-white px-5 sm:px-0">
        <div className="w-[35%] mx-auto text-center">
          <h2 className="text-[30px] sm:text-[70px] md:text-[120px] font-sans leading-none">
            Our
          </h2>
          <div className="relative flex justify-center">
            <h2 className="text-[30px] sm:text-[70px] md:text-[120px] absolute top-0 left-[50%] translate-x-[-50%] mx-auto text-primary italic">
              toolbox
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
                style={{ strokeDashoffset: 0, strokeDasharray: "none" }}
              ></path>
            </svg>
          </div>
          <p className="text-lg font-sans">
            Just like batman and his trusty utility belt, we too rely on a
            powerful set of tools to craft top-notch UX/UI projects!
          </p>

          <div className="flex gap-10 justify-between flex-wrap">
            <div>
              <img src="/images/tools/1.svg" alt="tool" />
            </div>
            <div>
              <img src="/images/tools/2.svg" alt="tool" />
            </div>
            <img src="/images/tools/3.svg" alt="tool" />
            <img src="/images/tools/4.svg" alt="tool" />
            <img src="/images/tools/5.svg" alt="tool" />
            <img src="/images/tools/6.svg" alt="tool" />
            <img src="/images/tools/7.svg" alt="tool" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleServicePage;

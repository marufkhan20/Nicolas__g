"use client";
import Link from "next/link";
import { useState } from "react";

const RelatedCases = ({ relatedCaseRef }) => {
  const [activeCase, setActiveCase] = useState(2);

  return (
    <section className="py-[60px] md:py-[120px] xl:py-[200px] px-5 sm:px-0 font-sans">
      <div className="container" ref={relatedCaseRef}>
        <h2 className="text-center text-[30px]">Related Cases</h2>

        <div className="overflow-auto pb-5">
          <div className="mt-10 flex justify-between gap-5 min-w-[1030px]">
            <div
              className={`${
                activeCase === 1 ? "w-full" : "w-full md:w-[100px]"
              } overflow-hidden relative transition-all duration-500`}
            >
              {activeCase === 1 ? (
                <img src="/images/works/1.jpg" alt="case" />
              ) : (
                <img
                  className="absolute inset-0 w-full object-cover cursor-pointer"
                  src="/images/works/1.jpg"
                  alt="case"
                  style={{ height: `calc(100% - 120px)` }}
                  onClick={() => setActiveCase(1)}
                />
              )}

              <div className="mt-2 flex flex-col px-6">
                <h4 className="font-normal text-lg font-sans">URTR</h4>
                <h2 className="text-[30px] sm:text-[35px] md:text-[45px] font-sans leading-none">
                  <Link href="#">Crafting crypto law leadership</Link>
                </h2>
                <ul className="text-lg md:text-[22px] flex flex-wrap items-center gap-3 mt-3">
                  <li className="flex items-center gap-5">
                    <Link href="#">Branding</Link>
                    <img src="/images/border.svg" alt="" />
                  </li>
                  <li className="flex items-center gap-5">
                    <Link href="#">UI/UX</Link>
                    <img src="/images/border.svg" alt="" />
                  </li>
                  <li>
                    <Link href="#">Development</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`${
                activeCase === 2 ? "w-full" : "w-full md:w-[100px]"
              } overflow-hidden relative transition-all duration-500`}
            >
              {activeCase === 2 ? (
                <img src="/images/works/2.jpg" alt="case" />
              ) : (
                <img
                  className="absolute inset-0 w-full object-cover cursor-pointer"
                  src="/images/works/2.jpg"
                  alt="case"
                  style={{ height: `calc(100% - 120px)` }}
                  onClick={() => setActiveCase(2)}
                />
              )}

              <div className="mt-2 flex flex-col px-6">
                <h4 className="font-normal text-lg font-sans">URTR</h4>
                <h2 className="text-[30px] sm:text-[35px] md:text-[45px] font-sans leading-none">
                  <Link href="#">Crafting crypto law leadership</Link>
                </h2>
                <ul className="text-lg md:text-[22px] flex flex-wrap items-center gap-3 mt-3">
                  <li className="flex items-center gap-5">
                    <Link href="#">Branding</Link>
                    <img src="/images/border.svg" alt="" />
                  </li>
                  <li className="flex items-center gap-5">
                    <Link href="#">UI/UX</Link>
                    <img src="/images/border.svg" alt="" />
                  </li>
                  <li>
                    <Link href="#">Development</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`${
                activeCase === 3 ? "w-full" : "w-full md:w-[100px]"
              } overflow-hidden relative transition-all duration-500`}
            >
              {activeCase === 3 ? (
                <img src="/images/works/3.jpg" alt="case" />
              ) : (
                <img
                  className="absolute inset-0 w-full object-cover cursor-pointer"
                  src="/images/works/3.jpg"
                  alt="case"
                  style={{ height: `calc(100% - 120px)` }}
                  onClick={() => setActiveCase(3)}
                />
              )}

              <div className="mt-2 flex flex-col px-6">
                <h4 className="font-normal text-lg font-sans">URTR</h4>
                <h2 className="text-[30px] sm:text-[35px] md:text-[45px] font-sans leading-none">
                  <Link href="#">Crafting crypto law leadership</Link>
                </h2>
                <ul className="text-lg md:text-[22px] flex flex-wrap items-center gap-3 mt-3">
                  <li className="flex items-center gap-5">
                    <Link href="#">Branding</Link>
                    <img src="/images/border.svg" alt="" />
                  </li>
                  <li className="flex items-center gap-5">
                    <Link href="#">UI/UX</Link>
                    <img src="/images/border.svg" alt="" />
                  </li>
                  <li>
                    <Link href="#">Development</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedCases;

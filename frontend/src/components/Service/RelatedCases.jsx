"use client";
import axiosRequest from "@/lib/axiosUtils";
import Link from "next/link";
import { useEffect, useState } from "react";

const RelatedCases = ({ relatedCaseRef }) => {
  const [activeCase, setActiveCase] = useState();
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosRequest(`/api/cases`); // Adjust the endpoint
        console.log("Data from server:", result);
        setCases(result);
      } catch (error) {
        // Handle errors here
        console.error("Error in component:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (cases?.length > 0) {
      setActiveCase(cases[0]?._id);
    }
  }, [cases]);

  return cases?.length > 0 ? (
    <section className="py-[60px] md:py-[120px] xl:py-[200px] px-5 sm:px-0 font-sans">
      <div className="container" ref={relatedCaseRef}>
        <h2 className="text-center text-[30px]">Related Cases</h2>

        <div className="overflow-auto pb-5">
          <div className="mt-10 flex justify-between gap-5 min-w-[1030px]">
            {cases?.map((caseItem) => (
              <div
                className={`${
                  activeCase === caseItem?._id
                    ? "w-full"
                    : "w-full md:w-[100px]"
                } overflow-hidden relative transition-all duration-500`}
                key={caseItem?._id}
              >
                {activeCase === caseItem?._id ? (
                  <img src={caseItem?.thumbnail} alt="case" />
                ) : (
                  <img
                    className="absolute inset-0 w-full object-cover cursor-pointer"
                    src={caseItem?.thumbnail}
                    alt="case"
                    style={{ height: `calc(100% - 120px)` }}
                    onClick={() => setActiveCase(caseItem?._id)}
                  />
                )}

                <div className="mt-2 flex flex-col px-6">
                  <h4 className="font-normal text-lg font-sans">
                    {caseItem?.category}
                  </h4>
                  <h2 className="text-[30px] sm:text-[35px] md:text-[45px] font-sans leading-none">
                    <Link href={`/works/${caseItem?._id}`}>
                      {caseItem?.title}
                    </Link>
                  </h2>
                  {caseItem?.serviceProvided && (
                    <ul className="text-lg md:text-[22px] flex flex-wrap items-center gap-3 mt-3">
                      {caseItem?.serviceProvided &&
                        caseItem?.serviceProvided?.split(",")?.map((item) => (
                          <li key={item} className="flex items-center gap-5">
                            <Link href="#">{item}</Link>
                            <img
                              className="w-5"
                              src="/images/border.svg"
                              alt=""
                            />
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default RelatedCases;

import Heading from "@/components/Shared/Heading";
import axiosRequest from "@/lib/axiosUtils";
import { useEffect, useState } from "react";
import WorkItem from "./WorkItem";

const Works = ({ title = true }) => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosRequest("/api/cases"); // Adjust the endpoint
        console.log("Data from server:", result);
        setWorks(result);
      } catch (error) {
        // Handle errors here
        console.error("Error in component:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="py-[40px] md:py-[70px] xl:py-[100px] px-5 sm:px-0">
      <div className="container">
        {title && <Heading className="work" title="Recent work" />}

        <div className="mt-[60px] flex flex-col gap-6 sm:gap-10 md:gap-20 lg:gap-[100px]">
          {works?.length > 0 &&
            works?.map((work) => (
              <WorkItem
                key={work?._id}
                image={work?.thumbnail}
                subTitle={work?.category}
                title={work?.title}
                className={`work-${work?._id}`}
                id={work?._id}
                serviceProvided={work?.serviceProvided}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Works;

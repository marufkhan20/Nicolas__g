"use client";
import useAnimation from "@/hooks/useAnimation";
import axiosRequest from "@/lib/axiosUtils";
import { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosRequest("/api/services"); // Adjust the endpoint
        console.log("Data from server:", result);
        setServices(result);
      } catch (error) {
        // Handle errors here
        console.error("Error in component:", error);
      }
    };

    fetchData();
  }, []);

  const sectionRef = useAnimation();
  return (
    <section className="mt-[100px] mb-[150px] font-sans px-5 sm:px-0">
      <div className="container">
        <div className="text-center" ref={sectionRef}>
          <h2 className="text-[45px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[100px] mb-5">
            it’s a journey
          </h2>
          <p className="w-full sm:w-[70%] md:w-[45%] mx-auto text-lg">
            Let’s embark on an exciting journey towards business growth as we
            work together to strategize, design, and develop your brand and
            online presence. So, let’s sit down at the drawing board and map out
            a plan of action.
          </p>
        </div>

        <div className="mt-[200px] flex flex-col gap-[200px]">
          {services?.length > 0 &&
            services?.map((service, idx) => (
              <ServiceItem
                key={service?._id}
                title={service?.title}
                serialNumber={idx + 1}
                description={service?.shortDescription}
                image={service?.thumbnail}
                id={service?._id}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

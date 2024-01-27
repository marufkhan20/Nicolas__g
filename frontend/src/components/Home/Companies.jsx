import useAnimation from "@/hooks/useAnimation";
import Heading from "../Shared/Heading";

const Companies = () => {
  const sectionRef = useAnimation();
  return (
    <section className="py-[40px] md:py-[70px] xl:py-[100px] px-5 sm:px-0">
      <div className="container">
        <Heading title="Trusted by" className="company" />

        <div
          className="mt-[100px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
          ref={sectionRef}
        >
          <div>
            <img
              src="/images/companies/1.png"
              alt="company"
              className="w-[60%]"
            />
          </div>
          <div>
            <img
              src="/images/companies/2.png"
              alt="company"
              className="w-[60%]"
            />
          </div>
          <div>
            <img
              src="/images/companies/3.png"
              alt="company"
              className="w-[60%]"
            />
          </div>
          <div>
            <img
              src="/images/companies/4.png"
              alt="company"
              className="w-[60%]"
            />
          </div>
          <div>
            <img
              src="/images/companies/5.webp"
              alt="company"
              className="w-[60%]"
            />
          </div>
          <div>
            <img
              src="/images/companies/6.png"
              alt="company"
              className="w-[60%]"
            />
          </div>
          <div>
            <img
              src="/images/companies/7.webp"
              alt="company"
              className="w-[60%]"
            />
          </div>
          <div>
            <img
              src="/images/companies/8.png"
              alt="company"
              className="w-[60%]"
            />
          </div>
          <div>
            <img
              src="/images/companies/9.png"
              alt="company"
              className="w-[60%]"
            />
          </div>
          <div>
            <img
              src="/images/companies/10.webp"
              alt="company"
              className="w-[60%]"
            />
          </div>
          <div>
            <img
              src="/images/companies/11.webp"
              alt="company"
              className="w-[60%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;

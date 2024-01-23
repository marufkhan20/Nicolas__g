import Button from "@/components/ui/Button";
import Link from "next/link";

const ServiceItem = ({ reverse, serialNumber, title, description, image }) => {
  return (
    <div>
      <div
        className={`flex justify-between flex-col-reverse lg:flex-row ${
          reverse && "flex-row-reverse"
        } gap-10`}
      >
        <div className="w-full lg:w-[40%]">
          <span className="pb-3 border-b-[3px] border-secondary text-[30px] inline-block">
            0{serialNumber}
          </span>
          <h2 className="text-[40px] sm:text-[60px] sm:leading-[60px] lg:leading-[70px] lg:text-[70px] xl:text-[90px] xl:leading-[90px] my-6">
            {title}
          </h2>
          <p className="text-lg mb-16">{description}</p>
          <Button>Learn more</Button>
        </div>
        <div className="w-full lg:w-[40%]">
          <img
            src={`/images/services/${image}`}
            className="rounded-tl-full rounded-tr-full"
            alt="service"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10 mt-20">
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
                  stroke="#212121"
                  stroke-width="2"
                ></path>
                <path
                  id="Path_4601"
                  data-name="Path 4601"
                  d="M26,0C9.331,3.211,10.67-.129.431,1.963c-.086.016-.257.055-.431.092"
                  transform="matrix(0.998, 0.07, -0.07, 0.998, 1310.632, 1838.085)"
                  fill="none"
                  stroke="#212121"
                  stroke-width="2"
                ></path>
              </g>
            </svg>
            <h3 className="text-[25px] font-bold">{title} services</h3>
          </Link>
        </div>
        <div className="w-full lg:w-[70%] flex items-center justify-between flex-wrap gap-10 text-[25px]">
          <Link href="#">Discovery workshops</Link>
          <Link href="#">Brand positioning</Link>
          <Link href="#">Interviews & research</Link>
          <Link href="#">Logo design</Link>
          <Link href="#">Stylescaping</Link>
          <Link href="#">Visual identity design</Link>
          <Link href="#">Styleguides</Link>
          <Link href="#">Stationary</Link>
          <Link href="#">Brand collateral</Link>
          <Link href="#">Packaging</Link>
          <Link href="#">Print</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;

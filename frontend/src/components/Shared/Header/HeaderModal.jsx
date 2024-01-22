"use client";
import Link from "next/link";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { ImLinkedin2 } from "react-icons/im";

const HeaderModal = ({ openHeaderModal, setOpenHeaderModal }) => {
  const [activeTab, setActiveTab] = useState("services");
  return (
    <div
      className={`hidden lg:block absolute transition-all duration-300 z-50 ${
        openHeaderModal
          ? "top-0 left-0 bottom-0 right-0 w-full"
          : "-top-[120%] right-0 w-0"
      } min-h-fit bg-black text-white px-[150px] overflow-x-hidden`}
    >
      <div className="py-[50px] flex items-center justify-between gap-5">
        <Link href="/">
          <img src="/images/logo-light.png" alt="logo" className="w-14" />
        </Link>
        <GrClose
          onClick={() => setOpenHeaderModal(false)}
          className="cursor-pointer text-2xl"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 py-20">
        <div className="flex flex-col gap-16 text-lg lg:w-[30%]">
          <Link
            href="#"
            className="transition-all border-b border-transparent hover:border-white"
          >
            About omen.studio
          </Link>
          <Link
            href="#"
            className="transition-all border-b border-transparent hover:border-white"
          >
            Our manifesto
          </Link>
          <Link
            href="#"
            className="transition-all border-b border-transparent hover:border-white"
          >
            Work with us
          </Link>
        </div>
        <div className="flex flex-col gap-16 text-[70px] xl:text-[80px] w-[30%] -mt-7">
          <Link
            href="#"
            className=""
            onMouseEnter={() => setActiveTab("services")}
          >
            Services
          </Link>
          <Link href="#" className="" onMouseEnter={() => setActiveTab("work")}>
            Work
          </Link>
          <Link href="#" className="">
            Contact
          </Link>
        </div>
        <div className="w-[40%] relative">
          <div
            className={`transition-all duration-300 absolute ${
              activeTab === "services"
                ? "right-0 left-0"
                : "-right-[500%] xl:-right-[300%]"
            } flex flex-col gap-12 text-lg`}
          >
            <Link
              href="#"
              className="transition-all border-b border-transparent hover:border-white flex items-center gap-14 pb-2 w-fit"
            >
              <span>00</span>
              <span className="text-3xl">Branding</span>
            </Link>
            <Link
              href="#"
              className="transition-all border-b border-transparent hover:border-white flex items-center gap-14 pb-2 w-fit"
            >
              <span>01</span>
              <span className="text-3xl">UX - UI design</span>
            </Link>
            <Link
              href="#"
              className="transition-all border-b border-transparent hover:border-white flex items-center gap-14 pb-2 w-fit"
            >
              <span>02</span>
              <span className="text-3xl">Web development</span>
            </Link>
          </div>

          <div
            className={`transition-all duration-300 absolute ${
              activeTab === "work"
                ? "right-0 left-0"
                : "-right-[500%] xl:-right-[300%]"
            } flex flex-col gap-12 text-lg`}
          >
            <img src="/images/work-thumbnail.jpg" alt="thumbnail" />
          </div>
        </div>
      </div>

      <div className="py-11 border-t border-white text-white flex gap-5 justify-between flex-wrap items-center">
        <div className="flex items-center gap-10">
          <span className="font-extralight text-2xl">Visit our coworking</span>
          <img src="/images/footer.svg" alt="footer" />
        </div>
        <div className="flex items-center gap-14">
          <span className="font-extralight text-2xl">Follow us</span>
          <Link
            href="#"
            className="p-2 rounded border border-white transition-all hover:opacity-70"
          >
            <ImLinkedin2 className="text-2xl cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderModal;

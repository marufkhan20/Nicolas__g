"use client";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [openHeaderModal, setOpenHeaderModal] = useState(false);

  useEffect(() => {
    // GSAP animation code
    gsap.from(".header", { opacity: 0, duration: 1, y: 50 });
    gsap.to(".header", { opacity: 1, duration: 1, y: 0 });
  }, []);
  return (
    <>
      <header className="absolute header top-0 left-0 right-0 w-full flex items-center gap-5 z-20 justify-between px-5 xl:px-[150px] py-[50px]">
        <Link href="/">
          <img className="w-14" src="/images/logo.webp" alt="logo" />
        </Link>
        <nav>
          <ul className="flex items-center gap-20">
            <li className="font-extralight text-[18px] transition-all border-b border-transparent hover:border-secondary text-secondary hidden sm:block">
              <Link href="/services">Services</Link>
            </li>
            <li className="font-extralight text-[18px] transition-all border-b border-transparent hover:border-secondary text-secondary hidden sm:block">
              <Link href="/works">Work</Link>
            </li>
            <li className="font-extralight text-[18px] transition-all border-b border-transparent hover:border-secondary text-secondary hidden sm:block">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <li
          className="block sm:hidden font-extralight text-[18px] transition-all text-secondary"
          onClick={() => setOpenHeaderModal(true)}
        >
          <HiMiniBars3BottomRight className="cursor-pointer text-2xl" />
        </li>
      </header>

      <div
        className={`block sm:hidden ${
          openHeaderModal ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-all duration-300 fixed inset-0 w-full h-full z-50 bg-primary-light`}
      >
        <div className="mt-5 flex justify-end w-full px-10 text-2xl">
          <IoMdClose
            className="cursor-pointer"
            onClick={() => setOpenHeaderModal(false)}
          />
        </div>
        <nav>
          <ul className="flex items-center flex-col gap-5 mt-20">
            <li className="font-extralight text-[22px] transition-all border-b border-transparent hover:border-secondary text-secondary">
              <Link href="/services">Services</Link>
            </li>
            <li className="font-extralight text-[22px] transition-all border-b border-transparent hover:border-secondary text-secondary">
              <Link href="/works">Work</Link>
            </li>
            <li className="font-extralight text-[22px] transition-all border-b border-transparent hover:border-secondary text-secondary">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* <HeaderModal
        openHeaderModal={openHeaderModal}
        setOpenHeaderModal={setOpenHeaderModal}
      /> */}
    </>
  );
};

export default Header;

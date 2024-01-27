"use client";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import HeaderModal from "./HeaderModal";

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
            <li
              className="font-extralight text-[18px] transition-all text-secondary"
              onClick={() => setOpenHeaderModal(true)}
            >
              <HiMiniBars3BottomRight className="cursor-pointer text-2xl" />
            </li>
          </ul>
        </nav>
      </header>

      <HeaderModal
        openHeaderModal={openHeaderModal}
        setOpenHeaderModal={setOpenHeaderModal}
      />
    </>
  );
};

export default Header;

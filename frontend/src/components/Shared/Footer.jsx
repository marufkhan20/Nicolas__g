"use client";
import useAnimation from "@/hooks/useAnimation";
import Link from "next/link";
import { ImLinkedin2 } from "react-icons/im";

const Footer = () => {
  const sectionRef = useAnimation();
  return (
    <footer className="font-sans px-5 sm:px-0 bg-primary-light pt-5">
      <div className="container" ref={sectionRef}>
        <div className="mt-[50px]">
          <img src="/images/footer-logo.svg" alt="footer logo" />
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-[60px] mb-[70px]">
          <div className="w-full lg:w-[35%]">
            <h4 className="text-[25px] mb-[60px] sm:w-[60%]">
              omen. is a strategic design and development studio based In
              Brussels, Belgium.
            </h4>
            <div className="p-2 rounded border border-secondary transition-all hover:opacity-70 w-fit h-fit cursor-pointer">
              <ImLinkedin2 className="text-2xl leading-none cursor-pointer" />
            </div>
          </div>

          <div className="w-full lg:w-[65%] grid sm:grid-cols-2 md:grid-cols-3 gap-5 flex-wrap">
            <div>
              <Link href="#" className="text-[44px] mb-5 block">
                Services
              </Link>
              <ul className="flex flex-col gap-3">
                <li className="text-[28px] font-light">
                  <Link href="#">Branding</Link>
                </li>
                <li className="text-[28px] font-light">
                  <Link href="#">UX-UI Design</Link>
                </li>
                <li className="text-[28px] font-light">
                  <Link href="#">Web development</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-5">
                <Link href="#" className="text-[44px] block">
                  Services
                </Link>
                <Link href="#" className="text-[44px] block">
                  About
                </Link>
                <Link href="#" className="text-[44px] block">
                  Team
                </Link>
              </ul>
            </div>
            <div>
              <Link href="#" className="text-[44px] mb-5 block">
                Contact
              </Link>
              <ul className="flex flex-col gap-3">
                <li className="text-[26px] font-light">Tom +32 479 26 15 32</li>
                <li className="text-[26px] font-light">tom@omen.studio</li>
                <li className="text-[26px] font-light">
                  Rue Gheude 19, Anderlecht
                </li>
              </ul>
              <div className="mt-8">
                <img
                  className="w-[160px] img-white"
                  src="/images/footer-dark.svg"
                  alt="footer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary py-10 flex items-center justify-between gap-5 flex-wrap">
          <p className="text-lg">
            © 2023 OMEN – All rights reserved // BE 0713.668.590
          </p>
          <ul className="flex items-center gap-8">
            <Link href="#">Privacy Policy</Link>
            <img className="w-5" src="/images/border.svg" alt="" />
            <Link href="#">Cookies Policy</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

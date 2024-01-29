import { useEffect, useState } from "react";
import { BsFileEarmarkText } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoBriefcaseOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const { pathname } = useLocation();
  console.log("pathname", pathname);
  const [openMenu, setOpenMenu] = useState("home");
  const [openSubMenu, setOpenSubMenu] = useState("");

  useEffect(() => {
    if (pathname) {
      pathname?.includes("/services")
        ? setOpenMenu(1)
        : pathname?.includes("/cases")
        ? setOpenMenu(2)
        : pathname?.includes("/team-members")
        ? setOpenMenu(3)
        : setOpenMenu("home");

      pathname === "/forms/notice" && setOpenSubMenu(1);
      pathname === "/forms/notice/add-notice" && setOpenSubMenu(1);
      pathname === "/forms/credit-card" && setOpenSubMenu(2);
      pathname === "/forms/credit-card/add-credit-card" && setOpenSubMenu(2);
      pathname === "/campaign/notice" && setOpenSubMenu(3);
      pathname === "/campaign/credit-card" && setOpenSubMenu(4);
    }
  }, [pathname]);
  return (
    <>
      <div
        className={`hidden lg:block min-w-[280px] min-h-screen overflow-auto p-5 bg-white border-r`}
      >
        <h2 className="text-2xl">
          <Link to="/">TBM</Link>
        </h2>
        <ul className="mt-10 flex flex-col gap-1">
          <li>
            <Link
              to="/"
              className={`flex w-full items-center gap-3 px-3 py-2 rounded-[7px] transition-all ${
                openMenu === "home"
                  ? "bg-primary text-white"
                  : "hover:bg-[#ECF2FF] hover:text-primary"
              }`}
            >
              <FiHome className="text-lg" />
              <span>Home</span>
            </Link>
          </li>
          <li className="overflow-hidden">
            <span
              className={`flex w-full items-center justify-between gap-3 px-3 py-2 rounded-[7px] transition-all cursor-pointer ${
                openMenu === 1
                  ? "bg-primary text-white"
                  : "hover:bg-[#ECF2FF] hover:text-primary"
              }`}
              onClick={() => setOpenMenu(openMenu === 1 ? false : 1)}
            >
              <div className="flex items-center gap-3">
                <BsFileEarmarkText className="text-lg" />
                <span>Services</span>
              </div>
              <FaChevronDown
                className={`text-xs ${openMenu === 1 && "rotate-180"}`}
              />
            </span>
            <ul
              className={`transition-all ${openMenu === 1 ? "h-full" : "h-0"}`}
            >
              <li>
                <Link
                  to="/services"
                  className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                    openSubMenu === 1
                      ? "text-primary gap-5 active"
                      : "hover:gap-5 hover:text-primary"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                  <span>All Service</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/add-service"
                  className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                    openSubMenu === 2
                      ? "text-primary gap-5 active"
                      : "hover:gap-5 hover:text-primary"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                  <span>Add Service</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="overflow-hidden">
            <span
              className={`flex w-full items-center cursor-pointer justify-between gap-3 px-3 py-2 rounded-[7px] transition-all ${
                openMenu === 2
                  ? "bg-primary text-white"
                  : "hover:bg-[#ECF2FF] hover:text-primary"
              }`}
              onClick={() => setOpenMenu(openMenu === 2 ? false : 2)}
            >
              <div className="flex items-center gap-3">
                <IoBriefcaseOutline className="text-lg" />
                <span>Cases</span>
              </div>
              <FaChevronDown
                className={`text-xs ${openMenu === 2 && "rotate-180"}`}
              />
            </span>
            <ul
              className={`transition-all ${openMenu === 2 ? "h-full" : "h-0"}`}
            >
              <li>
                <Link
                  to="/cases"
                  className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                    openSubMenu === 3
                      ? "text-primary gap-5 active"
                      : "hover:gap-5 hover:text-primary"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                  <span>All Case</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/cases/add-case"
                  className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                    openSubMenu === 4
                      ? "text-primary gap-5 active"
                      : "hover:gap-5 hover:text-primary"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                  <span>Add Case</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="overflow-hidden">
            <span
              className={`flex w-full items-center cursor-pointer justify-between gap-3 px-3 py-2 rounded-[7px] transition-all ${
                openMenu === 3
                  ? "bg-primary text-white"
                  : "hover:bg-[#ECF2FF] hover:text-primary"
              }`}
              onClick={() => setOpenMenu(openMenu === 3 ? false : 3)}
            >
              <div className="flex items-center gap-3">
                <HiOutlineUserGroup className="text-lg" />
                <span>Team Members</span>
              </div>
              <FaChevronDown
                className={`text-xs ${openMenu === 3 && "rotate-180"}`}
              />
            </span>
            <ul
              className={`transition-all ${openMenu === 3 ? "h-full" : "h-0"}`}
            >
              <li>
                <Link
                  to="/team-members"
                  className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                    openSubMenu === 3
                      ? "text-primary gap-5 active"
                      : "hover:gap-5 hover:text-primary"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                  <span>All Member</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/team-members/add-member"
                  className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                    openSubMenu === 4
                      ? "text-primary gap-5 active"
                      : "hover:gap-5 hover:text-primary"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                  <span>Add Member</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* mobile sidebar */}
      <div
        className={`transition-all left-0 duration-300 top-0 bottom-0 fixed ${
          openSidebar ? "opacity-100 visible" : "opacity-0 invisible"
        } lg:hidden bg-gray-400/30 bg-blur z-50 w-full`}
        onClick={() => setOpenSidebar(false)}
      >
        <div
          className={`w-[280px] min-h-screen max-h-fit overflow-auto p-5 bg-white border-r`}
          onClick={(event) => event.stopPropagation()}
        >
          <h2 className="text-2xl">
            <Link to="/">TBM</Link>
          </h2>
          <ul className="mt-10 flex flex-col gap-1">
            <li>
              <Link
                to="/"
                className={`flex w-full items-center gap-3 px-3 py-2 rounded-[7px] transition-all ${
                  openMenu === "home"
                    ? "bg-primary text-white"
                    : "hover:bg-[#ECF2FF] hover:text-primary"
                }`}
              >
                <FiHome className="text-lg" />
                <span>Home</span>
              </Link>
            </li>
            <li className="overflow-hidden">
              <span
                className={`flex w-full items-center justify-between gap-3 px-3 py-2 rounded-[7px] transition-all cursor-pointer ${
                  openMenu === 1
                    ? "bg-primary text-white"
                    : "hover:bg-[#ECF2FF] hover:text-primary"
                }`}
                onClick={() => setOpenMenu(openMenu === 1 ? false : 1)}
              >
                <div className="flex items-center gap-3">
                  <BsFileEarmarkText className="text-lg" />
                  <span>Services</span>
                </div>
                <FaChevronDown
                  className={`text-xs ${openMenu === 1 && "rotate-180"}`}
                />
              </span>
              <ul
                className={`transition-all ${
                  openMenu === 1 ? "h-full" : "h-0"
                }`}
              >
                <li>
                  <Link
                    to="/services"
                    className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                      openSubMenu === 1
                        ? "text-primary gap-5 active"
                        : "hover:gap-5 hover:text-primary"
                    }`}
                  >
                    <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                    <span>All Service</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/add-service"
                    className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                      openSubMenu === 2
                        ? "text-primary gap-5 active"
                        : "hover:gap-5 hover:text-primary"
                    }`}
                  >
                    <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                    <span>Add Service</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="overflow-hidden">
              <span
                className={`flex w-full items-center cursor-pointer justify-between gap-3 px-3 py-2 rounded-[7px] transition-all ${
                  openMenu === 2
                    ? "bg-primary text-white"
                    : "hover:bg-[#ECF2FF] hover:text-primary"
                }`}
                onClick={() => setOpenMenu(openMenu === 2 ? false : 2)}
              >
                <div className="flex items-center gap-3">
                  <IoBriefcaseOutline className="text-lg" />
                  <span>Cases</span>
                </div>
                <FaChevronDown
                  className={`text-xs ${openMenu === 2 && "rotate-180"}`}
                />
              </span>
              <ul
                className={`transition-all ${
                  openMenu === 2 ? "h-full" : "h-0"
                }`}
              >
                <li>
                  <Link
                    to="/cases"
                    className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                      openSubMenu === 3
                        ? "text-primary gap-5 active"
                        : "hover:gap-5 hover:text-primary"
                    }`}
                  >
                    <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                    <span>All Case</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cases/add-case"
                    className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                      openSubMenu === 4
                        ? "text-primary gap-5 active"
                        : "hover:gap-5 hover:text-primary"
                    }`}
                  >
                    <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                    <span>Add Case</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="overflow-hidden">
              <span
                className={`flex w-full items-center cursor-pointer justify-between gap-3 px-3 py-2 rounded-[7px] transition-all ${
                  openMenu === 3
                    ? "bg-primary text-white"
                    : "hover:bg-[#ECF2FF] hover:text-primary"
                }`}
                onClick={() => setOpenMenu(openMenu === 3 ? false : 3)}
              >
                <div className="flex items-center gap-3">
                  <HiOutlineUserGroup className="text-lg" />
                  <span>Team Members</span>
                </div>
                <FaChevronDown
                  className={`text-xs ${openMenu === 3 && "rotate-180"}`}
                />
              </span>
              <ul
                className={`transition-all ${
                  openMenu === 3 ? "h-full" : "h-0"
                }`}
              >
                <li>
                  <Link
                    to="/team-members"
                    className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                      openSubMenu === 3
                        ? "text-primary gap-5 active"
                        : "hover:gap-5 hover:text-primary"
                    }`}
                  >
                    <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                    <span>All Member</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team-members/add-member"
                    className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                      openSubMenu === 4
                        ? "text-primary gap-5 active"
                        : "hover:gap-5 hover:text-primary"
                    }`}
                  >
                    <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                    <span>Add Member</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

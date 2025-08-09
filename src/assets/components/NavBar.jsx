import { useEffect, useRef, useState } from "react";
import Logo from "../imgs/logo.png";
import Profile from "../imgs/profile_img.png";
import { CiBellOn } from "react-icons/ci";
import { FaSearch, FaCaretDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { logOut } from "../../firebase";

const NavBar = () => {
  const nevMenu = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv-shows" },
    { name: "Movies", link: "/movies" },
    { name: "Latest & Popular", link: "/latest" },
    { name: "My List", link: "/my-list" },
    { name: "Browse by Languages", link: "/languages" },
  ];
  // 1. Separate states for mobile menu and profile dropdown for clarity and better control.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-4 md:px-[6%] py-3 md:py-5 flex items-center justify-between text-[#e5e5e5] font-poppins transitionAll ${
          isScrolled ? "bg-black" : "bg-gradient-to-b from-black/80 to-black/5"
        }`}
      >
        {/* Left: Logo & Menu */}
        <div className="flex items-center gap-4 md:gap-12">
          <img
            src={Logo}
            alt="Netflix Logo"
            className="w-20 md:w-[90px] object-contain"
          />
          <ul className="hidden md:flex gap-5">
            {nevMenu?.map((item, index) => (
              <li
                key={item.link || index}
                className="navLink cursor-pointer hover:text-white transition-colors duration-200"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 md:gap-5">
          <FaSearch className="text-xl cursor-pointer hover:text-white transition-colors duration-200 hidden sm:block" />
          <p className="text-sm font-medium cursor-pointer hover:text-white transition-colors duration-200 hidden sm:block">
            Children
          </p>
          <CiBellOn className="text-xl cursor-pointer font-extrabold hover:text-white transition-colors duration-200 hidden sm:block" />

          {/* Profile Dropdown (Desktop) */}
          <div
            className="relative hidden md:flex items-center cursor-pointer group"
            onMouseEnter={() => setIsProfileMenuOpen(true)}
            onMouseLeave={() => setIsProfileMenuOpen(false)}
          >
            <img
              src={Profile}
              alt="Profile"
              className="rounded-md w-8 border-2 border-transparent group-hover:border-white transition-all duration-300"
            />
            <FaCaretDown className="text-xl ml-1 transition-transform duration-300 group-hover:rotate-180" />

            {/* Sign Out Dropdown */}
            <div
              className={`absolute right-0 top-8 p-4 w-[150px] transition-all duration-300 ${
                isProfileMenuOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <button
                className="w-full text-left py-2 px-4 bg-red-700 text-white hover:bg-red-800 rounded-md font-semibold transition-colors duration-200 cursor-pointer"
                onClick={() => {
                  logOut();
                }}
              >
                Sign Out
              </button>
            </div>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              className="text-2xl focus:outline-none"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <IoClose size={30} />
              ) : (
                <RxHamburgerMenu size={28} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/95 z-40 transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-2 p-6 pt-24">
          {nevMenu?.map((item, index) => (
            <li
              key={item.link || index}
              className="navLink cursor-pointer hover:text-white text-lg py-3 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </li>
          ))}
          <li className="mt-6">
            <button
              className="w-full text-center py-3 rounded bg-gradient-to-r from-red-600 to-red-400 text-white font-semibold hover:from-red-700 hover:to-red-500 transition-all duration-200 shadow-md"
              onClick={() => {
                logOut();
              }}
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;

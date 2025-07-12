import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { MobileNavbarLinks } from "./mobile-navbar-links";
import Link from "next/link";

const myFont = localFont({
  src: "../tt_trailer.ttf",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export function Navbar() {
  return (
    <nav
      className={`${inter.variable} navbar morphic-effect sticky top-0 w-full z-50 shadow-md`}
    >
      <div className="w-full mx-auto px-3 lg:px-10 flex items-center justify-between h-16">
        {/* <!-- Logo --> */}
        <div className="flex-shrink-0 flex items-center">
          <div className="flex items-center">
            <i className="fas fa-cube text-gray-800 text-2xl"></i>
            <span className={`${myFont.className} ml-2 text-3xl text-gray-800`}>
              CSE Archive
            </span>
          </div>
        </div>
        <DesktopNavbarLinks />
        <MobileNavbarLinks />
      </div>
    </nav>
  );
}

function DesktopNavbarLinks() {
  return (
    <div className={`${inter.variable} desktop-menu hidden lg:block`}>
      <div className="flex items-baseline space-x-2">
        {/* <!-- Nav Item 1 --> */}
        <div className="nav-item relative">
          <button className="text-gray-700 hover:text-indigo-600 hover:bg-gray-200 px-3.5 py-2.5 rounded-md text-sm font-medium transition-all duration-500 flex items-center">
            Resources
            <i className="fas fa-chevron-down ml-1 text-xs"></i>
          </button>
          <div className="dropdown absolute left-0 mt-3 w-40 rounded-md shadow-lg bg-white z-50">
            <Link
              href="/resources/1st"
              className="block w-full px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              1<sup>st</sup> year
            </Link>
            <Link
              href="/resources/2nd"
              className="block w-full px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              2<sup>nd</sup> Year
            </Link>
            <Link
              href="/resources/3rd"
              className="block w-full px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              3<sup>rd</sup> Year
            </Link>
            <Link
              href="/resources/4th"
              className="block w-full px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              4<sup>th</sup> Year
            </Link>
          </div>
        </div>

        {/* <!-- Nav Item 2 --> */}
        <div className="nav-item relative">
          <button className="text-gray-700 hover:text-indigo-600 hover:bg-gray-200 px-3.5 py-2.5 rounded-md text-sm font-medium 5 flex items-center">
            Book shelf
            <i className="fas fa-chevron-down ml-1 text-xs"></i>
          </button>
          <div className="dropdown absolute left-0 mt-3 w-48 rounded-md shadow-lg bg-white z-50">
            <Link
              href="#"
              className="block w-full px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Physics
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Chemistry
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Maths
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              CSE
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Hardware
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Productivity
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              English
            </Link>
          </div>
        </div>

        {/* <!-- Nav Item 3 --> */}
        <div className="nav-item relative">
          <button className="text-gray-700 hover:text-indigo-600 hover:bg-gray-200 px-3.5 py-2.5 rounded-md text-sm font-medium 5 flex items-center">
            Code Library
          </button>
        </div>

        {/* <!-- Nav Item 4 --> */}
        <div className="nav-item relative">
          <button className="text-gray-700 hover:text-indigo-600 hover:bg-gray-200 px-3.5 py-2.5 rounded-md text-sm font-medium 5 flex items-center">
            Global Ruet
          </button>
        </div>

        {/* <!-- Nav Item 5 --> */}
        <div className="nav-item relative">
          <button className="text-gray-700 hover:text-indigo-600 hover:bg-gray-200 px-3.5 py-2.5 rounded-md text-sm font-medium transition-all duration-500 flex items-center">
            Contact & Help
            <i className="fas fa-chevron-down ml-1 text-xs"></i>
          </button>
          <div className="dropdown absolute left-0 mt-3 w-48 rounded-md shadow-lg bg-white z-50">
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Email
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Official Website
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Facebook Page 1
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Facebook Page 2
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Facebook Page 3
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              About developers
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Why this?
            </Link>
          </div>
        </div>

        {/* <!-- Nav Item 6 --> */}
        <div className="nav-item relative">
          <button className="text-gray-700 hover:text-indigo-600 hover:bg-gray-200 px-3.5 py-2.5 rounded-md text-sm font-medium 5 flex items-center">
            Informations
            {/* <!-- <i className="fas fa-chevron-down ml-1 text-xs"></i> --> */}
          </button>
        </div>
      </div>
    </div>
  );
}

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";

import { MobileNavbarLinks } from "./mobile-navbar-links";

// const myFont = localFont({
//   src: "../tt_trailer.ttf",
// });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export function Navbar() {
  return (
    <nav
      className={`${inter.variable} bg-[#ffffff] dark:bg-[#071a26] navbar morphic-effect sticky top-0 w-full z-50 shadow-md`}
    >
      <div className="w-full mx-auto px-3 lg:px-10 flex items-center justify-between h-[70px]">
        {/* <!-- Logo  --> */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex items-center">
            <Image src={"/images/logo.png"} alt="logo" width={80} height={80} />
            {/* <i className="fas fa-cube text-gray-800 text-2xl"></i> */}
            {/* <span className={`${myFont.className} ml-2 text-3xl text-gray-800`}>
              CSE Archive
            </span> */}
          </Link>
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
      <div className="flex items-baseline space-x-6 text-gray-700 dark:text-gray-200 ">
        {/* <!-- Nav Item 1 --> */}
        <div className="nav-item relative">
          <Link
            href="/resources"
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:bg-gray-200 dark:hover:bg-gray-800 px-3.5 py-2.5 rounded-md text-sm font-medium transition-all duration-500 flex items-center"
          >
            Resources
          </Link>
        </div>

        {/* <!-- Nav Item 2 --> */}
        <div className="nav-item relative">
          <button className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:bg-gray-200 dark:hover:bg-gray-800 px-3.5 py-2.5 rounded-md text-sm font-medium 5 flex items-center">
            Book shelf
            <i className="fas fa-chevron-down ml-1 text-xs"></i>
          </button>
          <div className="dropdown morphic-effect absolute left-0 mt-3 w-48 rounded-md shadow-lg bg-white dark:bg-[#071a26] z-50">
            <Link
              href="#"
              className="block w-full px-4 py-2 rounded text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-indigo-600"
            >
              Physics
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-indigo-600"
            >
              Chemistry
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-indigo-600"
            >
              Maths
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-indigo-600"
            >
              CSE
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-indigo-600"
            >
              Hardware
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-indigo-600"
            >
              Productivity
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-indigo-600"
            >
              English
            </Link>
          </div>
        </div>

        {/* <!-- Nav Item 3 --> */}
        <div className="nav-item relative">
          <Link
            href="/codelibrary"
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:bg-gray-200 dark:hover:bg-gray-800 px-3.5 py-2.5 rounded-md text-sm font-medium 5 flex items-center"
          >
            Code Library
          </Link>
        </div>

        {/* <!-- Nav Item 4 --> */}
        <div className="nav-item relative">
          <Link
            href="/alumni"
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:bg-gray-200 dark:hover:bg-gray-800 px-3.5 py-2.5 rounded-md text-sm font-medium 5 flex items-center"
          >
            Global Ruet
          </Link>
        </div>

        {/* <!-- Nav Item 5 --> */}
        <div className="nav-item relative">
          <button className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:bg-gray-200 dark:hover:bg-gray-800 px-3.5 py-2.5 rounded-md text-sm font-medium transition-all duration-500 flex items-center">
            Contact & Help
            <i className="fas fa-chevron-down ml-1 text-xs"></i>
          </button>
          <div className="dropdown morphic-effect absolute left-0 mt-3 w-44 rounded-md shadow-lg bg-white dark:bg-[#071a26] z-50">
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-indigo-600"
            >
              Email
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-indigo-600"
            >
              Official Website
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-indigo-600"
            >
              Facebook Page
            </Link>

            <Link
              href="/contact/developers"
              className="block px-4 py-2 rounded text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-indigo-600"
            >
              About developers
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-indigo-600"
            >
              Why this?
            </Link>
          </div>
        </div>

        {/* <div className="nav-item relative">
          <button className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:bg-gray-200 dark:hover:bg-gray-800 px-3.5 py-2.5 rounded-md text-sm font-medium 5 flex items-center">
            Informations
            <i className="fas fa-chevron-down ml-1 text-xs"></i> 
          </button>
        </div>  */}
      </div>
    </div>
  );
}

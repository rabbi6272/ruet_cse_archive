import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { MobileNavbar } from "./mobile-navbar";

const myFont = localFont({
  src: "./tt_trailer.ttf",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export function Navbar() {
  return (
    <nav
      className={`${inter.variable} navbar morphic-effect fixed top-0 w-full z-50 shadow-md`}
    >
      <div className="w-full mx-auto px-3 lg:px-14 flex items-center justify-between h-16">
        {/* <!-- Logo --> */}
        <div className="flex-shrink-0 flex items-center">
          <div className="flex items-center">
            <i className="fas fa-cube text-gray-800 text-2xl"></i>
            <span className={`${myFont.className} ml-2 text-3xl text-gray-800`}>
              CSE Archive
            </span>
          </div>
        </div>
        <DesktopNavbar />
        <MobileNavbar />
      </div>
    </nav>
  );
}

function DesktopNavbar() {
  return (
    <div className={`${inter.variable} desktop-menu hidden lg:block`}>
      <div className=" flex items-baseline space-x-8">
        {/* <!-- Nav Item 1 --> */}
        <div className="nav-item relative">
          <button className="text-gray-700 hover:text-indigo-600 hover:bg-gray-200 px-3.5 py-2.5 rounded-md text-sm font-medium transition-all duration-500 flex items-center">
            Resources
            <i className="fas fa-chevron-down ml-1 text-xs"></i>
          </button>
          <div className="dropdown absolute left-0 mt-3 w-48 rounded-md shadow-lg bg-white z-50">
            <a
              href="#"
              className="block w-full px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              1<sup>st</sup> year
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              2<sup>nd</sup> Year
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              3<sup>rd</sup> Year
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              4<sup>th</sup> Year
            </a>
          </div>
        </div>

        {/* <!-- Nav Item 2 --> */}
        <div className="nav-item relative">
          <button className="text-gray-700 hover:text-indigo-600 hover:bg-gray-200 px-3.5 py-2.5 rounded-md text-sm font-medium 5 flex items-center">
            Book shelf
            <i className="fas fa-chevron-down ml-1 text-xs"></i>
          </button>
          <div className="dropdown absolute left-0 mt-3 w-56 rounded-md shadow-lg bg-white z-50">
            <a
              href="#"
              className="block w-full px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Physics
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Chemistry
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Maths
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              CSE
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Hardware
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Productivity
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              English
            </a>
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
          <button className="text-gray-700 hover:text-indigo-600 hover:bg-gray-200 px-3.5 py-2.5 rounded-md text-sm font-medium 5 flex items-center">
            Informations
            {/* <!-- <i className="fas fa-chevron-down ml-1 text-xs"></i> --> */}
          </button>
        </div>

        {/* <!-- Nav Item 6 --> */}
        <div className="nav-item relative">
          <button className="text-gray-700 hover:text-indigo-600 hover:bg-gray-200 px-3.5 py-2.5 rounded-md text-sm font-medium transition-all duration-500 flex items-center">
            Contact & Help
            <i className="fas fa-chevron-down ml-1 text-xs"></i>
          </button>
          <div className="dropdown absolute left-0 mt-3 w-48 rounded-md shadow-lg bg-white z-50">
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Email
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Official Website
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Facebook Page 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Facebook Page 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Facebook Page 3
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              About developers
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Why this?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// function MobileNavbar() {
//   return (
//     <div className={`${inter.variable} mobile-menu md:hidden block relative`}>
//       <i
//         className="fas fa-bars text-gray-800 text-2xl cursor-pointer p-3 rounded-lg hover:bg-gray-200 transition duration-500"
//         onClick={() => setIsOpen(!isOpen)}
//       ></i>

//       <div className={`${isOpen ? "block" : "hidden"} `}>
//         <div className="w-full absolute top-0">
//           {/* <!-- Mobile Nav Item 1 --> */}
//           <div className="relative">
//             <button className="mobile-dropdown-btn text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center">
//               Products
//               <i className="fas fa-chevron-down text-sm"></i>
//             </button>
//             <div className="mobile-dropdown hidden pl-4">
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
//               >
//                 Product 1
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
//               >
//                 Product 2
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
//               >
//                 Product 3
//               </a>
//             </div>
//           </div>

//           {/* <!-- Mobile Nav Item 2 --> */}
//           <div className="relative">
//             <button className="mobile-dropdown-btn text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center">
//               Solutions
//               <i className="fas fa-chevron-down text-sm"></i>
//             </button>
//             <div className="mobile-dropdown hidden pl-4">
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
//               >
//                 Solution for Business
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
//               >
//                 Solution for Education
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
//               >
//                 Solution for Healthcare
//               </a>
//             </div>
//           </div>

//           {/* <!-- Mobile Nav Item 3 --> */}
//           <div className="relative">
//             <button className="mobile-dropdown-btn text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center">
//               Resources
//               <i className="fas fa-chevron-down text-sm"></i>
//             </button>
//             <div className="mobile-dropdown hidden pl-4">
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
//               >
//                 Documentation
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
//               >
//                 Tutorials
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
//               >
//                 API Reference
//               </a>
//             </div>
//           </div>

//           {/* <!-- Mobile Nav Item 4 --> */}
//           <div className="relative">
//             <button className="mobile-dropdown-btn text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center">
//               Community
//               <i className="fas fa-chevron-down text-sm"></i>
//             </button>
//             <div className="mobile-dropdown hidden pl-4">
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
//               ></a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
//               >
//                 Pro
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
//               >
//                 Enterprise
//               </a>
//             </div>
//           </div>

//           {/* <!-- Mobile Nav Item 5 --> */}
//           <div className="relative">
//             <button className="mobile-dropdown-btn text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center">
//               Company
//               <i className="fas fa-chevron-down text-sm"></i>
//             </button>
//             <div className="mobile-dropdown hidden pl-4">
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
//               >
//                 About Us
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
//               >
//                 Careers
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
//               >
//                 Contact
//               </a>
//             </div>
//           </div>

//           {/* <!-- Mobile Nav Item 6 --> */}
//           <div className="relative">
//             <button className="mobile-dropdown-btn text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center">
//               Support
//               <i className="fas fa-chevron-down text-sm"></i>
//             </button>
//             <div className="mobile-dropdown hidden pl-4">
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
//               >
//                 Help Center
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
//               >
//                 Community
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
//               >
//                 Status
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

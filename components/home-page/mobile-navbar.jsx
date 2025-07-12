"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const mobileNavItems = [
  {
    label: "Resources",
    subItems: [
      { name: "1st Year", href: "/resources/1st" },
      { name: "2nd Year", href: "/resources/2nd" },
      { name: "3rd Year", href: "/resources/3rd" },
      { name: "4th Year", href: "/resources/4th" },
    ],
  },
  {
    label: "Book shelf",
    subItems: [
      { name: "Physics", href: "/books/physics" },
      { name: "Chemistry", href: "/books/chemistry" },
      { name: "Maths", href: "/books/maths" },
      { name: "CSE", href: "/books/cse" },
      { name: "Hardware", href: "/books/hardware" },
      { name: "Productivity", href: "/books/productivity" },
      { name: "English", href: "/books/english" },
    ],
  },
  { label: "Code Library", href: "/code" },
  { label: "Global Ruet", href: "/global" },
  { label: "Informations", href: "/info" },
  {
    label: "Contact & Help",
    subItems: [
      { name: "Email", href: "/contact/email" },
      { name: "Official Website", href: "/contact/website" },
      { name: "Facebook Page 1", href: "/contact/fb1" },
      { name: "Facebook Page 2", href: "/contact/fb2" },
      { name: "Facebook Page 3", href: "/contact/fb3" },
      { name: "About Developers", href: "/contact/about" },
      { name: "Why this?", href: "/contact/why" },
    ],
  },
];

export function MobileNavbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpenDropdown(null);
        setIsNavOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <div className={`${inter.variable} block lg:hidden`}>
      <button ref={buttonRef} onClick={() => setIsNavOpen(!isNavOpen)}>
        <i className="fas fa-bars text-gray-800 text-2xl cursor-pointer p-3 rounded-lg hover:bg-gray-200 transition duration-500"></i>
      </button>

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            ref={navRef}
            className="fixed top-0 left-0 w-full  bg-white z-40 p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold">Menu</h3>
              <button onClick={() => setIsNavOpen(!isNavOpen)}>
                <i className="fas fa-xmark text-gray-600 text-xl cursor-pointer "></i>
              </button>
            </div>
            <div className="flex flex-col space-y-2">
              {mobileNavItems.map((item, index) => (
                <div key={item.label} className="nav-item relative py-1">
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="w-full text-left text-gray-700 hover:text-indigo-600 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium transition-all duration-500 flex items-center justify-between"
                      >
                        {item.label}
                        <i className="fas fa-chevron-down ml-2 text-xs"></i>
                      </button>
                      <AnimatePresence>
                        {openDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="pl-4"
                          >
                            {item.subItems.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="block w-full px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-700 hover:text-indigo-600 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium transition-all duration-500"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// "use client";

// import {
//   Drawer,
//   DrawerHeader,
//   DrawerItems,
//   Sidebar,
//   SidebarItem,
//   SidebarItemGroup,
//   SidebarItems,
// } from "flowbite-react";
// import { useState } from "react";

// export function MobileNavbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClose = () => setIsOpen(false);

//   return (
//     <div className="block lg:hidden">
//       <div className="flex flex-col items-center justify-center">
//         <button onClick={() => setIsOpen(!isOpen)}>
//           <i className="fas fa-bars text-gray-800 text-2xl cursor-pointer p-3 rounded-lg hover:bg-gray-200 transition duration-500"></i>
//         </button>
//       </div>

//       <Drawer open={isOpen} onClose={handleClose} backdrop={true} color="black">
//         <DrawerHeader title="MENU" titleIcon={() => <></>} />
//         <DrawerItems>
//           <Sidebar
//             aria-label="Sidebar with multi-level dropdown example"
//             className="[&>div]:bg-transparent [&>div]:p-0"
//           >
//             <div className="flex h-full flex-col justify-between py-2">
//               <div>
//                 <SidebarItems>
//                   <SidebarItemGroup>
//                     <SidebarItem href="/">Dashboard</SidebarItem>
//                     <SidebarItem href="/e-commerce/products">
//                       Products
//                     </SidebarItem>
//                     <SidebarItem href="/users/list">Users list</SidebarItem>
//                     <SidebarItem href="/authentication/sign-in">
//                       Sign in
//                     </SidebarItem>
//                     <SidebarItem href="/authentication/sign-up">
//                       Sign up
//                     </SidebarItem>
//                   </SidebarItemGroup>
//                   <SidebarItemGroup>
//                     <SidebarItem href="https://github.com/themesberg/flowbite-react/">
//                       Docs
//                     </SidebarItem>
//                     <SidebarItem href="https://flowbite-react.com/">
//                       Components
//                     </SidebarItem>
//                     <SidebarItem href="https://github.com/themesberg/flowbite-react/issues">
//                       Help
//                     </SidebarItem>
//                   </SidebarItemGroup>
//                 </SidebarItems>
//               </div>
//             </div>
//           </Sidebar>
//         </DrawerItems>
//       </Drawer>
//     </div>
//   );
// }

"use client";
import localFont from "next/font/local";
import Image from "next/image";

import Link from "next/link";

const myFont = localFont({
  src: "../tt_trailer.ttf",
});

export function FooterComponent() {
  return (
    <footer
      data-testid="flowbite-footer"
      className="morphic-effect bg-morphic-light bg-[#ffffffe6] dark:bg-[#071a26] rounded-lg shadow-sm md:flex md:items-center md:justify-between w-full p-6 lg:px-14 lg:py-6"
    >
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex items-center pb-6 lg:pb-0">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={120}
              height={120}
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2
                data-testid="flowbite-footer-title"
                className="mb-6 text-sm font-semibold uppercase text-gray-600 dark:text-gray-200"
              >
                about
              </h2>
              <ul
                data-testid="footer-groupLink"
                className="flex flex-wrap text-sm text-gray-600 dark:text-gray-200 flex-col space-y-4"
              >
                <li className="me-4 last:mr-0 md:mr-6">
                  <Link href="#" className="hover:underline">
                    RUET
                  </Link>
                </li>
                <li className="me-4 last:mr-0 md:mr-6">
                  <Link href="#" className="hover:underline">
                    RUET CSE (sec c)
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2
                data-testid="flowbite-footer-title"
                className="mb-6 text-sm font-semibold uppercase text-gray-600 dark:text-gray-200"
              >
                Follow us
              </h2>
              <ul
                data-testid="footer-groupLink"
                className="flex flex-wrap text-sm text-gray-600 dark:text-gray-200 flex-col space-y-4"
              >
                <li className="me-4 last:mr-0 md:mr-6">
                  <Link href="#" className="hover:underline">
                    Github
                  </Link>
                </li>
                <li className="me-4 last:mr-0 md:mr-6">
                  <Link href="#" className="hover:underline">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2
                data-testid="flowbite-footer-title"
                className="mb-6 text-sm font-semibold uppercase text-gray-600 dark:text-gray-200"
              >
                Legal
              </h2>
              <ul
                data-testid="footer-groupLink"
                className="flex flex-wrap text-sm text-gray-600 dark:text-gray-200 flex-col space-y-4"
              >
                <li className="me-4 last:mr-0 md:mr-6">
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="me-4 last:mr-0 md:mr-6">
                  <Link href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr
          data-testid="footer-divider"
          className="my-6 w-full border-gray-700 dark:border-gray-200 sm:mx-auto lg:my-8"
        ></hr>
        <div className="w-full text-center sm:flex sm:items-center sm:justify-between">
          <div
            data-testid="flowbite-footer-copyright"
            className="text-sm text-gray-600 dark:text-gray-200 sm:text-center "
          >
            ©2025
            <Link href="#" className="ml-1 hover:underline">
              Avengers(sec c)™
            </Link>
          </div>
          <div className="mt-4 flex  space-x-6 sm:mt-0 justify-center">
            <a target="_blank" href="">
              <i className="fa-brands fa-facebook text-gray-600 dark:text-gray-200 text-2xl"></i>
            </a>
            <a target="_blank" href="">
              <i className="fa-brands fa-instagram text-gray-600 dark:text-gray-200 text-2xl"></i>
            </a>
            <a target="_blank" href="">
              <i className="fa-brands fa-twitter text-gray-600 dark:text-gray-200 text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// <Footer container color="white">
//   <div classNameName="w-full">
//     <div classNameName="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
//       {/* Logo */}
//       <div className="flex items-center pb-6 lg:pb-0">
//         <i className="fas fa-cube text-gray-800  text-3xl"></i>
//         <span
//           className={`${myFont.className} ml-2 text-4xl text-gray-800 `}
//         >
//           CSE Archive
//         </span>
//       </div>

//       <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
//         <div>
//           <FooterTitle title="about" />
//           <FooterLinkGroup col>
//             <FooterLink href="#">RUET</FooterLink>
//             <FooterLink href="#">RUET CSE (sec c)</FooterLink>
//           </FooterLinkGroup>
//         </div>
//         <div>
//           <FooterTitle title="Follow us" />
//           <FooterLinkGroup col>
//             <FooterLink href="#">Github</FooterLink>
//             <FooterLink href="#">Discord</FooterLink>
//           </FooterLinkGroup>
//         </div>
//         <div>
//           <FooterTitle title="Legal" />
//           <FooterLinkGroup col>
//             <FooterLink href="#">Privacy Policy</FooterLink>
//             <FooterLink href="#">Terms &amp; Conditions</FooterLink>
//           </FooterLinkGroup>
//         </div>
//       </div>
//     </div>
//     <FooterDivider />
//     <div className="w-full text-center sm:flex sm:items-center sm:justify-between">
//       <FooterCopyright href="#" by="Avengers(sec c)™" year={2025} />
//       <div className="mt-4 flex  space-x-6 sm:mt-0 justify-center">
//         <Link href={""} target="_blank">
//           <i className="fa-brands fa-facebook text-gray-600  text-2xl"></i>
//         </Link>
//         <Link href={""} target="_blank">
//           <i className="fa-brands fa-instagram text-gray-600  text-2xl"></i>
//         </Link>
//         <Link href={""} target="_blank">
//           <i className="fa-brands fa-twitter text-gray-600  text-2xl"></i>
//         </Link>
//       </div>
//     </div>
//   </div>
// </Footer>

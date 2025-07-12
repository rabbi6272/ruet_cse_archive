"use client";
import localFont from "next/font/local";
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import Link from "next/link";

const myFont = localFont({
  src: "../tt_trailer.ttf",
});

export function FooterComponent() {
  return (
    <Footer container color="white">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          {/* Logo */}
          <div className="flex items-center pb-6 lg:pb-0">
            <i className="fas fa-cube text-gray-800 dark:text-gray-100 text-3xl"></i>
            <span
              className={`${myFont.className} ml-2 text-4xl text-gray-800 dark:text-gray-100`}
            >
              CSE Archive
            </span>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="about" />
              <FooterLinkGroup col>
                <FooterLink href="#">RUET</FooterLink>
                <FooterLink href="#">RUET CSE (sec c)</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink href="#">Github</FooterLink>
                <FooterLink href="#">Discord</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full text-center sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Avengers(sec c)™" year={2025} />
          <div className="mt-4 flex  space-x-6 sm:mt-0 justify-center">
            <Link href={""} target="_blank">
              <i className="fa-brands fa-facebook text-gray-600 dark:text-gray-100 text-2xl"></i>
            </Link>
            <Link href={""} target="_blank">
              <i className="fa-brands fa-instagram text-gray-600 dark:text-gray-100 text-2xl"></i>
            </Link>
            <Link href={""} target="_blank">
              <i className="fa-brands fa-twitter text-gray-600 dark:text-gray-100 text-2xl"></i>
            </Link>
          </div>
        </div>
      </div>
    </Footer>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import Link from "next/link";

import image0 from "@/public/images/image0.jpg";
import image1 from "@/public/images/image1.jpg";
import image2 from "@/public/images/image2.jpg";
import image3 from "@/public/images/image3.jpg";

export function CardGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full  bg-[#ffffff78] dark:bg-slate-700 px-4 lg:px-6 py-8 rounded-lg shadow"
    >
      <h1 className="text-center font-bold leading-none tracking-tight text-gray-800 dark:text-gray-200 text-4xl md:text-5xl ">
        Usefull Resources
      </h1>
      <br />
      <br />

      <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {/* Card 1 */}
        <div className="md:max-w-[350px] max-w-[300px] bg-white dark:bg-[#071a26] border border-gray-200 dark:border-gray-900 rounded-lg shadow-md ">
          <Image className="rounded-t-lg" src={image0} alt="image0" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-200">
              1<sup>st</sup> Year Resources
            </h5>
            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="flex gap-3 ">
              <Link
                href={
                  "https://drive.google.com/drive/folders/1xbyCdj3XQ9AsCCF8ImI13HCo25JEhgUJ?usp=drive_link"
                }
                className="w-full rounded bg-blue-700 hover:bg-blue-800 text-center font-semibold text-gray-200 p-1"
                target="_blank"
              >
                {" "}
                1 - 1
              </Link>
              <Link
                href={""}
                onClick={() => alert("Link not ready yet!")}
                className="w-full rounded bg-gray-700 hover:bg-gray-800 text-center font-semibold text-gray-200 p-1"
              >
                {" "}
                1 - 2
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="md:max-w-[350px] max-w-[300px] bg-white dark:bg-[#071a26] border border-gray-200 dark:border-gray-800 rounded-lg shadow-md ">
          <Image className="rounded-t-lg" src={image1} alt="image0" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-200">
              2<sup>nd</sup> Year Resources
            </h5>
            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="flex gap-3 ">
              <Link
                href={""}
                onClick={() => alert("Link not ready yet!")}
                className="w-full rounded bg-gray-700 hover:bg-gray-800 text-center font-semibold text-gray-200 p-1"
              >
                {" "}
                2 - 1
              </Link>
              <Link
                href={""}
                onClick={() => alert("Link not ready yet!")}
                className="w-full rounded bg-gray-700 hover:bg-gray-800 text-center font-semibold text-gray-200 p-1"
              >
                {" "}
                2 - 2
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="md:max-w-[350px] max-w-[300px] bg-white dark:bg-[#071a26] border border-gray-200 dark:border-gray-800 rounded-lg shadow-md ">
          <Image className="rounded-t-lg" src={image2} alt="image0" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-200">
              3<sup>rd</sup> Year Resources
            </h5>
            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="flex gap-3 ">
              <Link
                href={""}
                onClick={() => alert("Link not ready yet!")}
                className="w-full rounded bg-gray-700 hover:bg-gray-800 text-center font-semibold text-gray-200 p-1"
              >
                {" "}
                3 - 1
              </Link>
              <Link
                href={""}
                onClick={() => alert("Link not ready yet!")}
                className="w-full rounded bg-gray-700 hover:bg-gray-800 text-center font-semibold text-gray-200 p-1"
              >
                {" "}
                3 - 2
              </Link>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="md:max-w-[350px] max-w-[300px] bg-white dark:bg-[#071a26] border border-gray-200 dark:border-gray-800 rounded-lg shadow-md ">
          <Image className="rounded-t-lg" src={image3} alt="image0" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-200">
              4<sup>th</sup> Year Resources
            </h5>
            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="flex gap-3 ">
              <Link
                href={""}
                onClick={() => alert("Link not ready yet!")}
                className="w-full rounded bg-gray-700 hover:bg-gray-800 text-center font-semibold text-gray-200 p-1"
              >
                {" "}
                4 - 1
              </Link>
              <Link
                href={""}
                onClick={() => alert("Link not ready yet!")}
                className="w-full rounded bg-gray-700 hover:bg-gray-800 text-center font-semibold text-gray-200 p-1"
              >
                {" "}
                4 - 2
              </Link>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="max-w-[300px] bg-white dark:bg-[#071a26] border border-gray-200 dark:border-gray-800 rounded-lg shadow-md ">
          <Link href="#">
            <img className="rounded-t-lg" src="/images/image4.jpg" alt="" />
          </Link>
          <div className="p-5">
            <Link href="#">
              <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-200">
                Higer Studies & Internship Deatils
              </h5>
            </Link>

            <Link
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

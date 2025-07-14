"use client";
import { motion } from "framer-motion";

import Link from "next/link";

export function CardGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="w-full morphic-effect-2 px-4 lg:px-6 py-8 rounded-lg shadow"
    >
      <h1 className="text-center font-bold leading-none tracking-tight text-gray-900 text-4xl md:text-5xl lg:text-6xl">
        Usefull Resources
      </h1>
      <br />
      <br />

      <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {/* Card 1 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
          <Link href="#">
            <img className="rounded-t-lg" src="/images/image0.jpg" alt="" />
          </Link>
          <div className="p-5">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                1<sup>st</sup> Year Resources
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

        {/* Card 2 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
          <Link href="#">
            <img className="rounded-t-lg" src="/images/image1.jpg" alt="" />
          </Link>
          <div className="p-5">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                2<sup>nd</sup> Year Resources
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Exploring the latest developments in cloud infrastructure and
              services.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

        {/* Card 3 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
          <Link href="#">
            <img className="rounded-t-lg" src="/images/image2.jpg" alt="" />
          </Link>
          <div className="p-5">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                3<sup>rd</sup> Year Resources
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              How artificial intelligence is transforming industries this year.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

        {/* Card 4 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
          <Link href="#">
            <img className="rounded-t-lg" src="/images/image3.jpg" alt="" />
          </Link>
          <div className="p-5">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                4<sup>th</sup> Year Resources
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Essential security measures for modern web applications.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

        {/* Card 5 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
          <Link href="#">
            <img className="rounded-t-lg" src="/images/image4.jpg" alt="" />
          </Link>
          <div className="p-5">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Higer Studies & Internship Deatils
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              How technology is shaping the workplace of tomorrow.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

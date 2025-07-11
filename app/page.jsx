import { Navbar } from "@/components/home-page/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* <!-- Main content --> */}
      <div className="h-dvh w-full pt-16 pb-12">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900">
            Welcome to our website
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            This is a demo of a responsive navbar with morphic design using
            Tailwind CSS.
          </p>
        </div>
      </div>
    </>
  );
}

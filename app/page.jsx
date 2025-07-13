import { Slideshow } from "@/components/home-page/slideshow";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Slideshow */}
      <Slideshow />

      {/* <!-- Main content --> */}
      <div className="w-full h-full flex flex-col mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900">
          Welcome to CSE  Archive!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          This is a demo of a responsive navbar with morphic design using
          Tailwind CSS.
        </p>

        <br/>
        <br/>
      </div>
    </div>
  );
}

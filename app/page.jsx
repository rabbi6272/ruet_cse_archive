import { Slideshow } from "@/components/home-page/slideshow";
import { FeaturesList } from "@/components/home-page/features_list";
export default function Home() {
  return (
    <div className="min-h-screen w-full">

      <div className = "flex flex-col mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold text-gray-900">
          Welcome to CSE  Archive!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          This is a demo of a responsive navbar with morphic design using
          Tailwind CSS.
        </p>
      </div>

      
      {/* Slideshow */}
      <Slideshow />

      {/* <!-- Main content --> */}
      <div className="w-full h-full flex flex-col mx-auto px-4 sm:px-6 lg:px-8">
        

        <br/>
        <br/>

        <FeaturesList />
      </div>
    </div>
  );
}

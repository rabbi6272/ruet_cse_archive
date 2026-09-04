import Image from "next/image";
import image0 from "@/public/images/slideshow/image0.jpg";

export function HeroImage() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-center">
      <Image
        src={image0}
        alt="RUET CSE campus"
        className="reveal hero-image w-full md:w-[85%] lg:w-[80%] rounded-2xl object-cover h-auto shadow-lg"
      />
    </div>
  );
}

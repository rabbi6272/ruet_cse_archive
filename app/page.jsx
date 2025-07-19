import { Slideshow } from "@/components/home/slideshow";
import { FeaturesList } from "@/components/home/features_list";
import { IntroSection } from "@/components/home/intro-section";

export default function Home() {
  return (
    <div className="w-full">
      <br />
      <br />
      {/* Intro Section */}
      <IntroSection />
      <br />

      {/* Slideshow */}
      <Slideshow />
      <br />
      <br />
    </div>
  );
}

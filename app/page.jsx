import { Slideshow } from "@/components/home-page/slideshow";
import { FeaturesList } from "@/components/home-page/features_list";
import { IntroSection } from "@/components/home-page/intro-section";

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

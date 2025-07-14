import { Slideshow } from "@/components/home-page/slideshow";
import { FeaturesList } from "@/components/home-page/features_list";
import { CardGrid } from "@/components/home-page/CardGrid";
import { IntroSection } from "@/components/home-page/intro-section";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Intro Section */}
      <IntroSection />

      {/* Slideshow */}
      <Slideshow />

      {/*Card Grid*/}
      <div className="px-4 sm:px-6 lg:px-6">
        <CardGrid />
        <br />
      </div>
    </div>
  );
}

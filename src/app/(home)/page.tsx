import DesignGallery from "./components/DesignGallery";
import Features from "./components/Features";
import FormPopup from "./components/FormPopup";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Schedule from "./components/Schedule";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DesignGallery />
      <HowItWorks />
      <Features />
      <Pricing />
      <Reviews />
      <Schedule />
      <FormPopup />
    </>
  );
}

import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Schedule from "./components/Schedule";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <Features />
      <Pricing />
      <Schedule />
    </>
  );
}

import DesignGallery from "./components/DesignGallery";
import Features from "./components/Features";
import FormPopup from "./components/FormPopup";
import HeroSection from "./components/HeroSection";
// import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Schedule from "./components/Schedule";
import CustomerServices from "./components/CustomerServices";
import FAQs from "./components/FAQs";

export default function Home() {
  return (
    <FormPopup>
      <HeroSection />
      <Pricing />
      <Features />
      <CustomerServices />
      <DesignGallery />
      <Reviews />
      <Schedule />
      <FAQs />
    </FormPopup>
  );
}

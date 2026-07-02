import SearchAndFilterDoctor from "@/components/findDoctor/SearchAndFilterDoctor";
import HeroSection from "@/components/HeroSection";
import PricingSection from "./plans/page";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <SearchAndFilterDoctor></SearchAndFilterDoctor>
      <PricingSection></PricingSection>
    </div>
  );
}

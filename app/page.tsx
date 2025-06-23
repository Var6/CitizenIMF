'use client';
import PremiumCalculatorSection from "@/components/Calculator";
import ClaimsBlogNewsletter from "@/components/Claim";
// import FAQ from "@/components/FAQ";
import HeroCarousel from "@/components/Herosection";
import PartnersSection from "@/components/Partners";
import ServicesSection from "@/components/Service";
import TrustBuildingSection from "@/components/Trustbuilding";
import WhyChooseSection from "@/components/WhyChooseUS";

export default function Home() {
  return (
   <div>
    <HeroCarousel/>
    <PremiumCalculatorSection/>
    <ServicesSection/>
    <TrustBuildingSection/>
    <PartnersSection/>
    <WhyChooseSection/>
    <ClaimsBlogNewsletter/>
    {/* <FAQ/> */}
   </div>
  );
}

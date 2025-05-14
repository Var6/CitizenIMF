import HeroSection from '@/components/HeroSection';
import InsuranceCategories from '@/components/InsuranceCategories';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <InsuranceCategories />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </div>
  );
}

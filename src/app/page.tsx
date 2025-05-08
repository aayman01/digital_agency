import FeaturedInsights from "@/components/FeaturedInsights";
import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import ViewMoreButton from "@/shared/ViewMoreButton";


export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <FloatingNav/>
      <HeroSection/>
      <ViewMoreButton/>
      <FeaturedInsights/>
      <ViewMoreButton/>
      <Footer/>
    </div>
  );
}

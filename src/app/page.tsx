import FeaturedInsights from "@/components/FeaturedInsights";
import FeaturedWork from "@/components/FeaturedWork";
import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import ViewMoreButton from "@/shared/ViewMoreButton";
import RecentWorks from "@/components/RecentWorks";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <FloatingNav/>
      <HeroSection/>
      <FeaturedWork/>
      <RecentWorks/>
      <ViewMoreButton/>
      <FeaturedInsights/>
      <ViewMoreButton/>
      <Footer/>
    </div>
  );
}

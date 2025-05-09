import FeaturedInsights from "@/components/FeaturedInsights";
import FeaturedWork from "@/components/FeaturedWork";
import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import ViewMoreButton from "@/shared/ViewMoreButton";
import RecentWorks from "@/components/RecentWorks";
import AllServices from "@/components/services/AllServices";
import HeroBanner from "@/shared/SemiCircleBg";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <FloatingNav />
      <HeroSection />
      <FeaturedWork />
      <AllServices />
      <HeroBanner
        title="Our Most Recent Works"
        description="Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem."
      />
      <RecentWorks />
      <ViewMoreButton />
      <HeroBanner
        title="Featured Insights"
        description="Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem."
      />
      <FeaturedInsights />
      <ViewMoreButton />
      <Footer />
    </div>
  );
}

import FeaturedInsights from '@/components/FeaturedInsights';
import FeaturedWork from '@/components/FeaturedWork';
import FloatingNav from '@/components/FloatingNav';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection/HeroSection';
import RecentWorks from '@/components/RecentWorks';
import AllServices from '@/components/services/AllServices';
import SemiCircleBg from '@/shared/SemiCircleBg';
import ViewMoreButton from '@/shared/ViewMoreButton';
import React from 'react';

const Homepage = () => {
    return (
      <div className="max-w-[1440px] mx-auto">
        <FloatingNav />
        <HeroSection />
        <FeaturedWork />
        <AllServices />
        <SemiCircleBg
          title="Our Most Recent Works"
          description="Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem."
        />
        <RecentWorks />
        <ViewMoreButton />
        <SemiCircleBg
          title="Featured Insights"
          description="Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem."
        />
        <FeaturedInsights />
        <ViewMoreButton />
        <Footer />
      </div>
    );
};

export default Homepage;
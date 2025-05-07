import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection/HeroSection";


export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <FloatingNav/>
      <HeroSection/>
    </div>
  );
}

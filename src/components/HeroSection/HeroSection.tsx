import React from 'react';
import Image from 'next/image';
import shawdowR from "../../assets/shadowR.png"
import shawdowL from "../../assets/shadowL.png";
import Spotlight from './Spotlight';
import BrandLogo from './BrandLogo';

const HeroSection = () => {
    return (
      <section className="relative text-center px-4 overflow-hidden">
        {/* Center spotlight */}
        <div className="absolute top-0 left-1/2 transform -translate-1/2 inset-0 z-20">
          <Spotlight className="w-full h-full" fill="#93D1FD" opacity={0.5} />
        </div>
        {/* left spotlight */}
        <div className="absolute top-0 left-1/5 transform -translate-1/2 inset-0 z-20">
          <Spotlight className="w-full h-full" fill="#93D1FD" opacity={0.5} />
        </div>

        {/* Left Shadow */}
        <div className="absolute left-0 top-0 z-10">
          <Image
            src={shawdowL}
            alt="Left Shadow Effect"
            width={400}
            height={500}
            className="opacity-70"
          />
        </div>

        {/* Right Shadow */}
        <div className="absolute right-0 top-0 z-10">
          <Image
            src={shawdowR}
            alt="Right Shadow Effect"
            width={400}
            height={500}
            className="opacity-70"
          />
        </div>

        <div className="relative z-30 pt-36 py-6 lg:pt-48 lg:py-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
            We Shape Your Ideas Into <br />
            <span>Awesome Digital</span>
            <br />
            <span>Experience</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            Let`s create a website, app, or product that makes an impact.
          </p>
          <button className="bg-gradient-to-r from-[#73BFFA] to-[#3C97F5] text-white py-3 px-6 rounded-full font-semibold transition-all hover:scale-105">
            Book a call with us
          </button>
        </div>
        <BrandLogo/>
      </section>
    );
};

export default HeroSection;
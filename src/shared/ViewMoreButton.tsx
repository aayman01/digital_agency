import React from 'react';
import arrow from '../assets/Arroup.svg'
import Image from 'next/image';
const ViewMoreButton = () => {
    return (
      <section className="flex items-center justify-center mt-12">
        <button className="flex items-center gap-1 text-xl bg-gradient-to-r from-[#73BFFA] to-[#3C97F5] text-white py-4 lg:py-6 px-5 lg:px-7 rounded-full font-medium transition-all hover:scale-105 cursor: pointer">
          View more
          <Image src={arrow} width={32} height={32} alt="arrow sign" />
        </button>
      </section>
    );
};

export default ViewMoreButton;
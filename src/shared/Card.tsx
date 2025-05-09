import Image from 'next/image';
import React from 'react';

interface Card {
    image : string;
    title : string;
    subtitle : string;
    link : string;
}

const Card = ({ image, title, subtitle, link }: Card) => {
  return (
    <div className="bg-[#0A0A0A] rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-300">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={440}
          height={490}
          className="w-full h-[400px] object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
      </div>
      <div className="p-2 lg:p-4 flex lg:flex-row flex-col items-start lg:items-center lg:justify-between">
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-xl text-gray-400">{subtitle}</p>
        </div>

        <a
          href={link}
          className="inline-flex lg:items-center mt-4 text-sm font-medium text-white"
        >
          <button className="bg-[#181E22] text-lg md:text-xl font-semibold px-4 md:px-5 py-3 md:py-4 rounded-full border border-gray-500">
            Open <span className="ml-">↗</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
import React from 'react';
import logo1 from "../../assets/service1/logo1.svg";
import bg from "../../assets/service1/texture.png";
import arrow from "../../assets/Arroup.svg";
import blob from "../../assets/service1/Blob.svg";
import blob2 from "../../assets/service1/Blob (1).svg";
import star from "../../assets/star.png";
import Image from 'next/image';


const Card1st = () => {
    return (
      <div className="relative p-6 rounded-xl bg-black text-white overflow-hidden h-[300px] lg:w-[286px] transition-all hover:shadow-lg md:mt-10">
        {/* Background Pattern */}
        <Image
          src={bg}
          alt="Background pattern"
          layout="fill"
          className="object-cover opacity-10 pointer-events-none"
        />
        {/* Top Right SVG Background */}
        <div className="absolute top-0 right-0">
          <Image
            src={blob}
            alt="Top Right Background"
            width={300}
            height={250}
            className=" pointer-events-none"
          />
        </div>
        <div className="absolute top-0 right-0">
          <Image
            src={star}
            alt="Top Right Background"
            width={150}
            height={150}
            className=" pointer-events-none"
          />
        </div>

        {/* Bottom Left SVG Background */}
        <div className="absolute bottom-[-1] left-0">
          <Image
            src={blob2}
            alt="Bottom Left Background"
            width={250}
            height={330}
            className="pointer-events-none"
          />
        </div>
        <div className="absolute bottom-0 left-0">
          <Image
            src={star}
            alt="Bottom Left Background"
            width={150}
            height={150}
            className="pointer-events-none"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Logo */}
          <Image
            src={logo1}
            alt="Logo"
            width={56}
            height={56}
            className="w-[56] h-[56]"
          />

          {/* Title */}
          <div>
            <div className="flex items-start">
              <h3 className="text-xl font-semibold mb-2">
                All-In-One (AIO) Service
              </h3>
              <Image src={arrow} alt="Logo" width={40} height={40} />
            </div>
            <p className="text-sm opacity-70">
              Our AIO solution tailors to your unique vision, crafting a website
              that truly reflects...
            </p>
          </div>
        </div>
      </div>
    );
};

export default Card1st;
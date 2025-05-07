import Image from 'next/image';
import React from 'react';
import fix from "../../assets/fixmyphone.svg"
import verdant from "../../assets/Verdant.svg"
import duet from "../../assets/client-04.svg"
import apex from  "../../assets/apex.svg"
import lind from "../../assets/lindholms.svg"

interface Logo {
    id: number;
    image: string;
}

const BrandLogo = () => {
    const logos: Logo[] = [
      {
        id: 1,
        image: fix,
      },
      {
        id: 2,
        image: verdant,
      },
      {
        id: 3,
        image: duet,
      },
      {
        id: 4,
        image: apex,
      },
      {
        id: 5,
        image: lind,
      },
    ];
    
    return (
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
          {logos.map((logo: Logo) => (
            <div key={logo.id} className="w-full flex items-center justify-center p-4">
              <Image
                src={logo.image}
                alt={`Brand Logo ${logo.id}`}
                width={100}
                height={40}
                className="w-auto h-auto max-h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>  
    );
};

export default BrandLogo;
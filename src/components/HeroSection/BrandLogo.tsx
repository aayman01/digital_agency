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
      <div className='flex item-center justify-evenly'>
        {logos.map((logo: Logo) => (
          <Image 
            key={logo.id}
            width={140} 
            height={50} 
            src={logo.image} 
            alt='Brand Logo'
          />
        ))}
      </div>
    );
};

export default BrandLogo;
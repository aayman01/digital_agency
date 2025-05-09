import React from "react";

interface HeroBannerProps {
  title: string;
  description: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  description,
}) => {
  return (
    <section
      className={`flex items-center justify-center h-64 overflow-hidden bg-no-repeat bg-center bg-[url('../assets/Bg.png')] my-20`}
    >
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-bold leading-14 gradient-text">{title}</h1>
        <p className="mt-2 text-sm text-gray-300 leading-5 text-center">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;

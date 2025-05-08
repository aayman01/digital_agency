import Image from "next/image";
import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";
import p3 from "../assets/project3.png";

export default function FeaturedWork() {
  return (
    <section className=" py-16 text-center px-4 lg:px-0">
      {/* Left gradient SVG */}
      {/* <div className="absolute inset-0 left-0 bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="303"
          height="342"
          viewBox="0 0 303 342"
          fill="none"
        >
          <path
            d="M303 0L303 342L-1.49493e-05 342L0 -1.32446e-05L303 0Z"
            fill="url(#paint0_linear_1_574)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_574"
              x1="308.682"
              y1="171"
              x2="17"
              y2="171"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.4" stop-color="#0A0A0A" stop-opacity="0" />
              <stop offset="1" stop-color="#0A0A0A" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
    {/* Right gradient SVG */}
        {/* <div className="absolute inset-0 right-0 bottom-0 w-[342px] h-[303px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="303"
            height="342"
            viewBox="0 0 303 342"
            fill="white"
          >
            <path
              d="M0 342L4.07831e-06 0L303 3.61324e-06L303 342L0 342Z"
              fill="url(#paint0_linear_1_575)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_575"
                x1="-5.68158"
                y1="171"
                x2="286"
                y2="171"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.4" stop-color="#0A0A0A" stop-opacity="0" />
                <stop offset="1" stop-color="#0A0A0A" />
              </linearGradient>
            </defs>
          </svg>
        </div> */}
      <div className="flex lg:flex-row flex-col items-center justify-between gap-7">
        {/* Left image */}
        <div className="rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 border-4 border-white">
          <Image
            src={p1}
            alt="Mobile Portfolio UI"
            width={475}
            height={306}
            className="w-full h-auto"
          />
        </div>

        {/* Center image */}
        <div className="rounded-xl overflow-hidden lg:scale-105 hover:scale-109 transition-transform duration-300 border-4 border-white">
          <Image
            src={p3}
            alt="Knife Tech Landing Page"
            width={475}
            height={430}
            className="w-full h-auto"
          />
        </div>

        {/* Right image */}
        <div className=" rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 border-4 border-white">
          <Image
            src={p2}
            alt="Dashboard UI"
            width={475}
            height={306}
            className="w-full h-auto "
          />
        </div>
        
      </div>
    </section>
  );
}

import Link from "next/link";
import React from "react";
import arrow from "../assets/Arroup.svg"
import Image from "next/image";

interface Data {
  id: number;
  question: string;
  link: string;
}

const FeaturedInsights = () => {
  const features: Data[] = [
    {
      id: 1,
      question: "How to Protect Your Identity While Traveling",
      link: "protect",
    },
    {
      id: 2,
      question: "How to Protect Your Identity While Traveling",
      link: "protect",
    },
    {
      id: 3,
      question: "How to Protect Your Identity While Traveling",
      link: "protect",
    },
    {
      id: 4,
      question: "How to Protect Your Identity While Traveling",
      link: "protect",
    },
    {
      id: 5,
      question: "How to Protect Your Identity While Traveling",
      link: "protect",
    },
  ];
  return (
    <section className="px-10">
      {features.map((feature: Data) => (
        <Link href={feature.link} key={feature.id}>
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#73BFFA33] via-transparent to-[#0A0A0A00] mb-5 rounded-xl">
            <div className="flex items-center gap-3 text-2xl font-semibold ">
              <p className="bg-gradient-to-b from-[#3C97F5] via-[#73BFFA] to-[#93D1FD] text-transparent bg-clip-text">
                0{feature.id}
              </p>
              <p>{feature.question}</p>
            </div>
            <Image width={40} height={40} src={arrow} alt="arrow Sign" />
          </div>
        </Link>
      ))}
    </section>
  );
};

export default FeaturedInsights;

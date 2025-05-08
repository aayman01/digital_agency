import Card from '@/shared/Card';
import React from 'react';
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";


interface RecentWorks {
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

const RecentWorks = () => {
    const recentWork = [
      {
        title: "Alcohol Tracker",
        subtitle: "All-In-One (AIO) Service",
        image: p1,
        link: "#",
      },
      {
        title: "Rely",
        subtitle: "All-In-One (AIO) Service",
        image: p2,
        link: "#",
      },
      {
        title: "Alcohol Tracker",
        subtitle: "All-In-One (AIO) Service",
        image: p3,
        link: "#",
      },
      {
        title: "Finance Website",
        subtitle: "All-In-One (AIO) Service",
        image: p4,
        link: "#",
      },
      {
        title: "Alcohol Tracker",
        subtitle: "All-In-One (AIO) Service",
        image: p5,
        link: "#",
      },
    ];
    return (
      <section className="py-16 text-white px-4 lg:px-28">

        {/* First Row */}
        <div className="flex flex-wrap justify-between gap-6 mb-8">
          {recentWork.slice(0, 2).map((item, i) => (
            <div key={i} className="w-full md:w-[48%]">
              <Card {...item} image={item.image.src} />
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentWork.slice(2).map((item, i) => (
            <Card key={i + 2} {...item} image={item.image.src} />
          ))}
        </div>
      </section>
    );
};

export default RecentWorks;
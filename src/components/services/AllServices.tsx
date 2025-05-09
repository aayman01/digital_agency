import Card1st from './Card1st';
import Card2nd from './Card2nd';
import Card3rd from './Card3rd';
import Card4th from './Card4th';

const AllServices = () => {
    return (
      <section className="lg:px-28 px-4 mt-7 md:mt-12">
        <h1 className="max-w-[1140px] mx-auto text-left font-medium text-3xl lg:text-4xl lg:leading-14 text-[#6D6D6D] mb-4 lg:mb-0">
          We are a full-service studio creating transformative{" "}
          <span className="font-bold text-white">
            digital experiences and solutions.
          </span>{" "}
          specializing in websites and web applications.
        </h1>
        <div className="flex md:flex-row flex-col item-center justify-center gap-3 md:gap-0">
          <Card1st />
          <Card2nd />
          <Card3rd />
          <Card4th />
        </div>
      </section>
    );
};

export default AllServices;
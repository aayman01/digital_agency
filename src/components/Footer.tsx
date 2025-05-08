import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0B] text-white py-12 sm:py-20 lg:py-28 px-4 sm:px-4 lg:px-10">
      <div className="">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-4 lg:mb-8">
          {/* Left section */}
          <div>
            <p className="text-xl sm:text-2xl lg:mb-2 text-gray-400">Have a project in mind?</p>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-blue-400">
              Let's Talk
            </h2>
          </div>

          {/* Social links */}
          <div className="flex flex-row lg:flex-col gap-4 lg:gap-2 text-sm flex-wrap text-gray-300">
            <a href="#" className="hover:text-blue-400 transition-colors duration-200 underline">Linkedin</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200 underline">GitHub</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200 underline">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200 underline">Instagram</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200 underline">Twitter</a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0">
          <div className="w-full lg:w-auto">
            <h3 className="text-3xl sm:text-5xl lg:text-7xl font-bold underline text-left hover:text-blue-400 transition-colors duration-200">
              hey@pixll.com
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8 w-full lg:w-auto text-base sm:text-lg text-gray-400">
            <div className="flex gap-4">
              <a href="#" className="underline hover:text-blue-400 transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="underline hover:text-blue-400 transition-colors duration-200">
                Terms
              </a>
            </div>
            <p>© 2017 - 2025 Pixll</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

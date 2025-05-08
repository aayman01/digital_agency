"use client"
import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";

const FloatingNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[95%] lg:w-[1024px] lg:px-4 mx-auto z-50">
        <nav className="flex items-center justify-between px-4 sm:px-6 py-3 rounded-full bg-[rgba(10, 10, 10, 0.10)] backdrop-blur-md border border-gray-700 shadow-lg">
          {/* Logo */}
          <svg
            className="w-20 sm:w-24 lg:w-[102px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 102 42"
            fill="none"
          >
            <path d="M10.5066 2V25.8428L0.5 35.2028V2H10.5066Z" fill="white" />
            <path
              d="M24.7468 2V12.5192L14.7402 21.8828V2H24.7468Z"
              fill="white"
            />
            <path
              d="M14.7402 27.4772L24.7468 18.1208V38H14.7402V27.4772Z"
              fill="white"
            />
            <path
              d="M38.9869 4.80082V38H28.9803V14.1608L38.9869 4.80082Z"
              fill="white"
            />
          </svg>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-4 lg:gap-8 text-white font-medium">
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <FiAlignJustify className="w-6 h-6" />
          </button>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-black backdrop-blur-md border border-gray-700 rounded-lg md:hidden">
              <ul className="flex flex-col gap-4 text-white font-medium">
                <li>
                  <a
                    href="#"
                    className="block p-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    );
};

export default FloatingNav;
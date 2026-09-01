"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Facebook, Instagram, X, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { logoImg } from "@/data/images";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Create a ref for the mobile menu
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close the menu when the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="xl:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-800"
        aria-label="Open menu"
      >
        <svg
          width="61"
          height="48"
          viewBox="0 0 61 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="59" height="46" rx="23" fill="#0D378D" />
          <rect
            x="1"
            y="1"
            width="59"
            height="46"
            rx="23"
            stroke="#CADBFF"
            strokeWidth="2"
          />
          <path
            d="M19.5 17H41.5"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M19.5 24H41.5"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M30.5 31L41.5 31"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          ref={menuRef} // Attach the ref to the menu container
          className="fixed inset-0 h-[630px] sm:h-[630px] bg-white z-50 flex flex-col transition-all duration-300 ease-in-out transform translate-x-0 border-b-2 border-gray-400"
          style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
        >
          <div className="flex justify-between m-[28px]">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src={logoImg.src}
                alt={logoImg.alt}
                title="Primo Painting"
                width={130}
                height={60}
                className="h-auto"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-800"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col items-center space-y-6">
            <Link
              href="/"
              className="text-gray-800 text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-800 text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            {/* <Link
              href="/gallery"
              className="text-gray-800 text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link> */}

            <Link
              href="/contact"
              className="text-gray-800 text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>

          <div className="mt-auto p-6 flex flex-col space-y-4">
            <Link
              onClick={() => setIsOpen(false)}
              href="/booking"
              className="bg-[#0D378D] cursor-pointer text-white mb-5 border-4 border-[#CADBFF] text-center px-8 py-1 rounded-4xl font-medium hover:bg-[#0D378D] transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import devenImage from "../assets/deven-picture.png";

function HeroSection() {
  const textArray = [
    "A web solution provider",
    "A problem solver.",
    "A passionate learner.",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < textArray[index].length) {
        setText(text + textArray[index][charIndex]);
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(text.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setIndex((index + 1) % textArray.length);
        }
      }
    }, isDeleting ? 50 : 100); // Typing speed

    return () => clearTimeout(timeout);
  }, [text, isDeleting, charIndex, index]);

  return (
 <div className="w-full bg-gradient-to-r from-[#191919] to-[#292929]
  min-h-[85vh] text-white flex items-center justify-center p-8">
 <div className="max-w-6xl w-full flex flex-col md:flex-row md:justify-around items-center">
        
        {/* Left Section - Text Content */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <h3 className="text-lg font-medium text-gray-300">Hi there, I'm</h3>
          <h1 className="text-5xl font-extrabold text-white mt-2">
            Deven Kumar,
          </h1>
          <h1 className="text-4xl font-bold text-blue-400">
            Full Stack Developer.
          </h1>
          
          {/* Typewriter Effect */}
          <p className="text-gray-400 mt-4 text-xl h-8">
            {text}
            <span className="text-white font-bold animate-blink">|</span>
          </p>

          {/* Explore Button */}
          <button className="mt-6 px-6 py-3 text-lg font-semibold border border-white rounded-lg transition-all duration-300 hover:bg-blue-500 hover:border-transparent">
            Explore
          </button>
        </div>

        {/* Right Section - Profile Image with Glow */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center relative">
        <div className="relative group">
            {/* Backdrop Glow on Hover */}
            {/* <div className="absolute inset-0 w-[105%] h-[105%] bg-blue-500 opacity-0 blur-md rounded-lg transition-all duration-300 group-hover:opacity-40"></div> */}
            
            {/* Profile Image */}
            <Image 
              src={devenImage} 
              alt="Deven Kumar" 
             
              className="rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 w-[400px] h-[400px] object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;

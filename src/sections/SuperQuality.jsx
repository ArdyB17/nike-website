import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container
                 padding-x py-16 bg-gradient-to-b from-white to-slate-50"
    >
      {/* Left Content */}
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl sm:text-5xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="relative">
            <br />
            <span className="text-coral-red inline-block transform hover:scale-105 
                           transition-transform duration-300">Super </span>
            <span className="text-coral-red inline-block transform hover:scale-105 
                           transition-transform duration-300">Quality</span>
          </span>
          {" "}Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>

        <div className="mt-11">
          <Button 
            label="View Details" 
            iconURL={arrowRight}
            className="hover:shadow-lg transform hover:-translate-y-1" 
          />
        </div>
      </div>

      {/* Right Content - Image */}
      <div className="flex flex-1 justify-center items-center relative">
        <img
          src={shoe8}
          alt="Super quality shoe"
          width={570}
          height={522}
          className="object-contain relative z-10 
                     hover:scale-105 transition-transform duration-500
                     drop-shadow-2xl"
        />
        
        {/* Background Elements */}
        <div className="absolute -z-10 w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         w-2/3 h-2/3 rounded-full bg-coral-red/5 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
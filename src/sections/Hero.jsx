import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState, useEffect } from "react";
import React from "react";


const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      // Fixed: Added proper padding and container constraints
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen 
                 max-container padding-x py-10 gap-10 relative
                 bg-gradient-to-br from-white via-slate-50 to-coral-red/5"
    >

      {/* Left Column */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start
                    w-full max-xl:padding-x pt-28 max-w-3xl mx-auto xl:mx-0">
        {/* ...existing summer collection text... */}


        {/* Fixed: Adjusted heading sizes and spacing */}
        <h1 className="mt-10 font-palanquin text-8xl max-xl:text-7xl max-lg:text-6xl 
                      max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10
                        hover:text-coral-red/90 transition-all duration-300
                        inline-block">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>{" "}
          <span>Shoes</span>
        </h1>


        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 
                     sm:max-w-sm hover:text-slate-800 transition-colors duration-300">
          Discover stylish Nike arrivals, quality comfort, and innovation for your 
          active life. Step into your greatness with our latest collection.
        </p>


        {/* Fixed: Statistics layout */}
        <div className="flex flex-wrap justify-start items-start w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label} 
                 className="hover:-translate-y-2 transition-transform duration-300">
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Right Column - Fixed sizing and positioning */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen
                    max-xl:py-40 bg-primary bg-hero bg-cover bg-center
                    max-w-[780px] mx-auto">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10 hover:scale-105 
                   transition-transform duration-500
                   max-w-full h-auto"
        />


        {/* Fixed: Shoe cards positioning */}
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] 
               left-1/2 transform -translate-x-1/2
               w-full max-w-[80%] justify-center
               px-4 py-2">
  {shoes.map((shoe) => (
    <div key={shoe.bigShoe} 
         className="w-full max-w-[150px] min-w-[120px]">
      <ShoeCard
        imgURL={shoe}
        changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
        bigShoeImg={bigShoeImg}
      />
    </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
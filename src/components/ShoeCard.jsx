import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl 
        ${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"}
        cursor-pointer max-sm:flex-1 
        hover:shadow-lg transition-all duration-300
        hover:-translate-y-1 hover:border-coral-red/50
        bg-white/80 backdrop-blur-sm`}
      onClick={handleClick}
    >
      {/* Enhanced: Better card sizing for all screens */}
      <div className="flex justify-center items-center bg-card bg-center bg-cover 
                     sm:w-40 sm:h-40 max-sm:w-32 max-sm:h-32 
                     rounded-xl p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          className="object-contain w-full h-full
                   transition-transform duration-300 
                   hover:scale-110"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
import React from "react";
import RiviewCard from "../components/RiviewCard";
import { reviews } from "../constants";

const Riviews = () => {
  return (
    <section>
      <h3 className="font-palanquin text-center text-4xl font-bold">
        what our?
        <span className="text-coral-red"> Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam minima
        mollitia quaerat. Placeat, explicabo?
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <RiviewCard
            key={index} // Ensure unique key for each review
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default Riviews;

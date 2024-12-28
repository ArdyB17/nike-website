import { star } from "../assets/icons";
import { products } from "../constants";

const PopularProducts = () => {
  return (

    
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className=" text-4xl font-palanquin font-bold">
          Our <span className=" text-coral-red">Popular</span> Products
        </h2>
        <p className=" lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          magnam culpa nam impedit tempora, aspernatur vero iste.
        </p>
      </div>


      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 
                    sm:grid-cols-2 grid-cols-1 gap-14
                    justify-items-center">
        {products.map((product) => (
          <div key={product.id}
               className="flex flex-col w-full max-w-[280px]">
            <img
              src={product.imgURL}
              alt={product.name}
              className="w-full h-[280px] object-contain hover:scale-105
                       transition-transform duration-300"
            />
             
            {/* rating */}
            <div className=" mt-8 flex justify-start gap-2">
              <img src={star} alt="rating" width={24} height={24} />
              <p className=" font-montserrat text-xl leading-normal text-gray-700">
                (4.5)
              </p>
            </div>


            {/* price */}
            <h3 className="font-palanquin font-bold mt-2 leading-normal text-2xl">
              {product.name}
            </h3>

            <p className="font-montserrat text-coral-red mt-2 font-semibold leading-normal text-2xl">
              {product.price}
            </p>


            {/* add to cart button */}
            <div className="flex flex-1 flex-col w-full max-sm:w-full mt-4">
              <button className="bg-coral-red text-white py-2 px-4 rounded-lg">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;

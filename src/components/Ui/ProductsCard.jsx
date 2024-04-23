/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { AiOutlineShoppingCart } from "react-icons/ai";

export const ProductsCard = ({ filterCriteria }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filterCriteria.map((item, index) => (
          <div key={index} className="relative group">
            <div className="max-w-xs rounded overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
              <div className="bg-gray-200">
                <img className="w-full" src={item.imgUrl} alt="Product" />
              </div>

              <div className="absolute inset-0 bg-black/20 opacity-0 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-100">
                <button className="text-white mr-3">
                  <AiOutlineShoppingCart
                    size={"3rem"}
                    className="text-xl font-bold"
                  />
                </button>
              </div>
            </div>
            {index === 0 && (
              <style jsx>{`
                .group:hover .group-hover\:opacity-0 {
                  opacity: 0;
                }
                .group:hover .group-hover\:opacity-100 {
                  opacity: 1;
                }
              `}</style>
            )}
            <div className="px-6 pt-4 pb-2">
              <h1 className="text-blue-950 font-bold text-xl mb-2">
                {item.title}
              </h1>
              <p className="text-neutral-800 text-sm font-medium">
                {item.price}k birr
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

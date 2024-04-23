/* eslint-disable react/prop-types */
import { AiOutlineShoppingCart, AiOutlineEye } from "react-icons/ai";

export const ProductsCard = ({ filterCriteria }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-10">
        {filterCriteria.map((item, index) => (
          <div
            key={index}
            className="max-w-xs mx-auto rounded overflow-hidden shadow-lg relative group transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img className="w-full" src={item.imgUrl} alt="Product" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base">{item.type}</p>
              <p className="text-gray-700 text-base">{item.price}</p>
            </div>
            <div className="px-6 py-4 flex justify-between items-center absolute bottom-0 w-full bg-white bg-opacity-90 backdrop-blur-lg">
              <button className="text-gray-700 group-hover:text-gray-900">
                <AiOutlineShoppingCart className="inline-block text-xl" />
              </button>
              <button className="text-gray-700 group-hover:text-gray-900">
                <AiOutlineEye className="inline-block text-xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

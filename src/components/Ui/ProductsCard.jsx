/* eslint-disable react/prop-types */
//import { AiOutlineShoppingCart, AiOutlineEye } from "react-icons/ai";

export const ProductsCard = ({ filterCriteria }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10">
        {filterCriteria.map((item, index) => (
          <div
            key={index}
            className="max-w-xs rounded  overflow-hidden  relative group transition duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="bg-gray-200">
              <img className="w-full" src={item.imgUrl} alt="Product" />
            </div>
            <div className="px-6">
              <div className="text-blue-950 font-bold text-xl mb-2">
                {item.title}
                <p className="text-neutral-800 text-sm font-medium">
                  {item.price}k birr
                </p>
              </div>
            </div>
            {/* <div className="px-6 py-4 flex justify-between items-center bottom-0 w-full bg-white bg-opacity-90 backdrop-blur-lg">
              <button className="text-gray-700 group-hover:text-gray-900">
                <AiOutlineShoppingCart
                  size={"2rem"}
                  className="inline-block text-xl"
                />
              </button>
              <button className="text-gray-700 group-hover:text-gray-900">
                <AiOutlineEye size={"2rem"} className="inline-block text-xl" />
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </>
  );
};

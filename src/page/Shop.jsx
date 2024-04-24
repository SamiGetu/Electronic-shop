import { CommonSection } from "../components/Ui/CommonSection";
import { IoMdSearch } from "react-icons/io";
import Products from "../Data/ProductsData/Products";
import { useState } from "react";
import { ProductsCard } from "../components/Ui/ProductsCard";

export const Shop = () => {
  const [productData, setProductsData] = useState(Products);

  const handleFillter = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "all") {
      setProductsData(Products);
    } else {
      const filterProduct = Products.filter(
        (item) => item.type === filterValue
      );
      setProductsData(filterProduct);
    }
  };

  return (
    <>
      <CommonSection title={"Shop"} />
      <div className="flex flex-wrap lg:justify-center justify-start lg:pl-0 pl-10 lg:gap-[6rem] gap-10 mt-[5rem]">
        <div>
          <select
            className="px-10 py-2 bg-[#287fa3] text-white rounded-lg"
            onChange={""}
          >
            <option value="wall paint">Sort By: New Arrival</option>
            <option value="artifact">Sort By: Best Seller</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input
            className="md:px-[15rem] px-10 py-2 border-[1px] border-blue-800 rounded-md focus:outline-none"
            type="text"
            placeholder="Search..."
            onChange={""}
          />
          <span>
            <IoMdSearch size={"2rem"} />
          </span>
        </div>
      </div>

      <div className="flex justify-center gap-20 mt-[5rem] ">
        <div className="text-start">
          <div className="mb-10">
            <h2 className="text-5xl font-semibold">Products</h2>
            <p className="text-lg font-medium">Shop</p>
          </div>
          <div className="space-y-7 mb-10">
            <p className="text-2xl font-bold">Short by Category</p>

            <div className="flex gap-3 text-lg font-medium text-gray-600 border-b-2">
              <input
                type="radio"
                name="category"
                value={"all"}
                onChange={handleFillter}
              />
              <span>All</span>
            </div>
            <div className="flex gap-3 text-lg font-medium text-gray-600 border-b-2">
              <input
                type="radio"
                name="category"
                value={"laptop"}
                onChange={handleFillter}
              />
              <span>Lap Top</span>
            </div>
            <div className="flex gap-3 text-lg font-medium text-gray-600 border-b-2">
              <input
                type="radio"
                name="category"
                value={"headphone"}
                onChange={handleFillter}
              />
              <span>HeadPhones</span>
            </div>
            <div className="flex gap-3 text-lg font-medium text-gray-600 border-b-2">
              <input
                type="radio"
                name="category"
                value={"speaker"}
                onChange={handleFillter}
              />
              <span>speaker</span>
            </div>
            <div className="flex gap-3 text-lg font-medium text-gray-600 border-b-2">
              <input
                type="radio"
                name="category"
                value={"screen"}
                onChange={handleFillter}
              />
              <span>screen</span>
            </div>
            <div className="flex gap-3 text-lg font-medium text-gray-600 border-b-2">
              <input
                type="radio"
                name="category"
                value={"pods"}
                onChange={handleFillter}
              />
              <span>Wirless Pods</span>
            </div>
          </div>
          <div className="space-y-7">
            <p className="text-2xl font-bold">Short by Brand</p>
            <div className="flex gap-3 text-lg font-medium text-gray-600 border-b-2">
              <input type="radio" name="category" />
              <span>HP</span>
            </div>
            <div className="flex gap-3 text-lg font-medium text-gray-600 border-b-2">
              <input type="radio" name="category" />
              <span>Acer</span>
            </div>
            <div className="flex gap-3 text-lg font-medium text-gray-600 border-b-2">
              <input type="radio" name="category" />
              <span>Msi</span>
            </div>
            <div className="flex gap-3 text-lg font-medium text-gray-600 border-b-2">
              <input type="radio" name="category" />
              <span>Jbl</span>
            </div>
            <div className="flex gap-3 text-lg font-medium text-gray-600 border-b-2">
              <input type="radio" name="category" />
              <span>Beats</span>
            </div>
          </div>
        </div>
        {/* products */}
        <div>
          {productData.length === 0 ? (
            <h5>No Items Found</h5>
          ) : (
            <ProductsCard data={productData} />
          )}
        </div>
      </div>
    </>
  );
};

import { useEffect, useState } from "react";
import headphone from "../assets/images/headset.png";
import redHeadPhone from "../assets/images/redHeadPhones.png";
import gaminlaptop from "../assets/images/gaminlaptop.png";
import jblspeaker from "../assets/images/speaker.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Service } from "../components/Service/Service";
import { GiReturnArrow } from "react-icons/gi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { ProductsCard } from "./../components/Ui/ProductsCard";
import Products from "../Data/ProductsData/Products";
import pavilion from "../assets/images/pavilion.png";

export const Home = () => {
  const [newArrived, setNewArrived] = useState(Products);
  const [bestSell, setBestSell] = useState(Products);

  useEffect(() => {
    const filterNewArrived = Products.filter(
      (item) => item.catagori === "newArivall"
    );
    const filterBestSell = Products.filter(
      (item) => item.catagori === "bestSell"
    );

    setNewArrived(filterNewArrived);
    setBestSell(filterBestSell);
  }, []);
  return (
    <>
      {/* landing section */}
      <section>
        <div className="flex justify-center items-center mt-5">
          <div className="bg-[url('/image/blank.jpg')] bg-cover bg-center bg-fixed w-[80vw] h-[70vh] rounded-[5rem]">
            <div className="flex  justify-center items-center px-20">
              <div className="space-y-3">
                <p className="md:text-lg text-sm text-gray-500 font-medium">
                  New HeadPhone
                </p>
                <h2 className="text-5xl font-semibold text-[#0b0b2a]">
                  BGL ORIGINAL HEADPHONE
                </h2>
                <p className="text-lg text-gray-500 font-medium ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam, quisquam neque praesentium quos tempore rem pariatur
                  eveniet quis sequi aspernatur.
                </p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="px-10 py-3 bg-blue-950 text-white  rounded-lg"
                >
                  <Link to={"shop"}>SHOP NOW</Link>
                </motion.button>
              </div>
              <div>
                <img src={headphone} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* highlights */}
      <section className="mt-[5rem] mb-[10rem]">
        <div>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <div className="bg-red-700 w-[25rem] h-[20rem] rounded-[3rem] flex flex-col items-center justify-center">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={jblspeaker}
                alt=""
                className="z-10"
              />
            </div>
            <div className="bg-[#080808] w-[35rem] h-[20rem] rounded-[3rem] flex flex-col items-center justify-center">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={redHeadPhone}
                alt=""
                className="z-10"
              />
            </div>
            <div className="bg-[#287fa3] w-[25rem] h-[20rem] rounded-[3rem] flex flex-col items-center justify-center">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={gaminlaptop}
                className="z-10"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section>
        <div className="flex flex-wrap justify-center items-center gap-20 text-gray-500 font-medium">
          <Service
            icon={<LiaShippingFastSolid size={"2rem"} />}
            text="Free Shipping"
          />
          <Service
            icon={<GiReturnArrow size={"2rem"} />}
            text="Return Police"
          />
          <Service
            icon={<IoShieldCheckmarkOutline size={"2rem"} />}
            text="2 Year Warranty"
          />
        </div>
      </section>
      {/* newArrived Products */}
      <section className="mt-[10rem] flex justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-medium mb-20">New Arrival</h1>
          <ProductsCard data={newArrived} />
        </div>
      </section>
      {/* discount section */}
      <section className="mt-[20rem]">
        <div className="flex flex-wrap justify-center items-center">
          <div className="bg-black h-[20rem] rounded-[5rem] flex justify-center items-center">
            <div>
              <p className="text-2xl text-white font-medium">Big Discount</p>
              <h3 className="text-7xl text-white font-semibold ">Hp Omen</h3>
              <p className="text-2xl text-white font-medium">25% OFF</p>
            </div>

            <img width={"50%"} src={pavilion} alt="" />
          </div>
        </div>
      </section>
      {/* Best Sell */}
      <section className="mt-[10rem] flex justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-medium mb-20">New Arrival</h1>
          <ProductsCard data={bestSell} />
        </div>
      </section>
    </>
  );
};

import headphone from "../assets/images/headset.png";
import redHeadPhone from "../assets/images/redHeadPhones.png";
import gaminlaptop from "../assets/images/gaminlaptop.png";
import jblspeaker from "../assets/images/speaker.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      {/* landing section */}
      <section>
        <div className="flex justify-center items-center mt-5">
          <div className="bg-[url('/image/blank.jpg')] bg-cover bg-center bg-fixed w-[80vw] h-[70vh] rounded-[5rem]">
            {/* content */}
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
      <section className="h-screen mt-[5rem] ">
        <div>
          <div className="flex justify-center items-center gap-10">
            <div className="bg-red-700 w-[25rem] h-[20rem] rounded-[3rem] flex flex-col items-center justify-center">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={jblspeaker}
                alt=""
                className="z-10"
              />
            </div>
            <div className="bg-[#080808] w-[25rem] h-[20rem] rounded-[3rem] flex flex-col items-center justify-center">
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
    </>
  );
};

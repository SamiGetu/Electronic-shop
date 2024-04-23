/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
export const Service = ({ icon, text }) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="flex justify-center items-center gap-2 rounded-xl shadow-xl  shadow-[#aaa8a8] py-5 px-[25px]"
      >
        <span className="text-blue-500">{icon}</span>
        <h1 className="font-medium text-2xl">{text}</h1>
      </motion.div>
    </>
  );
};

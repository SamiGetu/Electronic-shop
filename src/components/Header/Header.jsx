import { Link } from "react-router-dom";
import { LuShoppingBag } from "react-icons/lu";
import { CiMenuFries } from "react-icons/ci";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const navLink = [
    { Name: "Home", path: "/" },
    { Name: "About", path: "about" },
    { Name: "Shop", path: "shop" },
    { Name: "Blog", path: "blog" },
    { Name: "Contact", path: "contact" },
  ];

  return (
    <>
      <section>
        <nav className="flex justify-center mt-10">
          <div className="w-[80%] h-[6rem] rounded-[2rem] bg-[#287fa3] flex items-center justify-evenly">
            <ul className="flex gap-10">
              {navLink.map((item, index) => (
                <li
                  className="text-md text-white font-bold cursor-pointer hidden md:block"
                  key={index}
                >
                  <Link to={item.path}>{item.Name}</Link>
                </li>
              ))}
            </ul>

            <div className="flex gap-20 text-white">
              <span>
                <LuShoppingBag size={"1.3rem"} />
              </span>
              <span>
                <CiMenuFries size={"1.3rem"} onClick={() => setOpen(true)} />
              </span>
            </div>
          </div>
          <div>
            <AnimatePresence>
              {open && (
                <motion.div
                  className="absolute h-full right-0 top-0 w-[30rem] bg-[#287fa3]"
                  initial={{ x: 1000 }}
                  animate={{ x: 10 }}
                  exit={{ x: 1000 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="absolute right-[10rem] bottom-[20rem]">
                    <ul className="flex flex-col justify-center items-center gap-5">
                      {navLink.map((item, index) => (
                        <motion.li
                          className="text-4xl text-white"
                          key={index}
                          initial={{ x: 1000 }}
                          animate={{ x: 10 }}
                          exit={{ x: 1000 }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                          <Link to={item.path}>{item.Name}</Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <IoMdArrowDroprightCircle
                    size={"3rem"}
                    className="absolute left-[6rem] top-10 text-white"
                    onClick={() => setOpen(false)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </section>
    </>
  );
};

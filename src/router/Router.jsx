import { Route, Routes } from "react-router-dom";
import { Home } from "../page/Home";
import { Shop } from "../page/Shop";
import { ProductsDetail } from "../page/ProductsDetail";
import { Cart } from "../page/Cart";
import { Checkout } from "../page/Checkout";
import { Blog } from "./../page/Blog";
import { About } from "./../page/About";

export const Router = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="blog" element={<Blog />} />
          <Route path="shop/:id" element={<ProductsDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </div>
    </>
  );
};

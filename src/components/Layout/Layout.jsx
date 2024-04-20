import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Router } from "../../router/Router";

export const Layout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Router />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

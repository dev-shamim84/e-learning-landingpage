import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar/NavBar";
import Footer from "../Components/Footersection/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

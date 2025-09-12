import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;

import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/headerlogo.png";
import { BsCartPlus } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const navLink = [
  { path: "/", label: "Browse" },
  { path: "/about", label: "About" },
  { path: "/courses", label: "Courses" },
  { path: "/blog", label: "Blog" },
  { path: "/online", label: "Online Classes" },
];

const Navmenu = ({ handleToggle }) => {
  return (
    <ul className="flex flex-col md:flex-row md:space-x-8 font-semibold md:text-[20px]">
      {navLink.map((item, idx) => (
        <li key={idx} onClick={handleToggle}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-amber-500 font-bold text-[16px]"
                : "hover:text-amber-700 text-[16px] transition duration-300 ease-out"
            }
            to={item.path}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4">
        <nav className="py-6 flex justify-between items-center">
          {/* logo */}
          <div className="flex items-center gap-5">
            <Link to={"/"}>
              <img className="w-10" src={logo} alt="logo" />
            </Link>
            {/* desktop menu */}
            <div className="hidden md:flex">
              <Navmenu />
            </div>
          </div>

          {/* desktop buttons */}
          <div className="space-x-2 hidden md:flex md:justify-center md:items-center">
            <button className="text-xl cursor-pointer">
              <BsCartPlus />
            </button>
            <button className="text-xl cursor-pointer">
              <IoMdHeartEmpty />
            </button>
          </div>

          {/* mobile toggle button */}
          <div
            onClick={handleToggle}
            className="md:hidden text-2xl cursor-pointer"
          >
            {open ? null : <RiMenu3Fill size={22} />}
          </div>

          {/* mobile menu */}
          <div
            className={`fixed top-0 left-0 h-screen w-full bg-white flex flex-col justify-center items-center space-y-10 transform transition-transform duration-300 ease-in-out ${
              open ? "translate-x-0" : "-translate-x-full text-center "
            } md:hidden`}
          >
            <div className="flex flex-col space-y-10 text-center text-2xl">
              <Navmenu handleToggle={handleToggle} />
            </div>

            <div
              onClick={handleToggle}
              className="md:hidden absolute top-0 right-4 py-3"
            >
              <AiOutlineClose size={22} />
            </div>
            <div className="flex gap-4">
              <button className="text-2xl cursor-pointer">
                <BsCartPlus />
              </button>
              <button className="text-2xl cursor-pointer">
                <IoMdHeartEmpty />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* mobile menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-white flex flex-col justify-center items-center space-y-10 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full text-center "
        } md:hidden`}
      >
        <div className="flex flex-col space-y-10 text-center text-2xl">
          <Navmenu handleToggle={handleToggle} />
        </div>

        <div
          onClick={handleToggle}
          className="md:hidden absolute top-0 right-4 py-3"
        >
          <AiOutlineClose size={22} />
        </div>
        <div className="flex gap-4">
          <button className="text-2xl cursor-pointer">
            <BsCartPlus />
          </button>
          <button className="text-2xl cursor-pointer">
            <IoMdHeartEmpty />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

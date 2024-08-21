import React, { useState, useEffect, useContext } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation ,NavLink } from "react-router-dom";
import "../styles/home.css";
import { AuthContext } from "./shared/context/auth-context";
import { IoHome, IoPerson, IoMenu,IoSettingsSharp } from "react-icons/io5";
import { FaSearch, FaBell, FaLightbulb } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";


export const Navbar = () => {
  const auth = useContext(AuthContext);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [menuColor, setMenuColor] = useState("bg-blue-500");
  const location = useLocation();

  const toggleNavbar = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setMenuColor("bg-primary");
        break;
      case "/Ask":
        setMenuColor("bg-primary");
        break;
      case "/Dashboard":
        setMenuColor("bg-primary");
        break;
      case "/Profile":
        setMenuColor("bg-primary");
        break;
      case "/Register":
        setMenuColor("bg");
        break;
      default:
        setMenuColor("bg-primary");
    }
  }, [location]);

  return (
    <div className="fixed top-0 w-full z-50">
      <div
        className={`text-white flex justify-around items-center flex-wrap py-4 ${menuColor}`}
      >

        <div className="flex">

        <h1 className="text-3xl">
          <span className="text-white">Ask AAU</span> 
          
        </h1>
        <div className='items-center ml-3 md:ml-7 border border-solid-1 py-1 px-4 rounded-full hidden md:flex'>
            <FaSearch className='text-xl' />
            <input type="text" className='outline-none border-none ml-2 w-full bg-transparent' placeholder='Enter a name' />
          </div>
        </div>
        <div>
          <nav className="flex">
            <ul
              className={`${
                isNavVisible ? "show menu" : "hidden"
              } md:flex z-50 text-center`}
            >
              <li>
                <NavLink
               
                  to="/" 
                  className={({ isActive }) => (isActive ? 'bg-white rounded-md p-2 text-primary mr-8' : 'md:text-white mr-8  text-black transition-all duration-300 hover:bg-white hover:rounded-md hover:p-2 hover:text-primary')}
                >
                  Home
                </NavLink>
              </li>
              <li>
              <NavLink
               
               to="/Ask" 
               className={({ isActive }) => (isActive ? 'bg-white rounded-md p-2 text-primary mr-8' : 'md:text-white mr-8  text-black transition-all duration-300 hover:bg-white hover:rounded-md hover:p-2 hover:text-primary')}
             >
               Ask
             </NavLink>
              </li>
              {auth.isLoggedIn && auth.isAdmin && (
                <li>
                 <NavLink
               to="/Dashboard" 
               className={({ isActive }) => (isActive ? 'bg-white rounded-md p-2 text-primary mr-8' : 'md:text-white mr-8  text-black transition-all duration-300 hover:bg-white hover:rounded-md hover:p-2 hover:text-primary')}
             >
               Dashboard
             </NavLink>
                </li>
              )}
              {auth.isLoggedIn && (
                <li>
                 <NavLink
               
               to="/Profile" 
               className={({ isActive }) => (isActive ? 'bg-white rounded-md p-2 text-primary mr-8' : 'md:text-white mr-8  text-black transition-all duration-300 hover:bg-white hover:rounded-md hover:p-2 hover:text-primary')}
             >
               Profile
             </NavLink>
                </li>
              )}
              {!auth.isLoggedIn && (
                <li>
                <NavLink
               
               to="/Register" 
               className={({ isActive }) => (isActive ? 'bg-white rounded-md p-2 text-primary mr-8' : 'md:text-white mr-8  text-black transition-all duration-300 hover:bg-white hover:rounded-md hover:p-2 hover:text-primary')}
             >
               Register
             </NavLink>
                </li>
              )}
              {auth.isLoggedIn && (
                <li>
                  <Link
                    onClick={auth.logout}
                    className="md:text-white mr-8  text-black transition-all duration-300"
                    to="/Register"
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
            <CiMenuFries
              onClick={toggleNavbar}
              className={`${
                isNavVisible ? "hidden" : "block"
              } md:hidden text-2xl cursor-pointer`}
            />
            <IoMdClose
              onClick={toggleNavbar}
              className={`${
                isNavVisible ? "block" : "hidden"
              } md:hidden text-2xl cursor-pointer`}
            />
          </nav>
        </div>
        <div className=' items-center hidden md:flex'>
       
       <BiSolidMessageRounded className='text-xl ml-4' />
       <FaBell className='ml-4 text-xl' />
       <FaLightbulb className='ml-4 text-xl' />
       <IoSettingsSharp className='ml-4 text-xl' />
     
     
      
     </div>
      </div>
    </div>
  );
};



// <NavLink
//               to="/"
//               className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
//               end // This ensures the link is active only for the exact path
//             >
//               Home
//             </NavLink>

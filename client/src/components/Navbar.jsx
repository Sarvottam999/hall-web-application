import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../others/userContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(UserContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const location = useLocation();

  const shouldShowImage = () => {


 
     if (location.pathname === "/") {

      return true
      
     }
     return false
  };


  return (
    
    <nav className={`relative ${shouldShowImage() === true ? "h-[1000px] text-white" : "h-0 text-black"}`} >
      <img
        className="absolute c-0 w-full h-full bg-no-repeat object-cover"
        src="https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2"
        alt="Sample image"
      />

      {shouldShowImage() === true && <div className="absolute inset-0 bg-black opacity-15"></div>}
     { shouldShowImage() === true && <div className="absolute inset-0 flex flex-col  justify-center pl-80  h-full    ">
        <h1 className="text-white   text-7xl font-normal ">Royalty Wedding</h1>
        <p className="text-white text-5xl font-normal mt-7 ">
           Unite In Love, Book Your Dream Venue Today
           {/* Your Perfect Wedding Start Here ! */}
          {/* Where Dreams Unit Venues Delight, Your Perfect Wedding Start here . */}
        </p> 
       
        <Link to={"/explore"} className="w-48 h-11 rounded-xl bg-pink-600  items-center flex justify-center text-xl mt-[95px] text-white hover:bg-white hover:text-black ">
          Explore
        </Link>
        <div className="h-24">

        </div>
      </div>}


      <div className={`absolute flex justify-between w-full ${shouldShowImage() === true ? "text-white" : "text-black"} h-32  items-center px-24 `}>
        <Link to="/" className="  font-semibold text-[3rem]">
          WedHall<span className="text-blue-600"></span>
        </Link>

        <div className="  space-x-12  text-3xl md:flex   items-center hidden">
          <Link
            to="/explore"
            className="   font-medium hover:text-gray-300"
          >
            Explore
          </Link>
          <Link
            to={"/about"}
            className="    font-medium hover:text-gray-300"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="   font-medium hover:text-gray-300"
          >
            Contact
          </Link>

          {/* ----------------------------------------- */}
          <Link
            to={user ? "account" : "/login"}
            className=" flex gap-2 items-center border border-gray-300 rounded-full px-2 py-1 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <div className=" bg-gray-500 text-white rounded-full border border-gray-400  overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 relative top-1 "
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {!!user && <div>{user.name}</div>}
          </Link>

         
        </div>

        <div className="md:hidden  ">
            {/* Dropdown menu button */}
            <button onClick={toggleDropdown} className=" ite">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>

            </button>
            {/* Dropdown menu items */}
          
          </div>


       
      </div>

      {isOpen && (
              <div className=" w-full md:hidden bg-gray-800 p-2 rounded-xl shadow-lg flex flex-col mt-[100px] space-y-5 absolute">
                {/* <Link to={"/"} className="block text-white py-2">Home</Link> */}
                <Link
            to="/explore"
            className="   font-medium hover:text-gray-300"
          >
            Explore
          </Link>
          <Link
            to={"/about"}
            className="    font-medium hover:text-gray-300"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="   font-medium hover:text-gray-300"
          >
            Contact
          </Link>

          {/* ----------------------------------------- */}
          <Link
            to={user ? "account" : "/login"}
            className=" flex gap-2 items-center border border-gray-300 rounded-full px-2 py-1 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <div className=" bg-gray-500 text-white rounded-full border border-gray-400  overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 relative top-1 "
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {!!user && <div>{user.name}</div>}
          </Link>
                {/* <Link to={"/port5/blogs"} className="block text-white py-2">Blogs</Link>
                <Link to={"/port5/#"} className="block text-white py-2">Shop</Link>

                <Link to="/port5/contact" className="block text-white py-2">Contact</Link> */}
              </div>
            )}


    </nav>
  );
}

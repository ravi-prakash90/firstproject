import React from "react";
import Login from "../Pages/Login";
import Footer from "./Footer";
import DataTable from "./DataTable";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    
    <div className="w-full">
      <div className="bg-black">
        <div className="max-w-7xl mx-auto   flex justify-between items-center py-8 ">
          
          <div className="text-emerald-400 text-2xl font-bold">WELCOME</div>

          <div className="flex space-x-8 ml-auto font-bold ">
            <Link
              to="/"
              className="text-white bg-emerald-600 p-3 py-2 rounded-4xl "
            >
              Home New
            </Link>
            <Link
              to="/contact"
              className="text-white bg-emerald-600 p-3 py-2 rounded-4xl"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="text-white bg-emerald-600 p-3 py-2 rounded-4xl"
            >
              About
            </Link>
            <Link
              to="/register"
              className="text-white bg-emerald-600 p-3 py-2 rounded-4xl"
            >
              Register
            </Link>
             
          </div>
        </div>
      </div>
    </div>
   
    </>
  );
};

export default Navbar;

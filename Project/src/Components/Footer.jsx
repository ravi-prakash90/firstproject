import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className=" items-center">
          <div className=" space-x-4">
           <Link to="/Login" className="hover:text-gray-400">Login</Link>
            <a href="about" className="hover:text-gray-400">
              About
            </a>
            <Link to="/DataTable" className="hover:text-gray-400">DataTable</Link>
            <Link to="/TableUse" className="hover:text-gray-400">TableUse</Link>
            <a href="contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>
      
        </div>

        <div className="text-center text-sm mt-4">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

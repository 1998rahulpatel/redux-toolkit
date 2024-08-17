import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between bg-blue-300 rounded-md p-4 mt-1 shadow-md">
      <span className="text-xl font-bold text-white mb-2 md:mb-0">
        <Link
          className="text-black font-medium hover:text-blue-800 transition-colors"
          to="/"
        >
          REDUX TOOLKIT
        </Link>
      </span>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
        <Link
          className="text-black font-medium hover:text-blue-800 transition-colors"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-black font-medium hover:text-blue-800 transition-colors"
          to="/cart"
        >
          Cart<span className="px-1 text-xl font-bold text-gray-950">{cartItems.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

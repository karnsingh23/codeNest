import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 z-20 flex justify-between items-center  p-4 px-8 bg-[#23262f] w-screen">
      <h1 className="text-[#ff7700] font-bold md:text-2xl">कोडhub</h1>

      <div className="relative flex justify-center items-center ">
        <FontAwesomeIcon
          icon={faSearch}
          className="w-5 h-4 hidden md:w-3 md:h-4 md:absolute md:top-1/2 md:left-2 md:transform -translate-y-1/2 text-gray-400"
        />
        <NavLink to='/docslistpage'><FontAwesomeIcon icon={faBars} className="md:hidden " /></NavLink>
        <input
          className="bg-[#17181c] px-3 py-1 max-md:hidden rounded-md pl-8 pr-3 border border-transparent focus:border-white transition duration-300 hover:border-white text-white"
          type="text"
          placeholder="Search"
        />
      </div>
      
    </nav>
  );
}

export default Navigation;

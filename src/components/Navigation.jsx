import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <nav className="sticky top-0 z-10 flex justify-between items-center p-7 md:p-4 md:px-8 bg-[#23262f] w-screen">
      <h1 className="text-[#ff7700] font-bold md:text-2xl">कोडhub</h1>

      <div className="relative md:flex md:justify-center md:items-center ">
        <FontAwesomeIcon
          icon={faSearch}
          className="w-5 h-4 md:w-3 md:h-4 absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400"
        />
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

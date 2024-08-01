"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "./Drawer";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="p-0 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-between py-6 w-full">
        <div className="flex items-center w-full">
          <button
            className="block md:hidden "
            onClick={() => setDrawerOpen(true)}
          >
            <GiHamburgerMenu size={24} color="#A098AE" />
          </button>
          <h1 className="text-lg sm:text-3xl font-extrabold text-gray-800 ml-4 sm:ml-0">
            Let&apos;s Create...your own salad!!!
          </h1>
        </div>
        <div className="flex mt-4 justify-end sm:mt-0 w-full sm:w-auto">
          <div className="relative w-full sm:w-96">
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#F8B602]">
              <IoSearch size={24} />
            </button>
            <input
              type="text"
              placeholder="Search ingredients to make a salad..."
              className="w-full pl-10 pr-4 py-2 rounded-md shadow-sm text-sm text-gray-800 border border-white focus:outline-none focus:border-[#FFEA75] transition duration-300"
            />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      </div>
    </div>
  );
}

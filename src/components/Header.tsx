import React from "react";
import { IoSearch } from "react-icons/io5";

export default function Header() {
  return (
    <div className="flex items-center justify-between py-6">
      <h1 className="text-3xl font-extrabold text-gray-800">
        Let's Create...your own salad!!!
      </h1>
      <div className="relative flex">
        <button className="absolute left-2 top-0 text-[#F8B602] p-2 ">
          <IoSearch size={24} />
        </button>
        <input
          type="text"
          placeholder="Search ingredients to make a salad..."
          className="w-96 pl-12 pr-4 py-2 rounded-md shadow-sm text-sm text-slate-300 border border-white focus:outline-none  focus:border-blue-500 transition duration-300"
        />
      </div>
    </div>
  );
}

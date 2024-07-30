"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function page() {
  const router = useRouter();

  return (
    <div className="p-4 w-full">
      <div className="flex items-start gap-10">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="flex md:hidden"
        >
          <IoIosArrowBack size={30} />
        </button>
        <h1 className="text-xl md:text-2xl text-center md:text-start font-bold mt-3 mb-6">
          Edit Recipe
        </h1>
      </div>
      <div className="bg-white w-full p-4 rounded-lg">
        <h1 className="text-xl text-[#2E2E2E] font-semibold mb-4">
          Your ingredients to make a salad Recipe
        </h1>
      </div>
    </div>
  );
}

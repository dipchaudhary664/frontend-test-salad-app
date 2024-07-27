import React from "react";

export default function page() {
  return (
    <div className="py-6 px-4 w-full">
      <h1 className="text-2xl font-bold text-[#2E2E2E]"> Recipe Chaudhary</h1>
      <div className="my-4 bg-white w-full rounded-md p-4">
        <h3 className="text-md font-semibold text-[#2E2E2E]">Your Recipe</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
          cards
        </div>
      </div>
    </div>
  );
}

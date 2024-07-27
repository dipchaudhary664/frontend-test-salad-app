import Image from "next/image";
import React from "react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

// Define the type for the ingredient prop
interface Ingredient {
  image: string;
  ingredient: string;
  category: string;
  calories: number;
}

interface ProductCardProps {
  ingredient: Ingredient;
}

export default function ProductCard({ ingredient }: ProductCardProps) {
  return (
    <div className="bg-white h-full rounded-lg shadow-lg ">
      <div className="flex items-center justify-center">
        <div className="w-full h-40 flex items-center justify-center px-4 pt-6">
          <Image
            quality={100}
            width={400}
            height={400}
            src={ingredient.image}
            alt={ingredient.ingredient}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-md text-[#2E2E2E] font-medium mb-1 capitalize">
          {ingredient.ingredient}
        </h2>

        <p className="text-sm font-bold text-[#2E2E2E]">
          {ingredient.calories}
          <span className="text-sm font-bold text-[#F8B602] pl-2">Cal</span>
        </p>
        <div className="flex gap-2 float-right items-center pb-4">
          <FaCircleMinus size={20} color="#F8B602" />

          <p className="text-sm text-[#2E2E2E] font-semibold ">0</p>
          <FaCirclePlus size={20} color="#F8B602" />
        </div>
      </div>
    </div>
  );
}

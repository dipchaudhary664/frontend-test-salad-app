// pages/edit-recipe.tsx
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

interface Ingredient {
  id: number;
  name: string;
  quantity: string;
  calories: number;
  imageName: string;
}

const ingredientsData: Ingredient[] = [
  {
    id: 1,
    name: "Green Leaf Lettuce",
    quantity: "x2",
    calories: 16,
    imageName: "green leaf lettuce.png",
  },
  {
    id: 2,
    name: "Avocado",
    quantity: "x1",
    calories: 16,
    imageName: "avocado.png",
  },
  {
    id: 3,
    name: "Cream Dressing",
    quantity: "x1",
    calories: 16,
    imageName: "Cream Dressing.png",
  },
];

const EditRecipe: React.FC = () => {
  const router = useRouter();

  const totalCalories = ingredientsData.reduce(
    (total, ingredient) => total + ingredient.calories,
    0
  );

  return (
    <div className="p-4 w-full mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="flex md:hidden"
        >
          <IoIosArrowBack size={30} />
        </button>
        <h1 className="text-xl md:text-2xl font-bold mt-3">Edit Recipe</h1>
      </div>
      <div className="bg-white w-full p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-semibold mb-4">
          Your ingredients to make a salad Recipe
        </h1>
        <div className="space-y-4">
          {ingredientsData.map((ingredient) => (
            <div
              key={ingredient.id}
              className="flex justify-between items-center"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={`/${ingredient.imageName}`}
                  alt={ingredient.name}
                  width={60}
                  height={60}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div>
                  <p className="font-medium">{ingredient.name}</p>
                  <div className="flex gap-4">
                    <p className="text-gray-600">{ingredient.quantity}</p>
                    <button className="text-red-500">Delete</button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-[#2E2E2E] font-bold text-lg ">
                  + {ingredient.calories}{" "}
                  <span className="text-[#F8B602] font-bold text-lg">Cal</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t my-4"></div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">Total Calories</p>
          <p className="text-lg font-semibold text-[#F8B602]">
            {totalCalories} Cal
          </p>
        </div>
        <button className="w-full mt-6 py-2 bg-[#F8B602] text-white font-semibold rounded-lg">
          Update Recipe
        </button>
      </div>
    </div>
  );
};

export default EditRecipe;

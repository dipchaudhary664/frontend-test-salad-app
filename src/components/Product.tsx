"use client";
import React, { useState, useEffect } from "react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchIngredientData } from "@/redux/slice";
import { increment, decrement } from "@/redux/ingredientCountSlice";
import ModalBox from "./ModalBox"; // Import the ModalBox component

export default function Product() {
  const dispatch: AppDispatch = useDispatch();
  const { filteredData, status, error } = useSelector(
    (state: RootState) => state.data
  );
  const counts = useSelector((state: RootState) => state.ingredientCount);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchIngredientData());
    }
  }, [status, dispatch]);

  const selectedIngredients = Object.keys(counts).length > 0;

  // Ensure this calculates the total calories based on the ingredient count
  const totalCalories = Object.values(counts).reduce(
    (total, item) => total + (item.calories || 0) * item.count,
    0
  );

  return (
    <div className="pb-10">
      <h1 className="text-sm md:text-xl text-[#2E2E2E] font-bold mb-6 text-center md:text-left">
        Choose your ingredients to make a salad
      </h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <div className="space-y-6">
          <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredData.map((item, index) => (
              <div key={index} className="bg-white h-full rounded-lg shadow-lg">
                <div className="flex items-center justify-center">
                  <div className="w-full h-40 flex items-center justify-center px-4 pt-6">
                    {item.image && (
                      <Image
                        quality={100}
                        src={item.image}
                        width={400}
                        height={400}
                        alt={item.ingredient}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-md text-[#2E2E2E] font-medium mb-1 capitalize">
                    {item.ingredient}
                  </h2>
                  <p className="text-sm font-bold text-[#2E2E2E]">
                    {item.calories}
                    <span className="text-sm font-bold text-[#F8B602] pl-2">
                      Cal
                    </span>
                  </p>
                  <div className="flex gap-2 float-right items-center pb-4">
                    {counts[item.ingredient]?.count > 0 && (
                      <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement(item.ingredient))}
                      >
                        <FaCircleMinus size={20} color="#F8B602" />
                      </button>
                    )}
                    <p className="text-sm text-[#2E2E2E] font-semibold">
                      {counts[item.ingredient]?.count > 0
                        ? counts[item.ingredient].count
                        : ""}
                    </p>
                    <button
                      aria-label="Increment value"
                      onClick={() =>
                        dispatch(
                          increment({
                            ingredient: item.ingredient,
                            calories: item.calories,
                          })
                        )
                      }
                    >
                      <FaCirclePlus size={20} color="#F8B602" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {selectedIngredients && (
            <div className="p-4 bg-[#F8B602] flex flex-col md:flex-row justify-between items-center rounded-md">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-white text-[#F8B602] rounded-full w-8 h-8 flex items-center justify-center">
                  {Object.keys(counts).length}
                </div>
                <p className="ml-2 text-white font-bold">Your Ingredients</p>
              </div>
              <div className="flex items-center">
                <p className="text-white font-bold">{totalCalories} Cal</p>
                <button
                  className="ml-4 bg-[#2FB62D] text-white text-lg px-4 py-2 rounded-md"
                  onClick={() => setIsModalOpen(true)}
                >
                  Create Recipe
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      <ModalBox isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

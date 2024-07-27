"use client";
import Image from "next/image";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchIngredientData } from "@/redux/slice";

interface Ingredient {
  image: string | null;
  ingredient: string;
  category: string;
  calories: number;
}

export default function Product() {
  const dispatch: AppDispatch = useDispatch();
  const { data, status, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchIngredientData());
    }
  }, [status, dispatch]);

  return (
    <div className="pb-10">
      <h1 className="text-xl text-[#2E2E2E] font-bold mb-6">
        Choose your ingredients to make a salad
      </h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
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
                  <FaCircleMinus size={20} color="#F8B602" />
                  <p className="text-sm text-[#2E2E2E] font-semibold">0</p>
                  <FaCirclePlus size={20} color="#F8B602" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

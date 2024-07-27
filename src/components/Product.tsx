"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchIngredientData } from "@/redux/slice";
import ProductCard from "./ProductCard";

export default function Product() {
  const dispatch: AppDispatch = useDispatch();
  const { data, status, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchIngredientData());
    }
  }, [status, dispatch]);

  return (
    <div className="">
      <h1 className="text-xl text-[#2E2E2E] font-bold mb-6">
        Choose your ingredients to make a salad
      </h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <ProductCard key={index} ingredient={item} />
          ))}
        </div>
      )}
    </div>
  );
}

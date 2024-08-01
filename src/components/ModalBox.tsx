"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addRecipe } from "../redux/recipeSlice";
import { toast, Bounce } from "react-toastify";

type ModalBoxProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  totalCalories: number;
};

export default function ModalBox({
  isModalOpen,
  setIsModalOpen,
  totalCalories,
}: ModalBoxProps) {
  const [recipeName, setRecipeName] = useState("");
  const dispatch = useDispatch();

  if (!isModalOpen) return null;

  const handleCreateNewRecipe = () => {
    if (recipeName.trim()) {
      dispatch(
        addRecipe({
          name: recipeName,
          calories: totalCalories,
          image: "",
        })
      );
      setIsModalOpen(false);

      // Show toast message
      toast.success("Recipe Created Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-hidden={!isModalOpen}
    >
      <div className="bg-white p-4 px-8 rounded-lg shadow-lg max-w-sm w-full mx-4">
        <div className="flex justify-end items-center mb-4">
          <button
            onClick={() => setIsModalOpen(false)}
            className="text-[#A5ABB0] text-2xl"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col justify-center items-center gap-4 w-full">
            <Image
              src="/logo.png"
              alt="logo"
              width={70}
              height={70}
              quality={100}
            />
            <h2 className="text-lg font-bold">Recipe Name</h2>
            <input
              type="text"
              placeholder="Input Your Recipe Name..."
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              className="w-full text-sm border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-[#FFEA75] focus:border-transparent"
            />
          </div>
          <div className="flex justify-end gap-16 mt-4 w-full">
            <button
              className="text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="bg-[#2FB62D] text-white text-sm px-4 py-2 rounded-md"
              onClick={handleCreateNewRecipe}
            >
              Create New Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

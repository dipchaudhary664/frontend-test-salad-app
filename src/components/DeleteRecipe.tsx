"use client";
import Image from "next/image";
import React from "react";
import { deleteRecipe } from "../redux/recipeSlice";
import { useDispatch } from "react-redux";
import { toast, Bounce } from "react-toastify";

type DeleteRecipeProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  recipeId: string;
};

export default function DeleteRecipe({
  isModalOpen,
  setIsModalOpen,
  recipeId,
}: DeleteRecipeProps) {
  const dispatch = useDispatch();

  if (!isModalOpen) return null;

  const handleDelete = () => {
    dispatch(deleteRecipe(recipeId));
    setIsModalOpen(false);

    // Show toast message
    toast.success("Your Created Recipe Delete Successfully!", {
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
  };

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-hidden={!isModalOpen}
    >
      <div className="bg-white p-4 px-8 rounded-lg shadow-lg max-w-sm w-full mx-4">
        <div className="flex justify-end items-center">
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
              src="/warn.png"
              alt="logo"
              width={70}
              height={70}
              quality={100}
            />
          </div>
          <div className="text-center mt-4 w-full">
            <h3 className="text-lg font-semibold mb-4">Delete Recipe?</h3>
            <div className="flex justify-between items-center w-full pt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-white text-[#2E2E2E] font-semibold rounded-full hover:text-gray-800 py-2 px-4"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white py-2 px-10 rounded-full hover:bg-red-600 transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

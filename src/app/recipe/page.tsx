"use client";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { useState } from "react";
import DeleteRecipe from "../../components/DeleteRecipe"; // Adjust the import path if needed
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export default function Page() {
  const router = useRouter();

  const recipes = useSelector((state: RootState) => state.recipes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recipeIdToDelete, setRecipeIdToDelete] = useState<string | null>(null);

  const openDeleteModal = (recipeId: string) => {
    setRecipeIdToDelete(recipeId);
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsModalOpen(false);
    setRecipeIdToDelete(null);
  };

  return (
    <div className="p-4 w-full">
      <div className="flex items-start gap-10">
        <button
          onClick={() => router.push("/")}
          className=" flex md:hidden
        "
        >
          <IoIosArrowBack size={30} />
        </button>
        <h1 className="text-xl md:text-3xl text-center md:text-start font-bold mb-6">
          Recipe
        </h1>
      </div>
      <div className="bg-white w-full p-4 rounded-lg">
        <h1 className="text-xl font-semibold mb-4">Your Recipes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="relative bg-[#f8b703] p-4 rounded-lg shadow-md overflow-hidden"
            >
              {/* Background circles */}
              <div className="absolute top-0 left-0 w-28 h-28 bg-[#f0862d] rounded-full transform -translate-x-4 -translate-y-4 z-0"></div>
              <div className="absolute bottom-0 right-0 w-28 h-28 bg-[#cfbc27] rounded-full transform translate-x-4 translate-y-4 z-0"></div>

              {/* Content */}
              <div className="flex flex-col space-y-16">
                <div className="relative z-10 p-4 bg-white rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {recipe.name}
                  </h3>
                  <p className="mt-2 text-3xl font-bold text-yellow-500">
                    {recipe.calories} <span className="text-xl">Cal</span>
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-between gap-6 mt-4 relative z-10">
                  <button
                    onClick={() => openDeleteModal(recipe.id)}
                    className="bg-white text-red-500 flex-1 min-w-[100px] h-10 rounded-full hover:text-red-600 flex items-center justify-center gap-2"
                  >
                    <FaTrashAlt size={18} />
                    <span className="text-sm font-semibold">Delete</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => router.push("/edit_recipe")}
                    className="bg-white text-[#2E2E2E] flex-1 min-w-[100px] h-10 rounded-full hover:text-gray-800 flex items-center justify-center gap-2"
                  >
                    <FaEdit size={15} />
                    <span className="text-sm font-semibold">Edit</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for delete confirmation */}
      {isModalOpen && recipeIdToDelete && (
        <DeleteRecipe
          isModalOpen={isModalOpen}
          setIsModalOpen={closeDeleteModal}
          recipeId={recipeIdToDelete}
        />
      )}
    </div>
  );
}

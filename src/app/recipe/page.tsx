"use client";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Page() {
  const recipes = useSelector((state: RootState) => state.recipes);

  return (
    <div className="p-4 w-full">
      <h1 className="text-3xl font-bold mb-6 bg">Recipe</h1>
      <div className=" bg-white w-full p-4 rounded-lg">
        <h1 className="text-xl font-semibold mb-4 bg"> Your Recipe</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-[#f8b703] h-48 w-48 rounded-lg shadow-md flex flex-col justify-between"
            >
              <div
                className="h-28 w-32 bg-[#f0862d]"
                style={{ borderRadius: "8% 80% 80% 80%" }}
              ></div>

              {/* <div>
                <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
                <p className="text-2xl font-bold text-orange-600">
                  {recipe.calories} Cal
                </p>
              </div>
              <div className="flex justify- gap-4 mt-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                  Delete
                </button>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400">
                  Edit
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

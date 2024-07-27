"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

interface CategoryCardProps {
  img: string;
  label: string;
  isSelected: boolean;
  onSelect: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  img,
  label,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={`w-24 h-24 flex flex-col items-center p-4 bg-yellow-50 rounded-lg shadow-md relative cursor-pointer ${
        isSelected ? "" : ""
      }`}
      onClick={onSelect}
    >
      <div className="w-16 h-16 mb-2 relative">
        <Image src={img} alt={label} layout="fill" objectFit="contain" />
      </div>
      <span className="text-gray-700 text-sm">{label}</span>

      {isSelected && (
        <div className="absolute top-1 right-1 text-green-500">
          <FaCircleCheck />
        </div>
      )}
    </div>
  );
};

const Category: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSelectCategory = (label: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(label)
        ? prevSelected.filter((category) => category !== label)
        : [...prevSelected, label]
    );
  };

  return (
    <div className="my-4 bg-slate-200 p-4">
      <h2 className="text-xl font-semibold mb-4">Select Category</h2>
      <div className="flex gap-4">
        {[
          { img: "/Vegetables.png", label: "Vegetables" },
          { img: "/Fruit.png", label: "Fruit" },
          { img: "/Toppings.png", label: "Toppings" },
          { img: "/Protein.png", label: "Protein" },
          { img: "/Dressing.png", label: "Dressing" },
        ].map(({ img, label }) => (
          <CategoryCard
            key={label}
            img={img}
            label={label}
            isSelected={selectedCategories.includes(label)}
            onSelect={() => handleSelectCategory(label)}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;

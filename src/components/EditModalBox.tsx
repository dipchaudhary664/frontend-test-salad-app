import React from "react";

interface ModalBoxProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  totalCalories: number;
}

const ModalBox: React.FC<ModalBoxProps> = ({
  isModalOpen,
  setIsModalOpen,
  totalCalories,
}) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4">Recipe Details</h2>
        <p className="text-lg">Total Calories: {totalCalories} Cal</p>
        <button
          className="mt-4 bg-[#F8B602] text-white px-4 py-2 rounded-md"
          onClick={() => setIsModalOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalBox;

import React from "react";

export const Filter = ({ activeFilterValue, updateCurrentFilter }) => {
  return (
    <div className="filterContainer gap-[6] flex py-1 items-center w-[345]">
      <button
        className={`px-3 py-1 rounded-md w-[40] h-8 text-xs
  ${
    activeFilterValue === "all"
      ? "bg-[#3C82F6] text-white hover:cursor-pointer"
      : "bg-[#F3F4F6] text-gray-700 border-gray-400 hover:cursor-pointer"
  }`}
        onClick={() => updateCurrentFilter("all")}
      >
        All
      </button>
      <button
        className={`px-3 py-1 rounded-md text-xs w-[60] h-8
    ${
      activeFilterValue === "active"
        ? "bg-[#3C82F6] text-white  hover:cursor-pointer"
        : "bg-[#f3f4f6] text-gray-700 border-gray-400 hover:cursor-pointer"
    }`}
        onClick={() => updateCurrentFilter("active")}
      >
        Active
      </button>

      <button
        className={`px-3 py-1 rounded-md text-xs w-[87] h-8
    ${
      activeFilterValue === "completed"
        ? "bg-[#3C82F6] text-white  hover:cursor-pointer"
        : "bg-[#f3f4f6] text-gray-700 border-gray-400 hover:cursor-pointer"
    }`}
        onClick={() => updateCurrentFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

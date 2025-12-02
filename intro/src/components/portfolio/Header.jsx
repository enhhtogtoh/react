import React from "react";
import { Rubik_Mono_One } from "next/font/google";
const rubik = Rubik_Mono_One({
  subsets: ["latin"],
  weight: "400",
});
export const Header = () => {
  return (
    <div className="w-full h-17 flex items-center justify-center ">
      <div className="w-7xl h-9  flex justify-between px-8  items-center">
        <div className={rubik.className}>Tok</div>
        <div className="w-[554px] h-9 gap-6 flex items-center ">
          <div className="text-gray-600 cursor-pointer">About</div>
          <div className="text-gray-600 cursor-pointer">Work</div>
          <div className="text-gray-600 cursor-pointer">Testimonials</div>
          <div className="text-gray-600 cursor-pointer">Contact</div>
          <div className="text-gray-100">|</div>
          <div className="flex gap-4">
            <button className="w-9 h-9 cursor-pointer">
              <img src="./icon.png" alt="icon" />
            </button>
            <button className="text-base w-34 h-9 rounded-xl bg-black text-white cursor-pointer">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import {
  ContactInfo,
  PrivateInfo,
  ProfileInfo,
  Success,
} from "@/components/steps";
import { Header } from "@/components/layer/Header";
// import { Footer } from "@/components/layer/Footer";
const Home = () => {
  const [step, setStep] = useState(0);
  const handleClick = () => {
    setStep(step + 1);
  };
  const handlePrev = () => {
    setStep(step - 1);
  };
  const Container = [ContactInfo, PrivateInfo, ProfileInfo, Success][step];
  return (
    <div className="bg-gray-100 w-screen flex justify-center items-center h-screen">
      <div className="bg-white w-120 drop-shadow-md rounded-md p-8 flex flex-col gap-7 ">
        <Header />
        {/* <ContactInfo /> */}
        <Container />
        {/* <Footer /> */}
        <div className="flex gap-5 flex-row-reverse">
          {" "}
          <button
            className="w-full h-[44] flex justify-center items-center px-3 py-[10] gap-2 rounded-md bg-[#121316] text-white cursor-pointer"
            onClick={handleClick}
          >
            Continue
            <img src="./chevron_right.png" alt="chevron_right" className="" />
          </button>
          <button
            className="w-full h-[44] flex justify-center items-center px-3 py-[10] gap-2 rounded-md bg-[white] text-black cursor-pointer border-[#CBD5E1] border"
            onClick={handlePrev}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;

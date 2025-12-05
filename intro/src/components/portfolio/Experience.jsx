import {
  Experience,
  Experience1,
  Experience2,
} from "@/components/portfolio/Experience-data";
export const Experiences = () => {
  return (
    <div
      id="container"
      className="w-full h-[1140] px-8 flex flex-col gap-12 justify-center items-center bg-gray-50 max-sm:h-[1308]"
    >
      <div id="title-container" className="w-full h-[72] flex flex-col gap-4">
        <div id="title" className="w-full h-7 flex justify-center">
          <p className="w-[105] h-7 rounded-xl py-1 px-5 bg-gray-200 text-sm">
            Experience
          </p>
        </div>
        <div
          id="subtitle"
          className="w-full h-7 max-sm:flex max-sm:justify-center"
        >
          <p className="flex justify-center text-gray-600 text-xl max-sm:w-[343] max-sm:h-[56] max-sm:text-center">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
      </div>
      <div className="w-[896] h-[288] bg-white drop-shadow-md rounded-xl flex items-center max-sm:w-full max-sm:h-[372] ">
        {" "}
        {Experience.map((items) => (
          <div className="flex justify-around w-full max-sm:flex-col p-8 max-sm:justify-between ">
            <img src={items.image} alt="" className="w-fit h-7" />
            <div className="flex flex-col gap-4 h-[224] max-sm:gap-1">
              <p className="text-xl text-gray-900 w-[384] h-7 font-semibold max-sm:text-lg max-sm:w-full ">
                {" "}
                {items.title}{" "}
              </p>
              <ul className="list-disc ml-5 space-y-1 text-base text-gray-600 mt-3 w-[384] max-sm:w-full">
                {items.main.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
            <p className=" h-6 text-gray-700 max-sm:flex max-sm:justify-end">
              {" "}
              {items.date}{" "}
            </p>
          </div>
        ))}{" "}
      </div>
      <div className="w-[896] h-[264] bg-white drop-shadow-md rounded-xl flex items-center justify-center max-sm:w-full max-sm:h-[348] ">
        {" "}
        {Experience1.map((items) => (
          <div className="flex justify-around w-full max-sm:flex-col p-8 ">
            <img src={items.image} alt="" className="w-[204] h-7" />
            <div className="flex flex-col gap-4 max-sm:gap-1">
              <p className="text-xl text-gray-900 w-full h-7 font-semibold max-sm:text-lg">
                {" "}
                {items.title}{" "}
              </p>
              <ul className="list-disc ml-5 space-y-1 text-base text-gray-600 mt-3 w-[384] max-sm:w-full">
                {items.main.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
            <p className=" h-6 text-gray-700 max-sm:flex max-sm:justify-end">
              {" "}
              {items.date}{" "}
            </p>
          </div>
        ))}{" "}
      </div>
      <div className="w-[896] h-[180] bg-white drop-shadow-md rounded-xl flex items-center max-sm:w-full max-sm:h-[288]">
        {" "}
        {Experience2.map((items) => (
          <div className="flex justify-around w-full max-sm:flex-col p-8">
            <img src={items.image} alt="" className="w-[204] h-7" />
            <div className="flex flex-col gap-4 max-sm:gap-1">
              <p className="text-xl text-gray-900 w-[384] h-7 font-semibold max-sm:text-lg max-sm:w-full">
                {" "}
                {items.title}{" "}
              </p>
              <ul className="list-disc ml-5 space-y-1 text-base text-gray-600 mt-3 w-[384] max-sm:w-full">
                {items.main.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
            <p className=" h-6 text-gray-700 max-sm:flex max-sm:justify-end">
              {" "}
              {items.date}{" "}
            </p>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

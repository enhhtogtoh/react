import { Work1, Work2 } from "@/components/portfolio/Work-data";
export const Works = () => {
  return (
    <div className="w-full h-[1056] flex  gap-12 px-8 flex-col items-center py-12 max-sm:px-4 max-sm:h-auto">
      <div
        id="dund"
        className="w-[1152] h-[480] bg-white rounded-xl drop-shadow-md flex max-sm:w-full max-sm:h-[772] max-sm:flex-col-reverse "
      >
        <div id="left" className="w-[50%]  flex  max-sm:w-full max-sm:h-[516]">
          <div className="">
            {Work1.map((item) => (
              <div className="flex flex-col gap-3 p-12">
                <p className="text-xl text-gray-900 font-semibold">
                  {item.title}
                </p>
                <p className="text-base text-gray-600 ">{item.main}</p>
                <p className="flex gap-2 flex-wrap">
                  {" "}
                  {item.category.map((text, i) => (
                    <div
                      key={i}
                      className="bg-gray-200 h-7 rounded-xl py-1 px-5 text-sm text-gray-600"
                    >
                      {text}
                    </div>
                  ))}{" "}
                </p>
                <img src={item.link} alt="" className="w-9 h-9" />
              </div>
            ))}
          </div>
        </div>
        <div
          id="right"
          className="w-[50%] bg-gray-100 flex items-center justify-center rounded-r-xl max-sm:w-full max-sm:h-[256] max-sm:rounded-none max-sm:rounded-t-xl"
        >
          <img
            src="./mentorhub.png"
            alt="mentorhub"
            className="w-[480] h-[384] max-sm:w-auto max-sm:h-[192] "
          />
        </div>
      </div>
      <div
        id="dood"
        className="w-[1152] h-[480] bg-white rounded-xl drop-shadow-md flex max-sm:w-full max-sm:h-[772] max-sm:flex-col "
      >
        <div
          id="left"
          className="w-[50%] bg-gray-100 flex items-center justify-center rounded-l-xl max-sm:h-[256] max-sm:w-full max-sm:rounded-t-xl max-sm:rounded-none"
        >
          <img
            src="./itoim.png"
            alt="itoim"
            className="w-[480] h-[384] max-sm:w-[279] max-sm:h-[192]"
          />
        </div>
        <div
          id="right"
          className="w-[50%] max-sm:w-full max-sm:h-[516] max-sm:flex max-sm:justify-center items-center"
        >
          <div>
            {Work2.map((item) => (
              <div className="flex flex-col gap-3 p-12">
                <p className="text-xl text-gray-900 font-semibold">
                  {item.title}
                </p>
                <p className="text-base text-gray-600">{item.main}</p>
                <p className="flex gap-2 flex-wrap">
                  {" "}
                  {item.category.map((text, i) => (
                    <div
                      key={i}
                      className="bg-gray-200 h-7 rounded-xl py-1 px-5 text-sm text-gray-600"
                    >
                      {text}
                    </div>
                  ))}{" "}
                </p>
                <img src={item.link} alt="" className="w-9 h-9" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

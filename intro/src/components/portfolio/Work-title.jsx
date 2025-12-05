import { Work } from "@/components/portfolio/Work-data";
export const Work_title = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 pt-20 max-sm:px-4 max-sm:pt-16">
      <div className="title flex flex-col justify-center items-center gap-4 ">
        <div id="work-title">
          <p
            id="work"
            className="w-[75] h-7 rounded-xl py-1 px-5 bg-gray-200 font-medium text-sm text-gray-600"
          >
            Work
          </p>
        </div>
        <div id="work-sub" className="flex max-sm:w-full max-sm:h-[56]">
          <p
            id="sub"
            className="text-xl  h-7 text-gray-600 flex justify-center max-sm:text-center "
          >
            {" "}
            Some of the noteworthy projects I have built:
          </p>
        </div>
      </div>
      <div
        id="deed"
        className="w-[1152] h-[480] bg-white rounded-xl drop-shadow-md flex max-sm:w-full max-sm:h-[772] max-sm:flex-col"
      >
        <div
          id="left"
          className="w-[50%] bg-gray-100 flex items-center justify-center rounded-l-xl max-sm:w-full max-sm:h-[256] max-sm:rounded-none max-sm:rounded-t-xl"
        >
          <img
            src="./ubcab.png"
            alt="ubcab"
            className="w-[480] h-[384] max-sm:w-[279] max-sm:h-[192]"
          />
        </div>
        <div
          id="right"
          className="w-[50%] max-sm:h-[516] max-sm:w-full max-sm:justify-center max-sm:items-center max-sm:flex "
        >
          <div>
            {Work.map((item) => (
              <div className="flex flex-col gap-3 p-12">
                <p className="text-xl text-gray-900 font-semibold">
                  {item.title}
                </p>
                <p className="text-base text-gray-600">{item.main}</p>
                <p className="flex gap-2 flex-wrap ">
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

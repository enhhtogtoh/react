import { Work, Work1, Work2 } from "@/components/portfolio/Work-data";
export const Works = () => {
  return (
    <div className="w-full h-[1656] flex  gap-12 px-8 flex-col items-center justify-center">
      <div
        id="title"
        className="w-full h-[72] flex gap-4 flex-col items-center justify-center"
      >
        <div
          id="word"
          className="w-[75] h-7 bg-gray-200 rounded-xl flex items-center justify-center"
        >
          Word
        </div>
        <div id="sub" className="">
          Some of the noteworthy projects I have built:
        </div>
      </div>
      <div
        id="deed"
        className="w-[1152] h-[480] bg-white rounded-xl drop-shadow-md flex"
      >
        <div
          id="left"
          className="w-[50%] bg-gray-100 flex items-center justify-center rounded-l-xl "
        >
          <img src="./ubcab.png" alt="ubcab" className="w-[480] h-[384]" />
        </div>
        <div id="right" className="w-[50%]">
          <div>
            {Work.map((item) => (
              <div>
                <p>{item.title}</p>
                <p>{item.main}</p>
                <p>
                  {" "}
                  {item.category.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}{" "}
                </p>
                <img src={item.link} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="dund"
        className="w-[1152] h-[480] bg-white rounded-xl drop-shadow-md flex"
      >
        <div id="left" className="w-[50%]">
          <div>
            {Work1.map((item) => (
              <div>
                <p>{item.title}</p>
                <p>{item.main}</p>
                <p>
                  {" "}
                  {item.category.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}{" "}
                </p>
                <img src={item.link} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div
          id="right"
          className="w-[50%] bg-gray-100 flex items-center justify-center rounded-r-xl"
        >
          <img
            src="./mentorhub.png"
            alt="mentorhub"
            className="w-[480] h-[384]"
          />
        </div>
      </div>
      <div
        id="dood"
        className="w-[1152] h-[480] bg-white rounded-xl drop-shadow-md flex"
      >
        <div
          id="left"
          className="w-[50%] bg-gray-100 flex items-center justify-center rounded-l-xl"
        >
          <img src="./itoim.png" alt="itoim" className="w-[480] h-[384]" />
        </div>
        <div id="right" className="w-[50%]">
          <div>
            {Work.map((item) => (
              <div>
                <p>{item.title}</p>
                <p>{item.main}</p>
                <p>
                  {" "}
                  {item.category.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}{" "}
                </p>
                <img src={item.link} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

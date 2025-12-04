import { Skills, Skills1 } from "@/components/portfolio/Skills-data";
export const Skill = () => {
  return (
    <div
      id="container"
      className=" w-full h-[560] px-8 flex gap-12 flex-col   items-center justify-center"
    >
      <div id="title" className="w-full h-[72] flex gap-3 flex-col">
        <div id="title-skills" className="w-full h-7 flex justify-center">
          <p className="w-[75] h-7 rounded-xl py-1 px-5 text-gray-600 bg-gray-200 text-sm">
            Skills
          </p>
        </div>
        <div id="subtitle" className="w-full h-7 flex justify-center">
          <p className="w-[576] h-7 text-xl text-gray-600 flex justify-center">
            The skills, tools and technologies I am really good at:
          </p>
        </div>
      </div>
      <div
        id="photo-container"
        className="w-[1100] h-[248] flex flex-col gap-12  items-center justify-center"
      >
        <div className="flex  w-full  gap-12 justify-between">
          {Skills.map((item) => (
            <div className="">
              <img src={item.image} alt="" />
              <p className="text-[8]">{item.name}</p>
            </div>
          ))}
        </div>
        <div className="flex  w-full gap-12 justify-between">
          {Skills1.map((item) => (
            <div className="">
              <img src={item.image} alt="" />
              <p className="text-[8]">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

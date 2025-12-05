import { Skills } from "@/components/portfolio/Skills-data";
export const Skill = () => {
  return (
    <div
      id="container"
      className=" w-full h-[560] px-8 flex gap-12 flex-col   items-center justify-center max-sm:w-full max-sm:h-[916] "
    >
      <div id="title" className="w-full h-[72] flex gap-3 flex-col">
        <div id="title-skills" className="w-full h-7 flex justify-center">
          <p className="w-[75] h-7 rounded-xl py-1 px-5 text-gray-600 bg-gray-200 text-sm">
            Skills
          </p>
        </div>
        <div id="subtitle" className="w-full h-7 flex justify-center">
          <p className="w-[576] h-7 text-xl text-gray-600 flex justify-center max-sm:text-center">
            The skills, tools and technologies I am really good at:
          </p>
        </div>
      </div>
      <div
        id="photo-container"
        className="w-[1100] h-[248] grid gap-12   max-sm:w-full max-sm:h-[664] max-sm:grid"
      >
        <div className="grid grid-cols-8  w-full  gap-12 justify-between  max-sm:grid max-sm:grid-cols-3 max-sm:mx-auto max-sm:justify-items-center">
          {Skills.map((item) => (
            <div className="">
              <img
                src={item.image}
                alt={item.name}
                className="max-sm:w-12 max-sm:h-12"
              />
              <p className="text-base font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

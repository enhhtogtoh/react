export const Hero = () => {
  return (
    <div className="w-full h-139 flex items-center justify-center max-sm:w-full max-sm:h-[904]">
      <div className="w-[1280] h-91 flex justify-center px-8 gap-12 items-center  max-sm:flex max-sm:flex-col-reverse ">
        <div className="w-[600] h-[364] flex flex-col justify-between max-sm:w-full">
          <div className="">
            <h1 className="font-bold text-6xl">Hi, I’m Tok 👋</h1>
            <p className="font-normal text-base text-gray-600">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
          </div>
          <div>
            <div className="flex gap-2">
              <img src="./icon.png" alt="icon" />
              <p className="text-gray-600">Ulaanbatar, Mongolia</p>
            </div>
            <div className="flex gap-2">
              <img src="./tseg.png" alt="tseg" />
              <p className="text-gray-600">Available for new projects</p>
            </div>
          </div>
          <div className="flex gap-1 items-center ">
            <img src="./cat.png" alt="cat" className="w-6 h-6" />
            <img src="./twitter.png" alt="twitter" className="" />
            <img src="./figma.png" alt="figma" />
          </div>
        </div>
        <div
          id="photo-container"
          className=" h-[364]  flex  max-sm:w-full max-sm:flex "
        >
          <img
            src="./25LP5729.jpg"
            alt="25LP5729"
            className="w-[280] h-[320] border-8 border-white top-0 left-0 max-sm:w-[240] max-sm:h-[280]
            max-sm:relative max-sm:top-10 shadow-[20px_20px_#E5E7EB]"
          />
          {/* <div className="w-[280] h-[320] border-8 border-white bg-gray-200 relative top-[42] left-2 -z-10 max-sm:w-[280] max-sm:h-[280] max-sm:items-center max-sm:justify-center max-sm:relative max-sm:top-0 max-sm:left-0"></div> */}
        </div>
      </div>
    </div>
  );
};

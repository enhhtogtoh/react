export const Hero = () => {
  return (
    <div className="w-full h-139 flex items-center justify-center">
      <div className="w-full h-91 flex px-8 gap-12 items-center justify-center">
        <div className="w-[600] h-[364] flex flex-col justify-between">
          <div>
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
        <div className="w-[568] h-[364] flex ">
          <img
            src="./25LP5729.jpg"
            alt="25LP5729"
            className="w-[280] h-[320] border-8 border-white relative top-[2] left-62"
          />
          <div className="w-[280] h-[320] border-8 border-white bg-gray-200 relative top-[42] left-2 -z-10">
            1
          </div>
        </div>
      </div>
    </div>
  );
};

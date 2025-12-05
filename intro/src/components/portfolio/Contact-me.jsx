export const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-[560] flex items-center max-sm:h-[472] max-sm:px-4 max-sm:py-16"
    >
      <div
        id="container"
        className="w-full h-[368] px-8 flex gap-12 flex-col items-center max-sm:h-[344] max-sm:gap-6 max-sm:justify-between "
      >
        <div
          id="title-container"
          className="w-full h-[100] flex flex-col gap-4 justify-center items-center"
        >
          <div id="title" className="w-full h-7 flex justify-center">
            <p className="w-[122] h-7 rounded-xl py-1 px-5 bg-gray-200 text-sm text-gray-600 flex justify-center">
              Get in touch
            </p>
          </div>
          <div id="subtitle" className="w-full h-[56] flex justify-center">
            <p className="w-[576] h-[56] text-gray-600 text-xl text-center max-sm:h-[112] max-sm:w-full">
              What's next? Feel free to earch out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </p>
          </div>
        </div>
        <div
          id="main-container"
          className="w-[436] h-[104] flex flex-col gap-4 items-center max-sm:w-[252] max-sm:h-[72] max-sm:gap-0 max-sm:pt-6"
        >
          <div
            id="mail"
            className="flex h-[44] gap-5 items-center max-sm:w-[252] max-sm:h-9 max-sm:gap-4"
          >
            <img
              src="./mail.png"
              alt="mail"
              className="max-sm:w-6 max-sm:h-6"
            />
            <p className=" text-4xl text-gray-900 font-semibold max-sm:text-lg">
              tok@pinecone.mn
            </p>
            <img
              src="./duplicate.png"
              alt="duplicate"
              className="p-[6] max-sm:w-9 max-sm:h-9"
            />
          </div>
          <div id="phone" className="flex h-[44] gap-5 items-center">
            <img
              src="./call.png"
              alt="call"
              className="max-sm:w-6 max-sm:h-6"
            />
            <p className="text-4xl text-gray-900 font-semibold max-sm:text-lg max-sm:w-full">
              +976 88112233
            </p>
            <img
              src="./duplicate.png"
              alt="duplicate"
              className="p-[6] max-sm:w-9 max-sm:h-9"
            />
          </div>
        </div>
        <div
          id="footer-container"
          className=" h-[68] flex gap-16 max-sm:w-full max-sm:gap-3 max-sm:items-center max-sm:justify-center"
        >
          <div id="social" className="flex flex-col gap-2">
            <p className="max-sm:w-full max-sm:h-6 max-sm:text-sm max-sm:text-center">
              You may also find me on these platforms!
            </p>
            <div
              id="icons"
              className="flex h-9 gap-4 items-center justify-center"
            >
              <img src="./cat.png" alt="cat" />
              <img src="./twitter.png" alt="twitter" />
              <img src="./figma.png" alt="figma" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

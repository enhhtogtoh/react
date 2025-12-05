export const Footer = () => {
  return (
    <div
      id="footer"
      className="w-full h-[68] py-6 px-20 bg-gray-50 max-sm:px-0"
    >
      <div id="container" className="w-full h-5 px-8 flex gap-16">
        <div id="title" className="w-full h-5 flex gap-4 justify-center">
          <div
            id="footer-note"
            className="w-[305] h-5 flex gap-2 items-center justify-center"
          >
            <img
              src="./c-icon.png"
              alt="c-icon"
              className="max-sm:w-4 max-sm:h-4"
            />
            <p className=" h-5 font-normal text-sm text-gray-600 flex items-center ">
              2024 | Greetings with ❤ from Ulaanbaatar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

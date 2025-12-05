export const About = () => {
  return (
    <div
      id="about"
      className="w-full h-[826] flex  justify-between
    py-[96] px-[96] max-sm:h-[1434] max-sm:py-[64] max-sm:px-4 max-sm:bg-gray-50"
    >
      <div
        id="container"
        className="w-full h-[634] px-[32] flex flex-col gap-[48] max-sm:flex max-sm:flex-col max-sm:h-[1306] max-sm:gap-6"
      >
        <div
          id="title"
          className="w-full h-[28] flex gap-[16] justify-center max-sm:pb-15"
        >
          <div
            id="about-me"
            className="w-[105] h-[28] rounded-[12] pl-4 bg-gray-200"
          >
            About me
          </div>
        </div>
        <div
          id="subtitle"
          className="w-full h-[558] flex gap-12 justify-center max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:gap-6"
        >
          <div
            id="left-container"
            className="w-[584]  flex justify-center max-sm:w-full max-sm:justify-center "
          >
            <div
              id="picture"
              className=" w-fit h-fit max-sm:h-[380] max-sm:relative
              "
            >
              <div className="max-sm:w-[320] max-sm:h-[360] max-sm:bg-gray-200  "></div>
              <img
                src="/25LP5729.jpg"
                alt="profile"
                className="w-[400] h-[480] object-cover border-8 border-white  shadow-[-30px_30px_#E5E7EB] max-sm:w-[280] max-sm:h-[360] max-sm:shadow-none max-sm:absolute max-sm:top-40 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:-translate-y-1/2 "
              />
            </div>
          </div>
          <div
            id="right-container"
            className="w-[584] h-[558]  flex flex-col gap-6 max-sm:w-full"
          >
            <p className="w-[503] h-9 text-3xl text-gray-900 max-sm:w-full max-sm:h-auto">
              Curious about me? Here you have it:
            </p>
            <div
              id="content"
              className="flex flex-col gap-4 text-gray-600 max-sm:flex max-sm:justify-between"
            >
              <p className="">
                I'm a designer turned full stack developer, passionate about
                React.js and Node.js. I excel in blending technical and visual
                aspects to craft exceptional digital products, prioritizing user
                experience, precise design, and optimized code.
              </p>
              <p>
                Since starting my web development journey in 2015, I've embraced
                challenges and kept up with the latest tech trends. Now in my
                early thirties, seven years in, I'm building cutting-edge web
                apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
                and more.
              </p>
              <p>
                With a progressive mindset, I enjoy the entire product
                development process, from ideation to execution. Off duty,
                you'll find me on Twitter, tracking startup journeys, or
                unwinding. Follow me for tech insights and public project
                updates on Twitter or GitHub.
              </p>
              <p>Finally, some quick bits about me.</p>
              <div id="checklist" className="flex ">
                <div
                  id="list-left"
                  className="flex gap-[10] h-[58] pl-[14] max-sm:h-auto"
                >
                  <ul className="list-disc">
                    <li className="w-[287] h-6 max-sm:w-[166] max-sm:h-12">
                      B.E. in Computer Engineering
                    </li>
                    <li className="w-[287] h-6 max-sm:w-[116] max-sm:h-12">
                      Full time freelancer
                    </li>
                  </ul>
                </div>
                <div id="list-right" className="flex gap-[10] h-6">
                  <ul className="list-disc">
                    <li className="w-[287] h-6 max-sm:w-[116] max-sm:h-12">
                      Avid learner
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

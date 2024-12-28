const Project = () => {
  return (
    <div className="absolute left-52 top-[2600px]">
      <p className="font-mono text-4xl font-semibold text-web-purple-2">
        Projects
      </p>
      <div className="h-0.5 w-[900px] rounded-sm bg-black"></div>
      <div className="relative top-7 flex flex-row gap-7">
        <div className="flex h-[420px] w-[750px] items-center justify-center bg-black">
          <div className="relative h-[370px] w-[725px] bg-web-purple-1">
            <div className="absolute left-4 top-16 flex flex-col">
              <div className="h-[15px] w-[410px] bg-web-purple-2"></div>
              <div className="h-[225px] w-[410px] border-2 border-web-purple-2 bg-white"></div>
            </div>
            <div className="absolute right-4 top-7 flex flex-col">
              <div className="h-[15px] w-[250px] bg-web-purple-2"></div>
              <div className="h-[155px] w-[250px] border-2 border-web-purple-2 bg-white"></div>
            </div>
            <div className="absolute right-8 top-44 flex flex-col">
              <div className="h-[15px] w-[250px] bg-web-purple-2"></div>
              <div className="h-[155px] w-[250px] border-2 border-web-purple-2 bg-white"></div>
            </div>
          </div>
        </div>

        <div className="h-[300px] w-[270px] bg-zinc-800">
          <div className="flex flex-col gap-5">
            <div className="relative left-5 top-5 flex flex-row gap-7">
              <div className="h-[60px] w-[100px] rounded-md border-2 border-gray-500 bg-black"></div>
              <div className="h-[60px] w-[100px] rounded-md border-2 border-gray-500 bg-black"></div>
            </div>

            <div className="relative left-5 top-5 flex flex-row gap-7">
              <div className="h-[60px] w-[100px] rounded-md border-2 border-gray-500 bg-black"></div>
              <div className="h-[60px] w-[100px] rounded-md border-2 border-gray-500 bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

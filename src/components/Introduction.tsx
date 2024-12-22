const Introduction = () => {
  return (
    <div className="absolute left-52 top-96 flex flex-col">
      <div className="flex flex-row gap-5 rounded-md">
        <div className="flex h-[40px] w-[100px] items-center justify-center rounded-md border-2 border-web-purple-2 bg-web-purple-1 hover:bg-web-purple-2">
          <img
            src="/icons8-heart-50.png"
            alt="Heart Logo"
            className="h-[30px] w-[30px] object-contain"
          />
        </div>

        <div className="flex h-[40px] w-[100px] items-center justify-center rounded-md border-2 border-web-purple-2 bg-web-purple-1 hover:bg-web-purple-2">
          <img
            src="/icons8-laptop-50.png"
            alt="Laptop Logo"
            className="h-[30px] w-[30px] object-contain"
          />
        </div>

        <div className="flex h-[40px] w-[100px] items-center justify-center rounded-md border-2 border-web-purple-2 bg-web-purple-1 hover:bg-web-purple-2">
          <img
            src="/icons8-headphones-24.png"
            alt="Headphones Logo"
            className="h-[30px] w-[30px] object-contain"
          />
        </div>

        <div className="flex h-[40px] w-[100px] items-center justify-center rounded-md border-2 border-web-purple-2 bg-web-purple-1 hover:bg-web-purple-2">
          <img
            src="/icons8-cat-30.png"
            alt="Cat Logo"
            className="h-[30px] w-[30px] object-contain"
          />
          <img
            src="/icons8-bird-48.png"
            alt="Bird Logo"
            className="h-[25px] w-[25px] object-contain"
          />
        </div>

        <div className="flex h-[40px] w-[100px] items-center justify-center rounded-md border-2 border-web-purple-2 bg-web-purple-1 hover:bg-web-purple-2">
          <img
            src="/icons8-journal-30.png"
            alt="Journal Logo"
            className="h-[30px] w-[30px] object-contain"
          />
        </div>
      </div>

      <div className="relative right-5 flex h-72 w-[650px] items-center justify-center rounded-md border-2 border-web-purple-2 bg-web-purple-1">
        <div className="flex w-5/6 flex-row gap-10">
          <img
            src="/BCOE-Photo.jpg"
            alt="BCOE Photo"
            className="h-60 w-40 rounded-md border-2 border-web-purple-2"
          />
          <p className="relative top-10 font-mono text-2xl font-semibold text-black">
            Hello! I am Rebecca Jennings, a Computer Science major at University
            of California, Riverside!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
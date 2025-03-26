const Welcome = () => {
  return (
    <div id="introduction" className="absolute left-52 top-20 flex flex-col">
      <div className="flex flex-row gap-4">
        <div className="flex">
          <p className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-black pr-2 font-mono text-4xl font-semibold text-black">
            Hello! I'm Rebecca, an{" "}
            <span className="text-web-purple-2">aspiring CS Student!</span>
          </p>
        </div>
      </div>

      <p className="relative top-7 max-w-2xl font-mono text-lg font-semibold text-black">
        May this space be one of experience, growth, and reflection as I explore
        my passion through computer science.
      </p>
    </div>
  );
};

export default Welcome;

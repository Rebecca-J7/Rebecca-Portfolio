const Welcome = () => {
  return (
    <div id="introduction" className="flex flex-col mt-20 mr-24 items-center">
      <p className="animate-fade font-mono text-6xl font-semibold text-black">
            Rebecca Jennings
        </p>
      <p className="animate-typing animate-delay-500 overflow-hidden whitespace-nowrap max-w-2xl font-mono text-3xl font-semibold text-black mt-7">
        Bridging the gap between ethics and
      </p>
      <div className="flex items-center gap-2 mt-1">
        <p className="animate-typing animate-delay-500 overflow-hidden whitespace-nowrap max-w-2xl font-mono text-3xl font-semibold text-black">
          technology to build innovations.
        </p>
        <img
          src="mage_mouse-pointer-fill.png"
          alt="Mouse Pointer"
          className="h-[45px] w-[45px] object-contain animate-bounce"
        />
      </div>
    </div>
  );
};

export default Welcome;

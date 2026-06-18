const Welcome = () => {
  return (
    <div id="introduction" className="mr-24 mt-20 flex flex-col items-center">
      <p className="animate-fade font-mono text-6xl font-semibold text-black">
        Rebecca Jennings
      </p>
      <p className="mt-7 max-w-2xl animate-typing overflow-hidden whitespace-nowrap font-mono text-3xl font-semibold text-black animate-delay-500">
        Bridging the gap between ethics and
      </p>
      <div className="mt-1 flex items-center gap-2">
        <p className="max-w-2xl animate-typing overflow-hidden whitespace-nowrap font-mono text-3xl font-semibold text-black animate-delay-500">
          technology to build innovations.
        </p>
        <img
          src="mage_mouse-pointer-fill.png"
          alt="Mouse Pointer"
          className="h-[45px] w-[45px] animate-bounce object-contain"
        />
      </div>
    </div>
  );
};

export default Welcome;

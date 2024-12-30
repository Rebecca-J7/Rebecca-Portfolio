const Welcome = () => {
  return (
    <div id="introduction" className="absolute left-52 top-20 flex flex-col">
      <div className="flex flex-row gap-4">
        <p className="font-mono text-4xl font-semibold text-black">
          Hello! I'm Rebecca, an
        </p>
        <p className="font-mono text-4xl font-semibold text-web-purple-2">
          aspiring CS Student !
        </p>
      </div>

      <p className="relative top-7 max-w-2xl font-mono text-lg font-semibold text-black">
        I stumbled upon this comforting space, perhaps by an occurrence... or a
        development of events by chance... but I believe it is one with
        longevity of happiness and benefits as I explore my future through
        computer science.
      </p>
    </div>
  );
};

export default Welcome;

const Welcome = () => {
  return (
    <div className="absolute left-52 top-32 flex flex-col">
      <div className="flex flex-row gap-4">
        <p className="font-mono text-4xl font-semibold text-black">
          Welcome to the
        </p>
        <p className="font-mono text-4xl font-semibold text-web-purple-2">
          Purple Serendipity !
        </p>
      </div>

      <p className="relative top-7 max-w-2xl font-mono text-2xl font-semibold text-black">
        you stumble upon this comforting space, perhaps by an occurrence... or a
        development of events by chance... may it be one of happiness and
        benefits.
      </p>
    </div>
  );
};

export default Welcome;

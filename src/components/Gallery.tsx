const Gallery = () => {
  return (
    <div id="gallery" className="absolute left-52 top-[3500px]">
      <p className="font-mono text-4xl font-semibold text-web-purple-2">
        Gallery
      </p>
      <div className="h-0.5 w-[900px] rounded-sm bg-black"></div>

      <div className="relative top-2 flex flex-row gap-4">
        <img
          src="YouTubeChannel.png"
          alt="YouTube Channel"
          className="h-[300px] w-[547px] rounded-md border-2 border-web-purple-2 object-contain"
        />
        <p className="flex max-w-xs items-center font-mono text-base font-normal text-black">
          I started a YouTube channel in 2024 to vlog my experiences from a
          genuine and real perspective. This is a hobby I do in my spare time
          that gives me the chance to experiment with video editing and build
          confidence in pursuing more independent adventures. I hope those who
          discover my content will also feel inspired to enjoy all moments in
          life from big to small and create memories of their own.
        </p>
      </div>
    </div>
  );
};

export default Gallery;

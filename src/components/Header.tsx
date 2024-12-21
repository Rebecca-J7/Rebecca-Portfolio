const Header = () => {
  return (
    <div className="h-16 w-screen bg-web-purple-1">
      <div className="absolute left-7 top-5 flex flex-row gap-5 font-mono text-xl font-semibold">
        <p className="hover text-web-purple-2">rebecca jennings</p>
        <p className="text-black hover:text-web-purple-2">about</p>
        <p className="text-black hover:text-web-purple-2">experience</p>
        <p className="text-black hover:text-web-purple-2">projects</p>
        <p className="text-black hover:text-web-purple-2">gallery</p>
      </div>
    </div>
  );
};

export default Header;

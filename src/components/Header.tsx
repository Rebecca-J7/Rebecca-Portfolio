const Header = () => {
  return (
    <div className = "w-screen h-16 bg-web-purple-1">
      <div className="flex flex-row gap-5 absolute top-5 left-7 font-semibold text-xl font-mono">
      <p className="text-web-purple-2 hover">
        rebecca jennings
      </p>
      <p className="text-black hover:text-web-purple-2">
        about
      </p>
      <p className="text-black hover:text-web-purple-2">
        experience
      </p>
      <p className="text-black hover:text-web-purple-2">
        projects
      </p>
      <p className="text-black hover:text-web-purple-2">
        gallery
      </p>
      </div>
    </div>
  );
};

export default Header;

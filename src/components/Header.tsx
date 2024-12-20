const Header = () => {
  return (
    <div className = "w-screen h-16 bg-web-purple-1">
      <p className="text-web-purple-2 font-semibold text-xl absolute left-3.5 top-5 font-mono hover">
        rebecca jennings
      </p>
      <p className="text-black font-semibold text-xl absolute left-52 top-5 font-mono hover:text-web-purple-2">
        about
      </p>
      <p className="text-black font-semibold text-xl absolute left-72 top-5 font-mono hover:text-web-purple-2">
        experience
      </p>
      <p className="text-black font-semibold text-xl absolute left-word-1 top-5 font-mono hover:text-web-purple-2">
        projects
      </p>
      <p className="text-black font-semibold text-xl absolute left-word-2 top-5 font-mono hover:text-web-purple-2">
        gallery
      </p>
    </div>
  );
};

export default Header;

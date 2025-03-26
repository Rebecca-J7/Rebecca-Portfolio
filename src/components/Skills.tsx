const Skills = () => {
  return (
    <div id="skills" className="absolute left-52 top-[1720px] flex flex-col">
      <p className="font-mono text-4xl font-semibold text-web-purple-2">
        Skills
      </p>
      <div className="h-0.5 w-[900px] rounded-sm bg-black"></div>

      <div className="mt-6 flex flex-row gap-3">
        <img
          src="icons8-c-70.png"
          alt="C++ Logo"
          className="h-[60px] w-[60px] transform object-contain transition-transform duration-300 hover:scale-110"
        />
        <img
          src="icons8-html-5-70.png"
          alt="HTML Logo"
          className="h-[60px] w-[60px] transform object-cover transition-transform duration-300 hover:scale-110"
        />
        <img
          src="icons8-css3-70.png"
          alt="CSS Logo"
          className="h-[60px] w-[60px] transform object-cover transition-transform duration-300 hover:scale-110"
        />
        <img
          src="icons8-react-70.png"
          alt="Reactjs Logo"
          className="h-[60px] w-[60px] transform object-cover transition-transform duration-300 hover:scale-110"
        />
        <img
          src="nextjs.svg"
          alt="Nextjs Logo"
          className="h-[60px] w-[60px] transform object-cover transition-transform duration-300 hover:scale-110"
        />
        <img
          src="icons8-tailwindcss-70.png"
          alt="Tailwind CSS Logo"
          className="h-[60px] w-[60px] transform object-contain transition-transform duration-300 hover:scale-110"
        />
        <img
          src="icons8-typescript-70.png"
          alt="TypeScript Logo"
          className="h-[60px] w-[60px] transform object-cover transition-transform duration-300 hover:scale-110"
        />
        <img
          src="icons8-git-70.png"
          alt="Git Logo"
          className="h-[60px] w-[60px] transform object-cover transition-transform duration-300 hover:scale-110"
        />
        <img
          src="icons8-github-70.png"
          alt="GitHub Logo"
          className="h-[60px] w-[60px] transform object-cover transition-transform duration-300 hover:scale-110"
        />
        <img
          src="figma-logo-vector.svg"
          alt="Figma Logo"
          className="h-[60px] w-[60px] transform object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="flex flex-col gap-1">
        <p className="max-w-3xl font-mono text-lg font-semibold text-black">
          Technical: C++, HTML, CSS, React.js, Next.js, Tailwind CSS, TypeScript
        </p>
        <p className="max-w-3xl font-mono text-lg font-semibold text-black">
          Tools: Git, GitHub, Visual Studio Code, Devpost, Arduino, Figma
        </p>
      </div>
    </div>
  );
};

export default Skills;

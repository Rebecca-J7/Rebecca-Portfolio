const Skills = () => {
  return (
    <div
      id="skills"
      className="absolute left-52 top-[1720px] flex flex-col gap-3"
    >
      <p className="font-mono text-4xl font-semibold text-web-purple-2">
        Skills
      </p>
      <div className="h-0.5 w-[900px] rounded-sm bg-black"></div>

      <div className="flex flex-row gap-3">
        <img
          src="c-logo.png"
          alt="C++ Logo"
          className="h-[60px] w-[60px] transform object-contain transition-transform duration-300 hover:scale-110"
        />
        <img
          src="icons8-html-69.png"
          alt="HTML Logo"
          className="h-[60px] w-[60px] transform object-cover transition-transform duration-300 hover:scale-110"
        />
        <img
          src="file-type-css.svg"
          alt="CSS Logo"
          className="h-[60px] w-[60px] transform object-cover transition-transform duration-300 hover:scale-110"
        />
        <img
          src="file-type-reactjs.svg"
          alt="Reactjs Logo"
          className="h-[60px] w-[60px] transform object-cover transition-transform duration-300 hover:scale-110"
        />
        <img
          src="nextjs.svg"
          alt="Nextjs Logo"
          className="h-[60px] w-[60px] transform object-cover transition-transform duration-300 hover:scale-110"
        />
        <img
          src="tailwind-css.svg"
          alt="Tailwind CSS Logo"
          className="h-[60px] w-[60px] transform object-contain transition-transform duration-300 hover:scale-110"
        />
        <img
          src="file-type-typescript-official.svg"
          alt="TypeScript Logo"
          className="h-[60px] w-[60px] transform object-cover transition-transform duration-300 hover:scale-110"
        />
        <img
          src="icons8-git-90.png"
          alt="Git Logo"
          className="h-[60px] w-[60px] transform object-cover transition-transform duration-300 hover:scale-110"
        />
        <img
          src="icons8-github-80.png"
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

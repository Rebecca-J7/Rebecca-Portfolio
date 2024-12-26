const Skills = () => {
  return (
    <div className="absolute left-52 top-[1870px] flex flex-col gap-3">
      <p className="font-mono text-4xl font-semibold text-web-purple-2">
        Skills
      </p>
      <div className="h-0.5 w-[800px] rounded-sm bg-black"></div>

      <div className="flex flex-row gap-3">
        <img
          src="/c-logo.png"
          alt="C++ Logo"
          className="h-[70px] w-[70px] object-contain"
        />
        <img
          src="/file-type-typescript-official.svg"
          alt="TypeScript Logo"
          className="h-[70px] w-[70px] object-contain"
        />
        <img
          src="/file-type-css.svg"
          alt="CSS Logo"
          className="h-[70px] w-[70px] object-contain"
        />
        <img
          src="/tailwind-css.svg"
          alt="Tailwind CSS Logo"
          className="h-[70px] w-[70px] object-contain"
        />
        <img
          src="/file-type-reactjs.svg"
          alt="React Logo"
          className="h-[70px] w-[70px] object-contain"
        />
        <img
          src="/nextjs.svg"
          alt="Nextjs Logo"
          className="h-[70px] w-[70px] object-contain"
        />
        <img
          src="/figma-logo-vector.svg"
          alt="Figma Logo"
          className="h-[70px] w-[70px] object-contain"
        />
        <img
          src="/icons8-git-90.png"
          alt="Git Logo"
          className="h-[80px] w-[80px] object-top"
        />
        <img
          src="/icons8-github-80.png"
          alt="GitHub Logo"
          className="h-[80px] w-[80px] object-top"
        />
      </div>

      <div className="flex flex-col gap-1">
        <p className="max-w-3xl font-mono text-xl font-semibold text-black">
          Programming Language: C++, Assembly, TypeScript, CSS
        </p>
        <p className="max-w-3xl font-mono text-xl font-semibold text-black">
          Web Development: Tailwind CSS, React.js, Next.js, Figma
        </p>
        <p className="max-w-3xl font-mono text-xl font-semibold text-black">
          Tools: Git, GitHub, Visual Studio Code, Devpost, Arduino
        </p>
      </div>
    </div>
  );
};

export default Skills;

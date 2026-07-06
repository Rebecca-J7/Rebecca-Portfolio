import React from "react";

type EditorWindowProps = {
  filename: string;
  children: React.ReactNode;
};

type SkillFileProps = {
  name: string;
  badge: string;
  badgeColor: string;
};

// Editor-style window: title bar with traffic-light dots + filename tab
function EditorWindow({ filename, children }: EditorWindowProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#2A2536] bg-[#1C1926]/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#7F77DD] hover:shadow-[0_8px_30px_-8px_#7F77DD55]">
      <div className="flex items-center gap-1.5 border-b border-[#2A2536] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E2857A]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E5C77A]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#8FE3C0]/70" />
        <span className="ml-3 font-mono text-xs text-[#7C6A9C]">
          {filename}
        </span>
      </div>
      <div className="p-5 text-[15px] leading-relaxed text-[#C9C5D9]">
        {children}
      </div>
    </div>
  );
}

// Folded-corner file icon for each skill, now with hover lift + glow to match the rest of the site
function SkillFile({ name, badge, badgeColor }: SkillFileProps) {
  return (
    <div className="w-[104px]">
      <div className="relative flex h-[124px] flex-col items-center rounded-md border border-[#2A2536] bg-[#1C1926]/80 px-2 pb-4 pt-2 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#7F77DD] hover:shadow-[0_8px_24px_-8px_#7F77DD55]">
        <div
          className="skillborder absolute right-0 top-0 h-0 w-0"
          style={{
            borderStyle: "solid",
            borderWidth: "0 14px 14px 0",
            borderColor: "transparent #2A2536 transparent transparent",
          }}
        />
        <span className="mb-2 text-center font-mono text-[10px] leading-tight text-[#9691AA]">
          {name}
        </span>
        <div
          className="mt-auto flex h-9 w-9 items-center justify-center rounded-full font-mono text-xs font-medium"
          style={{ backgroundColor: badgeColor + "22", color: badgeColor }}
        >
          {badge}
        </div>
      </div>
    </div>
  );
}

const languages = [
  { name: "C++", badge: "C++", color: "#8FA8E8" },
  { name: "JavaScript", badge: "JS", color: "#E5C77A" },
  { name: "HTML", badge: "5", color: "#E2857A" },
  { name: "CSS", badge: "3", color: "#8FA8E8" },
  { name: "Python", badge: "PY", color: "#E5C77A" },
];
const frameworks = [
  { name: "React", badge: "⚛", color: "#7DD3E8" },
  { name: "Next.js", badge: "N", color: "#C9C5D9" },
  { name: "Vue.js", badge: "V", color: "#8FE3C0" },
  { name: "Tailwind CSS", badge: "~", color: "#7DD3E8" },
];
const other = [
  { name: "Gemini API", badge: "G", color: "#B8A6FF" },
  { name: "GCP", badge: "☁", color: "#8FA8E8" },
];

export default function AboutPage() {
  return (
    <div className="relative font-sans text-[#EDEAF6]">
      <main className="relative z-10 max-w-3xl px-8 py-16 md:px-16">
        <h1 className="mb-10 text-4xl font-semibold">// About</h1>

        <div className="mb-16 space-y-5">
          <EditorWindow filename="intro.md">
            Welcome to my portfolio! This started as my first individual
            project, and I have kept building on it since. I aim tohighlight my
            experience, skills, and the projects, along with my passion to
            foster a positive impact with technology.
          </EditorWindow>

          <EditorWindow filename="what-i-do.ts">
            <ul className="space-y-2">
              <li>
                <span className="mr-2 font-mono text-[#7C6A9C]">//</span>
                Building prototype devices with
                <strong className="font-medium text-[#EDEAF6]">
                  {" "}
                  multi-purpose functions{" "}
                </strong>{" "}
                that are{" "}
                <strong className="font-medium text-[#EDEAF6]">
                  cost-effective
                </strong>{" "}
                and{" "}
                <strong className="font-medium text-[#EDEAF6]">
                  address real-life issues.
                </strong>
              </li>
              <li>
                <span className="mr-2 font-mono text-[#7C6A9C]">//</span>
                Developing{" "}
                <strong className="font-medium text-[#EDEAF6]">
                  productive and meaningful user interfaces (UI)
                </strong>{" "}
                that{" "}
                <strong className="font-medium text-[#EDEAF6]">
                  foster an engaging user experience (UX).
                </strong>
              </li>
              <li>
                <span className="mr-2 font-mono text-[#7C6A9C]">//</span>
                Learning and navigating skills in{" "}
                <strong className="font-medium text-[#EDEAF6]">
                  software engineering and fullstack development.
                </strong>
              </li>
              <li>
                <span className="mr-2 font-mono text-[#7C6A9C]">//</span>
                Advocating for{" "}
                <strong className="font-medium text-[#EDEAF6]">
                  ethics in technology
                </strong>{" "}
                and tailoring projects to{" "}
                <strong className="font-medium text-[#EDEAF6]">
                  social impact.
                </strong>
              </li>
              <li>
                <span className="mr-2 font-mono text-[#7C6A9C]">//</span>
                Exploring emerging tech and observing how it impacts user
                interaction
              </li>
              <li>
                <span className="mr-2 font-mono text-[#7C6A9C]">//</span>Leading
                in roles through multiple organizations to{" "}
                <strong className="font-medium text-[#EDEAF6]">
                  facilitate, promote, advise and complete tasks
                </strong>{" "}
                that foster{" "}
                <strong className="font-medium text-[#EDEAF6]">
                  academic, professional, and personal development
                </strong>{" "}
                in engineering
              </li>
            </ul>
          </EditorWindow>
        </div>

        <section>
          <h2 className="mb-10 text-4xl font-semibold">
            // Skills &amp; Tech Stack
          </h2>

          <div className="mb-8">
            <p className="mb-3 font-mono text-xs tracking-widest text-[#7C6A9C]">
              LANGUAGES
            </p>
            <div className="flex flex-wrap gap-3">
              {languages.map((s) => (
                <SkillFile
                  key={s.name}
                  name={s.name}
                  badge={s.badge}
                  badgeColor={s.color}
                />
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-3 font-mono text-xs tracking-widest text-[#7C6A9C]">
              FRAMEWORKS
            </p>
            <div className="flex flex-wrap gap-3">
              {frameworks.map((s) => (
                <SkillFile
                  key={s.name}
                  name={s.name}
                  badge={s.badge}
                  badgeColor={s.color}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs tracking-widest text-[#7C6A9C]">
              OTHER
            </p>
            <div className="flex flex-wrap gap-3">
              {other.map((s) => (
                <SkillFile
                  key={s.name}
                  name={s.name}
                  badge={s.badge}
                  badgeColor={s.color}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

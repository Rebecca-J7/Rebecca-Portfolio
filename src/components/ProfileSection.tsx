import React from "react";
import { Paperclip, Mail, Linkedin, Github, FileText } from "lucide-react";

function ProfileFolder() {
  return (
    <div className="relative mb-28 mt-16 max-w-xl">
      {/* folder tab */}
      <div className="absolute -top-11 left-8 rounded-t-md border border-b-0 border-[#2A2536] bg-[#1C1926] px-5 py-3">
        <span className="font-mono text-sm text-[#B8A6FF]">profile.folder</span>
      </div>

      <div className="flex gap-6 rounded-lg border border-[#2A2536] bg-[#1C1926]/80 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#7F77DD] hover:shadow-[0_8px_30px_-8px_#7F77DD55]">
        <div className="relative flex h-72 w-52 shrink-0 items-center justify-center rounded border border-[#2A2536] bg-[#0D0B12]">
          <Paperclip
            className="absolute -left-3 -top-3 -rotate-180 text-[#7F77DD]"
            size={32}
          />
          <img
            src="/ProfessionalPhoto.jpg"
            alt="Profile Picture"
            className="h-full w-full rounded object-cover"
          />
        </div>

        <p className="text-[15px] leading-relaxed text-[#C9C5D9]">
          Computer Science undergraduate with a passion for software engineering
          and full-stack development. I enjoy building projects across web
          development, AI and machine learning, hardware, and technology for
          social impact.
          <br />
          <br />
          Driven by curiosity and continuous learning, I aspire to create
          innovative solutions that bridge the gap between ethics and
          technology, contributing to a safer and more accessible digital world.
        </p>
      </div>
    </div>
  );
}

function ContactWindow() {
  const links = [
    {
      icon: Mail,
      label: "rjennings0007@gmail.com",
      href: "mailto:rjennings0007@gmail.com",
    },
    {
      icon: Linkedin,
      label: "in/rebecca-jennings",
      href: "https://www.linkedin.com/in/rebecca-jennings-246a652a1/",
    },
    {
      icon: Github,
      label: "@Rebecca-J7",
      href: "https://github.com/Rebecca-J7/",
    },
    { icon: FileText, label: "Resume", href: "/Rebecca-Jennings-Resume.pdf" },
  ];

  return (
    <div className="mb-20 mt-28 w-72 shrink-0 overflow-hidden rounded-lg border border-[#2A2536] bg-[#1C1926]/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#7F77DD] hover:shadow-[0_8px_30px_-8px_#7F77DD55]">
      <div className="flex items-center gap-1.5 border-b border-[#2A2536] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E2857A]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E5C77A]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#8FE3C0]/70" />
        <span className="ml-3 font-mono text-xs text-[#B8A6FF]">
          contact.ts
        </span>
      </div>

      <div className="space-y-1 p-3">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-md px-2 py-2 text-sm text-[#C9C5D9] transition-colors hover:bg-[#221E30] hover:text-[#B8A6FF]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#221E30] text-[#B8A6FF]">
              <l.icon size={16} />
            </span>
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ProfileSection() {
  return (
    <div className="mt-16 flex flex-col items-start justify-center gap-10 md:flex-row">
      <ProfileFolder />
      <ContactWindow />
    </div>
  );
}

"use client";
import React, { useState } from "react";
import { Github, ExternalLink, ImageIcon } from "lucide-react";

type Project = {
  name: string;
  file: string;
  ext: string;
  extColor: string;
  bullets: string[];
  image1?: string;
  image2?: string;
  tags: string[];
  repo?: string;
  live?: string;
  devpost?: string;
};

// Order here is the display/key order — same convention as the experience cards,
// which are ordered by array position rather than any label matching.
const PROJECTS: Project[] = [
  {
    name: "MINI-L Compiler",
    file: "compiler.ts",
    ext: "C",
    extColor: "text-blue-300 bg-blue-500/10",
    bullets: [
      "A compiler front-end for the MINI-L language, built with Flex for lexical analysis and Bison for parsing.",
      "Covers tokenizing, grammar rules, and syntax-tree construction.",
      "More info coming soon — this project is currently in progress.",
    ],
    image1: "/ComingSoon.jpg",
    image2: "/ComingSoon.jpg",
    tags: ["C", "Flex", "Bison"],
  },
  {
    name: "Study Space",
    file: "studyspace.py",
    ext: "PY",
    extColor: "text-yellow-300 bg-yellow-500/10",
    bullets: [
      "An AI-powered study style quiz app that helps you discover how you learn best and gives you personalized study strategies.",
      "More info coming soon!",
    ],
    image1: "/ComingSoon.jpg",
    image2: "/ComingSoon.jpg",
    tags: [
      "Google Gemini",
      "Python",
      "Vercel",
      "Railway API",
      "GCP",
      "Next.js",
    ],
    repo: "https://github.com/Rebecca-J7/Study-Space",
    live: "https://study-space-teal.vercel.app/",
  },
  {
    name: "Luna Grid",
    file: "lunagrid.tsx",
    ext: "TSX",
    extColor: "text-purple-300 bg-purple-500/10",
    bullets: [
      "Co-built a full-stack IoT platform that gives live visibility into pad and tampon stock across public restroom cabinets.",
      "Built an interactive live map (Next.js 13, React Leaflet) with color-coded markers showing real-time stock per cabinet.",
      "Connected ESP32-CAM hardware to a Supabase backend so captured cabinet images translate into live product counts on the map's API.",
      "Trained an Edge Impulse computer vision model (30–50+ labeled images across pad, tampon, and empty classes) for on-device classification with 85.7% accuracy.",
    ],
    image1: "/ComingSoon.jpg",
    image2: "/ComingSoon.jpg",
    tags: [
      "React",
      "Tailwind",
      "Vercel",
      "Arduino",
      "ESP32-CAM",
      "Supabase",
      "Edge Impulse",
    ],
    repo: "https://github.com/Rebecca-J7/luna-grid",
    devpost: "https://devpost.com/software/luna-grid",
  },
];

// A representative (not exhaustive) keyboard layout — project labels fill from the top row downward.
const KEY_ROW = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const KEY_ROW_2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const KEY_ROW_3 = ["Z", "X", "C", "V", "B", "N", "M"];

const KEYBOARD_LAYOUT = [
  ...KEY_ROW.map((key, index) => ({ key, project: PROJECTS[index] ?? null })),
  ...KEY_ROW_2.map((key, index) => ({
    key,
    project: PROJECTS[KEY_ROW.length + index] ?? null,
  })),
  ...KEY_ROW_3.map((key, index) => ({
    key,
    project: PROJECTS[KEY_ROW.length + KEY_ROW_2.length + index] ?? null,
  })),
];

function Key({
  label,
  active,
  interactive,
  onClick,
}: {
  label: string;
  active: boolean;
  interactive: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      disabled={!interactive}
      onClick={onClick}
      className={`flex min-h-11 min-w-11 max-w-[112px] items-center justify-center whitespace-normal rounded-md px-2 py-1.5 text-center font-mono text-[8px] leading-[1rem] transition-all duration-200 sm:text-[9px] ${
        active
          ? "scale-95 bg-[#B8A6FF] text-[#121018] shadow-[0_0_16px_2px_#B8A6FF80]"
          : interactive
            ? "cursor-pointer bg-[#221E30] text-[#B8A6FF] hover:bg-[#2A2536]"
            : "cursor-default bg-[#1A1723] text-[#4A4558]"
      }`}
    >
      {label}
    </button>
  );
}

export default function ProjectsPage() {
  const [active, setActive] = useState(PROJECTS[0]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:px-12">
      <h1 className="mb-5 text-4xl font-semibold text-[#EDEAF6]">
        // Projects
      </h1>
      <p className="mb-12 hidden font-mono text-sm text-[#9691AA] md:block">
        press a highlighted key to switch projects
      </p>

      {/* ── LAPTOP (desktop / tablet) ── */}
      <div className="hidden flex-col items-center md:flex">
        {/* screen */}
        <div className="w-full max-w-4xl rounded-t-2xl border-[6px] border-b-0 border-[#2A2536] bg-[#0D0B12] p-3">
          <div className="overflow-hidden rounded-lg border border-[#2A2536] bg-[#1C1926]">
            <div className="flex items-center gap-1.5 border-b border-[#2A2536] px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E2857A]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#E5C77A]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#8FE3C0]/70" />
              <span className="ml-3 font-mono text-xs text-[#7C6A9C]">
                {active.file}
              </span>
            </div>

            <div key={active.name} className="animate-[fadeIn_0.3s_ease] p-6">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-[#EDEAF6]">
                  {active.name}
                </h2>
                <span
                  className={`rounded px-1.5 py-0.5 font-mono text-[10px] ${active.extColor}`}
                >
                  {active.ext}
                </span>
              </div>

              <ul className="mb-4 space-y-2 text-[15px] leading-relaxed text-[#C9C5D9]">
                {active.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8A6FF]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-5 flex flex-wrap gap-1.5">
                {active.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[#221E30] px-2.5 py-0.5 font-mono text-[12px] text-[#7C6A9C]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* two image placeholders — swap for real screenshots */}
              <div className="mb-5 grid grid-cols-2 gap-3">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="flex h-40 items-center justify-center rounded-md border border-[#2A2536] bg-[#0D0B12]"
                  >
                    <img
                      src={i === 1 ? active.image1 : active.image2}
                      alt={`Project ${active.name} Image ${i}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                {active.repo && (
                  <a
                    href={active.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-sm text-[#9691AA] transition-colors hover:text-[#B8A6FF]"
                  >
                    <Github size={13} /> repo
                  </a>
                )}
                {active.devpost && (
                  <a
                    href={active.devpost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-sm text-[#9691AA] transition-colors hover:text-[#B8A6FF]"
                  >
                    <ExternalLink size={13} /> devpost
                  </a>
                )}
                {active.live && (
                  <a
                    href={active.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-sm text-[#9691AA] transition-colors hover:text-[#B8A6FF]"
                  >
                    <ExternalLink size={13} /> live
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* hinge */}
        <div className="h-2 w-full max-w-3xl rounded-b-sm bg-[#2A2536]" />

        {/* keyboard base */}
        <div className="-mt-px w-full max-w-4xl rounded-b-2xl border border-t-0 border-[#2A2536] bg-[#171420] px-8 py-6">
          <div className="flex flex-col items-center gap-1.5">
            <div className="flex gap-1.5">
              {KEYBOARD_LAYOUT.slice(0, KEY_ROW.length).map(
                ({ key, project }) => (
                  <Key
                    key={key}
                    label={project ? project.name : "♡"}
                    interactive={!!project}
                    active={!!project && active.name === project.name}
                    onClick={project ? () => setActive(project) : undefined}
                  />
                ),
              )}
            </div>
            <div className="flex gap-1.5">
              {KEYBOARD_LAYOUT.slice(
                KEY_ROW.length,
                KEY_ROW.length + KEY_ROW_2.length,
              ).map(({ key, project }) => (
                <Key
                  key={key}
                  label={project ? project.name : "♡"}
                  interactive={!!project}
                  active={!!project && active.name === project.name}
                  onClick={project ? () => setActive(project) : undefined}
                />
              ))}
            </div>
            <div className="flex gap-1.5">
              {KEYBOARD_LAYOUT.slice(KEY_ROW.length + KEY_ROW_2.length).map(
                ({ key, project }) => (
                  <Key
                    key={key}
                    label={project ? project.name : "♡"}
                    interactive={!!project}
                    active={!!project && active.name === project.name}
                    onClick={project ? () => setActive(project) : undefined}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE FALLBACK: simple tab buttons instead of a tiny unusable keyboard ── */}
      <div className="md:hidden">
        <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
          {PROJECTS.map((p) => (
            <button
              key={p.name}
              onClick={() => setActive(p)}
              className={`shrink-0 rounded-full px-4 py-2 font-mono text-xs transition-colors ${
                active.name === p.name
                  ? "bg-[#B8A6FF] text-[#121018]"
                  : "bg-[#221E30] text-[#9691AA] hover:text-[#EDEAF6]"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div
          key={active.name}
          className="animate-[fadeIn_0.3s_ease] overflow-hidden rounded-lg border border-[#2A2536] bg-[#1C1926]"
        >
          <div className="flex items-center gap-1.5 border-b border-[#2A2536] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E2857A]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E5C77A]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#8FE3C0]/70" />
            <span className="ml-3 font-mono text-xs text-[#7C6A9C]">
              {active.file}
            </span>
          </div>
          <div className="p-5">
            <h2 className="mb-2 text-xl font-semibold text-[#EDEAF6]">
              {active.name}
            </h2>
            <ul className="mb-4 space-y-2 text-[15px] leading-relaxed text-[#C9C5D9]">
              {active.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8A6FF]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {active.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-[#221E30] px-2.5 py-0.5 font-mono text-[12px] text-[#7C6A9C]"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mb-4 grid grid-cols-2 gap-3">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="flex h-24 items-center justify-center rounded-md border border-[#2A2536] bg-[#0D0B12]"
                >
                  <ImageIcon size={16} className="text-[#4A4558]" />
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              {active.repo && (
                <a
                  href={active.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-sm text-[#9691AA]"
                >
                  <Github size={13} /> repo
                </a>
              )}
              {active.live && (
                <a
                  href={active.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-sm text-[#9691AA]"
                >
                  <ExternalLink size={13} /> live
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}

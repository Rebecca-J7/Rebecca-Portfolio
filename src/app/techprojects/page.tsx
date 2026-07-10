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
  design?: string;
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
      "Full-stack web app that uses generative AI to assess VARK learning styles and deliver personalized study recommendations.",
      "Built a 3-tier architecture: FastAPI backend (Railway) + Next.js frontend (Vercel), connected via a custom proxy route.",
      "Integrated Google Gemini through the Google Agent Platform, implementing Tool Use and Reflection agentic patterns for adaptive follow-up questioning.",
      "Designed a confidence-threshold system (40%) that triggers elaboration prompts on vague quiz responses for more accurate results.",
      "Drove development with TDD, reaching 40 passing tests across storage, recommendation, engine, and interface layers.",
    ],
    image1: "/StudySpace1.png",
    image2: "/StudySpace2.png",
    tags: [
      "Python",
      "FastAPI",
      "TypeScript",
      "Railway API",
      "Next.js",
      "Google Gemini",
      "Google Agent Platform",
      "Google Sheets API",
      "pytest",
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
    image1: "/LunaGrid1.jpg",
    image2: "/LunaGrid2.png",
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
  {
    name: "R'Accessible",
    file: "raccessible.vue",
    ext: "Vue",
    extColor: "text-green-300 bg-green-500/10",
    bullets: [
      "Developed a mobile-friendly web application that allows users to report and view accessibility barriers in public spaces within their location.",
      "Contributed to a map-based visualization feature that enables uploaded CSV data to display report locations and highlight accessibility problem areas.",
      "Implemented location capture functionality using the Browser Geolocation API, enabling users to submit reports tied to their current coordinates.",
    ],
    image1: "/RAccessible1.png",
    image2: "/RAccessible2.png",
    tags: [
      "Vue 3",
      "Vite",
      "HTML/CSS",
      "Browser Geolocation API",
      "Google Apps Script",
      "Google Sheets API",
    ],
    repo: "https://github.com/Rebecca-J7/R-Cane",
    devpost: "https://devpost.com/software/r-cane",
  },
  {
    name: "EcoSort",
    file: "ecosort.py",
    ext: "Python",
    extColor: "text-yellow-300 bg-yellow-500/10",
    bullets: [
      "Developed a computer vision–based waste sorting system to classify items as landfill, recycling, or compost for improved disposal accuracy in public spaces.",
      "Implemented real-time object identification using Python and PyTorch with webcam input and averaged predictions to improve classification reliability.",
      "Integrated software and hardware by transmitting classification results from Python to an Arduino, triggering servo-controlled bin openings and OLED user prompts.",
    ],
    image1: "/Ecosort1.jpg",
    image2: "/Ecosort2.jpg",
    tags: ["Python", "Numpy", "OpenCV", "TensorFlow", "Arduino"],
    repo: "https://github.com/Rebecca-J7/EcoSort",
    devpost: "https://devpost.com/software/ecosort-y7r8ig",
  },
  {
    name: "Microblog Website",
    file: "microblog.js",
    ext: "JavaScript",
    extColor: "text-yellow-300 bg-yellow-500/10",
    bullets: [
      "Developed a full-featured microblogging website enabling account creation, posting, following, user feeds, and profile management using Firebase for data storage and retrieval.",
      "Implemented collaborative folder features allowing users to save posts, invite others to contribute, and engage in shared discussions, enhancing content exchange and user interaction.",
      "Aligned project design with historical technology principles, incorporating reception, marketization, moderation, and preservation to emphasize thoughtful user engagement.",
    ],
    image1: "/Microblog1.png",
    image2: "/Microblog2.png",
    tags: ["JavaScript", "Firebase", "HTML/CSS"],
    repo: "https://github.com/Rebecca-J7/CS110-Project",
    live: "https://cs110-aa317.web.app/",
  },
  {
    name: "kwhatt.",
    file: "kwhatt.fima",
    ext: "Figma",
    extColor: "text-red-300 bg-red-500/10",
    bullets: [
      "Designed a mobile app to help first-time renters and young adults monitor home energy usage, visualizing ecological and financial impact through smart and conventional device integration.",
      "Implemented core features including room scanning with the camera, appliance usage tracking, weekly summaries, and an energy cost calculator to guide informed decision-making.",
      "Conducted user research and UI/UX design in Figma, creating wireframes, user personas, surveys, and user flows to optimize usability and enhance engagement.",
    ],
    image1: "/Kwhatt1.png",
    image2: "/Kwhatt2.png",
    tags: ["Figma"],
    devpost: "https://devpost.com/software/wattwise-name-tbd",
    design:
      "https://www.figma.com/design/GpOVNy7iu4H0IdcRHeB94d/kwhatt.---Team-Whale--Actually?node-id=2-4&t=ZmxazeiZeHQzhWkX-1",
  },
  {
    name: "Smooth Shot",
    file: "smoothshot.ino",
    ext: "Arduino",
    extColor: "text-cyan-300 bg-cyan-500/10",
    bullets: [
      "Developed a low-cost automated camera rig that performs programmable pans, tilts, and tracking shots using Arduino-controlled motors and a joystick interface.",
      "Designed and assembled the rig using 3D-printed and cardboard components to house the stepper motor, joystick, and LED matrix, which displays a countdown for filming synchronization.",
      "Implemented precise motion control and 360° rotation capabilities to enable repeatable camera movements for time-lapse, stop-motion, and cinematic recordings.",
    ],
    image1: "/SmoothShot1.jpg",
    image2: "/SmoothShot2.jpg",
    tags: ["Arduino", "C++"],
    repo: "https://github.com/Rebecca-J7/SmoothShot",
    devpost: "https://devpost.com/software/smoothshot",
  },
  {
    name: "Vitamin D-Ficiency Kit",
    file: "vitamin-d-ficiency-kit.ino",
    ext: "Arduino",
    extColor: "text-cyan-300 bg-cyan-500/10",
    bullets: [
      "Collaborated in a team of five to design a comprehensive “Vitamin D-ficiency Kit” featuring a pill dispenser, sunlight tracker, and educational website to promote healthy vitamin D habits.",
      "Engineered an Arduino-powered pill dispenser and sun tracker with LED feedback and motorized rotation, enabling users to monitor sunlight exposure and receive pill reminders.",
      "Developed an interactive website to educate users on vitamin D deficiency and available treatments, integrating credible health resources and clear UX design.",
    ],
    image1: "/Vitamin1.jpg",
    image2: "/Vitamin2.png",
    tags: ["Arduino", "C++", "TailwindCSS"],
    repo: "https://github.com/Rebecca-J7/Vitamin-D-Ficiency",
    devpost: "https://devpost.com/software/vitamin-d-ficiency",
  },
  {
    name: "Plant Bodyguard",
    file: "plant-bodyguard.ino",
    ext: "Arduino",
    extColor: "text-cyan-300 bg-cyan-500/10",
    bullets: [
      "Collaborated in a team of 4 to develop a “Plant Bodyguard” system using Arduino that monitors light, temperature, and motion to provide real-time feedback for optimal plant growth.",
      "Integrated sensors including a photoresistor, DHT11, HC-SR04, and a passive buzzer to measure environmental conditions and trigger visual or auditory alerts.",
      "Programmed and synchronized multiple sensor components in C++ to operate simultaneously, enhancing understanding of embedded systems and real-time data processing.",
    ],
    image1: "/Plant1.jpg",
    image2: "/Plant2.jpg",
    tags: ["Arduino"],
    repo: "https://github.com/Rebecca-J7/Rosehack-2025/tree/main",
    devpost: "https://devpost.com/software/rosehack-2025",
  },
  {
    name: "Playlist Organizer",
    file: "playlist-organizer.cpp",
    ext: "C++",
    extColor: "text-blue-300 bg-blue-500/10",
    bullets: [
      "Developed a terminal-based Playlist Organizer in C++ using Visual Studio, enabling users to create/delete accounts, search songs with filters, and manage playlists through CRUD operations.",
      "Improved software reliability by designing and implementing Google Tests and debugging with Valgrind, resulting in 100% resolution of all detected memory leaks.",
      "Planned and documented system architecture by creating Navigation and Class Diagrams, and Screen Layouts to clarify relationships between modules and improve development efficiency.",
    ],
    image1: "/Playlist1.png",
    image2: "/Playlist2.png",
    tags: ["C++"],
    repo: "https://github.com/cs100/final-project-the-kitchen",
  },
  {
    name: "UCR Taekwondo Club Website",
    file: "tkd-website.tsx",
    ext: "React",
    extColor: "text-blue-300 bg-blue-500/10",
    bullets: [
      "Collaborated with developers and team leads to design and implement the Taekwondo Club website, contributing responsive page sections, animations, and interactive components.",
      "Delivered 1–2 weekly tasks including embedding links, fixing code redundancy, and optimizing components for responsive design using Next.js and Tailwind CSS.",
      "Enhanced site functionality by implementing state-based scroll features, animating page elements, and reducing code redundancy through modular component design.",
    ],
    image1: "/TKD1.png",
    image2: "/TKD2.png",
    tags: ["React", "TypeScript", "TailwindCSS"],
    live: "https://tkd.ucrhighlanders.org/",
  },
  {
    name: "UCR 3D Club Web Design",
    file: "3d-club.figma",
    ext: "Figma",
    extColor: "text-red-300 bg-red-500/10",
    bullets: [
      "Collaborated with team leads and club members to design a responsive website template for desktop and mobile, ensuring alignment with club goals and usability standards.",
      "Applied UI/UX principles learned from ACM workshops to organize components, optimize navigation, and balance visual design elements for improved user experience.",
      "Iterated on design feedback from club leads to refine layouts, labeling, and component duplication, resulting in an efficient and cohesive website prototype.",
    ],
    image1: "/3D1.png",
    image2: "/3D2.png",
    tags: ["Figma"],
    design:
      "https://www.figma.com/design/M5lBBZmtmt9YTyDL8j5lZk/3D-Club-Website?node-id=0-1&t=5R5b1lc4Z6hBW3HQ-1",
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
                    className="flex h-52 items-center justify-center rounded-md border border-[#2A2536] bg-[#0D0B12]"
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
                {active.design && (
                  <a
                    href={active.design}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-sm text-[#9691AA] transition-colors hover:text-[#B8A6FF]"
                  >
                    <ExternalLink size={13} /> design
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

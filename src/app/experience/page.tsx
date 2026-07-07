"use client";
import React, { useState } from "react";
import { RotateCcw } from "lucide-react";

type Experience = {
  filename: string;
  position: string;
  company: string;
  role: string;
  dates: string;
  bullets: string[];
};

const EXPERIENCES: Experience[] = [
  {
    filename: "engineersforgood.txt",
    position: "Software Engineer Volunteer",
    company: "Engineers For Good",
    role: "Software Engineer Volunteer",
    dates: "August 2025 - Present",
    bullets: [
      "Researched and evaluated AI platforms for automated infographic generation, identifying effective solutions for content creation.",
      "Collaborated in sprint planning and standups (GitHub and Slack) to coordinate with frontend and backend.",
      "Implemented a Google Gemini API connection and developed a service to generate infographics from prompt text, enabling automated content creation without user interaction.",
      "Tested and validated AI-generated outputs, integrating the service into the Newsletters platform and ensuring reliability for reuse across other services.",
      "Working on the full stack integration of sign up/log page.",
    ],
  },
  {
    filename: "bcoe.txt",
    position: "Peer Academic Advisor",
    company: "UCR BCOE",
    role: "Peer Academic Advisor",
    dates: "January 2025 - Present",
    bullets: [
      "Serve as the first point of contact for students, faculty, staff, and community members, delivering excellent customer service and resolving inquiries efficiently.",
      "Assist the Advising team during quarterly drop-in hours by managing check-ins, assessing advising needs, and directing students to appropriate resources.",
      "Develop and present guidance on course registration, student success, and engagement, while updating academic resources to reflect current policies and procedures.",
    ],
  },
  {
    filename: "winc1.txt",
    position: "Vice President",
    company: "WINC",
    role: "Vice President",
    dates: "March 2026 - Present",
    bullets: [
      "Collaborating with the president and board members to host 10+ board meetings, plan 10+ events, and delegate tasks.",
      "Oversee the planning and execution of Rosehack through check-ins discussing marketing, SWE, and operations with the president, directors, and committees.",
      "Managing internal affairs including operations, communication within board, events and room bookings, and overseeing the execution of events and initiatives.",
      "Managing external affairs including outreach communication for large scale collaborations including K-12 schools, conferences, company tours or guest speakers, etc.",
    ],
  },
  {
    filename: "swe1.txt",
    position: "Technical Development Co-Chair",
    company: "SWE @ UCR",
    role: "Technical Development Co-Chair",
    dates: "March 2026 - Present",
    bullets: [
      "Maintaining and updating the SWE website pages with forms, events, newsletters and other materials or updates that are required.",
      "Overseeing the BeeHive Project Program: creating applications, interviewing and selecting candidates, budgeting materials, hosting check-ins with teams, and ensuring progress is made for approved projects.",
      "Introduce SWE members to various technical areas in the engineering space by planning 2-3 introductory workshops each quarter.",
      "Seeking out technical development opportunities for SWE members to attend, including showcases, workshops, and collaborations.",
    ],
  },
  {
    filename: "winc2.txt",
    position: "Operations",
    company: "WINC @ UCR",
    role: "Operations",
    dates: "March 2025 - March 2026",
    bullets: [
      "Prepared materials, streamlined logistics, and supported board members in executing 10+ events per quarter.",
      "Managed and updated the WINC calendar with 30+ events, Google Drive with organized position folders, and communication channels, improving inter-club coordination and planning efficiency.",
      "Initiated and created weekly newsletters and collected 200+ email contacts, enhancing promotion of events and increasing participant turnout.",
      "Hosted a Digital Wellbeing workshop for 15+ attendees, providing guidance on managing screen time and promoting healthy digital habits.",
    ],
  },
  {
    filename: "swe2.txt",
    position: "Webmaster",
    company: "SWE @ UCR",
    role: "Webmaster",
    dates: "April 2025 - March 2026",
    bullets: [
      "Revived the organization’s website by creating a maintenance guide and redesigning pages according to UI/UX principles, improving usability and accessibility.",
      "Supported the marketing committee by contributing to 10+ events, ensuring smooth execution and alignment with organizational goals.",
      "Collaborated in weekly meetings with chairs and committees to track progress, integrate feedback, and maintain consistent communication across teams.",
    ],
  },
  {
    filename: "acm1.txt",
    position: "VP of Marketing",
    company: "ACM @ UCR",
    role: "VP of Marketing",
    dates: "March 2025 - March 2026",
    bullets: [
      "Designed flyers and multimedia posts for multiple platforms to promote ACM events and initiatives.",
      "Collaborated with the VP of External Affairs and Executive Board to create content and coordinate promotion of applications, programs, and project divisions.",
      "Implemented a quarterly social media calendar to track post frequency and platform engagement, improving visibility and event participation.",
      "Created transition materials and Figma tutorials for future marketing team members, ensuring continuity and knowledge transfer.",
    ],
  },
  {
    filename: "acm2.txt",
    position: "Web Developer & Designer",
    company: "ACM @ UCR",
    role: "Web Developer & Designer",
    dates: "September 2024 - March 2025",
    bullets: [
      "Collaborated with team members and leads to design and implement websites for 3 UCR clubs.",
      "Delivered 1–2 weekly tasks utilizing Figma, ESLint, Next.js and Tailwind CSS, and Prettier.",
      "Enhanced site functionality by implementing state-based scroll features, animating page elements, and reducing code redundancy through modular component design.",
      "Applied UI/UX principles to organize components, optimize navigation, and balance visual elements for improved user experience.",
      "Contributed to agile development cycles by attending weekly meetings to track progress, integrate feedback, and maintain design consistency.",
    ],
  },
  {
    filename: "file-empty.txt",
    position: "Coming Soon",
    company: "[insert company name]",
    role: "Coming Soon",
    dates: "[insert date]",
    bullets: ["More details coming soon!"],
  },
];

function WindowChrome({ filename }: { filename: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-[#2A2536] px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#E2857A]/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#E5C77A]/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#8FE3C0]/70" />
      <span className="ml-3 font-mono text-xs text-[#7C6A9C]">{filename}</span>
    </div>
  );
}

function ExperienceFlipCard({ exp }: { exp: Experience }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-label={`${exp.position} at ${exp.company}, click to ${flipped ? "show summary" : "show details"}`}
      className="group h-[280px] w-full text-left [perspective:1200px]"
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 flex flex-col overflow-hidden rounded-lg border border-[#2A2536] bg-[#1C1926]/80 backdrop-blur transition-all duration-300 [backface-visibility:hidden] group-hover:border-[#7F77DD] group-hover:shadow-[0_8px_30px_-8px_#7F77DD55]">
          <WindowChrome filename={exp.filename} />
          <div className="flex flex-1 flex-col items-center justify-center gap-2 p-6 text-center">
            <h3 className="text-lg font-semibold text-[#EDEAF6]">
              {exp.position}
            </h3>
            <p className="font-mono text-sm text-[#9691AA]">@ {exp.company}</p>
            <p className="font-mono text-xs italic text-[#7C6A9C]">
              {exp.dates}
            </p>
            <span className="mt-4 flex items-center gap-1.5 font-mono text-[11px] text-[#5C5670] group-hover:text-[#7C6A9C]">
              <RotateCcw size={11} />
              click to view details
            </span>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 flex flex-col overflow-hidden rounded-lg border border-[#7F77DD] bg-[#1C1926]/95 shadow-[0_8px_30px_-8px_#7F77DD55] backdrop-blur [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <WindowChrome filename={exp.filename} />
          <div className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {exp.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-[13px] leading-relaxed text-[#C9C5D9]"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#B8A6FF]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl py-16">
      <div className="px-6 md:px-12">
        <h1 className="mb-1 text-4xl font-semibold text-[#EDEAF6]">
          // Leadership &amp; Experience
        </h1>
        <p className="mb-8 font-mono text-[11px] text-[#5C5670] md:hidden">
          swipe to see more →
        </p>
        <p className="hidden md:mb-10 md:block" />
      </div>

      {/*
        Mobile: horizontal snap-scroll, one (mostly full-width) card at a time, so text stays readable.
        md+: reverts to a fixed 3-column grid, matching the "3 files per row" layout.
      */}
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-12 md:pb-0">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.filename}
            className="w-[85%] max-w-xs shrink-0 snap-center md:w-auto md:max-w-none md:shrink"
          >
            <ExperienceFlipCard exp={exp} />
          </div>
        ))}
      </div>
    </div>
  );
}

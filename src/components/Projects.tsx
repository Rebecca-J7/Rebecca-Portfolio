"use client";
import { useState } from "react";

const Project = () => {
  type ProjectKey =
    | "playlistOrganizer"
    | "betaAlphaPsi"
    | "spaceSweeper"
    | "plantBodyguard";

  const projects: Record<
    ProjectKey,
    { title: string; description: string[]; images: string[] }
  > = {
    playlistOrganizer: {
      title: "Playlist Organizer",
      description: [
        "Created a playlist organizer where users could sort their music and songs through personalized playlists. Offers a way for users to layout playlists they could replicate in music applications.",
        "Written in C++ and using Visual Studios where the user would navigate via the terminal.",
        "Features: create/delete accounts, search for songs through filters, create/edit/delete/get recommended playlists, modify song library, and more.",
        "Held sprint meetings 2 to 3 times a week to review and assigns issues, track progress, and creates tests for the project.",
        "Attended 4 scrum meetings to review progress, receive feedback, and make appropriate modifications to our diagrams and code.",
      ],
      images: ["Playlist1.png", "Playlist2.png"],
    },

    betaAlphaPsi: {
      title: "Beta Alpha Psi (BAP) Website",
      description: [
        "Worked with a group of 8 developers and 2 team leads in creating the UCR Beta Alpha Psi's (BAP) website.",
        "Attend weekly meetings to review issues, receive feedback, complete tasks, and ensure we are on track throughout the quarter.",
        "Assigned 1 to 2 tasks each week to code components such as buttons, linked objects, page layouts, text layouts, and more.",
        "Navigated Figma to align the website layout to the design, learned CSS features to create aligned text/images/backgrounds, and fixed responsiveness issues for various sized screens.",
      ],
      images: ["BAP1.png", "BAP3.png"],
    },

    spaceSweeper: {
      title: "Space Sweeper (CutieHack 2024)",
      description: [
        "Idea: Inspired to address the accumulation of space junk composed of unused or forgotten technology modules left in space orbiting Earth that could lead to cascading collisions posing a risk to spacecraft and astronauts.",
        "Goal: Space Sweeper would identify space junk/objects, follow a relative path toward it, and collect the space junk/objects.",
        "Worked with 3 teammates to create a Space Sweeper device/module to scan paths, locate, and move toward the closest object.",
        "Aimed to meet hardware, sustainability, and theme categories.",
        "Learned how to use an Arduino kit to wire and code with C++ syntax for the motor and motion sensor.",
      ],
      images: ["SpaceSweeper2.jpg", "SpaceSweeper3.jpg"],
    },
    plantBodyguard: {
      title: "Plant Bodyguard (RoseHack 2025)",
      description: [
        "Idea: Our Plant Bodyguard is designed to monitor the conditions around plants, ensuring they are kept in optimal environments by providing users with real-time feedback on environmental conditions.",
        "Goal: Build a structure that holds a plant in the center with surrounding components: light sensor - green LED dims = not enough light & shines = enough light, temperature sensor (value displays in IDE), and movement sensor where buzzer emits within range.",
        "Won first place overall for RoseHack!",
        "Learned how to code for different components of an Arduino (photoresistor, DHT11 (Temperature Sensor), passive buzzer, HC SR04 (Ultrasonic Sensor))",
      ],
      images: ["Plantbodyguard1.jpg", "Plantbodyguard2.jpg"],
    },
  };

  const [currentProject, setCurrentProject] =
    useState<ProjectKey>("playlistOrganizer");

  const project = projects[currentProject];

  return (
    <div id="projects" className="absolute left-52 top-[2510px]">
      <p className="font-mono text-4xl font-semibold text-web-purple-2">
        Projects
      </p>
      <div className="h-0.5 w-[900px] rounded-sm bg-black"></div>
      <div className="relative top-7 flex flex-col">
        <div className="flex h-[480px] w-[900px] items-center justify-center bg-black">
          <div className="relative h-[400px] w-[860px] bg-web-purple-1">
            <div className="absolute left-4 top-16 flex flex-col">
              <div className="relative h-[20px] w-[430px] bg-web-purple-2">
                <div className="absolute right-4 flex flex-row items-center gap-4">
                  <div className="h-[2px] w-[10px] bg-white"></div>
                  <div className="h-[9px] w-[9px] bg-white"></div>
                  <div className="font-mono font-bold text-white"> x </div>
                </div>
              </div>
              <div className="relative h-[240px] w-[430px] border-2 border-web-purple-2 bg-white">
                <p className="absolute left-3 top-1 font-mono text-base font-semibold text-black">
                  {project.title}
                </p>
                <ul className="absolute left-5 top-7 max-w-[380px] list-disc font-sans text-xs font-normal text-black">
                  {project.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="absolute right-24 top-6 flex flex-col">
              <div className="relative h-[20px] w-[280px] bg-web-purple-2"></div>
              <div className="absolute right-4 flex flex-row items-center gap-4">
                <div className="h-[2px] w-[10px] bg-white"></div>
                <div className="h-[9px] w-[9px] bg-white"></div>
                <div className="font-mono font-bold text-white"> x </div>
              </div>
              <div className="flex h-[170px] w-[280px] items-center justify-center border-2 border-web-purple-2 bg-white">
                <img
                  src={project.images[0]}
                  alt={`${project.title} Image 1`}
                  className="h-[150px] w-[250px] transform object-contain object-center"
                />
              </div>
            </div>
            <div className="absolute right-8 top-48 flex flex-col">
              <div className="relative h-[20px] w-[280px] bg-web-purple-2"></div>
              <div className="absolute right-4 flex flex-row items-center gap-4">
                <div className="h-[2px] w-[10px] bg-white"></div>
                <div className="h-[9px] w-[9px] bg-white"></div>
                <div className="font-mono font-bold text-white"> x </div>
              </div>
              <div className="h-[170px] w-[280px] items-center justify-center border-2 border-web-purple-2 bg-white">
                <img
                  src={project.images[1]}
                  alt={`${project.title} Image 2`}
                  className="h-[150px] w-[250px] transform object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[300px] w-[900px] rounded-md border-2 border-black bg-zinc-800">
          <div className="absolute left-10 mt-3 flex flex-row gap-4">
            <div
              className={`flex h-[60px] w-[100px] cursor-pointer items-center rounded-lg border-2 border-gray-500 bg-black shadow-md hover:shadow-white ${
                currentProject === "playlistOrganizer" ? "bg-slate-800" : ""
              }`}
              onClick={() => setCurrentProject("playlistOrganizer")}
            >
              <p className="relative left-4 font-mono text-xs font-normal text-white">
                Playlist Organizer
              </p>
            </div>

            <div
              className={`flex h-[60px] w-[100px] cursor-pointer items-center rounded-lg border-2 border-gray-500 bg-black shadow-md hover:shadow-white ${
                currentProject === "betaAlphaPsi" ? "bg-slate-800" : ""
              }`}
              onClick={() => setCurrentProject("betaAlphaPsi")}
            >
              <p className="relative left-3 max-w-[80px] font-mono text-xs font-normal text-white">
                Beta Alpha Psi Website
              </p>
            </div>

            <div
              className={`flex h-[60px] w-[100px] cursor-pointer items-center rounded-lg border-2 border-gray-500 bg-black shadow-md hover:shadow-white ${
                currentProject === "spaceSweeper" ? "bg-slate-800" : ""
              }`}
              onClick={() => setCurrentProject("spaceSweeper")}
            >
              <p className="relative mx-auto font-mono text-xs font-normal text-white">
                Space Sweeper
              </p>
            </div>

            <div
              className={`flex h-[60px] w-[100px] cursor-pointer items-center rounded-lg border-2 border-gray-500 bg-black shadow-md hover:shadow-white ${
                currentProject === "plantBodyguard" ? "bg-slate-800" : ""
              }`}
              onClick={() => setCurrentProject("plantBodyguard")}
            >
              <p className="relative left-5 mx-auto font-mono text-xs font-normal text-white">
                Plant Bodyguard
              </p>
            </div>

            <div className="flex h-[60px] w-[100px] cursor-pointer items-center rounded-lg border-2 border-gray-500 bg-black shadow-md hover:shadow-white">
              <div className="relative left-5 mx-auto font-mono text-xs font-normal text-white">
                More To Come...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

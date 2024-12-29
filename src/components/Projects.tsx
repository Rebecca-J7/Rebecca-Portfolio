const Project = () => {
  return (
    <div className="absolute left-52 top-[2600px]">
      <p className="font-mono text-4xl font-semibold text-web-purple-2">
        Projects
      </p>
      <div className="h-0.5 w-[900px] rounded-sm bg-black"></div>
      <div className="relative top-7 flex flex-row gap-7">
        <div className="flex h-[420px] w-[750px] items-center justify-center bg-black">
          <div className="relative h-[370px] w-[725px] bg-web-purple-1">
            <div className="absolute left-4 top-16 flex flex-col">
              <div className="h-[15px] w-[410px] bg-web-purple-2"></div>
              <div className="relative h-[230px] w-[410px] border-2 border-web-purple-2 bg-white">
                <p className="absolute left-3 top-1 font-mono text-base font-semibold text-black">
                  Playlist Organizer
                </p>
                <ul className="absolute left-5 top-7 max-w-[380px] list-disc font-sans text-xs font-normal text-black">
                  <li>
                    Created a playlist organizer where users could sort their
                    music and songs through personalized playlists. Offers a way
                    for users to layout playlists they could replicate in music
                    applications.
                  </li>
                  <li>
                    Written in C++ and using Visual Studios where the user would
                    navigate via the terminal.
                  </li>
                  <li>
                    Features: create/delete accounts, search for songs through
                    filters, create/edit/delete/get recommended playlists,
                    modify song library, and more.
                  </li>
                  <li>
                    Held sprint meetings 2 to 3 times a week to review and
                    assigns issues, track progress, and creates tests for the
                    project.
                  </li>
                  <li>
                    Attended 4 scrum meetings to review progress, receive
                    feedback, and make appropriate modifications to our diagrams
                    and code.
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute right-4 top-7 flex flex-col">
              <div className="h-[15px] w-[250px] bg-web-purple-2"></div>
              <div className="flex h-[155px] w-[250px] items-center justify-center border-2 border-web-purple-2 bg-white">
                <img
                  src="/Playlist1.png"
                  alt="Playlist Code"
                  className="h-[140px] w-[230px] transform object-contain"
                />
              </div>
            </div>
            <div className="absolute right-8 top-44 flex flex-col">
              <div className="h-[15px] w-[250px] bg-web-purple-2"></div>
              <div className="h-[155px] w-[250px] border-2 border-web-purple-2 bg-white">
                <img
                  src="/Playlist2.png"
                  alt="Playlist Navigation"
                  className="h-[145px] w-[240px] transform object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[300px] w-[270px] rounded-md border-2 border-black bg-zinc-800">
          <div className="flex flex-col gap-5">
            <div className="relative left-5 top-5 flex flex-row gap-7">
              <div className="flex h-[60px] w-[100px] items-center rounded-md border-2 border-gray-500 bg-black shadow-md hover:shadow-white">
                <p className="relative left-4 font-mono text-xs font-normal text-white">
                  Playlist Organizer
                </p>
              </div>
              <div className="flex h-[60px] w-[100px] items-center rounded-md border-2 border-gray-500 bg-black shadow-md hover:shadow-white">
                <p className="relative left-3 max-w-[90px] font-mono text-xs font-normal text-white">
                  Beta Alpha Psi Website
                </p>
              </div>
            </div>

            <div className="relative left-5 top-5 flex flex-row gap-7">
              <div className="flex h-[60px] w-[100px] items-center rounded-md border-2 border-gray-500 bg-black shadow-md hover:shadow-white">
                <p className="relative left-7 max-w-[80px] font-mono text-xs font-normal text-white">
                  Space Sweeper
                </p>
              </div>
              <div className="flex h-[60px] w-[100px] items-center rounded-md border-2 border-gray-500 bg-black shadow-md hover:shadow-white">
                <p className="relative left-2 font-mono text-xs font-normal text-white">
                  More to come
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

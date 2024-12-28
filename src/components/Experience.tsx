const Experience = () => {
  return (
    <div className="absolute left-52 top-[2120px] flex flex-col gap-3">
      <p className="font-mono text-4xl font-semibold text-web-purple-2">
        Experience
      </p>
      <div className="h-0.5 w-[800px] rounded-sm bg-black"></div>

      <div className="flex flex-row gap-4">
        <div className="h-[370px] w-[270px] rounded-2xl border-2 border-web-purple-2 bg-white shadow shadow-web-purple-2 hover:shadow-2xl">
          <div className="relative top-8 h-0.5 w-[267px] rounded-sm bg-web-purple-2"></div>
          <div className="relative left-2 top-9 flex flex-col">
            <p className="font-mono text-2xl font-semibold text-black">
              BCOE @ UCR
            </p>
            <p className="font-mono text-base font-normal italic text-black">
              Peer Academic Advisor
            </p>
            <ul className="relative left-3 max-w-[240px] list-disc font-mono text-xs font-normal text-black">
              <li>
                Help students by answering questions regarding registration,
                course planning, and navigating advising resources.{" "}
              </li>
              <li>
                Create workshops, provide mentorship, and knowledge of campus
                resources.{" "}
              </li>
              <li>
                Work closely with the BCOE Student Affairs Team to provide
                office and event support.{" "}
              </li>
              <li>More details to come...</li>
            </ul>
          </div>
        </div>

        <div className="h-[370px] w-[270px] rounded-2xl border-2 border-web-purple-2 bg-white shadow shadow-web-purple-2 hover:shadow-lg">
          <div className="relative top-8 h-0.5 w-[267px] rounded-sm bg-web-purple-2"></div>
          <div className="relative left-2 top-9 flex flex-col">
            <p className="font-mono text-2xl font-semibold text-black">
              ACM @ UCR
            </p>
            <p className="font-mono text-base font-normal italic text-black">
              Web Developer, Designer
            </p>
            <ul className="relative left-3 max-w-[240px] list-disc font-mono text-xs font-normal text-black">
              <li>
                Worked with developers and team leads in creating websites for
                UCR organizations.{" "}
              </li>
              <li>
                Attend weekly meetings to review issues, receive feedback,
                complete tasks, and ensure we are on track throughout the
                quarter.{" "}
              </li>
              <li>
                Assigned 1 to 2 tasks each week to code components such as
                buttons, linked objects, page/text layouts, and more.{" "}
              </li>
              <li>
                Navigated Figma to align the website layout to the design,
                learned CSS features to create aligned text/images/backgrounds,
                and fixed responsiveness issues for screens.
              </li>
            </ul>
          </div>
        </div>

        <div className="h-[370px] w-[270px] rounded-2xl border-2 border-web-purple-2 bg-white shadow shadow-web-purple-2 hover:shadow-lg">
          <div className="relative top-8 h-0.5 w-[267px] rounded-sm bg-web-purple-2"></div>
          <div className="relative left-2 top-9 flex flex-col">
            <p className="font-mono text-2xl font-semibold text-black">
              APO @ UCR
            </p>
            <p className="font-mono text-base font-normal italic text-black">
              Historian, Pledge Committee, Academic Secretary
            </p>
            <ul className="relative left-3 max-w-[240px] list-disc font-mono text-xs font-normal text-black">
              <li>
                Completed over 20 hours of service, fellowship, and interview
                requirements per quarter.{" "}
              </li>
              <li>
                Academic Secretary: Tracked academic points, hosted workshops,
                refered the chapter to academic/career resources.{" "}
              </li>
              <li>
                Pledge Committee: Guided 13 pledges through requirements,
                integrated them into the chapter, attended pledge meetings, held
                study sessions.{" "}
              </li>
              <li>
                Historian: documented photos/videos, managed pledge class
                Instagram and GoogleDrive, created scrapbook.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

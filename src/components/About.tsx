const About = () => {
  return (
    <div className="absolute left-52 top-[780px] flex flex-col">
      <p className="font-mono text-4xl font-semibold text-web-purple-2">
        About
      </p>
      <div className="h-0.5 w-[900px] rounded-sm bg-black"></div>

      <div className="relative top-7 flex flex-col gap-4">
        <p className="font-mono text-2xl font-semibold text-black">
          INTRODUCTION
        </p>
        <p className="max-w-3xl font-mono text-lg font-medium text-black">
          Welcome to my personal website/portfolio! This was my first individual
          project and through it I hope to highlight my experiences, skills,
          projects, and growth! I also hope to shed light onto my personality,
          interests, aspirations, and drive to to create a positive impact!
        </p>
      </div>

      <div className="relative top-16 flex flex-col gap-4">
        <p className="font-mono text-2xl font-semibold text-black">
          PERSPECTIVE OF LIFE
        </p>
        <p className="max-w-3xl font-mono text-lg font-medium text-black">
          While life can be unexpected and contain hardships I strive to be
          resilient and find the positive as I pursue my goals and encourage
          others to do the same.
        </p>
        <p className="max-w-3xl font-mono text-lg font-medium text-black">
          Growing up, I learned early on about the importance of responsibility
          and work ethic as I always set my mind to be open to learning and
          putting in the maximum effort. Additonally, through challenges and
          experiences I learned being true to and pushing myself to take on new
          opportunities allow me me build authentic connections with others and
          feel confident in my values.
        </p>
        <p className="max-w-3xl font-mono text-lg font-medium text-black">
          I have always held a passion for STEM since with the more challenges I
          encountered through material, the more determined I am to apply
          methods toward a solution. Hence, through the field of technology I
          seek to understand the depths of how our digital world functions and
          use it as a medium to create new innovations and inspire others.
        </p>
      </div>

      <div className="relative top-24 flex flex-col gap-4">
        <p className="font-mono text-2xl font-semibold text-black">CAREER</p>
        <p className="max-w-3xl font-mono text-lg font-medium text-black">
          Through Computer Science I look forward to learning more aspects of
          programming and the industry so that I may bridge gap between the
          technology and ethics to contribute building a safer and secure
          digital world through Cybersecurity or Software Development.
        </p>
      </div>
    </div>
  );
};

export default About;

import Link from "next/link";
const Contact = () => {
  return (
    <div className="mt-52 flex animate-fade flex-col items-start hover:animate-shake">
      <div
        className="relative mt-5 h-[280px] w-[400px] overflow-hidden bg-cover"
        style={{ backgroundImage: "url('/Contact.png')" }}
      >
        <div className="absolute inset-0 bg-transparent" />
        <div className="relative flex h-full flex-col justify-center gap-3 p-5 text-left text-sm font-semibold text-white">
          <div className="flex flex-row items-center gap-6 rounded-md">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-web-purple-3 bg-opacity-80">
              <img
                src="icons8-email-50.png"
                alt="Email Logo"
                className="h-[24px] w-[24px] object-contain"
              />
            </div>
            <Link href="mailto:rjennings0007@gmail.com">
              <p className="font-mono text-sm font-semibold text-black hover:text-web-purple-1">
                rjennings0007@gmail.com
              </p>
            </Link>
          </div>

          <div className="flex flex-row items-center gap-6 rounded-md">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-web-purple-3 bg-opacity-80">
              <img
                src="icons8-linkedin-50.png"
                alt="LinkedIn Logo"
                className="h-[24px] w-[24px] object-contain"
              />
            </div>
            <Link href="https://www.linkedin.com/in/rebecca-jennings-246a652a1/">
              <p className="font-mono text-sm font-semibold text-black hover:text-web-purple-1">
                in/rebecca-jennings
              </p>
            </Link>
          </div>

          <div className="flex flex-row items-center gap-6 rounded-md">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-web-purple-3 bg-opacity-80">
              <img
                src="icons8-github-70.png"
                alt="GitHub Logo"
                className="h-[24px] w-[24px] object-contain"
              />
            </div>
            <Link href="https://github.com/Rebecca-J7">
              <p className="font-mono text-sm font-semibold text-black hover:text-web-purple-1">
                @Rebecca-J7
              </p>
            </Link>
          </div>

          <div className="flex flex-row items-center gap-6 rounded-md">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-web-purple-3 bg-opacity-80">
              <img
                src="ResumeLogo.png"
                alt="Resume Logo"
                className="h-[24px] w-[24px] object-contain"
              />
            </div>
            <Link href="/CS Resume.pdf">
              <p className="font-mono text-sm font-semibold text-black hover:text-web-purple-1">
                Resume
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

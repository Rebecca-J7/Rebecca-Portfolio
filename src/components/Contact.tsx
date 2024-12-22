import Link from "next/link";
const Contact = () => {
  return (
    <div className="absolute right-72 top-96 flex flex-col">
      <div className="flex h-[40px] w-[170px] items-center justify-center rounded-md bg-web-purple-2">
        <div className="flex flex-row gap-4">
          <img
            src="/icons8-contact-24.png"
            alt="Contact Logo"
            className="h-[30px] w-[30px] object-contain"
          />
          <p className="font-mono text-2xl font-semibold text-black">Contact</p>
        </div>
      </div>

      <div className="h-[150px] w-[220px] content-center rounded-md border-2 border-web-purple-2 bg-web-purple-1">
        <div className="relative left-4 flex flex-col gap-3">
          <div className="flex flex-row gap-2">
            <img
              src="/icons8-email-50.png"
              alt="Email Logo"
              className="h-[25px] w-[25px] object-contain"
            />
            <Link href="mailto:rjennings0007@gmail.com">
              <p className="relative top-1 font-mono text-xs font-semibold text-black hover:text-web-purple-2">
                rjennings0007@gmail.com
              </p>
            </Link>
          </div>

          <div className="flex flex-row gap-2">
            <img
              src="/icons8-linkedin-50.png"
              alt="LinkedIn Logo"
              className="h-[25px] w-[25px] object-contain"
            />
            <Link href="https://www.linkedin.com/in/rebecca-jennings-246a652a1/">
              <p className="relative top-1 font-mono text-xs font-semibold text-black hover:text-web-purple-2">
                in/rebecca-jennings
              </p>
            </Link>
          </div>

          <div className="flex flex-row gap-2">
            <img
              src="/icons8-github-50.png"
              alt="GitHub Logo"
              className="h-[25px] w-[25px] object-contain"
            />
            <Link href="https://github.com/Rebecca-J7">
              <p className="relative top-1 font-mono text-xs font-semibold text-black hover:text-web-purple-2">
                @Rebecca-J7
              </p>
            </Link>
          </div>

          <div className="flex flex-row gap-2">
            <img
              src="/icons8-resume-24.png"
              alt="Resume Logo"
              className="h-[25px] w-[25px] object-contain"
            />
            <Link href="/CS Resume.pdf">
              <p className="relative top-1 font-mono text-xs font-semibold text-black hover:text-web-purple-2">
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

import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-25 bottom-0 w-full bg-web-purple-2">
      <footer className="w-full py-7">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-row gap-7 text-xs text-web-purple-1">
              <Link href="mailto:rjennings0007@gmail.com">email</Link>
              <Link href="https://www.linkedin.com/in/rebecca-jennings-246a652a1/">
                linkedin
              </Link>
              <Link href="https://github.com/Rebecca-J7">github</Link>
              <Link href="/CS Resume.pdf">resume</Link>
            </div>
            <p className="text-center text-xs text-web-purple-1">
              © {new Date().getFullYear()} Rebecca's Portfolio. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

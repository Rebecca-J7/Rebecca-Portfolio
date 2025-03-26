import Link from "next/link";

const Footer = () => {
  return (
    <div className="absolute left-52 top-[4150px]">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-7 text-xs text-web-purple-2">
          <Link href="mailto:rjennings0007@gmail.com">
            <p>email</p>
          </Link>
          <Link href="https://www.linkedin.com/in/rebecca-jennings-246a652a1/">
            <p>linkedin</p>
          </Link>
          <Link href="https://github.com/Rebecca-J7">
            <p>github</p>
          </Link>
          <Link href="/CS Resume.pdf">
            <p>resume</p>
          </Link>
        </div>
        <p className="text-xs text-web-purple-2">
          © {new Date().getFullYear()} Rebecca's Portfolio. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

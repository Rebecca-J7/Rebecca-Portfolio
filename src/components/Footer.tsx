import Link from "next/link";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const LINKS = [
  { icon: Mail, label: "email", href: "mailto:rjennings0007@gmail.com" },
  {
    icon: Linkedin,
    label: "linkedin",
    href: "https://www.linkedin.com/in/rebecca-jennings-246a652a1/",
  },
  { icon: Github, label: "github", href: "https://github.com/Rebecca-J7" },
  { icon: FileText, label: "resume", href: "/Rebecca-Jennings-Resume.pdf" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#2A2536] bg-[#121018]/80 backdrop-blur-md">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-row flex-wrap justify-center gap-8">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="group relative flex items-center gap-1.5 font-mono text-xs text-[#9691AA] transition-colors hover:text-[#B8A6FF]"
              >
                <l.icon size={13} />
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#B8A6FF] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <p className="text-center font-mono text-xs text-[#7C6A9C]">
            // © {new Date().getFullYear()} Rebecca's Portfolio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

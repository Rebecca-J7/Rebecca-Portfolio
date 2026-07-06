import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "rebecca-portfolio",
  description:
    "A personal website that highlights my perspectives, goals, experience, projects, and more!",
};

import BackgroundGlow from "../components/BackgroundGlow";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden bg-[#121018] font-sans text-[#EDEAF6]">
        <BackgroundGlow />
        <Header />
        <main className="relative flex-1 pb-24 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

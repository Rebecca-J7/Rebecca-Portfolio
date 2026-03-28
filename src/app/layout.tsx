import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "rebecca-portfolio",
  description:
    "A personal website that highlights my perspectives, goals, experience, projects, and more!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-web-purple-4">
        <Header />
        <main className="flex-1 pb-24 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

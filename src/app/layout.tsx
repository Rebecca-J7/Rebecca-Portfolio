import "./globals.css";

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
      <body className="flex h-screen flex-col bg-gradient-to-r from-web-purple-3 to-web-purple-1">
        {children}
      </body>
    </html>
  );
}

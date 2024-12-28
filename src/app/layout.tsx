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
      <body className="flex h-screen flex-col bg-web-purple-3">{children}</body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "rebecca-portfolio",
  description:
    "A personal website that highlights my perspectives, goals, experience, projects and more!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

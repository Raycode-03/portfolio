import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
export const metadata: Metadata = {
  title: "RayCode Portfolio",
  description: "Welcome to RayCode Portfolio - Showcasing the projects and skills of Akerele Raymond, a passionate developer dedicated to crafting innovative solutions and sharing knowledge with the tech community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={""}
      >
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}

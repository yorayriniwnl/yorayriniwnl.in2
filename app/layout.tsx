import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "YOR // Ayrin field notes",
  description:
    "Ayrin's field notes, shipped systems, experiments, and proof of work.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

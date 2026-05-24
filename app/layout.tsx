import type { Metadata } from "next";
import { Instrument_Serif, Barlow, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-heading",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ayush Roy — Full-Stack Developer",
  description:
    "Full-stack developer at KIIT. I build Next.js products, Python backends, realtime dashboards, and computer-vision tools.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${barlow.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-black text-white antialiased">
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

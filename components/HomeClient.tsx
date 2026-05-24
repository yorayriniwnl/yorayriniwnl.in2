import Hero from "@/components/home/Hero";
import TechStackBar from "@/components/home/TechStackBar";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Stats from "@/components/home/Stats";
import Experience from "@/components/home/Experience";
import BlogPreviews from "@/components/home/BlogPreviews";
import Contact from "@/components/home/Contact";

export default function HomeClient() {
  return (
    <>
      <Hero />
      <TechStackBar />
      <About />
      <Projects />
      <Skills />
      <Stats />
      <Experience />
      <BlogPreviews />
      <Contact />
    </>
  );
}

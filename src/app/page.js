import Image from "next/image";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import AboutMe from "./component/AboutMe";
import Skill from "./component/Skill";
import Project from "./component/Projects/Project";
import Education from "./component/Education";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar></Navbar>
      <Hero id="home"></Hero>
      <AboutMe id="about"></AboutMe>
      <Skill id="skills"></Skill>
      <Project id="projects"></Project>
      <Education id="education"></Education>
      <Contact id="contact"></Contact>
      <Footer id="contact"></Footer>
    </div>
  );
}

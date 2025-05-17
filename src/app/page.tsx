import BackgroundBubble from "../../components/Introduction/BackgroundBubble/BackgroundBubble";
import Introduction from "../../components/Introduction/Introduction";
import Navbar from "../../components/Navabr/Navbar";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import ThemeSwitcherContainer from "../../components/ThemeSwitcherContainer/ThemeSwitcherContainer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="lg:container relative z-10 lg:mx-auto lg:px-16">
        <Introduction />
        <BackgroundBubble />
        <Skills />
        <Projects />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
      <ThemeSwitcherContainer />
    </>
  );
}

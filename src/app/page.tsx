import ContactMe from "../components/ContactMe/ContactMe";
import Footer from "../components/Footer/Footer";
import BackgroundBubble from "../components/BackgroundBubble/BackgroundBubble"
import Introduction from "../components/Introduction/Introduction";
import MyServices from "../components/MyServices/MyServices";
import Navbar from "../components/Navabr/Navbar";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import ThemeSwitcherContainer from "../components/ThemeSwitcherContainer/ThemeSwitcherContainer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="lg:container relative z-10 lg:mx-auto lg:px-16">
        <Introduction />
        <BackgroundBubble />
        <Skills />
        <Projects />
        <MyServices />
        <ContactMe />
      </main>
      <Footer />
      <ThemeSwitcherContainer />
    </>
  );
}

import BackgroundBubble from "../../components/Introduction/BackgroundBubble/BackgroundBubble";
import Introduction from "../../components/Introduction/Introduction";
import Navbar from "../../components/Navabr/Navbar";
import ThemeSwitcherContainer from "../../components/ThemeSwitcherContainer/ThemeSwitcherContainer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="lg:container relative z-10 lg:mx-auto lg:px-16">
        <Introduction />
        <BackgroundBubble />
      </main>
      <ThemeSwitcherContainer />
    </>
  );
}

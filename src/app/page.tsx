import Contacts from "./components/Contacts";
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import SobreMim from "./components/SobreMim"

export default function Home() {
  return (
    <main>
      <Hero/>
      <SobreMim/> 
      <Skills/>
      <Projects />
      <Contacts />
    </main>
  );
}


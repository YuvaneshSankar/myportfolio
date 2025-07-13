import Hero from './components/Hero';
import About from "./components/About";
import Navbar from './components/Navbar';
import Experiences from './components/Experiences';
import Projects from './components/Projects';

const App = () => {
  return (
    <main className="realtive min-h-screen w-screen overflow-x-hidden scroll-smooth">
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </main>
  )
}

export default App;
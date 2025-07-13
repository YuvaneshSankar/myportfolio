import Hero from './components/Hero.jsx';
import About from "./components/About.jsx";
import Navbar from './components/Navbar.jsx';
import Experiences from './components/Experiences.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

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
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}

export default App;
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./index.css"; // Ensure global styles are applied


function App() {
  return (
    
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      
    </>
  );
}

export default App;

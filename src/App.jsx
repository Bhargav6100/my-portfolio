import { useEffect, useState } from "react";
import Hero3D from "./Components/Hero3D";
import "./styles/sections.css";
import About from "./Components/About" 
import Skills from "./Components/Skills";
import ThemeToggle from "./Components/ThemeToggle";
import "./styles/themes.css";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import SectionStarfield from "./Components/SectionStarfield.jsx"; 
import Contact from "./Components/Contact";
import Education from "./Components/Education.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx"

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
     <Header theme={theme} setTheme={setTheme} />
     <SectionStarfield theme={theme} />
     <div className="app-shell">
    <ThemeToggle theme={theme} setTheme={setTheme}/>
        {/* ⭐ star background only for sections, only in dark mode */}
   
    <Hero3D theme={theme} />
   
     
      <main>
  
        <section id="about" className="section">
          <About />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

       <section id="experience" className="section">
          <Experience />
        </section>
       
        <section id ="education" className="education">
          <Education/>
        </section>
       
        <section id="projects" className="section">
          <Projects />
        </section>
        
        <section id="contact" className="section">
           <Contact />
         </section>
         <section id="footer" className="footer">
          <Footer/>
         </section>
      </main>
      </div>
    </>
  );
}

export default App;

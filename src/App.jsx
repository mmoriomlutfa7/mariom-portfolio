import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Logic to highlight sidebar based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'certificates', 'projects', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Improved logic for identifying the section in view
          return rect.top >= -300 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0f172a] text-slate-300 min-h-screen flex">
      {/* Fixed Sidebar/Navbar */}
      <Navbar activeSection={activeSection} />
      
      {/* Main Content Area */}
      <main className="flex-grow lg:ml-64 px-6 md:px-16 flex flex-col">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
        
        {/* Footer added at the very end */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhatIDo from './pages/WhatIDo';
import HowItWorks from './pages/HowItWorks';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'whatido', 'projects', 'howitworks', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        <Home onNavigate={handleNavigate} />
        <WhatIDo />
        <Projects />
        <HowItWorks onNavigate={handleNavigate} />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

import { useEffect } from 'react';
import { Toaster } from 'sonner@2.0.3';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/portfolio/Navbar';
import Hero from './components/portfolio/Hero';
import About from './components/portfolio/About';
import Projects from './components/portfolio/Projects';
import Experience from './components/portfolio/Experience';
import Contact from './components/portfolio/Contact';
import Footer from './components/portfolio/Footer';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </ThemeProvider>
  );
}

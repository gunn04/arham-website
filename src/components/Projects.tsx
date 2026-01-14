import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Services from './Services';
import Contact from './Contact';

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
    </div>
  );
};

export default Portfolio;
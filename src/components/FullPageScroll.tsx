import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Hero from './Hero';
import WhatWeDo from './WhatWeDo';
import Projects from './Projects';
import Services from './Services';
import Contact from './Contact';
import Navigation from './Navigation';

const FullPageScroll = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const sections = [
    { id: 'hero', component: Hero, name: 'Home' },
    { id: 'about', component: WhatWeDo, name: 'What We Do' },
    { id: 'projects', component: Projects, name: 'Projects' },
    { id: 'services', component: Services, name: 'Services' },
    { id: 'contact', component: Contact, name: 'Get in Touch' }
  ];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      setIsScrolling(true);
      
      // Single scroll moves to next/previous page completely
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
      
      // Longer timeout to prevent rapid page changes
      setTimeout(() => setIsScrolling(false), 1500);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      
      if ((e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') && currentSection < sections.length - 1) {
        setIsScrolling(true);
        setCurrentSection(prev => prev + 1);
        setTimeout(() => setIsScrolling(false), 1500);
      } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentSection > 0) {
        setIsScrolling(true);
        setCurrentSection(prev => prev - 1);
        setTimeout(() => setIsScrolling(false), 1500);
      }
    };

    // Touch events for mobile page turning
    let touchStartY = 0;
    let touchStartTime = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndTime = Date.now();
      const deltaY = touchStartY - touchEndY;
      const deltaTime = touchEndTime - touchStartTime;
      
      // Require minimum swipe distance and reasonable speed
      if (Math.abs(deltaY) > 80 && deltaTime < 500) {
        setIsScrolling(true);
        
        if (deltaY > 0 && currentSection < sections.length - 1) {
          setCurrentSection(prev => prev + 1);
        } else if (deltaY < 0 && currentSection > 0) {
          setCurrentSection(prev => prev - 1);
        }
        
        setTimeout(() => setIsScrolling(false), 1500);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, isScrolling, sections.length]);

  const scrollToSection = (index: number) => {
    if (isScrolling || index === currentSection) return;
    setIsScrolling(true);
    setCurrentSection(index);
    setTimeout(() => setIsScrolling(false), 1500);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Fixed Navigation */}
      <Navigation 
        currentSection={currentSection}
        scrollToSection={scrollToSection}
        sections={sections}
      />
      
      {/* Section Indicators */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3 hidden lg:block">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`group relative w-3 h-3 rounded-full border-2 transition-all duration-700 ${
              currentSection === index 
                ? 'bg-white border-white scale-125' 
                : 'bg-transparent border-white/40 hover:border-white/70 hover:scale-110'
            }`}
            aria-label={`Go to ${section.name}`}
          >
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-white/90 text-black px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                {section.name}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Page Turn Indicator */}
      {/* Page Turn Indicator */}
{currentSection < sections.length - 1 && (
  <motion.div
    className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[999] pointer-events-none"
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="flex flex-col items-center gap-2">
      <span className="text-white/90 text-sm tracking-widest font-light">
        SCROLL
      </span>
      <div className="w-px h-10 bg-white/70" />
    </div>
  </motion.div>
)}


      {/* Page-like Scrolling Container */}
      <div 
  className="relative z-10 flex flex-col h-full transition-transform duration-[1200ms] ease-out"
  style={{
    transform: `translateY(-${currentSection * 100}vh)`,
    willChange: 'transform'
  }}
>
        {sections.map((section, index) => {
          const Component = section.component;
          return (
            <div 
              key={section.id} 
              className="h-screen flex-shrink-0 relative"
              style={{
                // Add subtle page-like shadow effect
                boxShadow: index === currentSection ? 'none' : '0 0 50px rgba(0,0,0,0.3)'
              }}
            >
              <Component />
              
              {/* Page number indicator */}
              <div className="absolute top-6 left-6 text-white/30 text-xs font-mono">
                Page {index + 1}
              </div>
            </div>
          );
        })}
      </div>

      {/* Section counter with page styling */}
      <div className="fixed bottom-6 right-6 z-40 text-white/40 text-sm font-mono bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
        {String(currentSection + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
      </div>
    </div>
  );
};

export default FullPageScroll;
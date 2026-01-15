import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhatWeDo from "./components/WhatWeDo";
import OurProjects from "./components/OurProjects";
import ContactInformation from "./components/ContactInformation";
import Navigation from "./components/Navigation";
import VillaGallery from "./components/VillaGallery";
import VillaProjectPage from "./components/ProjectPage";
import ScrollProgress from "./components/ScrollProgress";

import { ProjectData } from "./components/OurProjects";

function App() {
  const [isVillaGalleryOpen, setIsVillaGalleryOpen] = useState(false);
  const [isVillaProjectOpen, setIsVillaProjectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  /* 🔥 SAFARI CRASH FIX — DO NOT REMOVE */
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // remove any existing hash silently
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <ScrollProgress />
      <Navigation />

      <section id="home">
        <Hero />
      </section>

      <div className="relative flex justify-center py-12">
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: [0.3, 0.8, 0.3], y: [-6, 6, -6] }}
          transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
          className="text-white/60 text-[10px] tracking-[0.35em]"
        >
          SCROLL
        </motion.span>
      </div>

      <section id="about">
        <AboutUs />
      </section>

      <section id="services">
        <WhatWeDo />
      </section>

      <section id="projects">
        <OurProjects
          onProjectClick={(project) => {
            setSelectedProject(project);
            setIsVillaProjectOpen(true);
          }}
        />
      </section>

      <section id="contact">
        <ContactInformation />
      </section>

      <VillaGallery
        isOpen={isVillaGalleryOpen}
        onClose={() => setIsVillaGalleryOpen(false)}
      />

      {selectedProject && (
        <VillaProjectPage
          isOpen={isVillaProjectOpen}
          title={selectedProject.title}
          info={selectedProject.info}
          overview={selectedProject.overview}
          renderGroups={selectedProject.renderGroups}
          onClose={() => setIsVillaProjectOpen(false)}
        />
      )}
    </div>
  );
}

export default App;

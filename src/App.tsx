import { useState } from "react";
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

import { ProjectData } from "./components/OurProjects"; // import type if exported

function App() {
  const [isVillaGalleryOpen, setIsVillaGalleryOpen] = useState(false);
  const [isVillaProjectOpen, setIsVillaProjectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <ScrollProgress />
      <Navigation />

      <div id="home">
        <Hero />
      </div>

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

      <div id="about">
        <AboutUs />
      </div>

      <div id="services">
        <WhatWeDo />
      </div>

      <div id="projects">
        <OurProjects
          onProjectClick={(project) => {
            setSelectedProject(project);
            setActiveProject(project); // optional, if you need activeProject separately
            setIsVillaProjectOpen(true);
          }}
        />
      </div>

      <div id="contact">
        <ContactInformation />
      </div>

      <VillaGallery
        isOpen={isVillaGalleryOpen}
        onClose={() => setIsVillaGalleryOpen(false)}
      />
      {selectedProject && 
      <VillaProjectPage
        isOpen={isVillaProjectOpen}
        title= {selectedProject.title}
        info = {selectedProject.info}
        overview={selectedProject.overview} // pass the selected project
        renderGroups={selectedProject.renderGroups}
        onClose={() => setIsVillaProjectOpen(false)}
      />
}
    </div>
  );
}

export default App;

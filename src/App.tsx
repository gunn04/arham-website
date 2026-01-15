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
  const [selectedProject, setSelectedProject] =
    useState<ProjectData | null>(null);

  /* 🔒 iOS SAFARI — BODY SCROLL LOCK (CRITICAL) */
  useEffect(() => {
    const body = document.body;

    if (isVillaProjectOpen) {
      const scrollY = window.scrollY;

      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      body.style.overflow = "hidden";
      body.style.touchAction = "none";
    } else {
      const scrollY = body.style.top;

      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
      body.style.touchAction = "";

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
  }, [isVillaProjectOpen]);

  /* 🧯 Prevent Safari scroll restoration + hash jumps */
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }

    return () => {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "auto";
      }
    };
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {!isVillaProjectOpen && <ScrollProgress />}

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

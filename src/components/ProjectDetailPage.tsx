import { motion } from "framer-motion";
import { ArrowLeft, Phone } from "lucide-react";
import { useState } from "react";

interface ProjectDetailPageProps {
  isOpen: boolean;
  project: {
    id: number;
    title: string;
    category: string;
    location: string;
    description: string;
    image: string;
  } | null;
  onClose: () => void;
}

const ProjectDetailPage = ({ isOpen, project, onClose }: ProjectDetailPageProps) => {
  if (!isOpen || !project) return null;

  const [activeIndex, setActiveIndex] = useState(0);

  const livingRenders = [
    {
      title: "Living Room — Neutral Elegance",
      description:
        "A refined living space defined by muted tones, premium finishes, and a balanced spatial composition.",
      image: "/images/living1.jpg",
    },
    {
      title: "Living Room — Warm Ambience",
      description:
        "Soft lighting and warm textures elevate the mood, creating a cozy yet luxurious atmosphere.",
      image: "/images/living2.jpg",
    },
    {
      title: "Living Room — Statement Design",
      description:
        "Architectural detailing and curated furniture pieces form the focal narrative of this space.",
      image: "/images/living3.jpg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 overflow-y-auto"
    >
      {/* HEADER */}
      <div className="sticky top-0 bg-black/80 backdrop-blur border-b border-white/10 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center">
          <button
            onClick={onClose}
            className="flex items-center gap-3 text-white/70 hover:text-white transition"
          >
            <ArrowLeft size={18} />
            <span className="text-sm tracking-wide">Back to Projects</span>
          </button>
        </div>
      </div>

      {/* HERO */}
      <div className="relative h-[80vh]">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-light text-white mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {project.title}
            </motion.h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* GROOVE STYLE SCROLL */}
      <section className="py-40">
  <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr]">

{/* LEFT — STICKY TEXT */}
<div className="px-8 lg:px-12 lg:sticky lg:top-40 h-fit">
  <motion.h2
    key={activeIndex}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="text-3xl md:text-4xl font-light text-white mb-6"
    style={{ fontFamily: "Playfair Display, serif" }}
  >
    {livingRenders[activeIndex].title}
  </motion.h2>

  <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md">
    {livingRenders[activeIndex].description}
  </p>
</div>

{/* RIGHT — FULL BLEED IMAGES (GROOVE STYLE) */}
<div className="border-l border-white/10">
  {livingRenders.map((item, index) => (
    <motion.div
      key={index}
      onViewportEnter={() => setActiveIndex(index)}
      viewport={{ amount: 0.5 }}
      className="border-b border-white/10"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-auto object-cover"
      />
    </motion.div>
  ))}
</div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-light text-white mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Get in Touch
          </h2>
          <p className="text-white/70 mb-12">
            Ready to create something timeless? Let’s talk.
          </p>

          <motion.a
            href="tel:9632123705"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 px-12 py-4 bg-white text-black rounded-full"
          >
            <Phone size={18} />
            Call Us
          </motion.a>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetailPage;

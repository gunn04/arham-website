import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Phone } from "lucide-react";

/* ───────── TYPES ───────── */
export interface RenderGroup {
  id: number;
  title: string;
  description: string;
  images: {
    src: string;
    height?: string;
  }[];
}

interface ProjectInfo {
  client: string;
  projectType: string;
  location: string;
  area: string;
  date: string;
}

interface ProjectPageProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  overview: string;
  info: ProjectInfo;
  renderGroups: RenderGroup[];
}


/* ───────── COMPONENT ───────── */
export default function VillaProjectPage({
  isOpen,
  onClose,
  title,
  overview,
  info,
  renderGroups
}: ProjectPageProps) {
  const [activeGroup, setActiveGroup] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
  if (renderGroups?.[0]?.images?.[0]?.src) {
    const img = new Image();
    img.src = renderGroups[0].images[0].src;
  }
}, [renderGroups]);


  /* ───────── DATA (MATCHES FRAMER STRUCTURE) ───────── */
  // const renderGroups: RenderGroup[] = [
  //   {
  //     id: 1,
  //     title: "Living, Dining & Kitchen",
  //     description:
  //       "The facade is covered with vertical gardens and natural green elements, giving the home a refreshing and eco-friendly look.",
  //     images: [
  //       { src: "/images/living1.jpg" },
  //       { src: "/images/facade-2.jpg" },
  //       { src: "/images/facade-3.jpg" },
  //       { src: "/images/facade-4.jpg" },
  //       { src: "/images/facade-5.jpg" },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Master Bedroom",
  //     description:
  //       "A refined contemporary bedroom featuring a warm neutral palette, elegant marble flooring, and seamless wall paneling. The space is anchored by a plush platform bed with rich burgundy accents, complemented by bespoke side tables and sculptural décor. Sleek wardrobes, minimalistic lighting, and curated textures create a luxurious yet serene ambience throughout the room.",
  //     images: [
  //       { src: "/images/ms-1.jpg" },
  //       { src: "/images/ms-2.jpg" },
  //       { src: "/images/ms-3.jpg" },
  //       { src: "/images/ms-4.jpg" },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Son's Bedroom",
  //     description:
  //       "A modern, luxurious bedroom featuring a sculpted headboard wall, warm wood textures, soft beige tones, and elegant accent lighting. The space combines clean lines, marble flooring, and subtle decor to create a calm, sophisticated, and premium atmosphere",
  //     images: [
  //       { src: "/images/S-Sons-Bedroom-1.jpg" },
  //       { src: "/images/S-Sons-Bedroom-2.jpg" },
  //       { src: "/images/S-Sons-Bedroom-3.jpg" },
  //       { src: "/images/S-Sons-Bedroom-4.jpg" },
  //       { src: "/images/S-Sons-Bedroom-5.jpg" },
  //       { src: "/images/S-Sons-Bedroom-6.jpg" },
  //     ],
  //   },
  // ];

  /* ───────── ACTIVE SECTION TRACKER ───────── */
  useEffect(() => {
    const observers = sectionRefs.current.map((el, index) => {
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveGroup(index);
          }
        },
        {
          rootMargin: "-40% 0px -40% 0px",
        }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  if (!isOpen) return null;

  /* ───────── RENDER ───────── */
  return (
    <motion.div
      className="fixed inset-0 bg-black text-white z-50 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* HEADER */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-5 flex justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-white/70 hover:text-white"
          >
            <ArrowLeft size={18} />
            Back
          </button>
          <span className="text-white/50">
            {activeGroup + 1} / {renderGroups.length}
          </span>
        </div>
      </div>

      {/* INTRO */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-28">
        <h1 className="text-5xl font-light mb-6">Project Overview</h1>
        <p className="text-white/60 max-w-3xl">
         {/* This 3BHK home is designed with a modern contemporary aesthetic, combining elegance with everyday functionality. A neutral palette, layered lighting, and premium finishes create a calm, spacious, and refined living environment. The layout is thoughtfully planned to ensure comfort, flow, and practicality for modern family living.
          */}
          {overview}
        </p>
      </section>

      {/* PROJECT INFO BLOCKS */}
<section className="max-w-[1400px] mx-auto px-8 lg:px-12 -mt-10 pb-32">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

    <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-5">
      <p className="text-white/50 text-sm mb-1">Client</p>
      <p className="text-white text-lg font-medium">{info.client}</p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-5">
      <p className="text-white/50 text-sm mb-1">Project</p>
      <p className="text-white text-lg font-medium">{info.projectType}</p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-5">
      <p className="text-white/50 text-sm mb-1">Location</p>
      <p className="text-white text-lg font-medium">{info.location}</p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-5">
      <p className="text-white/50 text-sm mb-1">Area</p>
      <p className="text-white text-lg font-medium">{info.area}</p>
    </div>


  </div>
</section>


      {/* FRAMER-STYLE EDITORIAL SECTIONS */}
<section className="pb-40">
  <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
    {renderGroups.map((group, index) => (
      <div
        key={group.id}
        ref={(el) => (sectionRefs.current[index] = el)}
        className="grid grid-cols-1 lg:grid-cols-[420px_1fr]"
      >
        {/* LEFT TEXT */}
        <div className="lg:sticky lg:top-[18vh] h-fit pr-4 lg:pr-6">
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-120px" }}
  transition={{ duration: 0.45, ease: "easeOut" }}
>

            <h2
              className="text-white mb-4 font-light"
              style={{
                fontSize: "32px",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              {group.title}
            </h2>

            <p
              className="text-white/60 leading-relaxed"
              style={{
                fontSize: "15px",
                lineHeight: "1.6",
                maxWidth: "360px",
              }}
            >
              {group.description}
            </p>
          </motion.div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="border-l border-white/10 pl-4 lg:pl-6">
          {group.images.map((img, i) => (
            <div
              key={i}
              className="w-full border-b border-white/10 last:border-b-0 flex justify-center py-6"
            >
             <img
  src={img.src}
  alt=""
  loading="lazy"
  decoding="async"
  className="w-full max-w-[620px] h-auto object-contain transition-opacity duration-300"
/>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>


      {/* CALL CTA */}
      <div className="fixed bottom-8 right-8 z-[60]">
        <a
          href="tel:9632123705"
          className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full shadow-xl hover:scale-105 transition"
        >
          <Phone size={18} />
          <span className="text-sm font-medium">Call Us</span>
        </a>
      </div>
    </motion.div>
  );
}







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
  overview,
  info,
  renderGroups,
}: ProjectPageProps) {
  const [activeGroup, setActiveGroup] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* ───────── ACTIVE SECTION TRACKER ───────── */
  useEffect(() => {
    const observers = sectionRefs.current.map((el, index) => {
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveGroup(index);
        },
        { rootMargin: "-40% 0px -40% 0px" }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black text-white z-50 overflow-y-scroll overscroll-contain"
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
        <p className="text-white/60 max-w-3xl">{overview}</p>
      </section>

      {/* PROJECT INFO */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 -mt-10 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <Info label="Client" value={info.client} />
          <Info label="Project" value={info.projectType} />
          <Info label="Location" value={info.location} />
          <Info label="Area" value={info.area} />
        </div>
      </section>

      {/* GROOVE-STYLE EDITORIAL */}
      <section className="pb-40 relative overflow-visible">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 space-y-32">
          {renderGroups.map((group, index) => (
            <div
              key={group.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="grid grid-cols-1 lg:grid-cols-[420px_1fr] items-start"
            >
              {/* LEFT TEXT — STICKY */}
              <div className="
  sticky
  top-[72px]
  lg:top-[22vh]
  self-start
  bg-black
  z-20
  pr-4
  lg:pr-6
  py-6
">

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <h2 className="text-white mb-4 text-[32px] font-light leading-tight">
                    {group.title}
                  </h2>
                  <p className="text-white/60 text-[15px] leading-relaxed max-w-[360px]">
                    {group.description}
                  </p>
                </motion.div>
              </div>

              {/* RIGHT IMAGES */}
              <div className="relative lg:border-l border-white/10 pl-0 lg:pl-6">
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
                      draggable={false}
                      className="w-full max-w-[620px] h-auto object-contain"
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
          <span className="text-sm font-medium">Consult Us</span>
        </a>
      </div>
    </motion.div>
  );
}

/* ───────── SMALL COMPONENT ───────── */
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-5">
      <p className="text-white/50 text-sm mb-1">{label}</p>
      <p className="text-white text-lg font-medium">{value}</p>
    </div>
  );
}

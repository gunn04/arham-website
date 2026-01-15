import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Phone } from "lucide-react";

/* ───────── TYPES ───────── */
export interface RenderGroup {
  id: number;
  title: string;
  description: string;
  images: { src: string }[];
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
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const desktopRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* ───────── OBSERVER ───────── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index =
              mobileRefs.current.indexOf(entry.target as HTMLDivElement) !== -1
                ? mobileRefs.current.indexOf(entry.target as HTMLDivElement)
                : desktopRefs.current.indexOf(entry.target as HTMLDivElement);

            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    [...mobileRefs.current, ...desktopRefs.current].forEach(
      (el) => el && observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black text-white z-50 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* HEADER */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex justify-between">
          <button onClick={onClose} className="flex items-center gap-2 text-white/70">
            <ArrowLeft size={18} /> Back
          </button>
          <span className="text-white/50">
            {activeIndex + 1} / {renderGroups.length}
          </span>
        </div>
      </div>

      {/* OVERVIEW */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        <h1 className="text-4xl lg:text-5xl font-light mb-6">Overview</h1>
        <p className="text-white/60 max-w-3xl">{overview}</p>
      </section>

      {/* INFO */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Info label="Client" value={info.client} />
          <Info label="Project" value={info.projectType} />
          <Info label="Location" value={info.location} />
          <Info label="Area" value={info.area} />
        </div>
      </section>

      {/* ───────── MOBILE — GROOVE STYLE ───────── */}
      <section className="lg:hidden px-6">
        {renderGroups.map((group, index) => (
          <div
            key={group.id}
            ref={(el) => (mobileRefs.current[index] = el)}
            className="mb-[10vh]"
          >
            <h2 className="text-[26px] font-light leading-tight mb-3">
              {group.title}
            </h2>

            <p className="text-white/60 text-sm mb-8 max-w-[90%]">
              {group.description}
            </p>

            <div className="space-y-6">
              {group.images.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  className="w-full rounded-xl object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ───────── DESKTOP — STICKY ───────── */}
      <section className="hidden lg:block pb-40">
        <div className="max-w-[1400px] mx-auto px-12 space-y-32">
          {renderGroups.map((group, index) => (
            <div
              key={group.id}
              ref={(el) => (desktopRefs.current[index] = el)}
              className="grid grid-cols-[420px_1fr]"
            >
              <div className="sticky top-[22vh] h-fit pr-6">
                <h2 className="text-[32px] font-light mb-4">{group.title}</h2>
                <p className="text-white/60 text-sm max-w-[360px]">
                  {group.description}
                </p>
              </div>

              <div className="border-l border-white/10 pl-6">
                {group.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    className="w-full max-w-[620px] mx-auto py-6"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="fixed bottom-8 right-8 z-[60]">
        <a
          href="tel:9632123705"
          className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full shadow-xl"
        >
          <Phone size={18} />
          <span className="text-sm font-medium">Consult Us</span>
        </a>
      </div>
    </motion.div>
  );
}

/* INFO CARD */
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-5">
      <p className="text-white/50 text-sm">{label}</p>
      <p className="text-white text-lg font-medium">{value}</p>
    </div>
  );
}

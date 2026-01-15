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

  const mobileTriggers = useRef<(HTMLDivElement | null)[]>([]);
  const desktopTriggers = useRef<(HTMLDivElement | null)[]>([]);

  /* ───────── MOBILE OBSERVER ───────── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = mobileTriggers.current.indexOf(entry.target as HTMLDivElement);
            if (i !== -1) setActiveIndex(i);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    mobileTriggers.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ───────── DESKTOP OBSERVER ───────── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = desktopTriggers.current.indexOf(entry.target as HTMLDivElement);
            if (i !== -1) setActiveIndex(i);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    desktopTriggers.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (!isOpen) return null;
  const activeGroup = renderGroups[activeIndex];

  return (
    <motion.div
      className="fixed inset-0 bg-black text-white z-50 overflow-y-scroll overscroll-contain"
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

      {/* INTRO */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-28">
        <h1 className="text-5xl font-light mb-6">Project Overview</h1>
        <p className="text-white/60 max-w-3xl">{overview}</p>
      </section>

      {/* INFO */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <Info label="Client" value={info.client} />
          <Info label="Project" value={info.projectType} />
          <Info label="Location" value={info.location} />
          <Info label="Area" value={info.area} />
        </div>
      </section>

      {/* ================= MOBILE — GROOVE ================= */}
      <section className="lg:hidden relative">
        {/* FIXED TEXT */}
        <div className="fixed top-[72px] left-0 right-0 z-40 bg-black px-6 py-5">
          <h2 className="text-2xl font-light">{activeGroup?.title}</h2>
          <p className="text-white/60 mt-2 text-sm max-w-md">
            {activeGroup?.description}
          </p>
        </div>

        {/* SCROLL */}
        <div className="pt-[160px] px-4 pb-40">
          {renderGroups.map((group, index) => (
            <div key={group.id} className="mb-[70vh]">
              <div
                ref={(el) => (mobileTriggers.current[index] = el)}
                className="h-[1px]"
              />
              {group.images.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  className="w-full rounded-xl object-cover mb-6"
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ================= DESKTOP ================= */}
      <section className="hidden lg:block pb-40">
        <div className="max-w-[1400px] mx-auto px-12 space-y-32">
          {renderGroups.map((group, index) => (
            <div
              key={group.id}
              ref={(el) => (desktopTriggers.current[index] = el)}
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
        <a href="tel:9632123705" className="px-6 py-3 bg-white text-black rounded-full">
          <Phone size={18} />
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

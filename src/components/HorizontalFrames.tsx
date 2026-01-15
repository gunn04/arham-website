import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function HorizontalFrames() {
  const images = [
    "/images/m1.webp",
    "/images/m2.webp",
    "/images/m3.webp",
    "/images/m4.webp",
    "/images/m5.webp",
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-20% 0px" });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden py-16"
    >
      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-0 top-0 h-full w-14 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-14 bg-gradient-to-l from-black/60 to-transparent" />
      </div>

      {/* MOVING TRACK */}
      <motion.div
        className="flex gap-8"
        animate={isInView ? { x: ["0%", "-50%"] } : {}}
        transition={{
          duration: isMobile ? 12 : 28, // ✅ MOBILE SPEED = 12
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          willChange: "transform",
          transform: "translate3d(0,0,0)",
          backfaceVisibility: "hidden",
        }}
      >
        {/* 🔁 Triple loop so ALL images keep moving */}
        {[...images, ...images, ...images].map((src, i) => (
          <div
            key={i}
            className="w-[240px] md:w-[320px] aspect-[4/5] flex-shrink-0"
          >
            <img
              src={src}
              alt=""
              draggable={false}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

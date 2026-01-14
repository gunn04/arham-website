import { motion } from "framer-motion";
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
  const trackRef = useRef<HTMLDivElement>(null);

  const [distance, setDistance] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const calculate = () => {
      setIsMobile(window.innerWidth <= 768);

      if (trackRef.current) {
        // Width of ONE full set
        const width = trackRef.current.scrollWidth / 2;
        setDistance(width);
      }
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden py-16"
    >
      {/* Edge fade like Groove */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-0 top-0 h-full w-14 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-14 bg-gradient-to-l from-black/60 to-transparent" />
      </div>

      <motion.div
        ref={trackRef}
        key={isMobile ? "mobile" : "desktop"}
        className="flex gap-8 will-change-transform"
        animate={{ x: [0, -distance] }}
        transition={{
          duration: isMobile ? 6 : 24, // GROOVE SPEED
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="w-[240px] md:w-[320px] aspect-[4/5] flex-shrink-0"
          >
            <img
              src={src}
              alt=""
              draggable={false}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

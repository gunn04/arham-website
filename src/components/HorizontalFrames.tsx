import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function HorizontalFrames() {
  const images = [
    { src: "/images/m1.webp" },
    { src: "/images/m2.webp" },
    { src: "/images/m3.webp" },
    { src: "/images/m4.webp" },
    { src: "/images/m5.webp" },
  ];

  const loopImages = [...images, ...images];

  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 768);

      if (trackRef.current) {
        // width of ONE full image sequence
        const full = trackRef.current.scrollWidth / 2;
        setDistance(full);
      }
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black/70 to-transparent" />
      </div>

      <motion.div
        ref={trackRef}
        key={isMobile ? "mobile" : "desktop"} // forces correct recalculation
        className="flex gap-6 will-change-transform"
        animate={{ x: [0, -distance] }}
        transition={{
          duration: isMobile ? 7 : 26, // 🔥 GROOVE MOBILE SPEED
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopImages.map((img, idx) => (
          <div
            key={idx}
            className="w-[220px] md:w-[300px] aspect-[3/4] flex-shrink-0 rounded-2xl overflow-hidden"
          >
            <img
              src={img.src}
              alt=""
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

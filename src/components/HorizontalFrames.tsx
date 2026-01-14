import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HorizontalFrames() {
  const images = [
    { src: "/images/m1.webp" },
    { src: "/images/m2.webp" },
    { src: "/images/m3.webp" },
    { src: "/images/m4.webp" },
    { src: "/images/m5.webp" },
  ];

  const loopImages = [...images, ...images];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black/70 to-transparent" />
      </div>

      {/* 🔥 KEY forces remount → speed ACTUALLY changes */}
      <motion.div
        key={isMobile ? "mobile" : "desktop"}
        className="flex gap-6 will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: isMobile ? 4 : 26, // ✅ GROOVE SPEED
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopImages.map((img, idx) => (
          <div
            key={idx}
            className="w-[240px] md:w-[300px] h-[340px] md:h-[400px] rounded-2xl overflow-hidden bg-black flex-shrink-0"
          >
            <img
              src={img.src}
              alt=""
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

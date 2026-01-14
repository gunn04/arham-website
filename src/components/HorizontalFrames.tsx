import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HorizontalFrames() {
  const images = [
    { id: 1, src: "/images/m1.webp", alt: "Modern Living Room" },
    { id: 2, src: "/images/m2.webp", alt: "Contemporary Kitchen" },
    { id: 3, src: "/images/m3.webp", alt: "Luxury Bedroom" },
    { id: 4, src: "/images/m4.webp", alt: "Office Space" },
    { id: 5, src: "/images/m5.webp", alt: "Living Space" },
  ];

  const loopImages = [...images, ...images];
  const [duration, setDuration] = useState(26);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    setDuration(isMobile ? 9 : 26); // ⭐ GROOVE SPEED
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black/70 to-transparent" />
      </div>

      <motion.div
        className="flex gap-8 will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopImages.map((img, idx) => (
          <div
            key={idx}
            className="w-[260px] md:w-[300px] h-[360px] md:h-[400px] rounded-2xl overflow-hidden bg-black flex-shrink-0"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

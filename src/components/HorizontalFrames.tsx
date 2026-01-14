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
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black/70 to-transparent" />
      </div>

      <motion.div
        ref={containerRef}
        className="flex gap-6 will-change-transform"
        animate={{ x: [-0, -width] }}
        transition={{
          duration: isMobile ? 5 : 26, // GROOVE SPEED
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...images, ...images].map((src, idx) => (
         <div
  key={idx}
  className="w-[240px] md:w-[300px] h-[340px] md:h-[400px] 
             rounded-2xl bg-black/90 
             flex items-center justify-center 
             flex-shrink-0"
>
  <img
    src={src}
    alt=""
    className="max-w-full max-h-full object-contain"
    draggable={false}
  />
</div>



        ))}
      </motion.div>
    </section>
  );
}

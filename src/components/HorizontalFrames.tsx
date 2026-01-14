import { motion } from "framer-motion";

export default function HorizontalFrames() {
  const images = [
    { id: 1, src: "/images/m1.webp", alt: "Modern Living Room" },
    { id: 2, src: "/images/m2.webp", alt: "Contemporary Kitchen" },
    { id: 3, src: "/images/m3.webp", alt: "Luxury Bedroom" },
    { id: 4, src: "/images/m4.webp", alt: "Office Space" },
    { id: 5, src: "/images/m5.webp", alt: "Living Space" },
  ];

  const loopImages = [...images, ...images];

  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* SUBTLE EDGE FADE */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black/70 to-transparent" />
      </div>

      <motion.div
        className="flex gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 26, // slower & smoother
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopImages.map((img, idx) => (
          <div
            key={idx}
            className="w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-black flex-shrink-0"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

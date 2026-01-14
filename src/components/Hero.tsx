import HorizontalFrames from "./HorizontalFrames";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-28">

      {/* Sage blur accents */}
      <div className="absolute top-24 left-16 w-80 h-80 bg-[#A6A998]/25 blur-3xl rounded-full" />
      <div className="absolute bottom-24 right-16 w-96 h-96 bg-[#A6A998]/30 blur-3xl rounded-full" />

      
     
{/* HERO TEXT */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.1, ease: "easeOut" }}
  className="relative z-20 text-center px-6 pt-16 md:pt-24"
>
  <motion.p
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
    className="
      text-base sm:text-lg md:text-3xl 
      font-light 
      text-amber-100 
      tracking-wide 
      max-w-xs sm:max-w-md md:max-w-4xl 
      mx-auto
    "
    style={{ fontFamily: "Playfair Display, serif" }}
  >
    Crafting timeless spaces through refined architecture and design.
  </motion.p>

  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
    className="
      w-12 sm:w-16 md:w-32 
      h-px 
      bg-[#A6A998] 
      mx-auto 
      mt-6 
      origin-center
    "
  />
</motion.div>




      {/* HORIZONTAL FRAMES */}
      <div className="relative z-20 pt-12 px-4 sm:px-10">
        <HorizontalFrames />
      </div>

    </section>
  );
};

export default Hero;

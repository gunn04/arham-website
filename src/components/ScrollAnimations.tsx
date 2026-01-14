import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ScrollAnimations = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Different transform values for parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section id="about" ref={containerRef} className="relative min-h-screen bg-black overflow-hidden py-20">
      {/* Background layers with parallax */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Layer 1 - Slowest */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-80 h-60 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg opacity-20"
        />
        
        {/* Layer 2 - Medium speed */}
        <motion.div
          style={{ y: y2 }}
          className="absolute top-40 right-20 w-64 h-80 bg-gradient-to-tl from-gray-700 to-gray-800 rounded-lg opacity-15"
        />
        
        {/* Layer 3 - Fast */}
        <motion.div
          style={{ y: y3 }}
          className="absolute bottom-40 left-1/4 w-96 h-48 bg-gradient-to-r from-gray-900 to-black rounded-lg opacity-25"
        />
        
        {/* Layer 4 - Fastest */}
        <motion.div
          style={{ y: y4 }}
          className="absolute top-60 right-1/3 w-72 h-72 bg-gradient-to-bl from-gray-600 to-gray-900 rounded-full opacity-10"
        />
        
        {/* Additional moving elements */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
          className="absolute top-1/3 left-1/2 w-48 h-64 bg-gradient-to-t from-gray-800 to-transparent rounded-lg opacity-10 transform -translate-x-1/2"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl text-center"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-light text-white mb-8 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            About Us
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '200px' }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="h-px bg-white/60 mx-auto mb-12"
          />
          
          <motion.p 
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            Arham Design Studio is a premier interior design firm dedicated to creating 
            extraordinary spaces that reflect sophistication, innovation, and timeless elegance. 
            Our team of skilled designers brings years of expertise in luxury residential and 
            commercial design.
          </motion.p>
          
          <motion.p 
            className="text-base md:text-lg text-white/60 leading-relaxed font-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            viewport={{ once: true }}
          >
            We believe that great design is not just about aesthetics—it's about creating 
            environments that enhance the way people live, work, and connect. Every project 
            is approached with meticulous attention to detail, ensuring that each space tells 
            a unique story while maintaining the highest standards of quality and craftsmanship.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollAnimations;
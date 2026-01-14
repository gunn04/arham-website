import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const WhatWeDo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);

  const services = [
    {
      number: "01",
      title: "Residential Design",
      description: "Transform your space into a personalized sanctuary with our comprehensive residential design services that reflect your unique lifestyle and aesthetic preferences."
    },
    {
      number: "02", 
      title: "Commercial Spaces",
      description: "Create inspiring work environments that enhance productivity and reflect your brand identity through thoughtful design and strategic space planning."
    },
    {
      number: "03",
      title: "Exterior Facades", 
      description: "Design facades that make a lasting first impression. We create refined exterior solutions that balance aesthetics, durability, and architectural harmony while enhancing the overall character of your space."
    },
    {
      number: "04",
      title: "Luxury Consultation",
      description: "Receive expert guidance on high-end design decisions, material selection, and spatial optimization to achieve the pinnacle of luxury living."
    }
  ];

  return (
    <section ref={containerRef} className="py-32 px-8 relative overflow-hidden">
      {/* Background parallax elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-40 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -120]), opacity }}
        className="absolute bottom-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-light text-stone-100 mb-12 tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What We Do
          </motion.h2>
          
          <motion.div 
            className="w-24 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent mx-auto mb-16"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          />
          
          <motion.p 
            className="text-xl text-stone-300 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We specialize in creating extraordinary spaces that seamlessly blend luxury, functionality, and timeless design principles.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 60, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 1, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="group"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-8">
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span 
                    className="text-6xl font-light text-amber-200/30 group-hover:text-amber-200/60 transition-colors duration-500"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {service.number}
                  </span>
                </motion.div>
                
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl md:text-3xl font-light text-stone-100 mb-6 group-hover:text-amber-100 transition-colors duration-500"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <p 
                    className="text-lg text-stone-300 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {service.description}
                  </p>
                  
                  <motion.div 
                    className="h-px bg-amber-200 mt-6"
                    initial={{ width: 0 }}
                    whileInView={{ width: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ width: 96 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="text-center mt-32"
        >
          <motion.blockquote 
            className="text-2xl md:text-3xl font-light text-amber-100 italic max-w-4xl mx-auto"
            style={{ fontFamily: 'Playfair Display, serif' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            "Every space tells a story. We ensure yours is extraordinary."
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
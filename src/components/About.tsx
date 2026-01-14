import { motion } from 'framer-motion';

const About = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&auto=format",
      alt: "Modern Living Space"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&auto=format",
      alt: "Luxury Bedroom Design"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&auto=format",
      alt: "Contemporary Kitchen"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&auto=format",
      alt: "Executive Office Space"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800&h=600&fit=crop&auto=format",
      alt: "Elegant Dining Area"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop&auto=format",
      alt: "Premium Bathroom Design"
    }
  ];

  // Create seamless loop
  const infiniteImages = [...images, ...images, ...images];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Cinematic horizontal scrolling frames - moved above title */}
      <div className="relative h-96 mb-20">
        <motion.div 
          className="flex gap-8 h-full absolute"
          animate={{ x: [0, -2800] }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {infiniteImages.map((image, index) => (
            <motion.div
              key={`${image.id}-${index}`}
              className="flex-shrink-0 w-80 h-full relative group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: (index % images.length) * 0.1 }}
            >
              <div className="w-full h-full rounded-xl overflow-hidden bg-gray-900 shadow-2xl border border-white/5">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <div class="text-white/60 text-center">
                          <div class="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center">
                            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                            </svg>
                          </div>
                          <p class="text-sm font-light">${image.alt}</p>
                        </div>
                      </div>
                    `;
                  }}
                />
                
                {/* Premium overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* White border glow */}
                <div className="absolute inset-0 border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p 
                    className="text-white text-sm font-light tracking-wide"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {image.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Section title - now appears after the frames */}
      <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 
            className="text-5xl md:text-7xl font-light text-stone-100 mb-12 tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            About Us
          </h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent mx-auto mb-16" />
        </motion.div>

      {/* About text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center px-8"
      >
        <p 
          className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-8"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          At Arham Design Studio, we believe that exceptional design transcends mere aesthetics. 
          We create spaces that tell stories, evoke emotions, and enhance the human experience.
        </p>
        <p 
          className="text-lg text-white/60 font-light leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          With years of expertise in residential and commercial design, our team combines 
          innovative thinking with timeless principles to deliver spaces that are both 
          functional and breathtakingly beautiful.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
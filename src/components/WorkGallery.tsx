import { motion } from 'framer-motion';

const WorkGallery = () => {
  // Sample work images - you can replace these with your actual work images
  const workImages = [
    {
      id: 1,
      title: "Modern Living Room",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&auto=format"
    },
    {
      id: 2,
      title: "Luxury Bedroom",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&auto=format"
    },
    {
      id: 3,
      title: "Contemporary Kitchen",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&auto=format"
    },
    {
      id: 4,
      title: "Office Space",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&auto=format"
    },
    {
      id: 5,
      title: "Dining Area",
      image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800&h=600&fit=crop&auto=format"
    },
    {
      id: 6,
      title: "Bathroom Design",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop&auto=format"
    },
    {
      id: 7,
      title: "Reception Area",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&auto=format"
    },
    {
      id: 8,
      title: "Penthouse View",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&auto=format"
    }
  ];

  // Triple the array for truly seamless infinite scroll
  const tripleImages = [...workImages, ...workImages, ...workImages];

  return (
    <section className="relative h-screen bg-black overflow-hidden flex items-center">
      {/* Background frames */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ x: -100, y: 200, opacity: 0, rotate: -3 }}
          animate={{ x: 0, y: 0, opacity: 0.2, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute top-20 left-20 w-64 h-48 bg-gradient-to-br from-gray-800/20 to-gray-900/10 rounded-lg border border-white/5"
        />
        
        <motion.div
          initial={{ x: 150, y: -100, opacity: 0, rotate: 4 }}
          animate={{ x: 0, y: 0, opacity: 0.25, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-32 right-16 w-80 h-56 bg-gradient-to-tl from-gray-700/15 to-gray-800/10 rounded-lg border border-white/5"
        />
      </div>

      <div className="w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 px-8"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-8 tracking-wide">
            Our Work
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-px bg-white/40 mx-auto mb-8"
          />
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto">
            A glimpse into our portfolio of exceptional design projects
          </p>
        </motion.div>

        {/* Auto-scrolling Image Gallery - Slower and Non-stop */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -(320 + 32) * workImages.length]
            }}
            transition={{
              duration: 60, // Increased from 30 to 60 seconds (slower)
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            style={{
              width: `${tripleImages.length * (320 + 32)}px`
            }}
          >
            {tripleImages.map((work, index) => (
              <motion.div
                key={`${work.id}-${Math.floor(index / workImages.length)}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (index % workImages.length) * 0.1 }}
                className="flex-shrink-0 group"
              >
                <div className="relative w-80 h-64 overflow-hidden rounded-lg bg-white-900 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                            <div class="text-white/60 text-center">
                              <div class="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                                </svg>
                              </div>
                              <p class="text-sm">${work.title}</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-lg font-light tracking-wide">
                        {work.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="text-center mt-12 text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <p className="text-xs tracking-wide">
            Continuously scrolling gallery
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkGallery;
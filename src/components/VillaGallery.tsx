import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

interface VillaGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const isIOS =
  typeof window !== "undefined" &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);


const VillaGallery = ({ isOpen, onClose }: VillaGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const villaRenders = [
    { id: 1, title: "Exterior Front View", image: "/assets/m-bed-view-1.jpg", category: "Exterior" },
    { id: 2, title: "Living Room Interior", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200", category: "Interior" },
    { id: 3, title: "Master Bedroom", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200", category: "Interior" },
    { id: 4, title: "Pool Area", image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=1200", category: "Exterior" },
    { id: 5, title: "Kitchen Design", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200", category: "Interior" },
    { id: 6, title: "Dining Area", image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=1200", category: "Interior" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            className="fixed inset-4 md:inset-8 bg-black border border-white/20 rounded-2xl z-50 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <div>
                <h2 className="text-2xl md:text-3xl font-light text-white">
                  Modern Luxury Villa
                </h2>
                <p className="text-white/60">Project Renders & Gallery</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg">
                <X size={24} />
              </button>
            </div>

            {/* ✅ ONLY SCROLL CONTAINER */}
            <div
              className="flex-1 overflow-y-auto overscroll-contain p-6"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {villaRenders.map((render) => (
                  <motion.div
                    key={render.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-900 cursor-pointer"
                    onClick={() => setSelectedImage(render.image)}
                  >
                    <img
                      src={render.image}
                      alt={render.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform"
                    />

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <ZoomIn size={32} />
                    </div>

                    <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80">
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">
                        {render.category}
                      </span>
                      <h3 className="text-white mt-1">{render.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* LIGHTBOX */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
              >
                <img
                  src={selectedImage}
                  alt=""
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default VillaGallery;

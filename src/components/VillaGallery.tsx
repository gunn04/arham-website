import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Upload, Eye, ZoomIn } from 'lucide-react';

interface VillaGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const VillaGallery = ({ isOpen, onClose }: VillaGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Sample villa renders - you can replace these with your actual renders
  const villaRenders = [
    {
      id: 1,
      title: "Exterior Front View",
      image: "/assets/m-bed-view-1.jpg", // Using your uploaded bedroom image as placeholder
      category: "Exterior"
    },
    {
      id: 2,
      title: "Living Room Interior",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop&auto=format",
      category: "Interior"
    },
    {
      id: 3,
      title: "Master Bedroom",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop&auto=format",
      category: "Interior"
    },
    {
      id: 4,
      title: "Pool Area",
      image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=1200&h=800&fit=crop&auto=format",
      category: "Exterior"
    },
    {
      id: 5,
      title: "Kitchen Design",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop&auto=format",
      category: "Interior"
    },
    {
      id: 6,
      title: "Dining Area",
      image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=1200&h=800&fit=crop&auto=format",
      category: "Interior"
    }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // In a real application, you would upload this to your server
        console.log('Image uploaded:', e.target?.result);
        // For demo purposes, we'll just log it
        alert('Image upload functionality ready! Connect to your backend to save images.');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-8 bg-black border border-white/20 rounded-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h2 
                  className="text-2xl md:text-3xl text-white font-light tracking-wide"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Modern Luxury Villa
                </h2>
                <p className="text-white/60 mt-1">Project Renders & Gallery</p>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Upload Button */}
                <label className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg cursor-pointer transition-all duration-300">
                  <Upload size={16} />
                  <span className="text-sm">Upload Render</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="p-6 h-full overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {villaRenders.map((render, index) => (
                  <motion.div
                    key={render.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-900 cursor-pointer"
                    onClick={() => setSelectedImage(render.image)}
                  >
                    <img
                      src={render.image}
                      alt={render.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <ZoomIn size={32} className="mx-auto mb-2" />
                        <p className="text-sm font-light">Click to enlarge</p>
                      </div>
                    </div>
                    
                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <span className="inline-block px-2 py-1 bg-white/20 rounded text-xs text-white/90 mb-2">
                        {render.category}
                      </span>
                      <h3 className="text-white font-light">{render.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image Lightbox */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/95 z-60 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <motion.img
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  src={selectedImage}
                  alt="Villa Render"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300"
                >
                  <X size={24} className="text-white" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default VillaGallery;
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 z-40 p-8"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.div 
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src="/assets/logo.png" 
          alt="Arham Design Studio" 
          className="h-8 w-auto object-contain filter brightness-0 invert opacity-90"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.innerHTML = `
              <div class="text-white font-light text-lg tracking-[0.2em] opacity-90" style="font-family: 'Playfair Display', serif;">
                ARHAM
              </div>
            `;
          }}
        />
      </motion.div>
    </motion.header>
  );
};

export default Header;

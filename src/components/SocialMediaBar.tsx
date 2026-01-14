import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const SocialMediaBar = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/YOUR_HANDLE',
      icon: Instagram
    },
    {
      name: 'Behance',
      url: 'https://behance.net/YOUR_HANDLE',
      icon: () => (
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Desktop - Right side floating bar */}
      <motion.div 
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col space-y-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
            >
              <IconComponent />
            </motion.a>
          );
        })}
      </motion.div>

      {/* Mobile - Bottom floating bar */}
      <motion.div 
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex md:hidden space-x-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
              whileHover={{ scale: 1.1 }}
              
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
            >
              <IconComponent />
            </motion.a>
          );
        })}
      </motion.div>
    </>
  );
};

export default SocialMediaBar;
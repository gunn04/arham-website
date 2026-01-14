import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* ================= DESKTOP NAV (UNCHANGED) ================= */}
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 hidden md:block"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="w-full"
          animate={{
            backgroundColor: isScrolled
              ? "rgba(166,169,152,0.85)"
              : "rgba(166,169,152,0.4)",
            backdropFilter: isScrolled ? "blur(18px)" : "blur(10px)",
          }}
        >
          <div className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center">
            <img
              src="/images/ADS.webp"
              alt="logo"
              className="h-14 cursor-pointer"
            />

            <div className="flex items-center space-x-10">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/80 hover:text-white text-lg font-light tracking-wide"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* ================= MOBILE NAV (GROOVE STYLE) ================= */}
      <div className="fixed top-0 left-0 w-full z-50 md:hidden">
        <div className="flex items-center justify-between px-6 py-6 bg-[#A6A998]/80 backdrop-blur-xl">
          <button onClick={() => setMobileOpen(true)}>
            <Menu className="w-7 h-7 text-white" />
          </button>

          <img
            src="/images/ADS.webp"
            alt="logo"
            className="h-10"
          />
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#A6A998] z-[999]"
            >
              <button
                className="absolute top-6 right-6"
                onClick={() => setMobileOpen(false)}
              >
                <X className="w-8 h-8 text-white" />
              </button>

              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="h-full flex flex-col justify-center px-10 space-y-8"
              >
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    className="text-white text-3xl font-light tracking-wide"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navigation;

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

type NavSection = { id: string; name: string };
type NavigationProps = {
  currentSection?: number;
  scrollToSection?: (index: number) => void;
  sections?: NavSection[];
};

const Navigation: React.FC<NavigationProps> = ({
  currentSection,
  scrollToSection,
  sections,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  const fallbackMenu = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const menuItems =
    sections?.map((s, idx) => ({
      label: s.name,
      href: `#${s.id}`,
      index: idx,
    })) ?? fallbackMenu;

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* SAGE GREEN BAR */}
      <motion.div
        className="w-full"
        animate={{
          backgroundColor: "rgba(166, 169, 152, 0.95)",
          backdropFilter: isScrolled
            ? "blur(16px) saturate(160%)"
            : "blur(10px) saturate(120%)",
          borderBottomWidth: "1px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          borderBottomColor: "rgba(255,255,255,0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center">
          {/* LOGO */}
          <motion.img
            src="/images/ADS.webp"
            alt="logo"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="h-14 md:h-16 w-auto object-contain cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((item, idx) => {
              const isActive =
                currentSection !== undefined && idx === currentSection;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`text-white tracking-wide text-lg font-light relative group ${
                    isActive ? "opacity-100" : "opacity-80"
                  }`}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 * idx }}
                  whileHover={{ opacity: 1, y: -2 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-px bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;

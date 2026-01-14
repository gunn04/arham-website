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
    setIsScrolled(latest > 50);
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
      <motion.div
        className="w-full"
        animate={{
          backgroundColor: isScrolled
            ? "rgba(166, 169, 152, 0.85)"
            : "rgba(166, 169, 152, 0.4)",
          backdropFilter: isScrolled
            ? "blur(20px) saturate(180%)"
            : "blur(10px) saturate(120%)",
          borderBottomWidth: isScrolled ? "1px" : "0px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ borderBottomColor: "rgba(255, 255, 255, 0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center">
          <motion.img
            src="/images/ADS.webp"
            alt="logo"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="h-14 md:h-16 lg:h-18 w-auto object-contain cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />

          <div className="flex items-center space-x-10">
            {menuItems.map((item, idx) => {
              const isActive =
                currentSection !== undefined && idx === currentSection;
              const onClick = scrollToSection
                ? (e: React.MouseEvent) => {
                    e.preventDefault();
                    scrollToSection(idx);
                  }
                : undefined;

              return (
                <motion.a
                  key={item.label}
                  href={scrollToSection ? undefined : item.href}
                  onClick={onClick}
                  className={`text-gray-300 hover:text-white tracking-wide text-base md:text-lg font-light transition-all duration-300 relative group ${
                    isActive ? "text-white" : ""
                  }`}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 * idx }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 h-px bg-white transition-all duration-300"
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
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
  const [menuOpen, setMenuOpen] = useState(false);
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
    <>
      {/* NAV BAR */}
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
              ? "rgba(0,0,0,0.85)"
              : "rgba(0,0,0,0.4)",
            backdropFilter: isScrolled
              ? "blur(20px) saturate(180%)"
              : "blur(10px) saturate(120%)",
            borderBottomWidth: isScrolled ? "1px" : "0px",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ borderBottomColor: "rgba(255,255,255,0.1)" }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex justify-between items-center">
            
            {/* MOBILE MENU ICON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex flex-col gap-1.5 md:hidden"
            >
              <span className="w-6 h-px bg-[#9FAE9A]"></span>
              <span className="w-6 h-px bg-[#9FAE9A]"></span>
              <span className="w-6 h-px bg-[#9FAE9A]"></span>

            </button>

            {/* LOGO */}
            <motion.img
              src="/images/ADS.webp"
              alt="logo"
              className="h-12 md:h-16 w-auto object-contain cursor-pointer"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center space-x-10">
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
                    className={`text-gray-300 hover:text-white tracking-wide text-lg font-light relative ${
                      isActive ? "text-white" : ""
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    {item.label}
                    <motion.span
                      className="absolute bottom-0 left-0 h-px bg-white"
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

      {/* MOBILE SLIDE MENU */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full h-screen bg-black z-[999] md:hidden"
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-[#9FAE9A] text-4xl"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col gap-10 px-10 mt-24 text-[#9FAE9A] text-2xl font-light tracking-wide">

          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

export default Navigation;

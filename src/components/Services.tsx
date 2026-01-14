import { motion } from "framer-motion";
import { Home, Building, Palette, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description:
        "Transform your home into a refined, personalized sanctuary through thoughtful spatial planning and timeless interiors.",
      features: [
        "Space Planning",
        "Interior Styling",
        "Custom Furniture",
        "Lighting Design",
      ],
    },
    {
      icon: Building,
      title: "Commercial Spaces",
      description:
        "Purpose-driven commercial environments that enhance productivity while reflecting your brand identity.",
      features: [
        "Office Design",
        "Retail Spaces",
        "Hospitality",
        "Workspace Planning",
      ],
    },
    {
      icon: Palette,
      title: "Design Consultation",
      description:
        "Expert guidance to help you make confident design decisions with clarity and intention.",
      features: [
        "Color Schemes",
        "Material Selection",
        "Layout Planning",
        "Style Direction",
      ],
    },
    {
      icon: Lightbulb,
      title: "Concept Development",
      description:
        "From vision to execution, we translate ideas into cohesive, elevated design concepts.",
      features: [
        "3D Visualization",
        "Mood Boards",
        "Design Concepts",
        "Project Planning",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative py-32 bg-[#0B0B0B] overflow-hidden"
    >
      {/* Background sage accents */}
      <div className="absolute top-32 left-20 w-96 h-96 bg-[#A6A998]/20 blur-3xl rounded-full" />
      <div className="absolute bottom-32 right-20 w-96 h-96 bg-[#A6A998]/25 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2
            className="text-4xl md:text-6xl font-light text-[#F5F5F2] mb-8 tracking-wide"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Services
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-px bg-[#A6A998]/60 mx-auto mb-8"
          />

          <p className="text-lg text-[#A6A998] font-light max-w-2xl mx-auto">
            Thoughtfully crafted design services focused on elegance,
            functionality, and lasting impact.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-[#A6A998]/40 transition-all duration-500">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 bg-[#A6A998]/20 rounded-xl flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.08 }}
                  >
                    <IconComponent className="w-7 h-7 text-[#A6A998]" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-light text-[#F5F5F2] mb-4 tracking-wide">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#D6D6D0] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm text-[#A6A998] flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-[#A6A998] rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

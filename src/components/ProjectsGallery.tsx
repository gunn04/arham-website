import { motion } from "framer-motion";

const ProjectsGallery = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      category: "Residential",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&auto=format",
    },
    {
      id: 2,
      title: "Contemporary Office Space",
      category: "Commercial",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format",
    },
    {
      id: 3,
      title: "Minimalist Apartment",
      category: "Residential",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&auto=format",
    },
    {
      id: 4,
      title: "Boutique Hotel Lobby",
      category: "Hospitality",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&auto=format",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-black min-h-screen py-32 text-[#E8E9E0]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light tracking-tight">
            Projects
          </h2>
          <div className="w-24 h-[2px] bg-[#A6A998] mt-6"></div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
              </div>

              {/* Text */}
              <div className="mt-6">
                <p className="text-sm uppercase tracking-widest text-[#A6A998] mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl font-light">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;

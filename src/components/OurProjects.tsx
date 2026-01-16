import { motion } from "framer-motion";
import { prithvirajProject } from "./projects/prithviraj";
import { sachinrankaProject } from "./projects/sachinranka";
import { sumitrankaProject } from "./projects/Sumit";
import { PrinceProject } from "./projects/Prince";
import { niteshProject } from "./projects/nitesh";
import { SureshProject } from "./projects/suresh";
export interface ProjectData {
  title: string;
  overview: string;
  info: {
    client: string;
    projectType: string;
    location: string;
    area: string;
    date: string;
  };
  renderGroups: any[];
}



interface OurProjectsProps {
  onProjectClick: (project: ProjectData) => void;
}

const OurProjects = ({ onProjectClick }: OurProjectsProps) => {
  const projects = [
    {
      id: 1,
      title: "Mr. Sachin Ranka",
      image: "/images/tem.webp",
      projectData: sachinrankaProject,
    },
    {
      id: 2,
      title: "Mr. Prithviraj",
      image: "/images/prithviraj ji.webp",
      projectData: prithvirajProject,
    },
     {
      id: 3,
      title: "Mr. Sumit Ranka",
      image: "/images/du5.webp",
      projectData: sumitrankaProject,
    },
    {
      id: 4,
      title: "Mr. Prince Jain",
      image: "/images/pmb1.webp",
      projectData: PrinceProject,
    },

    {
      id: 4,
      title: "Mr. Nitesh malani",
      image: "/images/ml1.webp",
      projectData: niteshProject,
    },

     {
      id: 5,
      title: "Mr. Suresh Jain",
      image: "/images/sc1.webp",
      projectData: SureshProject,
    },
    
    
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-black">
  <div className="max-w-7xl mx-auto">
    <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 
            className="text-5xl md:text-7xl font-light text-stone-100 mb-12 tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            The Art We Own
          </h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent mx-auto mb-16" />
        </motion.div>



           

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="cursor-pointer group"
              onClick={() =>
                project.projectData &&
                onProjectClick(project.projectData as ProjectData)
              }
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay with View More */}
                {/* Hover overlay — View More ONLY */}
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
  <span className="text-white text-sm tracking-widest uppercase">
    View Project
  </span>
</div>

                {/* Always visible overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-white/70 mb-2">
                      {project.projectData?.info?.projectType || "Residential"}
                    </p>
                    <h3 className="text-white text-lg md:text-xl font-light">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default OurProjects;

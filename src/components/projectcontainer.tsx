import { useState } from "react";
import OurProjects from "./OurProjects";
import ProjectPage from "./ProjectPage";

export default function ProjectsContainer() {
  const [activeProject, setActiveProject] = useState<any | null>(null);

  return (
    <>
      <OurProjects
        onProjectClick={(projectData) => {
          setActiveProject(projectData);
        }}
      />

      {activeProject && (
        <ProjectPage
          isOpen={true}
          onClose={() => setActiveProject(null)}
          title={activeProject.title}
          overview={activeProject.overview}
          info={activeProject.info}
          // renderGroups={activeProject.renderGroups}
        />
      )}
    </>
  );
}

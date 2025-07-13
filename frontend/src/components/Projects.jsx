import React, { useState } from "react";
import Project from "./Project.jsx";
import { myProjects } from "../constants/index.js";

const Projects = () => {
  const [preview, setPreview] = useState(null);

  return (
    
    <div className="space-y-12">
        <h2 className="mt-20 text-center font-general text-extrabold  text-5xl text-black mb-10">Featured Projects</h2>
      {myProjects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          subDescription={project.subDescription}
          image={project.image}
          tags={project.tags}
          href={project.href}
          setPreview={setPreview}
        />
      ))}
    </div>
  );
};

export default Projects;

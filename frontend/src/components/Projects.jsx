import React, { useState } from "react";
import Project from "./Project";
import { myProjects } from "../constants";

const Projects = () => {
  const [preview, setPreview] = useState(null);

  return (
    <div className="space-y-12">
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

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="fixed bottom-10 right-10 w-52 h-auto rounded shadow-lg z-40"
        />
      )}
    </div>
  );
};

export default Projects;

import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 border-b border-white/10 px-4 md:px-8 gap-4"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <h2 className="text-3xl font-bold text-neutral-600">{title}</h2>
          <div className="flex flex-wrap gap-2 mt-2 text-sm text-black-400">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="bg-black/10 px-2 py-1 rounded-xl text-xs font-large"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 text-black-400 hover:text-white transition-all font-robert-medium rounded-xl"
        >
          Read More
          <img src="img/arrowr.svg" className="w-5 h-5" />
        </button>
      </div>

      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;

import React, { useState } from "react";

interface ProjectProps {
  name: string;
  description: string;
  imagePath?: string;
  link?: string;
}

const Projects: React.FC<{ projects: ProjectProps[] }> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(projects.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === projects.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="flex overflow-hidden">
      <button
        className="items-center left-0 m-4 text-3xl text-black rounded-full p-2  opacity-40 hover:opacity-70 dark:text-white"
        onClick={handlePrev}
      >
        {"<"}
      </button>
      <div className="overflow-auto w-4/5 h-4/5 bg-white p-3 rounded-lg shadow-md dark:text-white dark:bg-black dark:shadow-white dark:shadow-sm">
        <div className="p-2">
          <h3 className="text-lg font-mono mb-2">{projects[currentIndex].name}</h3>
          <p className="font-mono text-gray-600">{projects[currentIndex].description}</p>
          {projects[currentIndex].link && (
            <a href={projects[currentIndex].link} className="text-blue-500" target="_blank" rel="noopener noreferrer">
              Learn more
            </a>
          )}
        </div>
      </div>
      <button
        className="right-0 m-4 text-3xl text-black rounded-full p-2 opacity-40 hover:opacity-70 dark:text-white"
        onClick={handleNext}
      >
        {">"}
      </button>
    </div>
  );
};

export default Projects;

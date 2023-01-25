import React, { useState } from "react";
import { MdOpenInNew } from "react-icons/md";

interface ProjectProps {
  name: string;
  description: string;
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
    <div className="flex overflow-hidden h-40 items-center">
      <button
        className="items-center left-0 m-4 text-3xl text-black rounded-full p-2  opacity-40 hover:opacity-70 dark:text-white"
        onClick={handlePrev}
      >
        {"<"}
      </button>
      <div className="overflow-auto w-4/5 h-4/5 bg-white p-3 rounded-lg shadow-md dark:text-white dark:bg-black dark:shadow-white dark:shadow-sm">
        <div className="p-2">
          <h3 className="text-lg font-mono mb-2 dark:text-white">{projects[currentIndex].name}</h3>
          <p className="font-mono mb-2 text-gray-700 dark:text-slate-300">{projects[currentIndex].description}</p>
          {projects[currentIndex].link ? (
            <button className=" flex float-right py-2 px-4 rounded items-center border hover:bg-black hover:text-white text-black border-gray-200 dark:bg-white hover:dark:bg-black hover:dark:text-white">
              <MdOpenInNew />
              <a href={projects[currentIndex].link} className="px-2 font-mono" target="_blank">
                Learn more
              </a>
            </button>
          ) : null}
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

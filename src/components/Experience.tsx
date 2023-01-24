import React from "react";

interface ExperienceProps {
  role: string;
  company: string;
  from: string;
  to?: string;
}

const ExperienceCard: React.FC<ExperienceProps> = ({ role, company, from, to }) => {
  return (
    <div className="overflow-auto bg-white p-6 rounded-lg shadow-md dark:text-white dark:bg-black dark:shadow-white dark:shadow-sm">
      <div className="flex justify-between">
        <h3 className="text-lg font-mono font-medium mb-2">{role}</h3>
        <p className="text-sm text-gray-600 font-mono dark:text-slate-300">
          {from} - {to}
        </p>
      </div>
      <p className="text-gray-600 font-mono dark:text-slate-300">{company}</p>
    </div>
  );
};

export default ExperienceCard;

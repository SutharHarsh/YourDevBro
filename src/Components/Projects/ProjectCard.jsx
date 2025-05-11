import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ name, thumbnail, shortDescription, sourceCode, isSmall }) {
  return (
    <div
      className={`${
        isSmall ? "max-w-xs" : "max-w-sm"
      } bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition dark:bg-white`}
    >
      <img className="rounded-t-lg w-full h-40 object-cover" src={thumbnail} alt={name} />
      <div className="p-4">
        <h5 className="text-xl font-semibold text-blue-800">{name}</h5>
        <p className="text-sm text-gray-600 mt-1">{shortDescription}</p>
        <Link
          to={sourceCode}
          className="inline-block mt-3 text-sm font-medium text-white bg-blue-600 px-3 py-1 rounded hover:bg-green-600 transition"
        >
          Source Code
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;

import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ name, thumbnail, shortDescription, sourceCode }) {
  return (
    <div className="max-w-xs bg-green-100 border border-blue-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={sourceCode}>
        <img
          className="rounded-t-lg w-full h-40 object-cover"
          src={thumbnail}
          alt={name}
        />
      </Link>
      <div className="p-4">
        <h5 className="mb-1 text-xl font-semibold text-blue-800">{name}</h5>
        <p className="mb-3 text-sm text-gray-600">{shortDescription}</p>
        <Link
          to={sourceCode}
          className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600 transition-colors duration-200"
        >
          Source Code
          <svg
            className="w-4 h-4 ml-2 rtl:rotate-180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 14 10"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;

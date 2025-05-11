import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import { projectDetails } from "../../data/projectInfo";
import ProjectCard from "./ProjectCard";

function ProjectPage() {
  const [projectInfo, setProjectInfo] = useState([]);

  useEffect(() => {
    setProjectInfo(projectDetails); 
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center px-20 mt-20 gap-6">
        {projectInfo.map((details, index) => (
          <ProjectCard
            key={index}
            name={details.name}
            thumbnail={details.thumbnail}
            shortDescription={details.shortDescription}
            sourceCode={details.sourceCode}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ProjectPage;

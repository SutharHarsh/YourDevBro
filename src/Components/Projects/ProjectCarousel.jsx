import React from "react";
import Slider from "react-slick";
import { projectDetails } from "../../data/projectInfo";
import ProjectCard from "./ProjectCard";

function ProjectCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-6 py-10">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Featured Projects</h2>
      <Slider {...settings}>
        {projectDetails.map((details) => (
          <div key={details.id} className="px-2">
            <ProjectCard
              name={details.name}
              thumbnail={details.thumbnail}
              shortDescription={details.shortDescription}
              sourceCode={details.sourceCode}
              isSmall 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectCarousel;

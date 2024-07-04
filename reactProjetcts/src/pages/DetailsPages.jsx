import React from "react";
import { Details } from "../components";
import { useParams } from "react-router";
import { projectsData } from "../Data";

const DetailsPages = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id, 10)); // Find the project based on the id
  if (!project) {
    return (
      <div
        class="min-h-screen bg-base-100 rounded-3xl p-6
       flex flex-col items-center justify-center"
      >
        <h1 class="text-5xl text-primary font-bold mb-8 animate-pulse">
          Coming Soon
        </h1>
        <p class="text-secondary text-lg mb-8">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
    );
  }
  return (
    <div>
      <Details
        key={project.id}
        id={project.id}
        projectName={project.projectName}
        LightImage={project.LightImage}
        DarkImage={project.DarkImage}
        link={project.link}
        tags={project.tags}
        overview={project.overview}
        features={project.features}
        techDetails={project.techDetails}
        githubLink={project.githubLink}
        liveSiteLink={project.liveSiteLink}
        additionalImages={project.additionalImages}
        title={project.title}
      />
    </div>
  );
};

export default DetailsPages;

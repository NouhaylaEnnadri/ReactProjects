import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Details = ({
  id,
  projectName,
  LightImage,
  DarkImage,
  link,
  tags,
  overview,
  features,
  techDetails,
  futurePlans,
  challenges,
  lessonsLearned,
  collaborators,
  githubLink,
  liveSiteLink,
  additionalImages,
  title,
}) => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-primary">{projectName}</h1>
        <p className="text-lg text-gray-600">
          Project ID: <strong>{id}</strong>
        </p>
      </div>

      {/* Main Images with Hover Links */}
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="relative group">
          <img
            src={LightImage}
            alt={`${projectName} Light Mode`}
            className="rounded-lg shadow-md w-full h-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg flex items-center"
            >
              <FiExternalLink className="mr-2" /> Live Website
            </a>
          </div>
        </div>
        <div className="relative group">
          <img
            src={DarkImage}
            alt={`${projectName} Dark Mode`}
            className="rounded-lg shadow-md w-full h-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg flex items-center"
            >
              <FiExternalLink className="mr-2" /> Live Website
            </a>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex mb-8 space-x-3 flex-wrap justify-center">
        {tags.map((tag, index) => (
          <span
            className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
            key={index}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Project Aspects */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-secondary">Overview</h2>
        <p className="text-lg mb-6">{overview}</p>

        <h2 className="text-2xl font-bold mb-4 text-secondary">Features</h2>
        <ul className="list-disc list-inside mb-6">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-secondary">
          Technical Details
        </h2>
        <p className="text-lg mb-6">{techDetails}</p>

        {/* Future Plans */}
        {futurePlans && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-secondary">
              Future Plans
            </h2>
            <p className="text-lg mb-6">{futurePlans}</p>
          </div>
        )}

        {/* Challenges */}
        {challenges && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-secondary">
              Challenges
            </h2>
            <p className="text-lg mb-6">{challenges}</p>
          </div>
        )}

        {/* Lessons Learned */}
        {lessonsLearned && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-secondary">
              Lessons Learned
            </h2>
            <p className="text-lg mb-6">{lessonsLearned}</p>
          </div>
        )}

        {/* Collaborators */}
        {collaborators && collaborators.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-secondary">
              Collaborators
            </h2>
            <ul className="list-disc list-inside mb-6">
              {collaborators.map((collaborator, index) => (
                <li key={index}>{collaborator}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Additional Images */}
      {additionalImages && additionalImages.length > 0 && (
        <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {additionalImages.map((image, index) => (
            <div key={index} className="relative group">
              <h1
                className="text-2xl text-secondary 
              
              
              
              "
              >
                {title}
              </h1>
              <img
                src={image}
                alt={`${projectName} Additional Screenshot ${index + 1}`}
                className="rounded-lg shadow-md w-full h-auto"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg flex items-center"
                ></a>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Links */}
      <div className="flex justify-center space-x-6">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:underline text-lg"
          >
            <FiGithub className="mr-2" /> GitHub Repository
          </a>
        )}
        {liveSiteLink && (
          <a
            href={liveSiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:underline text-lg"
          >
            <FiExternalLink className="mr-2" /> Live Website
          </a>
        )}
      </div>
    </div>
  );
};

export default Details;

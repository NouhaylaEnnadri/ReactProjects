import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { project1, project1Light } from "../assets";

const ProjectBlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-primary">
        Project 01 : Noyl's Do :
      </h1>

    

      {/* Images with Hover Links */}
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="relative group">
          <img
            src={project1}
            alt="Noy's Do Screenshot 1"
            className="rounded-lg shadow-md w-full h-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project1Light}
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
            src={project1Light}
            alt="Noy's Do Screenshot 2"
            className="rounded-lg shadow-md w-full h-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href="https://noyldo.netlify.app/"
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
  <div className="flex mb-8 space-x-3">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          React
        </span>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          Firebase
        </span>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          Productivity
        </span>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          Task Management
        </span>
      </div>
      {/* Project Aspects */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-secondary">Overview</h2>
        <p className="text-lg mb-6">
          Noy's Do is a powerful and user-friendly todo app designed to help you
          manage your tasks efficiently. Built with React and Firebase, it
          provides real-time synchronization and a seamless user experience.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-secondary">Features</h2>
        <p className="text-lg mb-6">
          <ul className="list-disc list-inside">
            <li>Intuitive user interface for easy task management</li>
            <li>Real-time data synchronization with Firebase</li>
            <li>Task categorization, deadlines, and prioritization</li>
            <li>Reminders to keep you on track</li>
            <li>Cross-device compatibility</li>
          </ul>
        </p>

        <h2 className="text-2xl font-bold mb-4 text-secondary">
          Technical Details
        </h2>
        <p className="text-lg mb-6">
          The app is built using React for the frontend and Firebase for the
          backend. React's component-based architecture allows for a modular and
          maintainable codebase, while Firebase provides robust real-time data
          handling capabilities.
        </p>
      </div>

      {/* Links */}
      <div className="flex justify-between mb-8">
        <a
          href="https://github.com/yourusername/noys-do"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 hover:underline text-lg"
        >
          <FiGithub className="mr-2" /> GitHub Repository
        </a>
        <a
          href="https://noyldo.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 hover:underline text-lg"
        >
          <FiExternalLink className="mr-2" /> Live Website
        </a>
      </div>
    </div>
  );
};

export default ProjectBlogPage;

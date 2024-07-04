import React, { useState } from "react";
import Card from "../components/Card";
import { noylisDelicous_Dark, project1 } from "../assets";
import { projectsData } from "../Data";
import { useNavigate } from "react-router";
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(1); // State to track active tab, defaulting to the first tab

  const navigate = useNavigate();
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <div className="mx-auto mb-[60px] max-w-[510px] text-center pt-10">
        <span className="text-primary mb-2 block text-2xl font-semibold">
          Noyl
        </span>
        <h2 className="text-dark mb-3 text-3xl font-bold ">Recent Projects</h2>
        <p className="text-body-color text-base "></p>
      </div>

      {/* Tabs */}
      <div
        role="tablist"
        className="tabs tabs-lifted p-10 "
        data-theme="luxury"
      >
        {/* Tab 1 */}
        <input
          type="radio"
          name="my_tabs_2"
          role="tab "
          className={`tab ${activeTab === 1 ? "text-primary" : ""}`}
          aria-label="ReactJs "
          onClick={() => handleTabClick(1)}
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-primary rounded-box p-12"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 justify-center">
            {projectsData.map((project) => (
              <Card
                key={project.id}
                img={project.DarkImage}
                projectName={project.projectName}
                tags={project.tags}
                id={project.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

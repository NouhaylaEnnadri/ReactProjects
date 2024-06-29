import React, { useState } from "react";
import Card from "./Card";
import { project1 } from "../assets";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(1); // State to track active tab, defaulting to the first tab

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex); // Update active tab state when a tab is clicked
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 justify-center ">
            <Card img={project1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

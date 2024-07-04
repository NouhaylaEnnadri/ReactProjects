import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Nav } from "../components";
import Portfolio from "./Portfolio";
import DetailsPages from "./DetailsPages";

const Page = () => {
  return (
    <div className="p-6">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Portfolio />} />

          <Route path="/details/:id" element={<DetailsPages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Page;

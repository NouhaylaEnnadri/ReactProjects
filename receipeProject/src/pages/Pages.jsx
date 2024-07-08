import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Category, ComingSoon, Nav, Search } from "../Components";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Recipe from "./Recipe";
import Searched from "./Searched";

const Pages = () => {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          <Search />
          <div className="flex justify-center mt-12 mb-6">
            <Category />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/Recipe/:name" element={<Recipe />} />
            <Route path="/search/:search" element={<Searched />} />
            <Route path="/comingSoon" element={<ComingSoon />} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
};

export default Pages;

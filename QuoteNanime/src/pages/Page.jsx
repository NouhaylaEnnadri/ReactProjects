import React from "react";
import Main_Page from "./Main_Page";
import { ComingSoon, Footer, Header, MoreInfo } from "../components";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Quote_Page from "./Quote_Page";

const Page = () => {
  return (
    <BrowserRouter>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Main_Page />} />
          <Route path="/Quote" element={<Quote_Page />} />
          <Route path="/MoreInfo" element={<MoreInfo />} />
          <Route path="/comingSoon" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default Page;

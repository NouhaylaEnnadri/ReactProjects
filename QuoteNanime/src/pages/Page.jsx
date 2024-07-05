import React from "react";
import Main_Page from "./Main_Page";
import { Footer, Header } from "../components";
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
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default Page;

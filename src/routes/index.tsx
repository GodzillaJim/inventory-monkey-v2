import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainApp from "../pages";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;

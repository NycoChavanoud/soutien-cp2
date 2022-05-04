import React from "react";
import { Route, Routes } from "react-router-dom";
import Characters from "../routes/Characters";
import Home from "../routes/Home";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters/:id" element={<Characters />} />
      </Routes>
    </main>
  );
};

export default Main;

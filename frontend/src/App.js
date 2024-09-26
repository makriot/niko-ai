import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import RegisterBaker from "./pages/RegisterBaker";
import Constructor from "./pages/Constructor";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Перенаправляем "/" на Marketplace */}
        <Route path="/" element={<Marketplace />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/register-baker" element={<RegisterBaker />} />
        <Route path="/constructor" element={<Constructor />} />
      </Routes>
    </Router>
  );
};

export default App;

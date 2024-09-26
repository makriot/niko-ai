import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import RegisterBaker from "./pages/RegisterBaker";
import RegisterClient from "./pages/RegisterClient";
import Constructor from "./pages/Constructor";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/register-baker" element={<RegisterBaker />} />
        <Route path="/register-client" element={<RegisterClient />} />
        <Route path="/constructor" element={<Constructor />} />
      </Routes>
    </Router>
  );
};

export default App;

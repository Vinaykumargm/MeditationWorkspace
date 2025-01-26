//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home"
import MeditationPage from "./Pages/MeditationPage";
import ResourcesPage from "./Pages/ResourcesPage";
import StaticExperiences from "./Pages/StaticExperiences";
import DynamicExperiences from "./Pages/DynamicExperiences";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meditation" element={<MeditationPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/static-experiences" element={<StaticExperiences />} />
          <Route path="/dynamic-experiences" element={<DynamicExperiences />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

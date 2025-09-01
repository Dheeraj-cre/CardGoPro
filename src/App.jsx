import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import SixthSection from "./components/Sixthsection";

// Pages
import CardDesignsPage from "./components/CardDesignsPage";

function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />     {/* ✅ root route */}
        <Route path="/card-designs" element={<CardDesignsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

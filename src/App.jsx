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

// Temporary placeholder pages (you can replace with real ones)
const FormPage = () => <h1>Form Page</h1>;
const AboutPage = () => <h1>About Page</h1>;
const AuthPage = () => <h1>Login / Signup Page</h1>;

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
        <Route path="/" element={<Home />} />
        <Route path="/card-designs" element={<CardDesignsPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;

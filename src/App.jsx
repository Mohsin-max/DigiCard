import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import CardBuilderPage from "./pages/CardBuilderPage";
import PublicCardPage from "./pages/PublicCardPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/cards/new" element={<CardBuilderPage />} />
        <Route path="/card/:username" element={<PublicCardPage />} />



      </Routes>
    </BrowserRouter>
  );
};

export default App;
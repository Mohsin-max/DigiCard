import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ClaimBanner from "../components/ClaimBanner";
import Footer from "../components/Footer";

const LandingPage = () => {
  const handleSeeDemo = () => {
    const card = document.getElementById("phone-card");
    if (!card) return;
    card.classList.add("scale-105", "ring-4", "ring-indigo-200");
    setTimeout(() => {
      card.classList.remove("scale-105", "ring-4", "ring-indigo-200");
    }, 600);
  };

  return (
    <>
      <Navbar />
      <main className="w-full pt-16 bg-slate-50 min-h-[calc(100vh-14rem)]">
        <Hero onSeeDemo={handleSeeDemo} />
        <Features />
        <ClaimBanner />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
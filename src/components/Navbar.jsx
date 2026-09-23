import React from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

const navLinks = [
  { to: "/#features", label: "Features" },
  { to: "/#pricing", label: "Pricing" },
  { to: "/#about", label: "About" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/60">
      <div className="h-14 max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            alt="DigiCard Logo"
            className="h-7 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1XA-rUKyw0HTxomf-T1HQRyOUcsEqtec7UgaM2nHHFlXjS0hSzNpe7ujnPD-MyB3DAuJ6Xi7FDNGFL_JPyHy9NSYTmiLBcayXWppm5ikieYKsCQsrWswFzmneDUOWrO6fAhM2DbFJ_8TIV9lXTPftJ3aHRsmRXaGYJQ_cJOpaekQoJTUXL-dXSA3Y_zYi4Kj6Hj0ZEJDKYxz645J2HLhi57SIRYEvrXLzySN8zTSd7T6OmZ4Yd2p75s"
          />
          <span className="text-[15px] font-semibold text-slate-900 tracking-tight">
            DigiCard
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.to}
              className="text-[13px] font-medium text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg hover:bg-slate-100/70 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5">
          <Link
            to="/auth"
            className="hidden sm:inline-flex text-[13px] font-medium text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg hover:bg-slate-100/70 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/auth"
            className="inline-flex items-center justify-center text-[13px] font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-1.5 rounded-lg shadow-sm shadow-indigo-600/20 transition-all active:scale-[0.97]"
          >
            Get Started
          </Link>
          <div className="hidden sm:flex w-7 h-7 rounded-full bg-indigo-600 items-center justify-center ml-0.5">
            <User className="text-white" size={14} strokeWidth={2.2} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
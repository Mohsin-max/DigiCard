import React from "react";
import { Smartphone, Laptop, QrCode, Eye } from "lucide-react";

const anchors = [
  { href: "#section-theme", label: "Theme" },
  { href: "#section-identity", label: "Identity" },
  { href: "#section-basic", label: "Bio" },
  { href: "#section-contact", label: "Contact" },
  { href: "#section-social", label: "Socials" },
];

const BuilderToolbar = () => {
  return (
    <div className="w-full bg-white border-b border-slate-200/70 z-30 px-5 py-2.5">
      <div className="max-w-[1500px] mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px] text-emerald-600 tracking-wider uppercase font-semibold">
              Live Builder
            </span>
          </div>
          <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
          <div className="hidden sm:flex items-center gap-1.5 text-slate-500 text-[12px]">
            <span>Mode:</span>
            <span className="text-slate-900 font-semibold">
              Pro Executive Bio
            </span>
            <span className="px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[10px] uppercase font-bold tracking-wider">
              v2.4
            </span>
          </div>
        </div>

        {/* Center anchors */}
        <div className="hidden lg:flex items-center gap-0.5 bg-slate-100 p-0.5 rounded-lg">
          {anchors.map((a, i) => (
            <a
              key={a.href}
              href={a.href}
              className={`px-2.5 py-1 rounded-md text-[12px] transition-all ${
                i === 0
                  ? "text-slate-900 bg-white shadow-sm font-semibold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/70 font-medium"
              }`}
            >
              {a.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg">
            <button
              className="p-1.5 rounded-md bg-white shadow-sm text-indigo-600 text-[12px] flex items-center gap-1"
              type="button"
            >
              <Smartphone size={13} />
              <span className="hidden xl:inline text-slate-900 font-medium">
                Mobile
              </span>
            </button>
            <button
              className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 text-[12px] flex items-center gap-1 transition-colors"
              type="button"
            >
              <Laptop size={13} />
              <span className="hidden xl:inline">Desktop</span>
            </button>
            <button
              className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 text-[12px] flex items-center gap-1 transition-colors"
              type="button"
            >
              <QrCode size={13} />
              <span className="hidden xl:inline">QR</span>
            </button>
          </div>

          <button
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200/70 text-slate-700 hover:bg-slate-50 text-[12px] font-medium transition-colors"
            type="button"
          >
            <Eye size={13} />
            <span>Preview</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuilderToolbar;
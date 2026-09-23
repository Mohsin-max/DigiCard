import React from "react";
import { BadgeCheck, Check, Palette } from "lucide-react";

const themes = [
  { key: "minimalist", label: "Minimal" },
  { key: "modern-mesh", label: "Modern" },
  { key: "executive-dark", label: "Executive" },
  { key: "vibrant-bold", label: "Vibrant" },
];

const ThemePreview = ({ themeKey }) => {
  switch (themeKey) {
    case "modern-mesh":
      return (
        <div className="w-full h-20 rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-400 p-2 flex flex-col justify-between overflow-hidden relative text-white">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-700/60 to-transparent"></div>
          <div className="relative z-10 flex justify-between items-center">
            <span className="text-[8px] uppercase tracking-wider bg-white/30 px-1 py-0.5 rounded">
              Active
            </span>
            <BadgeCheck size={11} />
          </div>
          <div className="relative z-10 flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-white ring-2 ring-indigo-500"></div>
            <div className="h-1 w-8 rounded-full bg-white"></div>
          </div>
          <div className="relative z-10 space-y-0.5">
            <div className="h-1 w-full rounded bg-white/80"></div>
            <div className="h-1 w-2/3 rounded bg-white/60"></div>
          </div>
        </div>
      );
    case "executive-dark":
      return (
        <div className="w-full h-20 rounded-lg bg-slate-900 p-2 flex flex-col justify-between overflow-hidden">
          <div className="h-1.5 w-5 rounded-full bg-white/20"></div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-white/30"></div>
            <div className="h-1 w-8 rounded-full bg-white/30"></div>
          </div>
          <div className="space-y-0.5">
            <div className="h-1 w-full rounded bg-white/20"></div>
            <div className="h-1 w-3/4 rounded bg-white/10"></div>
          </div>
        </div>
      );
    case "vibrant-bold":
      return (
        <div className="w-full h-20 rounded-lg bg-gradient-to-br from-orange-600 via-indigo-500 to-indigo-700 p-2 flex flex-col justify-between overflow-hidden">
          <div className="h-1.5 w-6 rounded-full bg-white/40"></div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-white/80"></div>
            <div className="h-1 w-9 rounded-full bg-white/60"></div>
          </div>
          <div className="space-y-0.5">
            <div className="h-1 w-full rounded bg-white/40"></div>
            <div className="h-1 w-4/5 rounded bg-white/30"></div>
          </div>
        </div>
      );
    default:
      return (
        <div className="w-full h-20 rounded-lg bg-white p-2 flex flex-col justify-between overflow-hidden border border-slate-200">
          <div className="h-1.5 w-6 rounded-full bg-slate-200"></div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-slate-200"></div>
            <div className="h-1 w-8 rounded-full bg-slate-200"></div>
          </div>
          <div className="space-y-0.5">
            <div className="h-1 w-full rounded bg-slate-100"></div>
            <div className="h-1 w-4/5 rounded bg-slate-100"></div>
          </div>
        </div>
      );
  }
};

const ThemeSection = ({ selected, onSelect }) => {
  return (
    <section
      className="p-5 rounded-xl bg-white border border-slate-200/70 shadow-sm"
      id="section-theme"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600 text-[11px] font-bold">
            1
          </div>
          <div>
            <h2 className="text-[14px] font-semibold text-slate-900">
              Theme & Visual Style
            </h2>
            <p className="text-[12px] text-slate-500">
              Pick a layout for your industry
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-400">
          <Palette size={11} />
          4 themes
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {themes.map((t) => {
          const active = selected === t.key;
          return (
            <button
              key={t.key}
              onClick={() => onSelect(t.key)}
              className={`group text-left p-1.5 rounded-lg transition-all flex flex-col gap-1.5 ${
                active
                  ? "bg-indigo-50/60 ring-2 ring-indigo-500 ring-offset-1"
                  : "bg-slate-50 hover:bg-slate-100"
              }`}
              type="button"
            >
              <ThemePreview themeKey={t.key} />
              <div className="flex items-center justify-between px-0.5">
                <span
                  className={`text-[11px] font-semibold ${
                    active ? "text-indigo-700" : "text-slate-700"
                  }`}
                >
                  {t.label}
                </span>
                {active ? (
                  <span className="w-3.5 h-3.5 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                    <Check size={9} strokeWidth={3} />
                  </span>
                ) : (
                  <span className="w-3 h-3 rounded-full border border-slate-300"></span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default ThemeSection;
import React from "react";
import { Pencil, Check, Palette, User } from "lucide-react";

const accentColors = [
  { hex: "#4F46E5", className: "bg-indigo-600" },
  { hex: "#1E293B", className: "bg-slate-900" },
  { hex: "#A44100", className: "bg-orange-700" },
  { hex: "#4648D4", className: "bg-indigo-500" },
];

const IdentitySection = ({ avatar, accent, name, onAccentChange }) => {
  return (
    <section
      className="p-5 rounded-xl bg-white border border-slate-200/70 shadow-sm"
      id="section-identity"
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-6 h-6 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600 text-[11px] font-bold">
          2
        </div>
        <div>
          <h2 className="text-[14px] font-semibold text-slate-900">
            Profile Identity
          </h2>
          <p className="text-[12px] text-slate-500">
            Avatar and card aura color
          </p>
        </div>
      </div>

      {/* Avatar */}
      <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center gap-3 mb-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 p-0.5 shadow-md shadow-indigo-500/20">
            <img
              className="w-full h-full rounded-full object-cover"
              alt={name}
              src={avatar}
            />
          </div>
          <button
            className="absolute -bottom-0.5 -right-0.5 p-1.5 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm hover:bg-slate-50 hover:text-indigo-600 transition-all"
            type="button"
          >
            <Pencil size={11} />
          </button>
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-[13px] font-semibold text-slate-900">{name}</h3>
          <p className="text-[11px] text-slate-500 mt-0.5">
            800x800px minimum. JPG, PNG or WebP.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2">
            <button
              className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-semibold hover:bg-slate-800 transition-all shadow-sm"
              type="button"
            >
              Upload Photo
            </button>
            <button
              className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-red-600 hover:border-red-200 hover:bg-red-50 text-[11px] font-medium transition-colors"
              type="button"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      {/* Accent */}
      <div>
        <label className="block text-[12px] font-semibold text-slate-700 mb-2">
          Cover Accent Color
        </label>
        <div className="flex flex-wrap items-center gap-2">
          {accentColors.map((c) => {
            const active = accent === c.hex;
            return (
              <button
                key={c.hex}
                onClick={() => onAccentChange(c.hex)}
                className={`w-8 h-8 rounded-full ${c.className} flex items-center justify-center text-white shadow-sm transition-all hover:scale-105 ${
                  active ? "ring-2 ring-offset-2 ring-slate-400" : ""
                }`}
                type="button"
              >
                {active && <Check size={13} strokeWidth={3} />}
              </button>
            );
          })}
          <button
            className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            type="button"
          >
            <Palette size={13} />
          </button>
          <div className="ml-1 pl-3 border-l border-slate-200 flex items-center gap-1.5 text-slate-500 text-[11px]">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: accent }}
            ></span>
            <span className="font-medium">{accent}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentitySection;
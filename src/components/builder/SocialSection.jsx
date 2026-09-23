import React, { useState } from "react";
import { Plus, LayoutGrid, GripVertical, AtSign, X, Globe } from "lucide-react";
import {
  InstagramIcon,
  LinkedInIcon,
  FacebookIcon,
} from "../builder/BrandIcons";

const initialSocials = [
  {
    key: "instagram",
    label: "Instagram",
    Icon: InstagramIcon,
    color: "#E4405F",
    value: "@alexrivera.design",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    Icon: LinkedInIcon,
    color: "#0A66C2",
    value: "linkedin.com/in/alexrivera",
  },
  {
    key: "twitter",
    label: "X",
    Icon: AtSign,
    color: "#0b1c30",
    value: "@alexrivera_dev",
  },
  {
    key: "facebook",
    label: "Facebook",
    Icon: FacebookIcon,
    color: "#1877F2",
    value: "facebook.com/alexrivera.ux",
  },
  {
    key: "website",
    label: "Portfolio",
    Icon: Globe,
    color: "#4F46E5",
    value: "https://studioapex.design",
  },
];

const SocialSection = () => {
  const [socials, setSocials] = useState(initialSocials);
  const [showIcons, setShowIcons] = useState(true);

  const remove = (key) =>
    setSocials((prev) => prev.filter((s) => s.key !== key));

  const update = (key, value) =>
    setSocials((prev) =>
      prev.map((s) => (s.key === key ? { ...s, value } : s))
    );

  return (
    <section
      className="p-5 rounded-xl bg-white border border-slate-200/70 shadow-sm"
      id="section-social"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600 text-[11px] font-bold">
            5
          </div>
          <div>
            <h2 className="text-[14px] font-semibold text-slate-900">
              Socials & Links
            </h2>
            <p className="text-[12px] text-slate-500">
              Reorder or toggle visibility
            </p>
          </div>
        </div>
        <button
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 text-[11px] font-semibold transition-colors"
          type="button"
        >
          <Plus size={12} />
          <span>Add</span>
        </button>
      </div>

      {/* Toggle */}
      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <LayoutGrid size={14} className="text-indigo-600" />
          <div>
            <div className="text-[12px] font-semibold text-slate-800">
              Show icons at top of card
            </div>
            <div className="text-[11px] text-slate-500">
              High-priority platforms under bio
            </div>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={showIcons}
            onChange={() => setShowIcons(!showIcons)}
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-slate-200 rounded-full peer peer-checked:bg-indigo-600 transition-all after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:shadow-sm after:transition-all peer-checked:after:translate-x-4"></div>
        </label>
      </div>

      {/* Rows */}
      <div className="space-y-1.5">
        {socials.map(({ key, label, Icon, color, value }) => (
          <div
            key={key}
            className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all flex items-center gap-2 group"
          >
            <GripVertical
              size={13}
              className="text-slate-400 cursor-grab shrink-0"
            />
            <div
              className="w-7 h-7 rounded-md bg-white border border-slate-200 flex items-center justify-center shrink-0"
              style={{ color }}
            >
              <Icon size={13} />
            </div>
            <div className="w-20 hidden sm:block text-[12px] font-semibold text-slate-800 truncate">
              {label}
            </div>
            <input
              value={value}
              onChange={(e) => update(key, e.target.value)}
              className="flex-1 h-7 px-2 rounded-md bg-white text-slate-900 text-[12px] border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-100 outline-none transition-all min-w-0"
              type="text"
            />
            <button
              onClick={() => remove(key)}
              className="p-1 rounded-md text-slate-400 hover:text-red-600 hover:bg-white transition-colors shrink-0"
              type="button"
            >
              <X size={13} />
            </button>
          </div>
        ))}
      </div>

      {/* Popular picker */}
      <div className="pt-3 mt-3 border-t border-slate-100 flex flex-wrap gap-1.5 items-center">
        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mr-1">
          Popular
        </span>
        {["WhatsApp", "Calendly", "GitHub", "Substack"].map((p) => (
          <button
            key={p}
            className="px-2 py-0.5 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-medium transition-colors"
            type="button"
          >
            + {p}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SocialSection;
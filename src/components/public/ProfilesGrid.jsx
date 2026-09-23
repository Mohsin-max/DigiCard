import React from "react";
import { Globe, ArrowRight } from "lucide-react";
import {
  LinkedInIcon,
  XIcon,
  InstagramIcon,
  FacebookIcon,
} from "../builder/BrandIcons";

const socials = [
  {
    Icon: LinkedInIcon,
    bg: "bg-[#0077b5]/10",
    color: "text-[#0077b5]",
    label: "LinkedIn",
    handle: "/in/alexrivera",
    href: "https://linkedin.com",
  },
  {
    Icon: XIcon,
    bg: "bg-slate-900/10",
    color: "text-slate-900",
    label: "X / Twitter",
    handle: "@riveradesign",
    href: "https://x.com",
  },
  {
    Icon: InstagramIcon,
    bg: "bg-[#e1306c]/10",
    color: "text-[#e1306c]",
    label: "Instagram",
    handle: "@rivera.ui",
    href: "https://instagram.com",
  },
  {
    Icon: FacebookIcon,
    bg: "bg-[#1877f2]/10",
    color: "text-[#1877f2]",
    label: "Facebook",
    handle: "/alexriveradesign",
    href: "https://facebook.com",
  },
];

const ProfilesGrid = () => {
  return (
    <div className="w-full mt-3 bg-white rounded-2xl border border-slate-200/70 shadow-sm p-3 flex flex-col gap-2">
      <div className="flex items-center justify-between px-1">
        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
          Profiles & Web
        </span>
        <span className="text-[10px] text-indigo-600 font-semibold">
          5 links
        </span>
      </div>

      {/* Primary portfolio */}
      <a
        href="https://studioapex.design"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-slate-50 to-indigo-50/40 border border-slate-100 hover:border-indigo-200 hover:shadow-sm transition-all group"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-indigo-500/20">
            <Globe size={16} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[13px] text-slate-900 font-semibold truncate group-hover:text-indigo-600 transition-colors">
              studioapex.design
            </span>
            <span className="text-[11px] text-slate-500 truncate">
              Official Portfolio
            </span>
          </div>
        </div>
        <ArrowRight
          size={14}
          className="text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all shrink-0"
        />
      </a>

      {/* Social Grid */}
      <div className="grid grid-cols-2 gap-1.5">
        {socials.map(({ Icon, bg, color, label, handle, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all"
          >
            <div
              className={`w-7 h-7 rounded-md ${bg} ${color} flex items-center justify-center shrink-0`}
            >
              <Icon size={13} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] text-slate-900 font-semibold truncate">
                {label}
              </span>
              <span className="text-[10px] text-slate-500 truncate">
                {handle}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfilesGrid;
import React from "react";
import {
  BadgeCheck,
  Eye,
  Heart,
  UserPlus,
  Phone,
  Mail,
  Share2,
} from "lucide-react";

const PublicCardProfile = ({
  liked,
  likeCount,
  onLike,
  onSaveContact,
}) => {
  return (
    <div className="px-4 pt-0 pb-4 relative flex flex-col">
      {/* Avatar row */}
      <div className="flex items-end justify-between -mt-12 mb-3">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 p-0.5 shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full rounded-full bg-white p-0.5">
              <img
                alt="Alex Rivera"
                className="w-full h-full rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Y-VNSBOmJyvB2hFaBgDis9wDlZi0wD9qtYwh6CTOEoL37-wxPQGE6I1EJoai-7z60lX1XhttdtD_DJvE8Dvp9uHUJlJ6KCefgxbN0Lrt1X9SjTvWLVx_f190-23rdKM_5nc0nM8bIuzsbxYVI3GIteN37hE8eLQlBF5Q-qzReqd35udlY5wr8KBtiMBvOg-IhvHwtyOS7QF4w1YrPhbZUjzPvR23UAwbjUX9899mKnFOTSR0kw"
              />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center shadow-sm">
            <BadgeCheck size={11} className="text-white" />
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-emerald-100 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] text-emerald-700 font-semibold">
            Online
          </span>
        </div>
      </div>

      {/* Identity */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <h1 className="text-[20px] leading-[26px] text-slate-900 tracking-[-0.02em] font-bold">
            Alex Rivera
          </h1>
          <BadgeCheck size={16} className="text-indigo-600" />
        </div>
        <p className="text-[12px] font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          @alexrivera
        </p>
        <p className="text-[13px] text-slate-600 leading-snug mt-1.5">
          Senior Product Designer & Systems Architect at{" "}
          <span className="text-slate-900 font-semibold">Studio Apex</span>
        </p>
        <p className="text-[12px] text-slate-500 mt-1.5 leading-relaxed">
          Designing fluid interfaces and modern cloud workflows.
        </p>
      </div>

      {/* Stats bar */}
      <div className="flex items-center gap-2 mt-3.5 p-2 bg-gradient-to-r from-slate-50 to-indigo-50/40 rounded-xl border border-slate-100 justify-between">
        <div className="flex items-center gap-1 text-slate-500 pl-1">
          <Eye size={14} />
          <span className="text-[12px] font-bold text-slate-900">14,820</span>
          <span className="text-[11px] text-slate-500">views</span>
        </div>
        <button
          aria-label="Appreciate card"
          onClick={onLike}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full shadow-sm transition-all active:scale-95 ${
            liked
              ? "bg-red-50 border border-red-100"
              : "bg-white border border-slate-200/70 hover:border-red-200"
          }`}
          type="button"
        >
          <Heart
            size={13}
            className={
              liked ? "fill-red-500 text-red-500 scale-110" : "text-red-500"
            }
          />
          <span className="text-[11px] font-bold text-slate-900">
            {likeCount.toLocaleString()}
          </span>
        </button>
      </div>

      {/* Primary Actions */}
      <div className="grid grid-cols-5 gap-1.5 mt-3">
        <button
          onClick={onSaveContact}
          className="col-span-3 flex items-center justify-center gap-1.5 bg-slate-900 text-white py-2 px-3 rounded-xl text-[12px] font-semibold shadow-sm shadow-slate-900/10 hover:bg-slate-800 active:scale-[0.98] transition-all"
          type="button"
        >
          <UserPlus size={14} />
          <span>Save Contact</span>
        </button>
        <a
          href="tel:+14158920192"
          title="Call"
          className="col-span-1 flex items-center justify-center bg-slate-100 text-slate-700 py-2 rounded-xl hover:bg-slate-200 active:scale-[0.96] transition-all"
        >
          <Phone size={14} />
        </a>
        <a
          href="mailto:alex@studioapex.design"
          title="Email"
          className="col-span-1 flex items-center justify-center bg-slate-100 text-slate-700 py-2 rounded-xl hover:bg-slate-200 active:scale-[0.96] transition-all"
        >
          <Mail size={14} />
        </a>
      </div>
    </div>
  );
};

export default PublicCardProfile;
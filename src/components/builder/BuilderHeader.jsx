import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Link as LinkIcon,
  Share,
  Upload,
  User,
} from "lucide-react";

const BuilderHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-white/80 backdrop-blur-xl border-b border-slate-200/70">
      <div className="h-full w-full px-5 flex items-center justify-between gap-3">
        {/* Left */}
        <div className="flex items-center gap-3 min-w-0">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors text-[12px] font-medium shrink-0"
          >
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Back</span>
          </Link>

          <div className="h-5 w-px bg-slate-200 shrink-0"></div>

          <div className="flex items-center gap-2 min-w-0">
            <img
              alt="DigiCard"
              className="h-6 w-auto object-contain shrink-0"
              src="https://lh3.googleusercontent.com/aida/AEtjO1VedH0-Gdn3yH5UPXXpiO0zB68lBoDrue5TLmTHm31gBSXoUH2uHp8D8qU37jywKWFE_CQpiWLDrFJ6FNpYadTTZJQ_D423pCMZZ5ZMIjju6BYK0dzQ2Ug-AOQ1i9xVc-GU2wP6eSXT4RRzT9_hk_gerx-wWEDB2kqtvNUY10W7R0rZRYswdKYRvZCNa6tp_tHTml6n8baAjQks4aHctQSHttbT47UUc2n5ydjSB_TyD8JgwdK-lHOv"
            />
            <span className="text-[13px] font-semibold text-slate-900 truncate">
              Edit Card
            </span>
            <span className="text-[12px] text-slate-400 hidden md:inline">
              / Bio Builder
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] shrink-0">
            <LinkIcon size={11} className="text-slate-500" />
            <span>digicard.bio/alexrivera</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-slate-500 text-[11px] shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>Autosaved</span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 shrink-0">
          <nav className="hidden xl:flex items-center gap-0.5">
            {["Design", "Links", "Analytics", "Settings"].map((t, i) => (
              <button
                key={t}
                className={`text-[12px] px-2.5 py-1.5 rounded-lg transition-colors ${
                  i === 0
                    ? "text-slate-900 font-semibold bg-slate-100"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50 font-medium"
                }`}
                type="button"
              >
                {t}
              </button>
            ))}
          </nav>

          <div className="w-px h-5 bg-slate-200 hidden xl:block"></div>

          <button
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200/70 text-slate-700 text-[12px] font-medium hover:bg-slate-50 transition-all"
            type="button"
          >
            <Share size={13} />
            <span className="hidden sm:inline">Share</span>
          </button>
          <button
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-[12px] font-semibold hover:bg-slate-800 shadow-sm shadow-slate-900/10 transition-all active:scale-[0.97]"
            type="button"
          >
            <Upload size={13} />
            <span className="hidden sm:inline">Save & Publish</span>
            <span className="sm:hidden">Save</span>
          </button>

          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-sm shadow-indigo-500/20 shrink-0">
            <User className="text-white" size={13} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default BuilderHeader;
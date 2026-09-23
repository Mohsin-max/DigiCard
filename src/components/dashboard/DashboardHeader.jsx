import React from "react";
import { Link } from "react-router-dom";
import { Search, Bell, Plus, User } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="fixed top-0 left-60 right-0 h-14 bg-white/80 backdrop-blur-xl border-b border-slate-200/70 z-40 flex items-center justify-between px-6">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200/70 rounded-lg text-[13px] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
            placeholder="Search cards, links, tags..."
            type="text"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-white border border-slate-200/70 text-[10px] text-slate-500 font-medium">
            <span>⌘</span>
            <span>K</span>
          </div>
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2 ml-4">
        <button
          className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors relative"
          type="button"
        >
          <Bell size={16} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 ring-2 ring-white"></span>
        </button>

        <Link
          to="/dashboard/cards/new"
          className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-[12px] font-semibold px-3 py-1.5 rounded-lg shadow-sm shadow-slate-900/10 transition-all active:scale-[0.97]"
        >
          <Plus size={14} />
          <span className="hidden sm:inline">New Card</span>
        </Link>

        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-sm shadow-indigo-500/20">
          <User className="text-white" size={13} />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
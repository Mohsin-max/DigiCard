import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  IdCard,
  BarChart3,
  SlidersHorizontal,
  User,
  MoreVertical,
  Sparkles,
} from "lucide-react";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  { to: "/dashboard/cards", label: "My Cards", icon: IdCard },
  { to: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/dashboard/settings", label: "Settings", icon: SlidersHorizontal },
];

const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-full w-60 bg-white border-r border-slate-200/70 z-50 flex flex-col justify-between">
      <div className="flex flex-col">
        {/* Brand */}
        <div className="h-14 px-4 flex items-center gap-2 border-b border-slate-200/70">
          <img
            alt="DigiCard Logo"
            className="h-6 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1VedH0-Gdn3yH5UPXXpiO0zB68lBoDrue5TLmTHm31gBSXoUH2uHp8D8qU37jywKWFE_CQpiWLDrFJ6FNpYadTTZJQ_D423pCMZZ5ZMIjju6BYK0dzQ2Ug-AOQ1i9xVc-GU2wP6eSXT4RRzT9_hk_gerx-wWEDB2kqtvNUY10W7R0rZRYswdKYRvZCNa6tp_tHTml6n8baAjQks4aHctQSHttbT47UUc2n5ydjSB_TyD8JgwdK-lHOv"
          />
          <span className="text-[14px] font-semibold text-slate-900 tracking-tight">
            DigiCard
          </span>
        </div>

        {/* Nav */}
        <nav className="px-2.5 py-3 space-y-0.5">
          <div className="px-2 py-1.5 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
            Workspace
          </div>
          {navItems.map(({ to, label, icon: Icon }) => {
            const active =
              location.pathname === to ||
              (to !== "/dashboard" && location.pathname.startsWith(to));
            return (
              <Link
                key={to}
                to={to}
                className={`relative flex items-center gap-2.5 px-2.5 py-2 rounded-lg transition-all text-[13px] ${
                  active
                    ? "bg-gradient-to-r from-indigo-50 to-violet-50/40 text-indigo-700 font-semibold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                }`}
              >
                {active && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 rounded-r-full bg-indigo-600"></span>
                )}
                <Icon size={16} />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Pro upsell */}
        <div className="mx-3 mt-4 rounded-xl p-3 bg-gradient-to-br from-indigo-600 to-violet-600 relative overflow-hidden">
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
          <div className="relative">
            <div className="flex items-center gap-1.5 mb-1">
              <Sparkles size={12} className="text-white" />
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                Pro Tip
              </span>
            </div>
            <p className="text-[11px] text-indigo-100 leading-snug">
              Enable NFC on your physical card for instant taps.
            </p>
            <button
              className="mt-2 text-[11px] font-semibold text-white hover:underline"
              type="button"
            >
              Learn more →
            </button>
          </div>
        </div>
      </div>

      {/* User */}
      <div className="p-2.5 border-t border-slate-200/70">
        <div className="p-1.5 rounded-lg bg-slate-50 flex items-center justify-between hover:bg-slate-100 transition-colors">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shrink-0 shadow-sm shadow-indigo-500/20">
              <User className="text-white" size={14} />
            </div>
            <div className="min-w-0">
              <p className="text-[12px] font-semibold text-slate-900 truncate">
                Alex Rivera
              </p>
              <span className="text-[10px] text-indigo-600 font-semibold">
                Pro Plan
              </span>
            </div>
          </div>
          <button
            className="p-1 text-slate-500 hover:text-slate-900 hover:bg-white rounded-md transition-colors"
            type="button"
          >
            <MoreVertical size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
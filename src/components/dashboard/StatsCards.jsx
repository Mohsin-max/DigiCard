import React from "react";
import {
  Layers,
  Eye,
  Bookmark,
  TrendingUp,
  ArrowUp,
  Smartphone,
  Contact,
} from "lucide-react";

const stats = [
  {
    icon: Layers,
    iconBg: "from-indigo-500 to-violet-600",
    badge: "+1 this month",
    badgeClass: "bg-indigo-50 text-indigo-700 border-indigo-100",
    label: "Total Cards",
    value: "4",
    sub: "of 5 max",
    progress: 80,
  },
  {
    icon: Eye,
    iconBg: "from-sky-500 to-indigo-600",
    badge: "+18.4%",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-100",
    badgeIcon: TrendingUp,
    label: "Total Views",
    value: "14,820",
    sub: "vs 12.5k last month",
    footer: { icon: Smartphone, text: "84% via mobile or NFC" },
  },
  {
    icon: Bookmark,
    iconBg: "from-violet-500 to-indigo-600",
    badge: "+12.1%",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-100",
    badgeIcon: ArrowUp,
    label: "Likes / Saves",
    value: "3,490",
    sub: "vCard downloads",
    footer: { icon: Contact, text: "1,240 contact exports" },
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map(
        ({
          icon: Icon,
          iconBg,
          badge,
          badgeClass,
          badgeIcon: BadgeIcon,
          label,
          value,
          sub,
          progress,
          footer,
        }) => (
          <div
            key={label}
            className="group relative bg-white rounded-xl p-4 border border-slate-200/70 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200 overflow-hidden"
          >
            {/* Corner glow on hover */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-100/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative">
              {/* Top row */}
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`w-9 h-9 rounded-lg bg-gradient-to-br ${iconBg} flex items-center justify-center text-white shadow-sm`}
                >
                  <Icon size={16} />
                </div>
                <span
                  className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md border ${badgeClass} text-[10px] font-semibold`}
                >
                  {BadgeIcon && <BadgeIcon size={10} />}
                  {badge}
                </span>
              </div>

              {/* Label */}
              <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                {label}
              </div>

              {/* Value */}
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-[24px] font-bold text-slate-900 tracking-tight">
                  {value}
                </span>
                <span className="text-[12px] text-slate-500">{sub}</span>
              </div>

              {/* Progress bar */}
              {progress !== undefined && (
                <div className="w-full bg-slate-100 rounded-full h-1 mt-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-violet-600 h-full rounded-full transition-all duration-700"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              )}

              {/* Footer */}
              {footer && (
                <div className="flex items-center gap-1.5 mt-3 text-slate-500 text-[11px]">
                  <footer.icon size={12} className="text-indigo-600" />
                  <span>{footer.text}</span>
                </div>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default StatsCards;
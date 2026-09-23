import React from "react";
import { ArrowRight, Users, Sparkles } from "lucide-react";

const ClaimBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20 w-full">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 shadow-xl shadow-indigo-900/10">
        {/* Dotted pattern */}
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Glow orbs */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-400/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Content */}
        <div className="relative p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Left — Text */}
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-4">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
              </span>
              <span className="text-[11px] font-medium text-indigo-100">
                2,340 handles claimed this week
              </span>
            </div>

            <h3 className="text-2xl md:text-[28px] md:leading-[36px] font-bold text-white tracking-[-0.02em]">
              Claim your custom link today
            </h3>
            <p className="text-[14px] md:text-[15px] text-indigo-100/80 mt-2 leading-relaxed">
              Reserve your branded username before someone else does. Takes
              less than a minute.
            </p>
          </div>

          {/* Right — Input + Button */}
          <div className="w-full lg:w-auto lg:min-w-[420px]">
            <div className="flex flex-col sm:flex-row gap-2 p-1.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15">
              <div className="flex items-center flex-1 bg-white rounded-xl px-3 h-11 shadow-sm">
                <span className="text-[13px] text-slate-400 whitespace-nowrap">
                  digicard.co/
                </span>
                <input
                  className="flex-1 bg-transparent border-0 outline-none text-slate-900 text-[14px] px-1 placeholder:text-slate-400 font-medium min-w-0"
                  placeholder="yourname"
                  type="text"
                />
              </div>
              <button
                className="inline-flex items-center justify-center gap-1.5 bg-white text-indigo-700 text-[13px] font-semibold px-4 h-11 rounded-xl hover:bg-slate-50 transition-all active:scale-[0.97] shadow-sm whitespace-nowrap group"
                type="button"
              >
                <Sparkles size={14} />
                <span>Claim Handle</span>
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
            </div>

            {/* Trust row */}
            <div className="flex items-center gap-2.5 mt-3 pl-1">
              <div className="flex -space-x-1.5">
                <div className="w-5 h-5 rounded-full ring-2 ring-indigo-600 bg-gradient-to-br from-pink-300 to-pink-500"></div>
                <div className="w-5 h-5 rounded-full ring-2 ring-indigo-600 bg-gradient-to-br from-emerald-300 to-emerald-500"></div>
                <div className="w-5 h-5 rounded-full ring-2 ring-indigo-600 bg-gradient-to-br from-amber-300 to-amber-500"></div>
                <div className="w-5 h-5 rounded-full ring-2 ring-indigo-600 bg-gradient-to-br from-sky-300 to-sky-500"></div>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-indigo-100/70">
                <Users size={11} />
                <span>Joined by 15k+ creators</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaimBanner;
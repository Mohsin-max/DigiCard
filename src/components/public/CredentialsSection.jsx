import React from "react";
import { GraduationCap, BadgeCheck, Cake, Heart } from "lucide-react";

const CredentialsSection = () => {
  return (
    <div className="w-full mt-3 grid grid-cols-1 gap-3">
      {/* Education */}
      <div className="bg-white rounded-2xl border border-slate-200/70 shadow-sm p-3.5">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
            Education
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] text-indigo-600 font-semibold">
            <BadgeCheck size={11} />
            Verified
          </span>
        </div>
        <div className="flex items-start gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shrink-0 shadow-sm shadow-indigo-500/20">
            <GraduationCap size={16} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[13px] text-slate-900 font-semibold">
              Stanford University
            </span>
            <span className="text-[12px] text-slate-600">
              B.S. in Human-Computer Interaction
            </span>
            <span className="text-[10px] text-slate-400 mt-0.5">
              Class of 2014 • Dean's Honors
            </span>
          </div>
        </div>
      </div>

      {/* Personal */}
      <div className="bg-white rounded-2xl border border-slate-200/70 shadow-sm p-3.5">
        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
          Personal
        </span>
        <div className="grid grid-cols-2 gap-2 mt-2.5">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
            <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center text-slate-500 shrink-0 shadow-sm">
              <Cake size={13} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">
                Birthday
              </span>
              <span className="text-[11px] text-slate-900 font-semibold truncate">
                June 18, 1992
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-red-50/50 border border-red-100/60">
            <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center shrink-0 shadow-sm">
              <Heart size={13} className="fill-red-500 text-red-500" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">
                Status
              </span>
              <span className="text-[11px] text-slate-900 font-semibold truncate">
                Married
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredentialsSection;
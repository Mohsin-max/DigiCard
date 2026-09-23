import React from "react";
import { GraduationCap, ChevronDown } from "lucide-react";

const BasicInfoSection = ({ data, onChange }) => {
  const bioLen = data.bio?.length || 0;

  return (
    <section
      className="p-5 rounded-xl bg-white border border-slate-200/70 shadow-sm"
      id="section-basic"
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-6 h-6 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600 text-[11px] font-bold">
          3
        </div>
        <div>
          <h2 className="text-[14px] font-semibold text-slate-900">
            Basic Information
          </h2>
          <p className="text-[12px] text-slate-500">
            Professional titles and public bio
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {/* Full Name */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-[12px] font-semibold text-slate-700">
              Full Name
            </label>
            <span className="text-[10px] text-indigo-600 font-semibold">
              Required
            </span>
          </div>
          <input
            value={data.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            className="w-full h-9 px-3 rounded-lg bg-white text-slate-900 text-[13px] border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
            placeholder="e.g. Alexandra Rivera"
            type="text"
          />
        </div>

        {/* Bio */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-[12px] font-semibold text-slate-700">
              Headline & Short Bio
            </label>
            <span className="text-[10px] text-slate-400 font-medium">
              {bioLen}/160
            </span>
          </div>
          <textarea
            value={data.bio}
            onChange={(e) => onChange("bio", e.target.value.slice(0, 160))}
            rows={3}
            className="w-full p-2.5 rounded-lg bg-white text-slate-900 text-[13px] border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all resize-none leading-relaxed"
            placeholder="Craft a punchy summary of what you build and lead..."
          />
        </div>

        {/* DOB + Marital */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[12px] font-semibold text-slate-700 mb-1.5">
              Date of Birth
            </label>
            <input
              value={data.dob}
              onChange={(e) => onChange("dob", e.target.value)}
              type="date"
              className="w-full h-9 px-3 rounded-lg bg-white text-slate-900 text-[13px] border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-slate-700 mb-1.5">
              Marital Status
            </label>
            <div className="relative">
              <select
                value={data.maritalStatus}
                onChange={(e) => onChange("maritalStatus", e.target.value)}
                className="w-full h-9 px-3 rounded-lg bg-white text-slate-900 text-[13px] border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none appearance-none cursor-pointer transition-all"
              >
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="prefer_not">Prefer not to say</option>
                <option value="custom">Other</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
              />
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <label className="block text-[12px] font-semibold text-slate-700 mb-1.5">
            Education & Credentials
          </label>
          <div className="relative">
            <input
              value={data.education}
              onChange={(e) => onChange("education", e.target.value)}
              className="w-full h-9 pl-3 pr-9 rounded-lg bg-white text-slate-900 text-[13px] border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
              placeholder="Degree, Institution or Certifications"
              type="text"
            />
            <GraduationCap
              size={14}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicInfoSection;
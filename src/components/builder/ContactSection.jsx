import React from "react";
import { Mail, Globe, MapPin, Building2 } from "lucide-react";

const ContactSection = ({ data, onChange }) => {
  return (
    <section
      className="p-5 rounded-xl bg-white border border-slate-200/70 shadow-sm"
      id="section-contact"
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-6 h-6 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600 text-[11px] font-bold">
          4
        </div>
        <div>
          <h2 className="text-[14px] font-semibold text-slate-900">
            Contact Details
          </h2>
          <p className="text-[12px] text-slate-500">
            Visitors can download .VCF in one tap
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {/* Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[12px] font-semibold text-slate-700 mb-1.5">
              Work Email
            </label>
            <div className="relative">
              <Mail
                size={13}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                value={data.email}
                onChange={(e) => onChange("email", e.target.value)}
                type="email"
                className="w-full h-9 pl-8 pr-3 rounded-lg bg-white text-slate-900 text-[13px] border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-slate-700 mb-1.5">
              Phone
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-2.5 rounded-l-lg bg-slate-50 border border-r-0 border-slate-200 text-slate-700 text-[11px] font-medium">
                {data.phoneCode}
              </span>
              <input
                value={data.phone}
                onChange={(e) => onChange("phone", e.target.value)}
                type="tel"
                className="w-full h-9 px-3 rounded-r-lg bg-white text-slate-900 text-[13px] border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Country + City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[12px] font-semibold text-slate-700 mb-1.5">
              Country
            </label>
            <div className="relative">
              <input
                value={data.country}
                onChange={(e) => onChange("country", e.target.value)}
                className="w-full h-9 pl-3 pr-8 rounded-lg bg-white text-slate-900 text-[13px] border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
              />
              <Globe
                size={13}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-slate-700 mb-1.5">
              City
            </label>
            <div className="relative">
              <input
                value={data.city}
                onChange={(e) => onChange("city", e.target.value)}
                className="w-full h-9 pl-3 pr-8 rounded-lg bg-white text-slate-900 text-[13px] border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
              />
              <MapPin
                size={13}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-[12px] font-semibold text-slate-700 mb-1.5">
            Office / Studio Address
          </label>
          <div className="relative">
            <input
              value={data.address}
              onChange={(e) => onChange("address", e.target.value)}
              className="w-full h-9 pl-3 pr-8 rounded-lg bg-white text-slate-900 text-[13px] border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
              placeholder="Street name and suite"
              type="text"
            />
            <Building2
              size={13}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
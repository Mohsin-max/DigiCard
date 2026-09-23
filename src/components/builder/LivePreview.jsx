import React from "react";
import {
  Signal,
  Wifi,
  BatteryFull,
  BadgeCheck,
  Contact,
  Phone,
  Mail,
  ArrowLeftRight,
  GraduationCap,
  MapPin,
  Calendar,
  ArrowRight,
  Nfc,
  AtSign,
  Globe,
} from "lucide-react";
import {
  InstagramIcon,
  LinkedInIcon,
  FacebookIcon,
  WhatsAppIcon,
} from "../builder/BrandIcons";

const LivePreview = ({ data }) => {
  const handle =
    "@" +
    (data.fullName || "yourname").toLowerCase().replace(/\s+/g, "");

  const shortLocation = data.city?.split(",")[0] || "San Francisco";
  const educationShort =
    data.education?.split(",")[0] || "Stanford University";

  return (
    <div className="w-full max-w-[340px] flex flex-col items-center">
      {/* Phone Frame */}
      <div className="w-full rounded-[40px] p-2.5 bg-slate-900 shadow-2xl shadow-slate-900/20 relative ring-1 ring-slate-900/5">
        {/* Side buttons */}
        <div className="absolute -left-1 top-24 w-1 h-7 bg-slate-800/80 rounded-l-sm"></div>
        <div className="absolute -left-1 top-36 w-1 h-10 bg-slate-800/80 rounded-l-sm"></div>
        <div className="absolute -right-1 top-28 w-1 h-12 bg-slate-800/80 rounded-r-sm"></div>

        {/* Screen */}
        <div className="w-full rounded-[32px] bg-white overflow-hidden flex flex-col relative select-none max-h-[660px]">
          {/* Status bar */}
          <div className="w-full pt-2.5 px-5 pb-1.5 flex items-center justify-between text-white text-[11px] font-semibold tracking-tight z-20 bg-indigo-600">
            <span>9:41</span>
            <div className="w-16 h-3.5 bg-slate-900 rounded-full flex items-center justify-end px-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </div>
            <div className="flex items-center gap-1">
              <Signal size={11} />
              <Wifi size={11} />
              <BatteryFull size={11} />
            </div>
          </div>

          {/* Scroll area */}
          <div className="overflow-y-auto w-full pb-6">
            {/* Gradient Header */}
            <div className="h-28 w-full bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-600 relative flex items-start justify-end p-2.5">
              <div className="absolute -bottom-9 left-5">
                <div className="relative">
                  <img
                    className="w-18 h-18 rounded-full object-cover ring-4 ring-white shadow-lg w-[72px] h-[72px]"
                    alt={data.fullName}
                    src={data.avatar}
                  />
                  <span className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center ring-2 ring-white">
                    <BadgeCheck size={12} />
                  </span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-white/25 backdrop-blur-md text-white text-[9px] uppercase font-bold tracking-wider">
                PRO
              </span>
            </div>

            {/* Profile info */}
            <div className="pt-11 px-5 space-y-2.5">
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-[17px] font-bold text-slate-900">
                    {data.fullName || "Your Name"}
                  </h4>
                  <BadgeCheck size={15} className="text-indigo-600" />
                </div>
                <div className="text-[12px] font-semibold text-indigo-600">
                  {handle}
                </div>
                <p className="text-[12px] text-slate-600 pt-0.5 leading-snug">
                  {data.bio}
                </p>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-4 gap-1.5 pt-1">
                <button className="flex flex-col items-center gap-0.5 p-1.5 rounded-lg bg-slate-900 text-white shadow-sm hover:scale-105 transition-transform">
                  <Contact size={14} />
                  <span className="text-[9px] font-semibold">VCF</span>
                </button>
                <button className="flex flex-col items-center gap-0.5 p-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors">
                  <Phone size={14} />
                  <span className="text-[9px]">Call</span>
                </button>
                <button className="flex flex-col items-center gap-0.5 p-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors">
                  <Mail size={14} />
                  <span className="text-[9px]">Email</span>
                </button>
                <button className="flex flex-col items-center gap-0.5 p-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors">
                  <ArrowLeftRight size={14} />
                  <span className="text-[9px]">Swap</span>
                </button>
              </div>

              {/* Social mini bar */}
              <div className="flex items-center justify-around py-2 px-2.5 rounded-lg bg-slate-50 text-slate-600">
                <InstagramIcon size={16} className="text-[#E4405F]" />
                <LinkedInIcon size={16} className="text-[#0A66C2]" />
                <AtSign size={16} className="text-slate-900" />
                <FacebookIcon size={16} className="text-[#1877F2]" />
                <Globe size={16} className="text-indigo-600" />
              </div>

              {/* Education + Location */}
              <div className="space-y-1.5 pt-0.5">
                <div className="p-2 rounded-lg bg-slate-50 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
                    <GraduationCap size={13} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">
                      Education
                    </div>
                    <div className="text-[12px] text-slate-900 font-medium truncate">
                      {educationShort}
                    </div>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-slate-50 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
                    <MapPin size={13} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">
                      Location
                    </div>
                    <div className="text-[12px] text-slate-900 font-medium truncate">
                      {shortLocation},{" "}
                      {data.country?.split(" ")[0] || "California"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Custom links */}
              <div className="space-y-1.5 pt-1">
                <a
                  href="#"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-between text-slate-900 group"
                >
                  <div className="flex items-center gap-2">
                    <WhatsAppIcon size={15} className="text-[#25D366]" />
                    <span className="text-[12px] font-semibold">
                      WhatsApp
                    </span>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-slate-500 group-hover:translate-x-0.5 transition-transform"
                  />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-between text-slate-900 group"
                >
                  <div className="flex items-center gap-2">
                    <Calendar size={15} className="text-indigo-600" />
                    <span className="text-[12px] font-semibold">
                      Book a Call
                    </span>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-slate-500 group-hover:translate-x-0.5 transition-transform"
                  />
                </a>
              </div>

              {/* NFC cue */}
              <div className="pt-3 flex flex-col items-center justify-center gap-1 opacity-90">
                <div className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[9px] flex items-center gap-1">
                  <Nfc size={11} className="text-indigo-500" />
                  <span>Tap or Scan to Connect</span>
                </div>
                <span className="text-[9px] text-slate-400">
                  Powered by DigiCard
                </span>
              </div>
            </div>
          </div>

          {/* Home bar */}
          <div className="w-full pb-1.5 pt-1 flex justify-center bg-white">
            <div className="w-24 h-1 rounded-full bg-slate-300"></div>
          </div>
        </div>
      </div>

      {/* Live indicator */}
      <div className="mt-3 px-3 py-1 rounded-full bg-white border border-slate-200/70 text-slate-600 text-[11px] shadow-sm flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Live preview · Updates in real-time</span>
      </div>
    </div>
  );
};

export default LivePreview;
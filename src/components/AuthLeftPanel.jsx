import React from "react";
import {
  Nfc,
  QrCode,
  Folder,
  Calendar,
  ArrowRight,
  Star,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const AuthLeftPanel = () => {
  const linkItems = [
    {
      icon: Folder,
      title: "2025 Design Portfolio",
      subtitle: "Case studies & design system",
    },
    {
      icon: Calendar,
      title: "Schedule Intro Chat",
      subtitle: "15 min quick consultation",
    },
  ];

  const avatars = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCebB5uo2quhV9cy6v4GWUZd9G9Hjmp4eD8mrWXPsUj1AVnKbYPfWsRYN6lYgomaqrnj6a_1XoJclBT5Q5IrMU02I1ijD_lgFl7vXOMu6YUlsqEy4BZg-2EW3WgUFg_gBN9LWDlZtv4-j0HZgmQJhrUmjeXtokNam40WqxYL34uXV8dRuQImZzdO993X-sGE5TasS-qCVmK6sEuq_QQt38CP7-Jgl4N8TELOlbbJYsIZHhVETIyYA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAOfQui7X4bh5RAZ-PZ2cjOYnC0KcaH5erjBI-3mU9gegu-tG0HD_DI073jdqTQ-_bYsP9RwqCo8b4qhjAkJlyztdfx4zTwPRTvChyFqL6pjcT6raEiZqANt1kToaMsodO4sPN1eZZi76q8pdTXj6dqXsgieU9xen8wSpxUVkC74ehzFY_nLYM2X0G51I6qOV7xquDjheh3QAinWBUeALqnsSqt0CiuLJaCPEXDb_U0_z31rYARzg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA7-MranwwXOlF_mcWnd9JEhgzz9r-SaHqNURFvnCs3NosWN6ZTrcdFDJHH-KpzUgSo74hwVl7j9IB6tEWu_LtzrQz0uCSbLcAuodEB3jqulhch7iwdrB87BGxqzo072wUkeaZRSiuNWmGWT708Zke79B37DPw_UNUvgwCSGnDMGL4jcjVWap-UMBaSS2QFiUuNdfyNYzWTUq6qJfAIEYb3MhyNxrG1DwO-TXcWzQE-_CdysC4EMQ",
  ];

  return (
    <div className="hidden lg:flex lg:col-span-6 xl:col-span-7 flex-col justify-between p-8 xl:p-12 bg-gradient-to-br from-slate-50 via-indigo-50/40 to-slate-50 relative overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(203 213 225) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%)",
        }}
      ></div>

      {/* Glow orbs */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-indigo-200/50 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-200/40 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Top bar — Back link + Brand pill */}
      <div className="relative z-10 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 group"
        >
          <img
            alt="DigiCard Logo"
            className="h-7 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1XA-rUKyw0HTxomf-T1HQRyOUcsEqtec7UgaM2nHHFlXjS0hSzNpe7ujnPD-MyB3DAuJ6Xi7FDNGFL_JPyHy9NSYTmiLBcayXWppm5ikieYKsCQsrWswFzmneDUOWrO6fAhM2DbFJ_8TIV9lXTPftJ3aHRsmRXaGYJQ_cJOpaekQoJTUXL-dXSA3Y_zYi4Kj6Hj0ZEJDKYxz645J2HLhi57SIRYEvrXLzySN8zTSd7T6OmZ4Yd2p75s"
          />
          <span className="text-[15px] font-semibold text-slate-900 tracking-tight">
            DigiCard
          </span>
        </Link>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-slate-200/70 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[11px] font-medium text-slate-600">
            v2.4 Active
          </span>
        </div>
      </div>

      {/* Center visual */}
      <div className="relative z-10 my-auto py-8 max-w-lg mx-auto w-full">
        {/* Tagline */}
        <div className="mb-8 text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-slate-200/70 shadow-sm mb-3">
            <Sparkles size={12} className="text-indigo-600" />
            <span className="text-[11px] font-semibold text-indigo-600 uppercase tracking-wider">
              Modern Digital Presence
            </span>
          </div>
          <h1 className="text-[28px] leading-[36px] md:text-[32px] md:leading-[40px] font-bold text-slate-900 tracking-[-0.02em] mb-2">
            Your digital identity,{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              simplified
            </span>
            .
          </h1>
          <p className="text-[14px] text-slate-600 leading-relaxed">
            One tap to share contact cards, curated links, and verified
            portfolios with frictionless NFC and instant QR delivery.
          </p>
        </div>

        {/* Card Preview */}
        <div className="relative mx-auto max-w-md w-full">
          {/* Glow behind */}
          <div className="absolute -inset-3 bg-gradient-to-br from-indigo-300/30 to-violet-300/20 blur-2xl rounded-3xl"></div>

          <div className="relative bg-white rounded-2xl p-5 shadow-xl shadow-indigo-900/5 border border-slate-200/60">
            {/* Top bar */}
            <div className="flex items-center justify-between pb-3">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-[10px] font-semibold text-emerald-700">
                  Live Profile
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100">
                  <Nfc size={11} className="text-slate-600" />
                  <span className="text-[10px] font-medium text-slate-600">
                    NFC
                  </span>
                </div>
                <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center text-slate-600">
                  <QrCode size={12} />
                </div>
              </div>
            </div>

            {/* Profile header */}
            <div className="flex items-center gap-3 py-2">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 p-0.5 shadow-md shadow-indigo-500/20">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    alt="Marcus Vance"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAgA6VWgF7ORrdEdNdqjHv-t17_oVKfcsIKoaBUY-bqKtJxvObs-lhTOjApCibOurn-UgGeLsOU9Tz8QlheKC2_wAzuiAZ3Q8oSJCKaIIlXP5_0Z5mf6zwooLgU9tFeS0v31qYqy1HZp9jKGtRl3iytQ929XIh1qhyq6-gruPoOwwrGUFENA_WGx_FLfBOGGKw_Kr_lRLHos4pUIn5ydr4DcaPuJ0c_4Aj_fIBOkrJZLWpxfuzqg"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-4 h-4 bg-indigo-600 rounded-full border-2 border-white flex items-center justify-center text-[8px] text-white">
                  ✓
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[14px] font-semibold text-slate-900 truncate">
                  Marcus Vance
                </h3>
                <p className="text-[12px] text-slate-500 truncate">
                  Founding Designer • Studio Apex
                </p>
                <span className="text-[11px] font-medium bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  digicard.bio/marcus
                </span>
              </div>
            </div>

            {/* Link items */}
            <div className="space-y-1.5 mt-3 pt-3 border-t border-slate-100">
              {linkItems.map(({ icon: Icon, title, subtitle }) => (
                <div
                  key={title}
                  className="group flex items-center justify-between p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 hover:border-indigo-200 border border-transparent transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center text-indigo-600 shadow-sm group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-violet-600 group-hover:text-white transition-all">
                      <Icon size={14} />
                    </div>
                    <div>
                      <span className="text-[12px] font-semibold text-slate-900 block">
                        {title}
                      </span>
                      <span className="text-[10px] text-slate-500 block">
                        {subtitle}
                      </span>
                    </div>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-slate-400 group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              ))}
            </div>

            {/* Footer strip */}
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                1,842 scans this month
              </span>
              <span className="text-indigo-600 font-semibold hover:underline cursor-pointer">
                Share
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom trust */}
      <div className="relative z-10 pt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-1.5">
            {avatars.map((src, i) => (
              <img
                key={i}
                className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                src={src}
                alt=""
              />
            ))}
          </div>
          <div>
            <p className="text-[12px] text-slate-900 font-semibold leading-none">
              15,000+ professionals
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Trust DigiCard worldwide
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-[11px] text-slate-600">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={12}
                className="fill-amber-500 text-amber-500"
              />
            ))}
          </div>
          <span className="font-semibold text-slate-900 ml-1">4.9/5</span>
        </div>
      </div>
    </div>
  );
};

export default AuthLeftPanel;
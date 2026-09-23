import React from "react";
import {
  ArrowRight,
  PlayCircle,
  BadgeCheck,
  Share2,
  Contact,
  Mail,
  Phone,
  Briefcase,
  Terminal,
  QrCode,
  ArrowUpRight,
  Link as LinkIcon,
  Sparkles,
} from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const Hero = ({ onSeeDemo }) => {
  const quickActions = [
    { icon: Contact, label: "Save .vcf" },
    { icon: Mail, label: "Email" },
    { icon: Phone, label: "Call" },
  ];

  const socialLinks = [
    { icon: Briefcase, label: "Design Portfolio 2025" },
    { icon: LinkIcon, label: "LinkedIn Network" },
    { icon: Terminal, label: "GitHub Repositories" },
  ];

  const stats = [
    { value: "15k+", label: "Active users" },
    { value: "2.4M", label: "Card views" },
    { value: "98%", label: "Satisfaction" },
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden">
        {/* Grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(203 213 225) 1px, transparent 0)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, #000 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, #000 40%, transparent 100%)",
          }}
        ></div>

        {/* Multi-color glow orbs */}
        <div className="absolute -top-24 left-1/4 w-[500px] h-[400px] bg-indigo-200/40 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-200/30 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-sky-100/40 blur-[100px] rounded-full pointer-events-none -z-10"></div>

        <section className="max-w-7xl mx-auto px-5 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24 w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* ============ LEFT COPY ============ */}
            <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/70 shadow-sm shadow-indigo-100 mb-5">
                <span className="inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider">
                    Live
                  </span>
                </span>
                <span className="w-px h-3 bg-slate-200"></span>
                <span className="text-[11px] font-medium text-slate-600">
                  DigiCard 2.0 — Instant NFC & Smart Link
                </span>
              </div>

              {/* Headline with gradient text */}
              <h1 className="text-[34px] leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[52px] lg:leading-[60px] font-bold text-slate-900 tracking-[-0.03em] max-w-2xl">
                Your Digital Card,
                <br className="hidden sm:inline" />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 bg-clip-text text-transparent">
                    One Link Away
                  </span>
                  {/* Underline decoration */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-2"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 8C60 2 120 2 180 6C230 9 280 5 298 3"
                      stroke="url(#grad)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="grad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#c7d2fe" />
                        <stop offset="50%" stopColor="#a78bfa" />
                        <stop offset="100%" stopColor="#818cf8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-[15px] md:text-base text-slate-600 mt-6 max-w-xl leading-relaxed">
                Create sleek, customizable digital visiting cards to share
                contact info, social profiles, and portfolios instantly — via
                smart link or QR code.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 mt-7 w-full sm:w-auto">
                <RouterLink
                  to="/auth"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white text-[14px] font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-slate-900/10 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 transition-all active:scale-[0.97] group"
                >
                  <span>Get Started Free</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </RouterLink>
                <button
                  onClick={onSeeDemo}
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 text-[14px] font-semibold px-5 py-2.5 rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-[0.97]"
                  type="button"
                >
                  <PlayCircle className="text-indigo-600" size={16} />
                  <span>See Demo</span>
                </button>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-6 border-t border-slate-200/70 w-full max-w-md">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-[20px] md:text-[22px] font-bold text-slate-900 tracking-tight">
                      {s.value}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 uppercase tracking-wider font-medium">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ============ RIGHT VISUAL ============ */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
              {/* Background blobs */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-indigo-200/60 to-violet-200/40 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-gradient-to-br from-sky-200/50 to-indigo-200/40 rounded-full blur-3xl -z-10"></div>

              {/* Floating Badge — Top */}
              <div className="absolute -top-4 right-0 sm:right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/70 shadow-lg shadow-slate-900/5 z-20 flex items-center gap-2 animate-[float_4s_ease-in-out_infinite]">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-[12px] font-semibold text-slate-900">
                  🔥 1.4k views
                </span>
                <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                  +18%
                </span>
              </div>

              {/* Floating Badge — Bottom */}
              <div className="absolute -bottom-4 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/70 shadow-lg shadow-slate-900/5 z-20 flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <BadgeCheck className="text-indigo-600" size={12} />
                </div>
                <span className="text-[12px] font-semibold text-slate-900">
                  Instant vCard
                </span>
              </div>

              {/* Phone Card with floating animation */}
              <div
                id="phone-card"
                className="w-full max-w-[300px] relative transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.02]"
                style={{
                  animation: "float 6s ease-in-out infinite",
                }}
              >
                {/* Card glow behind */}
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-400/20 via-violet-400/15 to-transparent blur-2xl rounded-[40px] -z-10"></div>

                <div className="bg-white rounded-3xl p-3 shadow-2xl shadow-slate-900/10 border border-slate-200/60 relative">
                  <div className="bg-gradient-to-b from-slate-50 to-white rounded-2xl overflow-hidden p-4 flex flex-col items-center relative">
                    {/* Header gradient */}
                    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-indigo-100/60 via-violet-100/30 to-transparent"></div>

                    {/* Top bar */}
                    <div className="w-full flex items-center justify-between z-10 mb-3">
                      <span className="text-[11px] font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                        digicard.bio/alex
                      </span>
                      <Share2 className="text-slate-400" size={14} />
                    </div>

                    {/* Avatar */}
                    <div className="relative z-10 mb-2">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 p-0.5 shadow-lg shadow-indigo-500/20">
                        <div className="w-full h-full rounded-full bg-white p-0.5">
                          <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white text-lg font-semibold">
                            AR
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      </div>
                    </div>

                    {/* Name */}
                    <div className="text-center z-10 w-full">
                      <h3 className="text-base font-bold text-slate-900">
                        Alex Rivera
                      </h3>
                      <p className="text-[12px] text-slate-500 mt-0.5">
                        Product Designer
                      </p>
                      <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-md bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100/60">
                        <Sparkles size={9} className="text-indigo-600" />
                        <span className="text-[10px] font-semibold text-indigo-600">
                          Studio Void
                        </span>
                      </div>
                    </div>

                    {/* Quick actions */}
                    <div className="grid grid-cols-3 gap-1.5 w-full mt-4">
                      {quickActions.map(({ icon: Icon, label }) => (
                        <button
                          key={label}
                          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-white border border-slate-200/60 shadow-sm hover:bg-slate-50 hover:border-indigo-200 hover:shadow transition-all"
                          type="button"
                        >
                          <Icon className="text-indigo-600" size={15} />
                          <span className="text-[10px] font-semibold mt-0.5 text-slate-900">
                            {label}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Social links */}
                    <div className="flex flex-col gap-1.5 w-full mt-3">
                      {socialLinks.map(({ icon: Icon, label }) => (
                        <a
                          key={label}
                          href="#"
                          className="flex items-center justify-between px-2.5 py-2 bg-white rounded-lg border border-slate-200/60 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center text-indigo-600 group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-violet-600 group-hover:text-white transition-all">
                              <Icon size={13} />
                            </div>
                            <span className="text-[12px] font-medium text-slate-900">
                              {label}
                            </span>
                          </div>
                          <ArrowUpRight className="text-slate-400" size={13} />
                        </a>
                      ))}
                    </div>

                    {/* QR row */}
                    <div className="w-full mt-3 bg-gradient-to-br from-slate-50 to-white p-2.5 rounded-xl border border-slate-200/60 shadow-sm flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-violet-700 p-1 rounded-lg flex items-center justify-center shadow-md shadow-indigo-600/20">
                          <svg
                            className="w-full h-full text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 2h2v4h-2v-4zm-4-2h4v2h-4v-2zm4-4h2v2h-2v-2zm-4 0h2v4h-2v-4zm-2 6h2v2h-2v-2zm6 2h2v2h-2v-2z"></path>
                          </svg>
                        </div>
                        <div>
                          <span className="text-[10px] font-semibold text-slate-900 block">
                            Scan to connect
                          </span>
                          <span className="text-[10px] text-slate-500 block">
                            Point camera
                          </span>
                        </div>
                      </div>
                      <QrCode className="text-indigo-600" size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
import React from "react";
import {
  Wand2,
  QrCode,
  BarChart3,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full bg-slate-50 py-16 lg:py-20 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(203 213 225) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-100/40 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        {/* Section header */}
        <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/70 text-indigo-600 text-[11px] font-semibold mb-3 shadow-sm">
            <Sparkles size={12} />
            <span>Effortless Networking</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-[34px] lg:leading-[42px] font-bold text-slate-900 tracking-[-0.02em]">
            Everything you need to{" "}
            <span className="text-indigo-600">network smarter</span>
          </h2>
          <p className="text-[15px] text-slate-600 mt-3">
            Ditch paper cards forever. Share your identity with a single tap or
            scan.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Feature 1 — Big card (left) */}
          <div className="lg:col-span-5 group relative bg-white rounded-2xl p-6 border border-slate-200/70 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300 overflow-hidden">
            {/* Corner glow */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-indigo-100/60 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative">
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-indigo-600/20 mb-5">
                <Wand2 size={20} />
              </div>

              <h3 className="text-[17px] font-semibold text-slate-900">
                Create Your Card
              </h3>
              <p className="text-[13px] text-slate-600 mt-2 leading-relaxed max-w-sm">
                Pick your theme, typography, links, and avatar in under 60
                seconds with our intuitive live editor.
              </p>

              {/* Mini preview mock */}
              <div className="mt-6 grid grid-cols-4 gap-2">
                <div className="col-span-2 h-20 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-400 p-2 flex flex-col justify-between">
                  <div className="h-1.5 w-8 rounded-full bg-white/60"></div>
                  <div className="w-5 h-5 rounded-full bg-white/90"></div>
                  <div className="space-y-1">
                    <div className="h-1 w-full rounded bg-white/70"></div>
                    <div className="h-1 w-2/3 rounded bg-white/50"></div>
                  </div>
                </div>
                <div className="h-20 rounded-lg bg-slate-100 p-2 flex flex-col justify-between">
                  <div className="h-1.5 w-6 rounded-full bg-slate-300"></div>
                  <div className="w-5 h-5 rounded-full bg-slate-300"></div>
                  <div className="space-y-1">
                    <div className="h-1 w-full rounded bg-slate-200"></div>
                    <div className="h-1 w-3/4 rounded bg-slate-200"></div>
                  </div>
                </div>
                <div className="h-20 rounded-lg bg-slate-900 p-2 flex flex-col justify-between">
                  <div className="h-1.5 w-6 rounded-full bg-white/30"></div>
                  <div className="w-5 h-5 rounded-full bg-white/30"></div>
                  <div className="space-y-1">
                    <div className="h-1 w-full rounded bg-white/20"></div>
                    <div className="h-1 w-3/4 rounded bg-white/10"></div>
                  </div>
                </div>
              </div>

              {/* Footer meta */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                    Experience
                  </p>
                  <p className="text-[12px] text-indigo-600 font-semibold mt-0.5">
                    Live preview & custom themes
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </div>
          </div>

          {/* Right column — 2 smaller cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Feature 2 — QR */}
            <div className="group relative bg-white rounded-2xl p-6 border border-slate-200/70 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-indigo-100/60 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-indigo-600/20 mb-5">
                  <QrCode size={20} />
                </div>

                <h3 className="text-[17px] font-semibold text-slate-900">
                  Share via Link & QR
                </h3>
                <p className="text-[13px] text-slate-600 mt-2 leading-relaxed">
                  Share your personal{" "}
                  <code className="text-[11px] bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 font-medium">
                    digicard.co/yourname
                  </code>{" "}
                  link or display your custom QR code anywhere.
                </p>

                {/* Mini QR visual */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-14 h-14 rounded-lg bg-slate-900 p-1.5 flex items-center justify-center">
                    <svg
                      className="w-full h-full text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 2h2v4h-2v-4zm-4-2h4v2h-4v-2zm4-4h2v2h-2v-2zm-4 0h2v4h-2v-4zm-2 6h2v2h-2v-2zm6 2h2v2h-2v-2z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="h-1.5 w-full rounded-full bg-slate-200 mb-2"></div>
                    <div className="h-1.5 w-2/3 rounded-full bg-slate-100"></div>
                  </div>
                </div>

                {/* Footer meta */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                      Integration
                    </p>
                    <p className="text-[12px] text-indigo-600 font-semibold mt-0.5">
                      Apple & Google Wallet
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 — Analytics */}
            <div className="group relative bg-white rounded-2xl p-6 border border-slate-200/70 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-indigo-100/60 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-indigo-600/20 mb-5">
                  <BarChart3 size={20} />
                </div>

                <h3 className="text-[17px] font-semibold text-slate-900">
                  Track Views & Likes
                </h3>
                <p className="text-[13px] text-slate-600 mt-2 leading-relaxed">
                  See who taps your links, downloads your contact, and interacts
                  with your profiles in real-time.
                </p>

                {/* Mini chart visual */}
                <div className="mt-6 flex items-end gap-1.5 h-14">
                  {[35, 55, 40, 70, 50, 85, 65].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-indigo-600 to-indigo-400 opacity-80 group-hover:opacity-100 transition-opacity"
                      style={{ height: `${h}%` }}
                    ></div>
                  ))}
                </div>

                {/* Footer meta */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                      Analytics
                    </p>
                    <p className="text-[12px] text-indigo-600 font-semibold mt-0.5">
                      Real-time insights
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
import React, { useState } from "react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCards from "../components/dashboard/StatsCards";
import MyCards from "../components/dashboard/MyCards";
import NfcPromoBanner from "../components/dashboard/NfcPromoBanner";
import QrModal from "../components/dashboard/QrModal";
import { RefreshCw } from "lucide-react";

const DashboardPage = () => {
  const [qrOpen, setQrOpen] = useState(false);
  const [range, setRange] = useState("7d");

  const ranges = [
    { key: "7d", label: "7 days" },
    { key: "30d", label: "30 days" },
    { key: "all", label: "All time" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardSidebar />

      <div className="pl-60">
        <DashboardHeader />

        <main className="pt-14 w-full px-6 py-6">
          <div className="flex flex-col gap-6">
            {/* Page heading */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-[22px] font-semibold text-slate-900 tracking-tight">
                    Welcome back, Alex
                  </h1>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-semibold text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live
                  </span>
                </div>
                <p className="text-[13px] text-slate-500 mt-1">
                  Here's how your cards are performing this week.
                </p>
              </div>

              <div className="flex items-center gap-2 self-start lg:self-auto">
                {/* Segmented control */}
                <div className="inline-flex p-0.5 bg-white border border-slate-200/70 rounded-lg shadow-sm">
                  {ranges.map((r) => (
                    <button
                      key={r.key}
                      onClick={() => setRange(r.key)}
                      className={`px-2.5 py-1 rounded-md text-[12px] transition-all ${
                        range === r.key
                          ? "bg-slate-900 text-white font-semibold shadow-sm"
                          : "text-slate-600 hover:text-slate-900 font-medium"
                      }`}
                      type="button"
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
                <button
                  className="p-1.5 text-slate-500 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/70 rounded-lg shadow-sm transition-all"
                  title="Refresh"
                  type="button"
                >
                  <RefreshCw size={14} />
                </button>
              </div>
            </div>

            {/* Stats */}
            <StatsCards />

            {/* My Cards */}
            <MyCards onQrOpen={() => setQrOpen(true)} />

            {/* NFC Promo */}
            <NfcPromoBanner />
          </div>

          <QrModal open={qrOpen} onClose={() => setQrOpen(false)} />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
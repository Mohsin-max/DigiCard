import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpDown, ChevronDown, Plus, ArrowRight } from "lucide-react";
import CardItem from "./CardItem";

const filters = ["All (4)", "Personal", "Work", "Events"];

const cards = [
  {
    bannerClass:
      "bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600",
    status: "Active",
    topRight: { icon: "nfc", label: "NFC" },
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPZv1eAnMgMTVTSrglV77S9x0gq9Qi7LkhKAr1WO77_f94Un_BOy1rkt3fTmz1R_tb4f1pobcTKsztQoV3J3sUHcvNa4EdwgH93x8OtX6uXPqWfruD5oeJAZTVZbz7KPo-Dlr8aqu68-Ut8ispbJpuOXg7gWWTEXCp5W-c3vhA16fKUluJD1QYOypQwpLHQpDdvNthuZL6wGmtkAgJ9dH97bYsq5ByW_V66wKFV91G40WVhgMctA",
    handle: "@alexrivera",
    title: "Alex Rivera",
    subtitle: "Product & Systems Designer",
    tags: ["Design", "Figma", "vCard"],
    views: "6.4k",
    saves: "382",
  },
  {
    bannerClass: "bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900",
    status: "Active",
    topRight: { icon: "building", label: "Agency" },
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnnefBgapvNcXRBVgdv4ykAW8c00dmgF5AL7U_VH4enRcTybdL2ivmKP_bKk92T5YHttNJR59naWvlFNE8a-ORm2WVaYWyW3IFEINI_nv4HUizSbeamLbmW_ZCq2rifuRWa0dlobp5Hw1njcJ6l-vKFtYKAN16uXLsG4aQ-Q5U71wLPdLOdL7CMi_FZ00H-fQ5ILMpt7wzDLiVfkkpUCE-UrclYd22copY2KlnB_J4tbTOkbICUQ",
    handle: "@studioapex",
    title: "Studio Apex",
    subtitle: "Design & Strategy Studio",
    tags: ["Case Studies", "Book Intro", "Portfolio"],
    views: "5.1k",
    saves: "198",
  },
  {
    bannerClass: "bg-gradient-to-br from-amber-500 via-orange-500 to-indigo-600",
    status: "Active",
    topRight: { icon: "ticket", label: "Pass" },
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdxgIWylVWH_tmYF3ZR2hotn9L2KgFGYD1XRLWkTWlW2D440xGC0qbDxwkLzNN2l_0k0jBBAQNbfL2l4B4-PpkxWjNYtcl_r9K7UOXtjVKTGewveqKlI69eaeUoFa3qxXSXmWQ8t_XSEOh2YgGJvpEIkcajgBXTflRU2dHeWK_RgXJzKvHDul_WD2tUsiWX_tr8p1VaKbn_Ijs8kyFjnzVm4Ex3nmJQmdCUvauNfyR1DZuU1OIUA",
    handle: "#TS2025",
    title: "Tech Summit 2025",
    subtitle: "Speaker & Attendee Badge",
    tags: ["Keynote", "Q&A"],
    views: "2.8k",
    saves: "94",
  },
];

const MyCards = ({ onQrOpen }) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-[18px] font-semibold text-slate-900 tracking-tight">
              My Cards
            </h2>
            <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-semibold">
              4 created
            </span>
          </div>
          <p className="text-[13px] text-slate-500 mt-0.5">
            Manage your digital identities and NFC card targets.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Segmented filter */}
          <div className="inline-flex p-0.5 bg-white border border-slate-200/70 rounded-lg shadow-sm">
            {filters.map((f, i) => (
              <button
                key={f}
                className={`px-2.5 py-1 rounded-md text-[12px] transition-all ${
                  i === 0
                    ? "bg-slate-900 text-white font-semibold shadow-sm"
                    : "text-slate-600 hover:text-slate-900 font-medium"
                }`}
                type="button"
              >
                {f}
              </button>
            ))}
          </div>

          <button
            className="flex items-center gap-1 px-2.5 py-1.5 bg-white border border-slate-200/70 rounded-lg text-[12px] font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
            type="button"
          >
            <ArrowUpDown size={13} className="text-slate-500" />
            <span>Recent</span>
            <ChevronDown size={12} className="text-slate-500" />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {cards.map((c) => (
          <CardItem key={c.handle} {...c} onQrOpen={onQrOpen} />
        ))}

        {/* Create new card */}
        <Link
          to="/dashboard/cards/new"
          className="group bg-white hover:bg-slate-50 transition-all rounded-xl p-4 flex flex-col items-center justify-center text-center min-h-[280px] border-2 border-dashed border-slate-200 hover:border-indigo-300"
        >
          <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-violet-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
            <Plus size={22} />
          </div>
          <span className="text-[14px] font-semibold text-slate-900 mt-3 group-hover:text-indigo-600 transition-colors">
            Create New Card
          </span>
          <p className="text-[12px] text-slate-500 max-w-[180px] mt-1 leading-relaxed">
            Choose a template or start from scratch.
          </p>
          <div className="mt-3 inline-flex items-center gap-1 text-[12px] text-indigo-600 font-semibold">
            <span>Get Started</span>
            <ArrowRight
              size={12}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MyCards;
import React from "react";
import { Link } from "react-router-dom";
import { Nfc, ArrowRight } from "lucide-react";

const NfcPromoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-900 rounded-xl p-4 md:p-5 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-violet-500/20 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start md:items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center shrink-0 text-white">
            <Nfc size={18} />
          </div>
          <div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <h4 className="text-[14px] font-semibold text-white">
                Need physical NFC metal cards?
              </h4>
              <span className="px-1.5 py-0.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/15 text-white text-[10px] font-semibold">
                Hardware
              </span>
            </div>
            <p className="text-[12px] text-indigo-200/80 mt-0.5 max-w-lg leading-relaxed">
              Pair your DigiCard URL with laser-engraved matte black steel or brushed titanium cards. Zero app required.
            </p>
          </div>
        </div>
        <Link
          to="/dashboard/hardware"
          className="shrink-0 inline-flex items-center gap-1.5 bg-white text-slate-900 text-[12px] font-semibold px-3.5 py-2 rounded-lg hover:bg-slate-100 transition-all active:scale-[0.97] group"
        >
          <span>Order Card</span>
          <ArrowRight
            size={13}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  );
};

export default NfcPromoBanner;
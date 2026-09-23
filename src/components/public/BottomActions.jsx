import React from "react";
import { Share, QrCode } from "lucide-react";

const BottomActions = ({ onShare, onShowQr }) => {
  return (
    <div className="w-full mt-5 grid grid-cols-2 gap-2.5">
      <button
        onClick={onShare}
        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white text-slate-900 text-[12px] font-semibold border border-slate-200/70 shadow-sm hover:bg-slate-50 hover:border-slate-300 active:scale-[0.97] transition-all"
        type="button"
      >
        <Share size={14} className="text-indigo-600" />
        <span>Share</span>
      </button>
      <button
        onClick={onShowQr}
        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 text-white text-[12px] font-semibold shadow-sm shadow-slate-900/10 hover:bg-slate-800 active:scale-[0.97] transition-all"
        type="button"
      >
        <QrCode size={14} />
        <span>Show QR</span>
      </button>
    </div>
  );
};

export default BottomActions;
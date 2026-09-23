import React from "react";
import { QrCode, X, Download, Copy, Link as LinkIcon } from "lucide-react";

const QrModal = ({ open, onClose, onCopy, onDownload }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm bg-white rounded-2xl p-5 shadow-2xl flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          type="button"
        >
          <X size={14} />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-4">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center mb-2 shadow-sm shadow-indigo-500/20">
            <QrCode size={16} />
          </div>
          <h3 className="text-[15px] text-slate-900 font-bold tracking-tight">
            Scan to Open Card
          </h3>
          <p className="text-[11px] text-slate-500 mt-1 leading-snug max-w-[240px]">
            Scan with your phone's camera to instantly view Alex Rivera's digital profile
          </p>
        </div>

        {/* QR Code */}
        <div className="flex items-center justify-center">
          <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 relative">
            <svg
              className="w-40 h-40"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect fill="#4F46E5" height="50" rx="8" width="50" x="10" y="10" />
              <rect fill="#ffffff" height="30" rx="4" width="30" x="20" y="20" />
              <rect fill="#4F46E5" height="16" rx="2" width="16" x="27" y="27" />
              <rect fill="#4F46E5" height="50" rx="8" width="50" x="140" y="10" />
              <rect fill="#ffffff" height="30" rx="4" width="30" x="150" y="20" />
              <rect fill="#4F46E5" height="16" rx="2" width="16" x="157" y="27" />
              <rect fill="#4F46E5" height="50" rx="8" width="50" x="10" y="140" />
              <rect fill="#ffffff" height="30" rx="4" width="30" x="20" y="150" />
              <rect fill="#4F46E5" height="16" rx="2" width="16" x="27" y="157" />
              <rect fill="#0b1c30" height="10" rx="2" width="10" x="70" y="20" />
              <rect fill="#0b1c30" height="10" rx="2" width="10" x="90" y="20" />
              <rect fill="#0b1c30" height="10" rx="2" width="10" x="110" y="20" />
              <rect fill="#0b1c30" height="10" rx="2" width="20" x="70" y="40" />
              <rect fill="#0b1c30" height="20" rx="2" width="10" x="100" y="40" />
              <rect fill="#0b1c30" height="10" rx="2" width="10" x="120" y="40" />
              <rect fill="#0b1c30" height="20" rx="2" width="10" x="20" y="70" />
              <rect fill="#0b1c30" height="10" rx="2" width="20" x="40" y="80" />
              <rect fill="#4F46E5" height="10" rx="2" width="30" x="70" y="70" />
              <rect fill="#0b1c30" height="20" rx="2" width="20" x="110" y="70" />
              <rect fill="#0b1c30" height="30" rx="2" width="10" x="140" y="70" />
              <rect fill="#0b1c30" height="20" rx="2" width="10" x="170" y="80" />
              <rect fill="#0b1c30" height="10" rx="2" width="20" x="20" y="110" />
              <rect fill="#0b1c30" height="10" rx="2" width="10" x="50" y="110" />
              <rect fill="#0b1c30" height="20" rx="2" width="10" x="70" y="120" />
              <rect fill="#4F46E5" height="10" rx="2" width="20" x="90" y="130" />
              <rect fill="#0b1c30" height="10" rx="2" width="30" x="120" y="110" />
              <rect fill="#0b1c30" height="20" rx="2" width="20" x="160" y="120" />
              <rect fill="#0b1c30" height="20" rx="2" width="20" x="70" y="160" />
              <rect fill="#0b1c30" height="10" rx="2" width="20" x="100" y="150" />
              <rect fill="#0b1c30" height="20" rx="2" width="10" x="130" y="160" />
              <rect fill="#4F46E5" height="10" rx="2" width="30" x="150" y="150" />
              <rect fill="#0b1c30" height="10" rx="2" width="20" x="160" y="170" />
            </svg>

            {/* Center badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-white p-1 shadow-md">
              <div className="w-full h-full rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-[12px]">
                D
              </div>
            </div>
          </div>
        </div>

        {/* Link chip */}
        <div className="w-full mt-4 flex items-center justify-between px-2.5 py-2 bg-slate-50 rounded-xl border border-slate-100">
          <div className="flex items-center gap-1.5 min-w-0">
            <LinkIcon size={13} className="text-indigo-600 shrink-0" />
            <span className="text-[11px] text-slate-900 font-medium truncate">
              digicard.bio/alexrivera
            </span>
          </div>
          <div className="inline-flex items-center gap-1 shrink-0 pl-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="text-[10px] text-slate-600 font-medium">
              Live
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 w-full mt-4">
          <button
            onClick={onDownload}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-900 text-white text-[12px] font-semibold shadow-sm shadow-slate-900/10 hover:bg-slate-800 active:scale-[0.98] transition-all"
            type="button"
          >
            <Download size={13} />
            <span>Download</span>
          </button>
          <button
            onClick={() => onCopy("https://digicard.bio/alexrivera")}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 text-slate-900 text-[12px] font-medium border border-slate-200/70 hover:bg-slate-200 active:scale-[0.98] transition-all"
            type="button"
          >
            <Copy size={13} className="text-indigo-600" />
            <span>Copy Link</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QrModal;
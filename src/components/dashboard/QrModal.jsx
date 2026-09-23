import React from "react";
import { X, Download, Share2, QrCode } from "lucide-react";

const QrModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 flex flex-col items-center text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="w-full flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
              <QrCode size={16} />
            </div>
            <h3 className="text-[14px] font-semibold text-slate-900">
              Scan Digital Card
            </h3>
          </div>
          <button
            className="p-1 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
            onClick={onClose}
            type="button"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* QR */}
        <div className="p-3 bg-slate-50 rounded-xl mb-4 border border-slate-100">
          <svg
            className="w-40 h-40 text-slate-900"
            fill="currentColor"
            viewBox="0 0 100 100"
          >
            <path d="M10,10 h30 v30 h-30 z M15,15 v20 h20 v-20 z M20,20 h10 v10 h-10 z"></path>
            <path d="M60,10 h30 v30 h-30 z M65,15 v20 h20 v-20 z M70,20 h10 v10 h-10 z"></path>
            <path d="M10,60 h30 v30 h-30 z M15,65 v20 h20 v-20 z M20,70 h10 v10 h-10 z"></path>
            <rect height="20" width="4" x="48" y="10"></rect>
            <rect height="4" width="12" x="48" y="38"></rect>
            <rect height="4" width="16" x="10" y="48"></rect>
            <rect height="12" width="4" x="34" y="48"></rect>
            <rect height="4" width="16" x="60" y="48"></rect>
            <rect height="4" width="10" x="80" y="48"></rect>
            <rect height="30" width="4" x="48" y="60"></rect>
            <rect height="10" width="10" x="60" y="60"></rect>
            <rect height="6" width="14" x="76" y="60"></rect>
            <rect height="14" width="6" x="60" y="76"></rect>
            <rect height="14" width="18" x="72" y="76"></rect>
          </svg>
        </div>

        <p className="text-[12px] text-slate-500 mb-5 leading-relaxed">
          Instant sync to iOS Contacts and Android Google Wallet
        </p>

        <div className="flex items-center gap-2 w-full">
          <button
            className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 rounded-lg text-[12px] font-medium text-slate-900 transition-colors flex items-center justify-center gap-1.5"
            type="button"
          >
            <Download size={14} />
            <span>PNG</span>
          </button>
          <button
            className="flex-1 py-2 px-3 bg-slate-900 text-white rounded-lg text-[12px] font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 active:scale-[0.98]"
            type="button"
          >
            <Share2 size={14} />
            <span>Copy URL</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QrModal;
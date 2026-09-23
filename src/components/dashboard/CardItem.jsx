import React from "react";
import {
  Nfc,
  Building2,
  Ticket,
  BadgeCheck,
  Eye,
  Bookmark,
  Pencil,
  Share2,
  QrCode,
  MoreVertical,
} from "lucide-react";

const topRightIcons = {
  nfc: Nfc,
  building: Building2,
  ticket: Ticket,
};

const CardItem = ({
  bannerClass,
  status,
  topRight,
  avatar,
  handle,
  title,
  subtitle,
  tags,
  views,
  saves,
  onQrOpen,
}) => {
  const TopRightIcon = topRightIcons[topRight.icon];

  return (
    <div className="group bg-white rounded-xl border border-slate-200/70 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200 flex flex-col overflow-hidden">
      {/* Banner */}
      <div
        className={`h-24 ${bannerClass} relative p-3 flex justify-between items-start`}
      >
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-emerald-700 text-[10px] font-semibold shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
          {status}
        </span>
        {TopRightIcon && (
          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-1.5 py-0.5 rounded-md text-white text-[10px] font-medium">
            <TopRightIcon size={11} />
            <span>{topRight.label}</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Avatar + handle */}
        <div className="flex justify-between items-end -mt-10 mb-2.5">
          <div className="relative">
            <img
              className="w-14 h-14 rounded-full object-cover shadow-md ring-2 ring-white"
              alt={title}
              src={avatar}
            />
            <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-sm ring-2 ring-white">
              <BadgeCheck size={10} />
            </span>
          </div>
          <span className="text-[10px] text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded-md border border-slate-200/60">
            {handle}
          </span>
        </div>

        {/* Title */}
        <div className="mb-2.5">
          <h3 className="text-[13px] font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
            {title}
          </h3>
          <p className="text-[11px] text-slate-500 truncate mt-0.5">
            {subtitle}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.map((t, i) => (
            <span
              key={t}
              className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                i === tags.length - 1
                  ? "bg-indigo-50 text-indigo-700 border border-indigo-100"
                  : "bg-slate-50 text-slate-600 border border-slate-100"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-auto flex items-center justify-between bg-slate-50 px-2.5 py-1.5 rounded-lg mb-2.5">
          <div className="flex items-center gap-1 text-[11px]">
            <Eye size={12} className="text-indigo-600" />
            <span className="font-semibold text-slate-900">{views}</span>
            <span className="text-slate-500">views</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex items-center gap-1 text-[11px]">
            <Bookmark size={12} className="text-orange-500" />
            <span className="font-semibold text-slate-900">{saves}</span>
            <span className="text-slate-500">saves</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button
            className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg text-[11px] font-medium transition-colors"
            type="button"
          >
            <Pencil size={12} />
            <span>Edit</span>
          </button>
          <button
            className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            title="Share"
            type="button"
          >
            <Share2 size={14} />
          </button>
          <button
            className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={onQrOpen}
            title="QR code"
            type="button"
          >
            <QrCode size={14} />
          </button>
          <button
            className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            title="More"
            type="button"
          >
            <MoreVertical size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
import React from "react";
import {
  AtSign,
  Smartphone,
  Building2,
  ExternalLink,
  Globe,
  Copy,
  Check,
} from "lucide-react";

const rows = [
  {
    icon: AtSign,
    label: "Email Address",
    value: "alex@studioapex.design",
    href: "mailto:alex@studioapex.design",
    copyable: true,
  },
  {
    icon: Smartphone,
    label: "Mobile Phone",
    value: "+1 (415) 892-0192",
    href: "tel:+14158920192",
    copyable: true,
  },
  {
    icon: Building2,
    label: "Headquarters",
    value: "450 Mission Street, Suite 900",
    href: "https://maps.google.com/?q=450+Mission+Street+Suite+900+San+Francisco+CA",
    external: true,
  },
];

const ContactChannels = ({ onCopy }) => {
  const [copiedKey, setCopiedKey] = React.useState(null);

  const handleCopy = (value, key) => {
    onCopy(value);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  return (
    <div className="w-full mt-3 bg-white rounded-2xl border border-slate-200/70 shadow-sm p-3 flex flex-col gap-0.5">
      <div className="flex items-center justify-between pb-2 px-1">
        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
          Direct Channels
        </span>
        <span className="text-[11px] text-indigo-600 font-semibold">
          SF • UTC-7
        </span>
      </div>

      {rows.map(({ icon: Icon, label, value, href, copyable, external }) => (
        <div
          key={label}
          className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors group"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
              <Icon size={14} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] text-slate-400 font-medium">
                {label}
              </span>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-[12px] text-slate-900 font-semibold truncate hover:text-indigo-600 transition-colors"
              >
                {value}
              </a>
            </div>
          </div>

          {copyable ? (
            <button
              onClick={() => handleCopy(value, label)}
              className="shrink-0 p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-white rounded-md transition-colors"
              title={`Copy ${label}`}
              type="button"
            >
              {copiedKey === label ? (
                <Check size={14} className="text-emerald-500" />
              ) : (
                <Copy size={14} />
              )}
            </button>
          ) : (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-white rounded-md transition-colors"
              title="Open map"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      ))}

      {/* Location row */}
      <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
            <Globe size={14} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] text-slate-400 font-medium">
              Location
            </span>
            <span className="text-[12px] text-slate-900 font-semibold truncate">
              San Francisco, CA
            </span>
          </div>
        </div>
        <span className="text-[10px] text-slate-400 shrink-0 pr-2 font-medium">
          PST
        </span>
      </div>
    </div>
  );
};

export default ContactChannels;
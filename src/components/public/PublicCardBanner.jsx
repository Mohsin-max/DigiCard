import React from "react";

const PublicCardBanner = () => {
  return (
    <div className="h-24 w-full bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600 relative overflow-hidden">
      {/* Soft glow */}
      <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/15 blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-violet-400/30 blur-xl pointer-events-none"></div>

      {/* Dotted pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.15]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-pattern"
            patternUnits="userSpaceOnUse"
            width="16"
            height="16"
          >
            <circle cx="2" cy="2" fill="#ffffff" r="1"></circle>
          </pattern>
        </defs>
        <rect fill="url(#grid-pattern)" width="100%" height="100%"></rect>
      </svg>
    </div>
  );
};

export default PublicCardBanner;
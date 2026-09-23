import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import {
  XIcon,
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
} from "../components/builder/BrandIcons";

const footerLinks = {
  Product: [
    { label: "Features", to: "/#features" },
    { label: "Pricing", to: "/#pricing" },
    { label: "Templates", to: "/templates" },
    { label: "NFC Cards", to: "/hardware" },
  ],
  Company: [
    { label: "About", to: "/#about" },
    { label: "Blog", to: "/blog" },
    { label: "Careers", to: "/careers" },
    { label: "Contact", to: "/contact" },
  ],
  Resources: [
    { label: "Help Center", to: "/help" },
    { label: "Community", to: "/community" },
    { label: "Developers", to: "/developers" },
    { label: "Status", to: "/status" },
  ],
};

const socials = [
  { Icon: XIcon, href: "https://x.com", label: "X" },
  { Icon: LinkedInIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { Icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Top section */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-6 lg:col-span-5">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                alt="DigiCard Logo"
                className="h-7 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1XA-rUKyw0HTxomf-T1HQRyOUcsEqtec7UgaM2nHHFlXjS0hSzNpe7ujnPD-MyB3DAuJ6Xi7FDNGFL_JPyHy9NSYTmiLBcayXWppm5ikieYKsCQsrWswFzmneDUOWrO6fAhM2DbFJ_8TIV9lXTPftJ3aHRsmRXaGYJQ_cJOpaekQoJTUXL-dXSA3Y_zYi4Kj6Hj0ZEJDKYxz645J2HLhi57SIRYEvrXLzySN8zTSd7T6OmZ4Yd2p75s"
              />
              <span className="text-[15px] font-semibold text-slate-900 tracking-tight">
                DigiCard
              </span>
            </Link>

            <p className="text-[13px] text-slate-600 max-w-xs leading-relaxed">
              The modern way to share your identity. Create, customize, and
              share digital business cards in seconds.
            </p>

            {/* Newsletter */}
            <div className="mt-6 max-w-sm">
              <p className="text-[12px] font-semibold text-slate-900 mb-2">
                Get product updates
              </p>
              <div className="flex items-center gap-2 p-1 bg-slate-50 rounded-xl border border-slate-200/70">
                <div className="flex items-center flex-1 pl-3">
                  <Mail size={14} className="text-slate-400 shrink-0" />
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="flex-1 bg-transparent border-0 outline-none text-[13px] text-slate-900 placeholder:text-slate-400 px-2 py-1.5 min-w-0"
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-all active:scale-[0.95] shrink-0"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1 md:col-span-2 lg:col-span-2">
              <h4 className="text-[12px] font-semibold text-slate-900 uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[13px] text-slate-600 hover:text-indigo-600 transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="text-[12px] font-semibold text-slate-900 uppercase tracking-wider mb-4">
              Follow
            </h4>
            <div className="flex flex-wrap gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/70 flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all active:scale-[0.95]"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-slate-500">
            © 2025 DigiCard, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-[12px] text-slate-500 hover:text-slate-900 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
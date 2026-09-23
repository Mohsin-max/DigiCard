import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import PublicCardBanner from "../components/public/PublicCardBanner";
import PublicCardProfile from "../components/public/PublicCardProfile";
import ContactChannels from "../components/public/ContactChannels";
import ProfilesGrid from "../components/public/ProfilesGrid";
import CredentialsSection from "../components/public/CredentialsSection";
import BottomActions from "../components/public/BottomActions";
import QrModal from "../components/public/QrModal";

const PublicCardPage = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(3490);
  const [qrOpen, setQrOpen] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: "" });

  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => setToast({ visible: false, message: "" }), 2400);
  };

  const handleLike = () => {
    setLiked((prev) => {
      setLikeCount((c) => (prev ? c - 1 : c + 1));
      if (!prev) showToast("Appreciation recorded! ❤️");
      return !prev;
    });
  };

  const handleCopy = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast("Copied to clipboard!");
      });
    } else {
      showToast(`Copied: ${text}`);
    }
  };

  const handleSaveContact = (e) => {
    e.preventDefault();
    const vCardData = `BEGIN:VCARD\nVERSION:3.0\nN:Rivera;Alex;;;\nFN:Alex Rivera\nORG:Studio Apex\nTITLE:Senior Product Designer & Systems Architect\nTEL;TYPE=CELL:+14158920192\nEMAIL;TYPE=WORK:alex@studioapex.design\nURL:https://studioapex.design\nADR;TYPE=WORK:;;450 Mission Street, Suite 900;San Francisco;CA;;United States\nEND:VCARD`;

    const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Alex-Rivera.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast("Contact file downloaded (.vcf)");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Alex Rivera - DigiCard",
        text: "Alex Rivera • Senior Product Designer & Systems Architect",
        url: window.location.href,
      }).catch(() => {});
    } else {
      handleCopy(window.location.href);
    }
  };

  return (
    <div className="bg-slate-50 font-sans text-slate-900 flex flex-col min-h-screen antialiased">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-4 py-2.5">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-[13px] shadow-sm shadow-indigo-500/20">
            D
          </div>
          <span className="text-[14px] text-slate-900 tracking-tight font-semibold">
            DigiCard
          </span>
        </Link>

        <Link
          to="/auth"
          className="inline-flex items-center gap-1 text-[12px] font-semibold text-indigo-700 bg-white border border-indigo-100 px-3 py-1.5 rounded-full hover:bg-indigo-50 transition-colors shadow-sm shadow-indigo-500/10"
        >
          <Plus size={12} />
          <span>Create yours</span>
        </Link>
      </header>

      {/* Main */}
      <main className="flex-1 w-full px-4 pb-8">
        <div className="flex flex-col w-full pb-8 max-w-md mx-auto">
          {/* Showcase Card */}
          <div className="w-full bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-200/70 overflow-hidden relative">
            <PublicCardBanner />
            <PublicCardProfile
              liked={liked}
              likeCount={likeCount}
              onLike={handleLike}
              onSaveContact={handleSaveContact}
            />
          </div>

          {/* Contact Channels */}
          <ContactChannels onCopy={handleCopy} />

          {/* Profiles & Web */}
          <ProfilesGrid />

          {/* Credentials */}
          <CredentialsSection />

          {/* Bottom Actions */}
          <BottomActions
            onShare={handleShare}
            onShowQr={() => setQrOpen(true)}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center justify-center py-6 px-4 gap-1">
        <p className="text-[11px] text-slate-500 flex items-center gap-1">
          <span>Powered by</span>
          <span className="text-[12px] text-slate-900 font-semibold">
            DigiCard
          </span>
        </p>
        <Link
          to="/auth"
          className="text-[11px] text-indigo-600 hover:underline font-medium"
        >
          Create your own card →
        </Link>
      </footer>

      {/* Toast */}
      <div
        className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-slate-900 text-white px-3.5 py-2 rounded-full shadow-lg shadow-slate-900/20 transition-all duration-300 ${
          toast.visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-[10px]">
          ✓
        </span>
        <span className="text-[12px] font-medium">{toast.message}</span>
      </div>

      {/* QR Modal */}
      <QrModal
        open={qrOpen}
        onClose={() => setQrOpen(false)}
        onCopy={handleCopy}
        onDownload={() => {
          showToast("QR code saved to gallery");
          setQrOpen(false);
        }}
      />
    </div>
  );
};

export default PublicCardPage;
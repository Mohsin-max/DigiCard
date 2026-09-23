import React, { useState } from "react";
import BuilderHeader from "../components/builder/BuilderHeader";
import BuilderToolbar from "../components/builder/BuilderToolbar";
import ThemeSection from "../components/builder/ThemeSection";
import IdentitySection from "../components/builder/IdentitySection";
import BasicInfoSection from "../components/builder/BasicInfoSection";
import ContactSection from "../components/builder/ContactSection";
import SocialSection from "../components/builder/SocialSection";
import LivePreview from "../components/builder/LivePreview";
import { IdCard, Zap, ShieldCheck } from "lucide-react";

const CardBuilderPage = () => {
  const [formData, setFormData] = useState({
    theme: "modern-mesh",
    accent: "#4F46E5",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAiFGYYgk9taGX3gnTgTuTOJwbANWZ2Td_waUzle-ckX9GeI_tEyhgJg5A3aZIhpzSzGRX8ldejZqmMQl6nJpZe1iqHjc5dNr3BXiGuA4eqT0eTnoEyUJMWB_ddvwPSLzanim4jkyWGJGE-CWDv9-4UxWjZyDJ-CzNUIj25rXWEJ-vfYgxP5IxHNAsqYwvbL8MhkD1ePKuQKXHHH7cb53V3F_QNiprZtY5741Jcg4rGBv2XEsQCTA",
    fullName: "Alex Rivera",
    bio: "Senior Product Designer & Systems Architect at Studio Apex. Designing fluid interfaces and modern cloud workflows.",
    dob: "1992-06-18",
    maritalStatus: "married",
    education: "B.S. in Human-Computer Interaction, Stanford University",
    email: "alex@studioapex.design",
    phone: "(415) 892-0192",
    phoneCode: "🇺🇸 +1",
    country: "United States",
    city: "San Francisco, CA",
    address: "450 Mission Street, Suite 900",
  });

  const updateField = (key, value) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="min-h-screen bg-slate-50">
      <BuilderHeader />

      <main className="pt-14">
        {/* Toolbar */}
        <BuilderToolbar />

        {/* Workspace */}
        <div className="max-w-[1500px] mx-auto px-5 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT — Form */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-4 min-w-0">
              {/* Overview Badge */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-md shadow-indigo-500/20">
                    <IdCard size={18} className="text-white" />
                  </div>
                  <div>
                    <h1 className="text-[15px] font-semibold text-slate-900 tracking-tight">
                      Executive Identity Card
                    </h1>
                    <p className="text-[12px] text-slate-500 mt-0.5">
                      Changes sync to cloud and contact passes.
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100 text-indigo-700 text-[11px] font-semibold">
                  <Zap size={11} />
                  NFC Enabled
                </span>
              </div>

              {/* Sections */}
              <ThemeSection
                selected={formData.theme}
                onSelect={(t) => updateField("theme", t)}
              />
              <IdentitySection
                avatar={formData.avatar}
                accent={formData.accent}
                name={formData.fullName}
                onAccentChange={(c) => updateField("accent", c)}
              />
              <BasicInfoSection data={formData} onChange={updateField} />
              <ContactSection data={formData} onChange={updateField} />
              <SocialSection />

              {/* Footer callout */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-slate-500">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  <span className="text-[12px]">
                    Card hosted on SSL secure edge. Instant CDN invalidation.
                  </span>
                </div>
                <button className="px-3.5 py-2 rounded-lg bg-slate-900 text-white text-[12px] font-semibold hover:bg-slate-800 transition-all shadow-sm shadow-slate-900/10 active:scale-[0.97]">
                  Save All Changes
                </button>
              </div>
            </div>

            {/* RIGHT — Sticky Live Preview */}
            <div className="lg:col-span-5 xl:col-span-5 sticky top-20 flex flex-col items-center">
              <LivePreview data={formData} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CardBuilderPage;
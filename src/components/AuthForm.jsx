import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Check,
} from "lucide-react";

const GoogleIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    ></path>
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    ></path>
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    ></path>
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    ></path>
  </svg>
);

const AuthForm = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const isSignup = mode === "signup";

  const slug =
    fullName.trim().toLowerCase().replace(/[^a-z0-9]/g, "") || "yourname";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="col-span-1 lg:col-span-6 xl:col-span-5 flex flex-col justify-center p-6 sm:p-10 lg:p-12 bg-white min-h-screen relative">
      {/* Subtle top-right glow for mobile */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100/40 blur-[80px] rounded-full pointer-events-none lg:hidden"></div>

      <div className="w-full max-w-sm mx-auto relative">
        {/* Top nav — mobile brand + back */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="lg:hidden flex items-center gap-2">
            <img
              alt="DigiCard Logo"
              className="h-7 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/AEtjO1XA-rUKyw0HTxomf-T1HQRyOUcsEqtec7UgaM2nHHFlXjS0hSzNpe7ujnPD-MyB3DAuJ6Xi7FDNGFL_JPyHy9NSYTmiLBcayXWppm5ikieYKsCQsrWswFzmneDUOWrO6fAhM2DbFJ_8TIV9lXTPftJ3aHRsmRXaGYJQ_cJOpaekQoJTUXL-dXSA3Y_zYi4Kj6Hj0ZEJDKYxz645J2HLhi57SIRYEvrXLzySN8zTSd7T6OmZ4Yd2p75s"
            />
            <span className="text-[15px] font-semibold text-slate-900">
              DigiCard
            </span>
          </Link>

          <Link
            to="/"
            className="hidden lg:inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-500 hover:text-slate-900 transition-colors ml-auto"
          >
            <ArrowLeft size={14} />
            <span>Back to home</span>
          </Link>
        </div>

        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-[24px] leading-[32px] font-bold text-slate-900 tracking-[-0.02em]">
            {isSignup ? (
              <>
                Create your{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  account
                </span>
              </>
            ) : (
              "Welcome back"
            )}
          </h2>
          <p className="text-[13px] text-slate-500 mt-1.5">
            {isSignup
              ? "Launch your free digital business card in under 60 seconds."
              : "Access your business card analytics and personal hubs."}
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-slate-100 p-1 rounded-xl flex items-center mb-6">
          <button
            className={`flex-1 py-1.5 rounded-lg text-[13px] text-center transition-all duration-200 ${
              isSignup
                ? "bg-white text-slate-900 font-semibold shadow-sm"
                : "text-slate-600 font-medium hover:text-slate-900"
            }`}
            onClick={() => setMode("signup")}
            type="button"
          >
            Sign Up
          </button>
          <button
            className={`flex-1 py-1.5 rounded-lg text-[13px] text-center transition-all duration-200 ${
              !isSignup
                ? "bg-white text-slate-900 font-semibold shadow-sm"
                : "text-slate-600 font-medium hover:text-slate-900"
            }`}
            onClick={() => setMode("login")}
            type="button"
          >
            Log In
          </button>
        </div>

        {/* Google SSO */}
        <button
          className="w-full h-10 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 transition-all duration-150 flex items-center justify-center gap-2.5 text-slate-900 text-[13px] font-medium shadow-sm active:scale-[0.99]"
          type="button"
        >
          <GoogleIcon />
          <span>Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="relative my-5 flex items-center justify-center">
          <div className="w-full h-px bg-slate-200"></div>
          <span className="absolute px-3 bg-white text-slate-400 text-[10px] uppercase tracking-wider font-medium">
            or continue with email
          </span>
        </div>

        {/* Form */}
        <form className="space-y-3.5" onSubmit={handleSubmit}>
          {/* Full Name */}
          {isSignup && (
            <div>
              <label
                className="block text-[12px] font-semibold text-slate-700 mb-1.5"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <div className="relative">
                <User
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-10 pl-9 pr-3 bg-white rounded-xl text-[13px] text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                  placeholder="Marcus Vance"
                  type="text"
                />
              </div>
            </div>
          )}

          {/* Email */}
          <div>
            <label
              className="block text-[12px] font-semibold text-slate-700 mb-1.5"
              htmlFor="emailInput"
            >
              Work or personal email
            </label>
            <div className="relative">
              <Mail
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                id="emailInput"
                className="w-full h-10 pl-9 pr-3 bg-white rounded-xl text-[13px] text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                placeholder="alex@domain.com"
                required
                type="email"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                className="text-[12px] font-semibold text-slate-700"
                htmlFor="passwordInput"
              >
                Password
              </label>
              {!isSignup && (
                <a
                  className="text-[11px] text-indigo-600 hover:underline font-medium"
                  href="#"
                >
                  Forgot password?
                </a>
              )}
            </div>
            <div className="relative">
              <Lock
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                id="passwordInput"
                className="w-full h-10 pl-9 pr-10 bg-white rounded-xl text-[13px] text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                placeholder="••••••••"
                required
                type={showPassword ? "text" : "password"}
              />
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                onClick={() => setShowPassword((s) => !s)}
                type="button"
                aria-label="Toggle password"
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          {/* Handle preview */}
          {isSignup && (
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-indigo-50/60 to-violet-50/60 border border-indigo-100/60">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-medium">
                  Your reserved handle
                </span>
                <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                  Available
                </span>
              </div>
              <div className="mt-1 flex items-center text-[12px]">
                <span className="text-slate-500">digicard.co/</span>
                <span className="font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  {slug}
                </span>
              </div>
            </div>
          )}

          {/* Submit */}
          <button
            className="w-full h-10 mt-1 bg-slate-900 hover:bg-slate-800 text-white text-[13px] font-semibold rounded-xl shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2 transition-all duration-150 active:scale-[0.98] disabled:opacity-80"
            type="submit"
            disabled={submitting}
          >
            <span>
              {submitting
                ? isSignup
                  ? "Setting up..."
                  : "Signing in..."
                : isSignup
                ? "Create Free Account"
                : "Sign In"}
            </span>
            <ArrowRight size={14} />
          </button>
        </form>

        {/* Terms */}
        <p className="mt-4 text-center text-[11px] text-slate-500 leading-relaxed">
          By continuing, you agree to DigiCard's{" "}
          <a
            className="text-slate-700 underline hover:text-indigo-600 font-medium"
            href="#"
          >
            Terms
          </a>{" "}
          and{" "}
          <a
            className="text-slate-700 underline hover:text-indigo-600 font-medium"
            href="#"
          >
            Privacy Policy
          </a>
          .
        </p>

        {/* Toggle prompt */}
        <div className="mt-5 text-center">
          <p className="text-[12px] text-slate-500">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <button
                  className="text-indigo-600 font-semibold hover:underline ml-0.5"
                  onClick={() => setMode("login")}
                  type="button"
                >
                  Log in
                </button>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <button
                  className="text-indigo-600 font-semibold hover:underline ml-0.5"
                  onClick={() => setMode("signup")}
                  type="button"
                >
                  Sign up free
                </button>
              </>
            )}
          </p>
        </div>

        {/* Trust indicators */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-center gap-4">
          <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
            <ShieldCheck size={12} className="text-emerald-600" />
            <span>SOC2</span>
          </div>
          <span className="w-px h-3 bg-slate-200"></span>
          <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
            <Lock size={12} className="text-emerald-600" />
            <span>Encrypted</span>
          </div>
          <span className="w-px h-3 bg-slate-200"></span>
          <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
            <Check size={12} className="text-emerald-600" />
            <span>Free forever</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
import React from "react";
import AuthLeftPanel from "../components/AuthLeftPanel";
import AuthForm from "../components/AuthForm";

const AuthPage = () => {
  return (
    <main className="w-full bg-slate-50 min-h-screen">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12">
        <AuthLeftPanel />
        <AuthForm />
      </div>
    </main>
  );
};

export default AuthPage;
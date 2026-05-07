"use client";

import { useState, useEffect } from "react";

export default function TwoFactorPage() {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function handleFakeVerify() {
    // hiçbir doğrulama yok
    alert("Verifying code...");
    setTimeout(() => {
      alert("Success (mock) ✅");
      window.location.href = "/";
    }, 1000);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-2xl w-80 text-center">

        <h1 className="text-2xl font-bold text-yellow-400 mb-2">
          Two-Factor Authentication
        </h1>

        <p className="text-gray-400 text-sm mb-4">
          Enter the 6-digit code
        </p>

        <input
          className="w-full p-2 mb-3 rounded bg-gray-800 text-center tracking-widest"
          placeholder="••••••"
          maxLength={6}
          onChange={(e) => setCode(e.target.value)}
        />

        <p className="text-xs text-gray-500 mb-4">
          Resend code in {timer}s
        </p>

        <button
          onClick={handleFakeVerify}
          className="w-full bg-yellow-400 text-black p-2 rounded font-bold"
        >
          Verify
        </button>

        <p className="text-xs text-gray-500 mt-4">
          (This is a mock screen)
        </p>

      </div>
    </div>
  );
}
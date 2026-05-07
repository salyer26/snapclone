"use client";

import { useState } from "react";

export default function Home() {
  const [stories] = useState([
    "Ali", "Ece", "Mert", "Zeynep", "John"
  ]);

  const [posts] = useState([
    {
      user: "Ali",
      img: "https://picsum.photos/400/500",
      text: "Morning vibes ☀️",
    },
    {
      user: "Ece",
      img: "https://picsum.photos/401/500",
      text: "Snap moment 📸",
    },
  ]);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* MOBILE WRAPPER */}
      <div className="max-w-md mx-auto min-h-screen flex flex-col">

        {/* HEADER */}
        <header className="flex justify-between items-center px-4 py-4 border-b border-gray-800">
          <h1 className="text-yellow-400 font-bold text-2xl">
            SnapClone
          </h1>

          <div className="flex gap-3 text-sm">
            <a href="/login">Login</a>
            <a href="/register">Sign Up</a>
          </div>
        </header>

        {/* STORIES */}
        <div className="flex gap-4 overflow-x-auto px-4 py-4 border-b border-gray-800">
          {stories.map((s, i) => (
            <div key={i} className="flex flex-col items-center min-w-[60px]">
              <div className="w-14 h-14 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                👻
              </div>
              <span className="text-xs mt-1">{s}</span>
            </div>
          ))}
        </div>

        {/* FEED */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">

          {posts.map((p, i) => (
            <div key={i} className="bg-gray-900 rounded-2xl overflow-hidden">

              <div className="p-3 font-semibold">
                {p.user}
              </div>

              <img src={p.img} className="w-full" />

              <div className="p-3 text-sm text-gray-300">
                {p.text}
              </div>

            </div>
          ))}

        </div>

        {/* BOTTOM NAV */}
        <div className="border-t border-gray-800 flex justify-around py-3 text-lg">
          <button>📸</button>
          <button>💬</button>
          <button className="text-yellow-400">⬤</button>
          <button>👥</button>
          <button>👤</button>
        </div>

      </div>
    </div>
  );
}
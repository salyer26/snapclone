"use client";

import { useEffect, useState } from "react";

type Story = {
  id: number;
  name: string;
};

type Post = {
  id: number;
  user: string;
  image: string;
  caption: string;
};

export default function Home() {
  const [stories] = useState<Story[]>([
    { id: 1, name: "Ali" },
    { id: 2, name: "Ece" },
    { id: 3, name: "John" },
    { id: 4, name: "Mert" },
  ]);

  const [posts] = useState<Post[]>([
    {
      id: 1,
      user: "Ali",
      image: "https://picsum.photos/400/500",
      caption: "Good morning ☀️",
    },
    {
      id: 2,
      user: "Ece",
      image: "https://picsum.photos/401/500",
      caption: "Snap moment 📸",
    },
  ]);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-yellow-400 font-bold text-2xl">
          SnapClone
        </h1>

        <div className="flex gap-4 text-sm">
          <a href="/login">Login</a>
          <a href="/register">Sign Up</a>
        </div>
      </header>

      {/* STORIES */}
      <div className="flex gap-4 overflow-x-auto px-4 py-4 border-b border-gray-800">
        {stories.map((s) => (
          <div key={s.id} className="flex flex-col items-center min-w-[70px]">

            <div className="w-14 h-14 rounded-full border-2 border-yellow-400 flex items-center justify-center">
              👻
            </div>

            <span className="text-xs mt-1">{s.name}</span>

          </div>
        ))}
      </div>

      {/* FEED */}
      <div className="flex flex-col gap-6 p-4">

        {posts.map((p) => (
          <div key={p.id} className="bg-gray-900 rounded-2xl overflow-hidden">

            {/* USER */}
            <div className="p-3 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
              <span className="font-semibold">{p.user}</span>
            </div>

            {/* IMAGE */}
            <img src={p.image} className="w-full" />

            {/* CAPTION */}
            <div className="p-3 text-sm text-gray-300">
              {p.caption}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
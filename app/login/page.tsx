"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login başarılı!");
      window.location.href = "/";
    } else {
      alert(data.error || "Hata");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-2xl w-80">

        <h1 className="text-2xl font-bold mb-6 text-yellow-400">
          Login
        </h1>

        <input
          className="w-full p-2 mb-3 rounded bg-gray-800"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-2 mb-3 rounded bg-gray-800"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-yellow-400 text-black p-2 rounded font-bold"
        >
          Login
        </button>

        <p className="text-sm mt-4 text-gray-400">
          Hesabın yok mu?{" "}
          <a href="/register" className="text-yellow-400">
            Register
          </a>
        </p>

      </div>
    </div>
  );
}
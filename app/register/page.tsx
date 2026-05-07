"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();

    if (data.message) {
      alert("Kayıt başarılı!");
      window.location.href = "/login";
    } else {
      alert(data.error || "Hata oluştu");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-2xl w-80">

        <h1 className="text-2xl font-bold mb-6 text-yellow-400">
          Register
        </h1>

        <input
          className="w-full p-2 mb-3 rounded bg-gray-800"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

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
          onClick={handleRegister}
          className="w-full bg-yellow-400 text-black p-2 rounded font-bold"
        >
          Register
        </button>

        <p className="text-sm mt-4 text-gray-400">
          Zaten hesabın var mı?{" "}
          <a href="/login" className="text-yellow-400">
            Login
          </a>
        </p>

      </div>
    </div>
  );
}
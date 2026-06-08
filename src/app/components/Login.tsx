"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginComp() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Error al iniciar sesión");
      setLoading(false);
      return;
    }

    router.push("/clientes");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form
        onSubmit={handleLogin}
        className="bg-[#626262] shadow-[0px_4px_30.4px_rgba(241,236,22,0.34)] p-6 rounded-lg w-[300px] space-y-4"
      >
        <h1 className="text-xl font-sans text-white text-center py-8">
          Panel de ingreso <br />
          Administración
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-white border p-2 rounded outline-none focus:ring-2 focus:ring-[#c9c0c0]"
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-white border p-2 rounded outline-none focus:ring-2 focus:ring-[#c9c0c0]"
          required
        />

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          disabled={loading}
          className="
              bg-[#F1EC16]
              w-full
              py-[8px]
              rounded-[8px]
              border-2
              border-white
              text-[#444444]
              cursor-pointer
              font-description
              font-bold
              text-[16px]
              hover:bg-[#f8f55c]
              transition-colors
              duration-300
            "
        >
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </div>
  );
}

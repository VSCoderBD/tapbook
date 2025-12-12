"use client";

import { useState, useEffect } from "react";
import { useAuthHelpers, isLoggedIn } from "../components/hooks/useAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const { doLogin } = useAuthHelpers();

  // Redirect if already logged in
  useEffect(() => {
    if (isLoggedIn()) {
      router.replace("/");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setBusy(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
      doLogin(email, password, "/");
    } catch (error: any) {
      setErr(error?.message ?? "Login failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="flex text-black flex-col justify-center lg:flex-row gap-7 min-h-screen bg-slate-200 p-6">
      {/* Left Section */}
      <div className="flex flex-col self-center justify-center max-w-md gap-5">
        <h1 className="text-brand self-center font-extrabold text-6xl">tapbook</h1>
        <p className="text-2xl text-center lg:text-left text-black">
          Tapbook helps you connect and share with the people in your life.
        </p>
      </div>

      {/* Login Box */}
      <div className="flex justify-center self-center w-full max-w-md">
        <div className="bg-white w-full p-6 shadow-lg shadow-pink-600 rounded-lg">

          <form onSubmit={onSubmit} className="space-y-4 w-full">

            {/* Email */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent border border-gray-300 px-3 py-2 rounded text-black
                         focus:border-brand focus:ring-0 outline-none"
              placeholder="Email address"
            />

            {/* Password */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-transparent border border-gray-300 px-3 py-2 rounded text-black
                         focus:border-brand focus:ring-0 outline-none"
              placeholder="Password"
            />

            {/* Error */}
            {err && <p className="text-red-500 text-sm">{err}</p>}

            {/* FULL WIDTH BUTTON */}
            <button
              type="submit"
              disabled={busy}
              className="w-full bg-brand text-white py-2 rounded text-lg font-semibold disabled:opacity-60"
            >
              {busy ? "Signing in…" : "Log in"}
            </button>

            <Link href="/">
              <p className="w-fit hover:border-b text-brand border-brand">Forgotten password?</p>
            </Link>

            <div className="flex justify-center">
              <Link href="/">
                <p className="w-fit bg-orange-600 text-white py-2 px-4 rounded text-lg font-semibold">
                  Create new account
                </p>
              </Link>
            </div>

          </form>

        </div>
      </div>
    </main>
  );
}

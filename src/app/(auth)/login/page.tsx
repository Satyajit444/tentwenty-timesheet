"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid email or password");
        return;
      }

      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* LEFT — LOGIN */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md p-8 space-y-6">
          <div className="space-y-1">
            <h2 className="text-3xl font-semibold text-gray-800">
              Welcome back
            </h2>
            <p className="text-sm text-gray-500">
              Sign in to continue managing your team
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="text-sm text-gray-600 block mb-1">Email</label>
              <Input
                className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Password
              </label>
              <Input
                className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-blue-600" />
                Remember me
              </label>
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-11 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </div>
      </div>

      {/* RIGHT — BRAND / HERO */}
      <div
        className="flex-1 flex items-center justify-center px-10 py-12
                  bg-blue-700 text-white"
      >
        <div className="max-w-md space-y-6 text-center lg:text-left">
          <div
            className="inline-flex items-center gap-2 
                      bg-white/10 px-4 py-2 rounded-full text-sm"
          >
            ✨ TickTock - Smart Timesheet Platform
          </div>

          <h1 className="text-4xl font-semibold leading-tight">
            Manage time.
            <br />
            Boost productivity.
          </h1>

          <p className="text-blue-100 text-sm leading-relaxed">
            Track attendance, monitor performance, and manage employee work
            hours from anywhere. Built for modern teams that value clarity and
            efficiency.
          </p>

          <div className="flex gap-4 justify-center lg:justify-start text-sm text-blue-100">
            <span>✔ Track time</span>
            <span>✔ View reports</span>
            <span>✔ Manage work</span>
          </div>
        </div>
      </div>
    </div>
  );
}

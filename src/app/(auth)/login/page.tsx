"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import styles from  "./Login.module.css";

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
 <div className={styles["login-container"]}>

      {/* LEFT */}
      <div className={styles["left-panel"]}>
        <div className={styles["form-wrapper"]}>

          <div>
            <h2 className={styles["heading"]}>Welcome back</h2>
            <p className={styles["subtext"]}>
              Sign in to continue managing your team
            </p>
          </div>

          <form onSubmit={handleLogin} className={styles["form"]}>
            <div>
              <label className={styles["label"]}>Email</label>
              <Input
                className={styles["input"]}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className={styles["label"]}>Password</label>
              <Input
                type="password"
                className={styles["input"]}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className={styles["checkbox-row"]}>
              <label className={styles["checkbox-label"]}>
                <input type="checkbox" className="accent-blue-600" />
                Remember me
              </label>
            </div>

            {error && (
              <div className={styles["error-box"]}>{error}</div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className={styles["submit-btn"]}
            >
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </div>
      </div>

      {/* RIGHT */}
      <div className={styles["right-panel"]}>
        <div className={styles["hero-wrapper"]}>

          <div className={styles["hero-badge"]}>
            ✨ TickTock - Smart Timesheet Platform
          </div>

          <h1 className={styles["hero-title"]}>
            Manage time.
            <br />
            Boost productivity.
          </h1>

          <p className={styles["hero-text"]}>
            Track attendance, monitor performance, and manage employee work hours.
          </p>

          <div className={styles["hero-features"]}>
            <span>✔ Track time</span>
            <span>✔ View reports</span>
            <span>✔ Manage work</span>
          </div>

        </div>
      </div>

    </div>
  );
}

"use client";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  const userName = session?.user?.name || "User";

  return (
    <header className="w-full border-b bg-white px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <h1 className="text-lg font-semibold">ticktock</h1>

        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <Link href="/dashboard" className="hover:text-black">
            Timesheets
          </Link>
        </nav>
      </div>

      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-sm font-medium"
        >
          {userName}
          <span className="text-green-500 text-xs">●</span>
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow">
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

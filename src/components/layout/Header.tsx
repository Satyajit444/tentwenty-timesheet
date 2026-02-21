"use client";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { LogOut, ChevronDown } from "lucide-react";

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  const userName = session?.user?.name || "User";

  return (
    <header className="w-full bg-white px-6 py-3 flex items-center justify-between shadow-sm">
      
      {/* LEFT */}
      <div className="flex items-center gap-10">
        <h1 className="text-lg font-semibold tracking-tight">
          ticktock
        </h1>

        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <Link href="/dashboard" className="hover:text-black transition">
            Timesheets
          </Link>
        </nav>
      </div>

      {/* RIGHT */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-sm font-medium 
                     px-3 py-1.5 rounded-lg hover:bg-gray-100 transition"
        >
          <span>{userName}</span>
          <span className="text-green-500 text-xs">●</span>
          <ChevronDown size={16} className="text-gray-500" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 
                          rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm 
                         hover:bg-gray-50 transition"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
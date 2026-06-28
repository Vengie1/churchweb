"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0A2342] text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-20">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="SGKC" width={100} height={100} />
          <div>
            <h1 className="font-bold text-sm">Shekina Glory</h1>
            <p className="text-xs text-amber-400">Kingdom Church</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
         
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#081a33] px-6 py-4 space-y-3">
          
        </div>
      )}
    </nav>
  );
}
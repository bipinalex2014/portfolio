"use client";

import Link from "next/link";
import { navigation } from "@/data/navigation";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="hidden items-center gap-8 md:flex">
      {navigation.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`relative py-2 text-sm font-medium transition-colors ${
              isActive
                ? "text-blue-600 dark:text-blue-400"
                : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-100"
            }`}
          >
            {link.name}

            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 dark:bg-blue-400 ${
                isActive ? "w-full" : "w-0"
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
}
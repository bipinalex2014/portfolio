import Link from "next/link";

export default function NavLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 transition-colors hover:text-blue-600 dark:text-slate-100 dark:hover:text-blue-400"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
        BA
      </div>

      <span className="hidden md:block">
        Bipin Alex
      </span>
    </Link>
  );
}
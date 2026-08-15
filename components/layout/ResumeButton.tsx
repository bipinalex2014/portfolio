import { Download } from "lucide-react";

export default function ResumeButton() {
  return (
    <a
      href="resume/Bipin_Alex_Resume.pdf"
      download="Bipin_Alex_Resume.pdf"
      className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
    >
      <Download className="h-4 w-4" />
      Download Resume
    </a>
  );
}
import { Heart, ShieldCheck } from "lucide-react";
import { navLinks } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-cyan-300/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-3 text-slate-950 dark:text-white">
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-cyan-500 dark:text-cyan-200">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="font-bold">Rakesh Yadav</span>
          </div>
          <p className="mt-3 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            Built with React & Passion <Heart className="h-4 w-4 text-cyan-400" />
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm text-slate-600 transition hover:bg-cyan-300/10 hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-200">
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-sm text-slate-500 dark:text-slate-500">
        Copyright {new Date().getFullYear()} Rakesh Yadav. All rights reserved.
      </p>
    </footer>
  );
}

import { fetchPortfolioInfo } from '@/lib/api';

export default async function Footer() {
  const info = await fetchPortfolioInfo();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Copyright */}
        <p className="text-sm text-slate-500">
          &copy; {year} {info.name}. All rights reserved.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <a
            href={info.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-slate-300 transition-colors px-2 py-1 rounded-lg hover:bg-slate-800"
          >
            GitHub
          </a>
          <a
            href={info.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-slate-300 transition-colors px-2 py-1 rounded-lg hover:bg-slate-800"
          >
            LinkedIn
          </a>
          <a
            href={info.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-slate-300 transition-colors px-2 py-1 rounded-lg hover:bg-slate-800"
          >
            X
          </a>
          <a
            href={`mailto:${info.email}`}
            className="text-sm text-slate-500 hover:text-slate-300 transition-colors px-2 py-1 rounded-lg hover:bg-slate-800"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}

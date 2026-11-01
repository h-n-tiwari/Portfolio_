import { fetchPortfolioInfo } from '@/lib/api';

export default async function Hero() {
  const info = await fetchPortfolioInfo();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">

        {/* Small decorative box */}
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-purple-500/30 flex items-center justify-center">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 opacity-80" />
          </div>
        </div>

        {/* "Available" badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 mb-4">
          {info.name}
        </h1>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          {info.title}
        </h2>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
          {info.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors w-full sm:w-auto text-center"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-slate-100 font-medium transition-colors w-full sm:w-auto text-center"
          >
            Contact Me
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={info.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-slate-100 transition-colors text-sm"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href={info.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-slate-100 transition-colors text-sm"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href={info.x}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-slate-100 transition-colors text-sm"
            aria-label="X / Twitter"
          >
            X
          </a>
        </div>

        {/* Scroll down arrow */}
        <div className="mt-16 flex justify-center">
          <a href="#about" className="text-slate-600 hover:text-slate-400 transition-colors text-xl animate-bounce">
            ↓
          </a>
        </div>
      </div>
    </section>
  );
}

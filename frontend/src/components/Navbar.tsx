'use client';

import { useState } from 'react';

// All the nav links
const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ name }: { name: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo / Name */}
          <a href="#home" className="flex items-center gap-2 text-slate-100 font-semibold hover:text-purple-400 transition-colors">
            {'</>'}
            <span>{name}</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop contact button */}
          <a
            href="#contact"
            className="hidden md:inline-flex px-4 py-2 text-sm font-medium rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-colors"
          >
            Contact Me
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#0a0a0f]">
          <ul className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium text-center transition-colors"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

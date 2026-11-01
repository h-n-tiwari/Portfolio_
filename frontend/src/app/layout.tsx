import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Happy — Full-Stack Web3 Developer',
  description: 'Building full-stack applications and exploring blockchain-powered products.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0f] text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}

"use client";

import { Brain, Github } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const version = "1.0.0";

  return (
    <nav className="fixed w-full top-0 z-50 bg-card/80 bg-blur-10 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex lg:ml-64 justify-center w-full lg:w-auto">
            <Link href="/" className="flex items-center">
              <Brain className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">RouletteAI</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <span className="text-muted-foreground">{version}</span>
            <Link 
              href="https://github.com/RouletteAI" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className='transition-colors'/>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
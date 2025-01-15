import React from 'react';
import { Github, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 transition-colors">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 animate-pulse" />
          <span>by</span>
          <a 
            href="https://github.com/ayam04" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:underline font-medium group"
          >
            Ayam
            <Github className="ml-1 w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <ExternalLink className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </a>
        </p>
        <p className="text-sm text-gray-500">
          Copyright © {currentYear}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
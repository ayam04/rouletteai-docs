"use client";

import { Bot, Play, Menu, Wrench, Globe2, Newspaper, Rocket } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      title: 'Getting Started',
      icon: <Rocket className="h-5 w-5" />,
      href: '#about'
    },
    // {
    //   title: 'Authentication',
    //   icon: <Key className="h-5 w-5" />,
    //   href: '#authentication'
    // },
    {
      title: 'Initialize Agent',
      icon: <Bot className="h-5 w-5" />,
      href: '#initialize'
    },
    {
      title: 'Use Agent',
      icon: <Play className="h-5 w-5" />,
      href: '#use'
    },
    {
      title: 'Available Models',
      icon: <Globe2 className="h-5 w-5" />,
      href: '#models'
    },
    {
      title: 'Blog',
      icon: <Newspaper className="h-5 w-5" />,
      href: '#blog'
    },
    {
      title: 'Upcoming Features',
      icon: <Wrench className="h-5 w-5" />,
      href: '#upcoming'
    }
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-primary-foreground rounded-lg"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className={`
        fixed top-0 left-0 h-full bg-card border-r border-border backdrop-blur-md
        transform transition-transform duration-200 ease-in-out z-40
        lg:translate-x-0 w-64 pt-16
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
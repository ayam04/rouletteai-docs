"use client";

import React, { useState } from 'react';
import { Bot, Cloud, Key, Send } from 'lucide-react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSubscribed(true);

    await fetch('/api/save-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
  };

  return (
    <div className="bg-card">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl bg-clip-text bg-gradient-to-r from-primary to-primary/60">
            RouletteAI Documentation
          </h1>
          <p className="max-w-xl mt-5 mx-auto text-xl text-muted-foreground">
            A powerful platform to store, manage and run AI agents on cloud
          </p>
        </div>
        
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-card rounded-lg px-6 pb-8 h-full border border-border/50 hover:border-border transition-colors">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                      <Key className="h-6 w-6 text-primary-foreground" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium">Authentication</h3>
                  <p className="mt-5 text-base text-muted-foreground">
                    Secure API key generation and management for your AI agents
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-card rounded-lg px-6 pb-8 h-full border border-border/50 hover:border-border transition-colors">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                      <Bot className="h-6 w-6 text-primary-foreground" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium">Agent Management</h3>
                  <p className="mt-5 text-base text-muted-foreground">
                    Initialize and configure AI agents with custom parameters
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-card rounded-lg px-6 pb-8 h-full border border-border/50 hover:border-border transition-colors">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                      <Cloud className="h-6 w-6 text-primary-foreground" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium">Cloud Execution</h3>
                  <p className="mt-5 text-base text-muted-foreground">
                    Run your AI agents in the cloud with simple API calls
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold bg-clip-text bg-gradient-to-r from-primary to-primary/60 transition-colors">
              Launching Soon!
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Subscribe to our newsletter for updates:
            </p>
            <form className="mt-6 flex justify-center max-w-md mx-auto text-black" onSubmit={handleSubmit}>
              <div className="relative w-full">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className={`w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 
                           focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                           duration-200 pr-12 transition-colors ${
                             email ? 'bg-gradient-to-r from-primary to-primary/50' : ''
                           }`}
                  required 
                />
                <button 
                  type="submit" 
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md
                           bg-primary hover:bg-primary/90 duration-200 text-black
                           text-primary-foreground"
                >
                  <Send 
                    className={`h-5 w-5 text-black ${
                      isHovered ? 'translate-x-0.5 -translate-y-0.5' : ''
                    }`}
                  />
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-muted-foreground">
              Join {email ? email.split('@')[0] : 'others'} in getting early access!
            </p>
            {subscribed && (
              <p className="mt-3 text-sm text-muted-foreground text-green-600">
                You have successfully subscribed!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
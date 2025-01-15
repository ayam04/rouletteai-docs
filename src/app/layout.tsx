import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RouletteAI Docs',
  description: 'Store, manage and run AI agents on cloud',
  icons: {
    icon: '/RouletteAI Logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="lg:pl-64">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
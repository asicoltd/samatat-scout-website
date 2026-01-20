import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Samatat Open Scout Group | Youth Development & Leadership',
  description: 'Samatat Open Scout Group is a long-running open scout group in Bangladesh focused on youth development, leadership, community service, and outdoor skills under the scouting movement.',
  keywords: 'scouting, Bangladesh, youth development, leadership, community service, outdoor skills',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
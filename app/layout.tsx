import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Modal from './components/modals/Modal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AirBnb',
  description: 'AirBnb clone',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal actionLabel="Submit" title="Hello" isOpen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

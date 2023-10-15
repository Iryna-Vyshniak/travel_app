import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel App for Camping',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}

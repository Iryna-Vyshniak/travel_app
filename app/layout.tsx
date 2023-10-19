import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Head from 'next/head';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel App for Camping',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <Head>
        <title>PonteChianale</title>
        <meta name='description' content='YelpCamp V2' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <header className=' shadow-lg shadow-green-100 bg-green-60'>
          <Navbar />
        </header>
        <main className='relative overflow-hidden flex flex-1 flex-col max-container padding-container'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';

import '../styles/globals.css';

import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'PonteChianale',
  description: 'Travel App for Camping',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <Head>
        <title>PonteChianale</title>
        <meta name='description' content='PonteChianale' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <header className='sticky left-0 right-0 top-0 z-30 shadow-lg shadow-green-90 bg-green-60/30 backdrop-blur-mds'>
          <Navbar />
        </header>
        <main className='relative overflow-hidden flex flex-1 flex-col mt-[-10rem]'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

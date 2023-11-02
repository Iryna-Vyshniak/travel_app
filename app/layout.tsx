import type { Metadata } from 'next';

import '../styles/globals.css';

import Head from 'next/head';
import Header from '@/components/Header/Header';

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
        <Header />
        <main className='relative overflow-hidden flex flex-1 flex-col'>{children}</main>
      </body>
    </html>
  );
}

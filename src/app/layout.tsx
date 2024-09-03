import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mazzodevelopments.com'), 
  title: 'Mazzo',
  description: 'Mazzo Developments',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Mazzo Developments',
    description: 'Leading developments in tech and innovation.',
    url: 'https://www.mazzodevelopments.com',
    siteName: 'Mazzo',
    images: [
      {
        url: '/static/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mazzo Developments',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Mazzo Developments" />
        <meta name="keywords" content="development, technology, innovation, software, ai" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

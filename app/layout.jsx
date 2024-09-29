
import Head from 'next/head'
// import { GoogleAnalytics } from '@next/third-parties/google'

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import "./globals.css";


export const metadata = {
  title: "MAD",
  description: "Originated as an idea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href='/favicon.ico' />
      </Head> */}
      <body className="bg-[#FFF3F3]">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const runtime = "edge";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from 'next/head';
import Script from 'next/script';
//import "./css/all.min.css";
import "./css/all.css";
import "./globals.css";
import "./styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chanel Munezero",
  description: "Resume, Projects and Blog of Chanel Munezero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-72WE5XWZBC"
          strategy="beforeInteractive"
        />
        <Script 
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
          __html: `
            document.getElementById('banner').classList.remove('hidden');
            window.dataLayer = window.dataLayer || [];
            window.gtag = function(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-72WE5XWZBC');
          `
       }} />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}


      </body>
    </html>
  );
}

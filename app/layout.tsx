import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins instead of Inter

import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Alexander Martin For MP, Edinburgh South",
  description: "Alexander Martin for MP in Edinburgh South election",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
     
      <body>{children}</body>
    </html>
  );
}
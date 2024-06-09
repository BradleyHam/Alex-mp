// app/layout.tsx
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Alexander Martin For MP, Edinburgh South - Independent Candidate',
  description: 'Alexander Martin, independent candidate running for MP in Edinburgh South, committed to healthcare reform, economic fairness, and environmental sustainability.',
  keywords: 'Alexander Martin, Edinburgh South, independent MP candidate, Edinburgh election 2024, healthcare reform, NHS privatisation, economic justice, green transition, local issues Edinburgh, Brexit policy, social justice, community building, political integrity',
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      
    <body>{children}</body>
  </html>
  );
}

import './globals.css';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { ReactNode } from 'react';
import ThemeWrapper from '@/components/ThemeWrapper';
export const metadata = {
  title: 'HolboxAI - Powering the Future with AI',
  description: 'Enterprise AI solutions for employees and customer service',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={` font-sans`}>
        <Navbar />
        <main>
          <ThemeWrapper>{children}</ThemeWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}

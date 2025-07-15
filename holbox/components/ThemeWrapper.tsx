"use client";

import { ReactNode } from "react";
import { Inter } from "next/font/google";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

interface ThemeWrapperProps {
  children: ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  return (
    <div
      className={inter.className}
      style={{
        // CSS variables for colors based on primary = hsl(221, 70%, 50%)
        // You can access them via var(--primary), etc.
        ['--primary-h' as any]: "221",
        ['--primary-s' as any]: "70%",
        ['--primary-l' as any]: "50%",
        ['--primary' as any]: "hsl(var(--primary-h), var(--primary-s), var(--primary-l))",
        ['--primary-light' as any]: "hsl(var(--primary-h), var(--primary-s), 90%)",
        ['--primary-dark' as any]: "hsl(var(--primary-h), var(--primary-s), 30%)",
        ['--primary-bg' as any]: "hsl(var(--primary-h), var(--primary-s), 95%)",
         ['--secondary' as any]: "hsl(var(--primary-h), 20%, 60%)",
        ['--secondary-light' as any]: "hsl(var(--primary-h), 15%, 70%)",
        ['--accent' as any]: "hsl(calc(var(--primary-h) + 30), var(--primary-s), var(--primary-l))",
        ['--surface' as any]: "hsl(var(--primary-h), 10%, 98%)",
        ['--border' as any]: "hsl(var(--primary-h), 20%, 90%)",
      }}
    >
      {children}
    </div>
  );
}

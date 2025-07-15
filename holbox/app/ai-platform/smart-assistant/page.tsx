"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Inter } from "next/font/google"
import PageWrapper from "@/components/ai-platform/smart-assistant/PageWrapper";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
})


export default function SmartAssistantPage() {
  return (
    <div className="pt-20">
      <div className={inter.className}>
        <PageWrapper />
      </div>
    </div>
  );
} 
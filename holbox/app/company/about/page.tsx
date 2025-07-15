import AboutHero from "@/components/company/AboutUs/about-hero"
import CallToAction from "@/components/company/AboutUs/call-to-action"
import WhatWeOffer from "@/components/company/AboutUs/what-we-offer"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export default function AboutPage() {
  return (
    <main className={`${inter.className} min-h-screen bg-white`}>
      <AboutHero />
      <WhatWeOffer />
      <CallToAction />
    </main>
  )
}

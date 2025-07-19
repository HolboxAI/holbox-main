"use client"

import Image from "next/image"

import { useEffect, useState } from "react"

import { CheckCircle, Star, Zap } from "lucide-react"
import Link from "next/link"

const features = [
  "Quick 5-minute setup process",
  "Pre-trained on industry best practices",
  "Seamless integration with existing systems",
  "24/7 performance monitoring",
  "Continuous learning and improvement",
]

export default function SmartAssistantOnboarding() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("onboarding-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="onboarding-section" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-[hsl(221,70%,90%)] to-[hsl(221,70%,85%)] rounded-lg"> {/* Updated background gradient */}
                  <Star className="w-6 h-6 text-[hsl(221,70%,50%)]" /> {/* Updated icon color */}
                </div>
                <span className="text-[hsl(221,70%,50%)] font-semibold text-lg">Best Performing</span> {/* Updated text color */}
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Onboarding a{" "}
                <span className="bg-gradient-to-r from-[hsl(221,70%,50%)] to-[hsl(221,70%,40%)] bg-clip-text text-transparent"> {/* Updated text gradient */}
                  Smart Assistant
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                Deploy enterprise-grade AI customer service in minutes, not months. Our smart assistant comes
                pre-configured with industry expertise and integrates seamlessly with your existing workflow.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 transform transition-all duration-700 ${
                    isVisible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[hsl(221,70%,50%)]" /> {/* Updated icon color */}
                  </div>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
      <Link href="/contact" passHref>
        <button className="px-8 py-4 bg-gradient-to-r from-[hsl(221,70%,50%)] to-[hsl(221,70%,40%)] text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
          <Zap className="w-5 h-5" />
          <span>Request Free Trial</span>
        </button>
      </Link>

      <a
        href="https://demo.holbox.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,50%)] transition-all duration-300 text-center"
      >
        Try our demo
      </a>
    </div>
          </div>

          {/* Image */}
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100 scale-100" : "translate-x-10 opacity-0 scale-95"
            }`}
          >
            <div className="relative">
              {/* Glowing Background */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-[hsl(221,70%,60%)] to-[hsl(221,70%,50%)] rounded-3xl blur-3xl opacity-20 animate-pulse"></div>  */}

              {/* Main Image */}
              <Image
                src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65fab487e857002e99967d60_the-story-behind-our-consulting-firm-content-brix-templates.jpg"
                alt="Smart Assistant Onboarding"
                width={600}
                height={400}
                className="relative z-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
              />

              {/* Floating Elements */}
              {/* Updated floating element color */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
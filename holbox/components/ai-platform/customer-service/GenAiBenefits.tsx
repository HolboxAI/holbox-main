"use client"

import { useEffect, useState } from "react"

const benefits = [
  {
    title: "Instant Response Time",
    description: "Provide immediate answers 24/7 without delays",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Reduced Wait Times",
    description: "Eliminate customer queues with automated support",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Cost Efficiency",
    description: "Lower operational costs while improving service quality",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    )
  },
  {
    title: "Personalized Experience",
    description: "Tailored responses based on customer history and preferences",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: "Scalable Operations",
    description: "Handle unlimited concurrent conversations effortlessly",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    )
  },
  {
    title: "Consistent Quality",
    description: "Maintain high service standards across all interactions",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Multi-language Support",
    description: "Serve global customers in their preferred language",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    )
  },
  {
    title: "Intelligent Learning",
    description: "Continuously improve responses through machine learning",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Enhanced Satisfaction",
    description: "Boost customer happiness with efficient, accurate support",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
]

export default function GenAIBenefits() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true)
            benefits.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index])
              }, index * 120)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("benefits-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [isInView])

  return (
    <section id="benefits-section" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Benefits of Full Customer Service Team{" "}
              <span className="relative">
                <span style={{ color: 'hsl(221, 70%, 50%)' }}>
                  Powered by GenAI
                </span>
              </span>
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Transform your customer service with AI that delivers exceptional experiences while reducing costs and
            complexity.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {benefits.map((benefit, index) => {
            const isVisible = visibleItems.includes(index)

            return (
              <div
                key={index}
                className={`group relative transform transition-all duration-700 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-white rounded-3xl p-8 h-full border border-slate-200/60 hover:border-blue-300/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
                  
                  {/* Simple gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon Container */}
                  <div className="relative z-10 mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 group-hover:from-blue-500/20 group-hover:to-indigo-500/20 rounded-2xl transition-all duration-300 border border-blue-200/50 group-hover:border-blue-300/60">
                      <div className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                        {benefit.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-slate-800 transition-colors duration-300 leading-tight">
                      {benefit.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 font-light">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>        
      </div>
    </section>
  )
}
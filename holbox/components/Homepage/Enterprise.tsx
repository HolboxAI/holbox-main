"use client"

import { Check } from "lucide-react"
import { useEffect, useState } from "react"

export default function ArchitectureSection() {
  const [isVisible, setIsVisible] = useState(false)

  const features = [
    "Deterministic Responses",
    "Enterprise Access Controls",
    "Hallucination Free",
    "Traceable to Ground Truth",
    "No LLM-Caused Data Leakage",
    "LLM Agnostic",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("architecture-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="architecture-section" className="bg-white py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-8 lg:mb-10 transform transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
            <span className="inline-block animate-fade-in-up">Single Knowledge Source</span>{" "}
            <span className="inline-block animate-fade-in-up animation-delay-200">for the</span>{" "}
            <span style={{ color: 'hsl(221, 70%, 50%)' }}>
              Enterprise
            </span>
          </h2>
        </div>

        <div
          className={`mb-8 lg:mb-10 flex justify-center transform transition-all duration-1000 ease-out delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="max-w-4xl w-full">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-500 relative">
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100/70 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-100/70 rounded-full animate-pulse animation-delay-500"></div>
              <img
                src="/architecture.png"
                alt="Enterprise knowledge architecture diagram showing single source integration with LLM systems"
                className="w-full max-w-none h-[420px] object-fill object-center rounded-md transition-transform duration-300 hover:scale-[1.01]"
                loading="lazy"
              />

            </div>
          </div>
        </div>

        <div
          className={`flex justify-center transform transition-all duration-1000 ease-out delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-4xl">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
                <span className="text-base text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        @media (max-width: 640px) {
          .animate-fade-in-up {
            animation-duration: 0.6s;
          }
        }
      `}</style>
    </section>
  )
}

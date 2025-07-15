"use client"

import { useEffect, useState } from "react"

export default function GenerativeAICompanySection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("generative-ai-company-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="generative-ai-company-section" className="bg-white py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Section */}
          <div
            className={`space-y-6 ml-4 sm:ml-8 lg:pl-12 xl:pl-16 2xl:pl-20 transform transition-all duration-1000 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <header>
              <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
                <span className="inline-block animate-fade-in-up bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Generative AI
                </span>{" "}
                <span className="inline-block animate-fade-in-up animation-delay-200">Development</span>{" "}
                <span className="inline-block animate-fade-in-up animation-delay-400">Company</span>
              </h2>
            </header>

            <p
              className={`text-base sm:text-lg lg:text-lg text-gray-700 leading-relaxed transform transition-all duration-1000 ease-out delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              Discover the potential of AI with our customized <strong>generative AI development services</strong>. We
              provide expert guidance and create strong solutions that seamlessly incorporate advanced models such as{" "}
              <strong>GPT-4, Llama, and PaLM-2</strong>. Our goal is to be at the forefront of AI technology, exploring
              new opportunities in artificial intelligence. Our generative AI solutions assist businesses in automating
              tasks and improving productivity and efficiency.
            </p>
          </div>

          {/* Image Section */}
          <div
            className={`relative transform transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-200 transition-all duration-500 relative">
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100/70 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-100/70 rounded-full animate-pulse animation-delay-500"></div>

              <img
                src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e57f68936d2887a090f678_popular-services-p-800.png"
                alt="Generative AI development services showing data sources and enterprise integrations"
                className="w-full h-auto transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
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

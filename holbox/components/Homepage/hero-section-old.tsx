"use client"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (

    <section className="bg-white pt-16 md:pt-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`space-y-8 ml-4 sm:ml-8 lg:pl-16 xl:pl-20 2xl:pl-24 transform transition-all duration-1000 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[3rem] font-bold text-gray-900 leading-tight">
              <span className="inline-block animate-fade-in-up">Enterprise-grade</span>{" "}
              <span className="inline-block animate-fade-in-up animation-delay-200">Generative AI</span>{" "}
              <span className="inline-block animate-fade-in-up animation-delay-400">deployed on</span>{" "}
              <span className="inline-block animate-fade-in-up animation-delay-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                your cloud
              </span>
            </h1>

            <div
              className={`flex flex-col sm:flex-row gap-4 lg:gap-6 transform transition-all duration-1000 ease-out delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <a
                href="https://www.holbox.ai/type-of-service"
                className="group relative inline-flex items-center justify-center cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg -lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out hover:from-blue-700 hover:to-blue-800 w-full sm:w-auto">
                  See our solutions
                </button>
              </a>

              <a href="https://www.holbox.ai/contact-use" className="group cursor-pointer">
                <button className="flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 ease-out transform hover:scale-105 shadow-md hover:shadow-lg w-full sm:w-auto group">
                  Talk to sales
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </a>
            </div>
          </div>

          <div
            className={`relative transform transition-all duration-1000 ease-out delay-500 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 min-h-[300px] sm:min-h-[400px] flex items-center justify-center  ">
              <div className="absolute top-4 right-4 w-20 h-20 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-100 rounded-full opacity-50 animate-pulse animation-delay-1000"></div>

              <img
                src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b16076a61ec89c6543f_main-bg-p-1080.png"
                alt="AI Illustration"
                className="max-h-[250px] sm:max-h-[360px] object-contain transform hover:scale-105 transition-transform duration-500 relative z-10"

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

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
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

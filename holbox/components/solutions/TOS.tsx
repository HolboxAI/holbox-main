"use client"

import { useEffect, useState } from "react"

export default function TypeOfServicesHero() {
  const [isVisible, setIsVisible] = useState(false)

  const services = [
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716545_Layer_1.png",
      title: "Enterprise Smart Assistants",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716548_Layer_1%2520(1)-p-500.png",
      title: "GenAI platform for enterprise",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a71654c_Layer_1%2520(2)-p-500.png",
      title: "Generative AI Consulting",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a71654f_Filled-p-500.png",
      title: "Generative AI POC/Pilot",
    },
    {
      icon: "http://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65deff9b4ae33c40c323232d_Layer_1%20(11).png",
      title: "GenAI Integrations Services",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65df001cb8b5f99820f0d781_Layer_1%20(12).png",
      title: "GenAI Solutions Development",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716552_Layer_1%2520(3)-p-500.png",
      title: "Large Language Model Fine Tuning",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716555_Layer_1%2520(4)-p-500.png",
      title: "Data Engineering & Infrastructure",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716558_Layer_1%20(5).png",
      title: "LLMOps - Developer Tooling",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65df006bb2bcc923e29a97a1_Layer_1%20(13).png",
      title: "GenAI as a Code Deployment",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65df00c0cac9b5fdbd6a8363_Layer_1%20(14).png",
      title: "GenAI Corporate Training Program",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65df0146d707f085524fcae9_Layer_1%20(15).png",
      title: "GenAI APIs & Open Source Packages",
    },
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className="py-16 lg:py-20 overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(100deg, #b3a9ff, #fff 50%, #a4d1ff)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div
          className={`text-center mb-12 lg:mb-16 transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h3 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
            <span className="inline-block animate-fade-in-up">Type of</span>{" "}
            <span className="inline-block animate-fade-in-up animation-delay-200 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h3>
        </div>

        {/* Services Grid */}
        <div className="flex justify-center">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 max-w-7xl transform transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white/20 backdrop-blur-sm p-6 rounded-xl border-2 border-white/30 hover:border-blue-200 transition-all duration-300 transform hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-b from-[#b3a9ff] to-[#85c4ff] rounded-xl flex items-center justify-center shadow-md">

                      <img src={service.icon || "/placeholder.svg"} alt={`${service.title} icon`} className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 leading-tight">{service.title}</h3>
                </div>
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

        @media (max-width: 640px) {
          .animate-fade-in-up {
            animation-duration: 0.6s;
          }
        }
      `}</style>
    </section>
  )
}

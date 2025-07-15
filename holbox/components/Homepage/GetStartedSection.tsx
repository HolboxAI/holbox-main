"use client"

import { useEffect, useState } from "react"

export default function GetStartedSection() {
  const [isVisible, setIsVisible] = useState(false)

  const getStartedSteps = [
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e59fb7e55f1f4518234c11_1.png",
      title: "CONTACT US",
      description:
        "Fill out the contact form protected by NDA, book a calendar and schedule a Virtual Meeting with our expert.",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e59fb7a25024eff690fad7_2.png",
      title: "GET A CONSULTATION",
      description: "Get on a call with our team to know the feasibility of your project idea.",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e59fb77a1e2cec342ed95c_3.png",
      title: "GET A COST ESTIMATE",
      description: "Based on the project requirements, we share a project proposal with budget and timeline estimates.",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e59fb7c1c148287e2f9644_4.png",
      title: "PROJECT KICKOFF",
      description:
        "Once the project is signed, we bring together a team from a range of disciplines to kick start your project.",
    },
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

    const section = document.getElementById("get-started-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="get-started-section" className="bg-white py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div
          className={`text-center mb-8 lg:mb-10 transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
            <span className="inline-block animate-fade-in-up">Get Started</span>{" "}
            <span style={{ color: 'hsl(221, 70%, 50%)' }}>
              Today
            </span>
          </h2>
        </div>

        {/* Get Started Steps Grid */}
        <div className="flex justify-center">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl transform transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {getStartedSteps.map((step, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100 animate-fade-in-up`}
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16   rounded-xl flex items-center justify-center ">
                      <img src={step.icon || "/placeholder.svg"} alt={`${step.title} icon`} className="w-14 h-14" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3 leading-tight">{step.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{step.description}</p>
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

        .animation-delay-400 {
          animation-delay: 0.4s;
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

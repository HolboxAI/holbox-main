"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Timer, TrendingUp, Target } from "lucide-react"

// const stats = [
//   { value: "90%", label: "Faster Resolution", icon: Timer },
//   { value: "24/7", label: "Availability", icon: TrendingUp },
//   { value: "99.9%", label: "Accuracy Rate", icon: Target },
// ]

export default function ResolutionTimeReduction() {
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

    const section = document.getElementById("resolution-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="resolution-section"
      className="py-20 bg-[hsl(221,70%,98%)] relative overflow-hidden" // Changed to a very light bluish-white
    >
      {/* Diagonal Background Element */}
      <div className="absolute inset-0 transform -skew-y-2 bg-gradient-to-r from-[hsl(221,70%,95%)] to-[hsl(221,70%,90%)] opacity-30"></div> {/* Subtle blue gradient for diagonal */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image with Diagonal Split Effect */}
          <div
            className={`relative order-2 lg:order-1 transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100 scale-100" : "-translate-x-10 opacity-0 scale-95"
            }`}
          >
            <div className="relative">
              {/* Diagonal Clip Path Container */}
              <div
                className="relative overflow-hidden rounded-3xl"
                style={{ clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)" }}
              >
                <Image
                  src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65fab487e857002e99967d65_the-core-mission-behind-all-our-work-content-brix-templates.jpg"
                  alt="Reduce Resolution Time"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Floating Stats */}
              
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`space-y-8 order-1 lg:order-2 transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-1 bg-gradient-to-r from-[hsl(221,70%,50%)] to-[hsl(221,70%,40%)] rounded-full"></div> {/* Updated gradient for separator line */}
                <span className="text-[hsl(221,70%,50%)] font-semibold text-lg">Lightning Fast</span> {/* Updated text color */}
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Reduce Inquiry to{" "}
                <span className="bg-gradient-to-r from-[hsl(221,70%,50%)] to-[hsl(221,70%,40%)] bg-clip-text text-transparent"> {/* Updated text gradient */}
                  Resolution Time
                </span>{" "}
                Drastically
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                Transform hours into seconds. Our AI-powered platform processes customer inquiries instantly, providing
                accurate solutions while your team focuses on complex, high-value interactions.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900">Instant Processing</h4>
                <p className="text-gray-600">AI analyzes and responds to queries in milliseconds</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900">Smart Routing</h4>
                <p className="text-gray-600">Complex issues automatically escalated to human agents</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900">Predictive Solutions</h4>
                <p className="text-gray-600">Anticipate customer needs before they ask</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900">Continuous Learning</h4>
                <p className="text-gray-600">Performance improves with every interaction</p>
              </div>
            </div>

        
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      
    </section>
  )
}
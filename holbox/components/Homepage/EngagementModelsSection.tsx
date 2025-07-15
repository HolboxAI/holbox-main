"use client"

import { useEffect, useRef, useState } from "react"
import { Package, Users, UserPlus, Target, CheckCircle } from "lucide-react"

export default function EngagementModelsSection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const engagementModels = [
    {
      icon: Package,
      title: "Ready to Use Solutions",
      description:
        "HolboxAI offers a range of readily available solutions and products, including a Smart Assistant for employees, GenAI-driven customer service, and a meeting summarizer.",
      features: ["Immediate implementation", "Pre-built functionality", "Minimal customization required"],
    },
    {
      icon: Users,
      title: "Dedicated Development Team",
      description:
        "Our developers leverage cutting-edge cognitive technologies to deliver high-quality service and tailored solutions to our clients.",
      features: ["Full-time dedicated resources", "Complete project ownership", "Specialized expertise"],
    },
    {
      icon: UserPlus,
      title: "Team Extension",
      description:
        "Our team extension model is designed to assist clients seeking to expand their teams with the precise expertise needed for their projects.",
      features: ["Seamless integration", "Flexible scaling", "Specialized skill augmentation"],
    },
    {
      icon: Target,
      title: "Project-Based Model",
      description:
        "Our project-oriented approach, supported by our team for software development specialists, is dedicated to fostering client collaboration and achieving specific project objectives.",
      features: ["Fixed scope and timeline", "Defined deliverables", "Milestone-based progress"],
    },
  ]

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisibleItems(new Set([0]))
          }, 300)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current)
    }

    return () => sectionObserver.disconnect()
  }, [])

  useEffect(() => {
    const maxIndex = engagementModels.length - 1

    if (visibleItems.size > 0 && visibleItems.size <= maxIndex) {
      const timer = setTimeout(() => {
        setVisibleItems((prev) => new Set([...prev, Math.min(maxIndex, Math.max(...Array.from(prev)) + 1)]))
      }, 200)

      return () => clearTimeout(timer)
    }
  }, [visibleItems, engagementModels.length])

  return (
    <section
      ref={sectionRef}
      id="engagement-models-section"
      className="py-16 lg:py-24 overflow-hidden relative"
      style={{
        background: `linear-gradient(135deg, var(--primary-bg), white 50%, var(--primary-light))`,
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-24 -left-24 w-64 h-64 rounded-full opacity-10"
          style={{ background: "var(--primary)", filter: "blur(50px)" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: "var(--accent)", filter: "blur(70px)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-light)] text-[var(--primary-dark)] text-sm font-medium mb-6 transform transition-all duration-700 opacity-0 animate-fade-in">
            <CheckCircle className="w-4 h-4" />
            Flexible Collaboration
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            <span className="text-gray-900">Our </span>
            <span style={{ color: 'hsl(221, 70%, 50%)' }}>
              Engagement
            </span>
            <span className="text-gray-900"> Models</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the collaboration approach that best fits your business needs and project requirements
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {engagementModels.map((model, index) => {
            const Icon = model.icon
            const isVisible = visibleItems.has(index)

            return (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                className="group relative bg-white rounded-2xl shadow-sm border border-[var(--border)] hover:shadow-md hover:scale-[1.02] transition-all duration-500 overflow-hidden"

             
                
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--primary-light)] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-[var(--primary)] group-hover:text-[var(--primary-dark)] transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tighter group-hover:text-[var(--primary)] transition-colors duration-300">
                    {model.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{model.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {model.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[var(--primary)] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

      </div>

  
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { Bot, Headphones, Lightbulb, Rocket, Settings, Database, Code, Search } from "lucide-react"

const solutions = [
  {
    icon: Bot,
    title: "Smart Assistants for Employees",
    description: "Intelligent AI assistants to boost employee productivity and streamline workflows",
  },
  {
    icon: Headphones,
    title: "AI Powered Customer Service",
    description: "24/7 automated customer support with natural language understanding",
  },
  {
    icon: Lightbulb,
    title: "Generative AI Consulting",
    description: "Strategic guidance to implement AI solutions tailored to your business needs",
  },
  {
    icon: Rocket,
    title: "Generative AI POC/Pilot",
    description: "Rapid prototyping and pilot programs to validate AI use cases",
  },
  {
    icon: Settings,
    title: "Large Language Model Fine Tuning",
    description: "Custom model training and optimization for domain-specific applications",
  },
  {
    icon: Database,
    title: "Data Engineering & Infrastructure",
    description: "Scalable data pipelines and infrastructure for AI-powered applications",
  },
  {
    icon: Code,
    title: "LLMOps - Developer Tooling",
    description: "Complete toolkit for developing, deploying, and monitoring AI models",
  },
  {
    icon: Search,
    title: "GenAI Discovery Workshop",
    description: "Interactive workshops to identify AI opportunities in your organization",
  },
]

export default function SolutionsServicesSection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]))
          }
        },
        {
          threshold: 0.2,
          rootMargin: "50px",
        },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[var(--surface)] to-[var(--primary-bg)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-light)] text-[var(--primary-dark)] text-sm font-medium mb-6 hover:scale-105 transition-transform duration-300">
            <Lightbulb className="w-4 h-4 animate-pulse" />
            Our Solutions & Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tighter">
            Transforming Business with{" "}
            <span style={{ color: 'hsl(221, 70%, 50%)' }} >
              AI Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI solutions designed to accelerate your digital transformation and unlock new possibilities
            for your business.
          </p>
        </div>
  
        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            const isVisible = visibleItems.has(index)
  
            return (
              <div
                key={index}
                ref={(el) => {  itemRefs.current[index] = el        }}
                className={`group relative bg-white rounded-2xl p-6 shadow-sm border border-[var(--border)] transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 hover:scale-105 overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200/50 transition-colors duration-300" />
  
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-4">
  <div className="w-12 h-12 rounded-xl bg-[var(--primary-light)] flex items-center justify-center transition-all duration-300 
    group-hover:bg-[hsl(221,70%,50%)] 
    group-hover:text-white 
    group-hover:shadow-lg 
    group-hover:scale-110 
  ">
    
    <Icon className="w-6 h-6 text-[var(--primary)] transition-all duration-300 group-hover:text-white group-hover:scale-110" />
  </div>
</div>

  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-tighter group-hover:text-blue-900 transition-colors duration-300">
                    {solution.title}
                  </h3>
  
                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {solution.description}
                  </p>
  
                 
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}  
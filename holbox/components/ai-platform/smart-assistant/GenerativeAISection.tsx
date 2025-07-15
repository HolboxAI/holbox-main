"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const aiAspects = [
  {
    id: 1,
    title: "Definition",
    subtitle: "What is Generative AI?",
    description:
      "Generative AI is a revolutionary technology that creates new content, from text and images to code and solutions, by learning patterns from vast datasets and generating human-like outputs.",
    
    gradient: "from-[hsl(var(--primary-h),var(--primary-s),var(--primary-l))] to-[hsl(var(--primary-h),100%,70%)]",
    bgGradient: "from-[hsl(var(--primary-h),100%,97%)] to-[hsl(var(--primary-h),100%,94%)]",
    features: ["Content Creation", "Pattern Learning", "Human-like Output", "Adaptive Intelligence"],
  },
  {
    id: 2,
    title: "Foundation and Capabilities",
    subtitle: "Built on Advanced Neural Networks",
    description:
      "Powered by transformer architectures and deep learning models, generative AI understands context, processes natural language, and delivers intelligent responses across multiple domains.",
    
    gradient: "from-[hsl(var(--primary-h),var(--primary-s),var(--primary-l))] to-[hsl(var(--primary-h),100%,70%)]",
    bgGradient: "from-[hsl(var(--primary-h),100%,97%)] to-[hsl(var(--primary-h),100%,94%)]",
    features: ["Neural Networks", "Deep Learning", "Context Understanding", "Multi-domain Processing"],
  },
  {
    id: 3,
    title: "Scope of Applications",
    subtitle: "Endless Possibilities",
    description:
      "From content creation and code generation to data analysis and decision support, generative AI transforms how we work, create, and solve complex business challenges.",
   
    gradient: "from-[hsl(var(--primary-h),var(--primary-s),var(--primary-l))] to-[hsl(var(--primary-h),100%,70%)]",
    bgGradient: "from-[hsl(var(--primary-h),100%,97%)] to-[hsl(var(--primary-h),100%,94%)]",
    features: ["Content Generation", "Code Development", "Data Analysis", "Decision Support"],
  },
  {
    id: 4,
    title: "Multiple Users",
    subtitle: "Universal Accessibility",
    description:
      "Designed for everyone - from technical experts to business users, generative AI democratizes advanced capabilities and makes sophisticated tools accessible to all skill levels.",
    
    gradient: "from-[hsl(var(--primary-h),var(--primary-s),var(--primary-l))] to-[hsl(var(--primary-h),100%,70%)]",
    bgGradient: "from-[hsl(var(--primary-h),100%,97%)] to-[hsl(var(--primary-h),100%,94%)]",
    features: ["User-Friendly", "Skill Agnostic", "Democratized Access", "Universal Design"],
  },
]

export default function GenerativeAISection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--primary-h), var(--primary-s), var(--primary-l)) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-[hsl(var(--primary-h),var(--primary-s),95%)] rounded-full text-[hsl(var(--primary-h),var(--primary-s),var(--primary-l))] font-medium text-sm mb-6">
            GENERATIVE AI OVERVIEW
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What is <span className="bg-gradient-to-r from-[hsl(var(--primary-h),var(--primary-s),var(--primary-l))] to-[hsl(var(--primary-h),100%,70%)] bg-clip-text text-transparent">Generative AI?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the transformative power of artificial intelligence that's reshaping how we work and create
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20">
          {aiAspects.map((aspect, index) => (
            <motion.div
              key={aspect.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(aspect.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 h-full overflow-hidden">
                {/* Header with subtle accent */}
                <div className="relative">
                  <div className={`h-1 bg-gradient-to-r ${aspect.gradient}`} />
                  <div className="p-8 pb-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{aspect.title}</h3>
                        <p className="text-[hsl(var(--primary-h),var(--primary-s),var(--primary-l))] text-lg font-medium">{aspect.subtitle}</p>
                      </div>
                      
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-8 pb-8">
                  <p className="text-gray-700 leading-relaxed mb-8 text-lg">{aspect.description}</p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {aspect.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className="w-2 h-2 bg-[hsl(var(--primary-h),var(--primary-s),var(--primary-l))] rounded-full flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredCard === aspect.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 "
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          
        </motion.div>
      </div>
    </section>
  )
}
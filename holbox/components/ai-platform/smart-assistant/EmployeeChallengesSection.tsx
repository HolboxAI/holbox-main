"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  BarChart3,
  Repeat,
  BrainCog,
  BadgeInfo,
} from "lucide-react"

const challenges = [
  {
    id: 1,
    title: "Information Overload",
    description: "Employees struggle to process vast amounts of data and find relevant information quickly.",
    icon: BarChart3,
    stats: "73% of employees feel overwhelmed by information",
    color: "bg-[hsl(221,70%,50%)]",
    gradient: "from-[hsl(221,70%,92%)] to-[hsl(221,70%,98%)]",
  },
  {
    id: 2,
    title: "Repetitive Tasks",
    description: "Manual, routine work consumes valuable time that could be spent on strategic initiatives.",
    icon: Repeat,
    stats: "40% of work time spent on repetitive tasks",
    color: "bg-[hsl(221,70%,50%)]",
    gradient: "from-[hsl(221,70%,90%)] to-[hsl(221,70%,98%)]",
  },
  {
    id: 3,
    title: "Decision Paralysis",
    description: "Too many options and complex scenarios lead to delayed decision-making processes.",
    icon: BrainCog,
    stats: "60% of decisions are delayed due to analysis paralysis",
    color: "bg-[hsl(221,70%,50%)]",
    gradient: "from-[hsl(221,70%,94%)] to-[hsl(221,70%,98%)]",
  },
  {
    id: 4,
    title: "Expertise Bottlenecks",
    description: "Limited access to specialized knowledge creates dependencies and workflow delays.",
    icon: BadgeInfo,
    stats: "45% of projects delayed waiting for expert input",
    color: "bg-[hsl(221,70%,50%)]",
    gradient: "from-[hsl(221,70%,91%)] to-[hsl(221,70%,98%)]",
  },
]

export default function EmployeeChallengesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Internal Employee Challenges</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the pain points that impact productivity and employee satisfaction in modern workplaces
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon
            return (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredCard(challenge.id)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -10 }}
                className="relative group h-full"
              >
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col justify-between">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto
                    bg-gradient-to-br ${challenge.gradient} shadow
                    `}
                    animate={{
                      scale: hoveredCard === challenge.id ? 1.09 : 1,
                      rotate: hoveredCard === challenge.id ? 3 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-9 h-9 text-[hsl(221,70%,50%)]" strokeWidth={2.2} />
                  </motion.div>

                  {/* Content */}
                  <div className="text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">{challenge.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{challenge.description}</p>
                    </div>

                    {/* Stats */}
                    
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          
        </motion.div>
      </div>
    </section>
  )
}
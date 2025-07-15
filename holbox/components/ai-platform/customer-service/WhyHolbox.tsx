"use client"

import { motion } from "framer-motion"
import { Shield, Search, Lock, CheckCircle, Cpu, FileText, Star } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "Reliable, Verifiable Answers",
    description: "Every response is anchored to trusted sources and cited in real time—no more hallucinations or guesswork.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Your data never leaves your environment. Holbox AI works with your security stack and never leaks private information.",
  },
  {
    icon: Cpu,
    title: "LLM Agnostic",
    description: "Plug in your choice of language models—open source or proprietary—without being locked in.",
  },
  {
    icon: FileText,
    title: "Transparent Source Linking",
    description: "Users see exactly where every answer comes from, building trust and auditability.",
  },
  {
    icon: Lock,
    title: "Granular Access Control",
    description: "Fine-grained permissions for teams, documents, and roles. Control who sees what.",
  },
  {
    icon: Search,
    title: "Lightning-Fast, Always On",
    description: "Deliver 24/7 instant support with millisecond search and response times.",
  },
]

export default function WhyHolbox() {
  const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04, delayChildren: 0.08 } }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.99 },
    visible: { opacity: 1, y: 0, scale: 1 }
  }

  return (
    <section
      className="relative min-h-screen py-24 flex flex-col bg-[hsl(221,70%,97%)] overflow-hidden font-sans"
      style={{
        background: "linear-gradient(120deg, hsl(221,70%,97%) 0%, hsl(221,70%,93%) 100%)"
      }}
    >
      <div className="absolute -top-20 left-1/4 w-[380px] h-[320px] bg-[hsl(221,70%,93%)] opacity-60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-80px] right-1/4 w-[320px] h-[220px] bg-[hsl(221,70%,88%)] opacity-60 rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Centered header section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.22, ease: "easeOut" }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-[hsl(221,70%,95%)] to-[hsl(221,70%,86%)] border border-[hsl(221,70%,80%)] text-[hsl(221,70%,40%)] text-xs font-bold mb-6 shadow-md backdrop-blur"
          >
            WHY HOLBOX?
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.30, type: "spring", stiffness: 120 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            <span className="bg-gradient-to-r from-[hsl(221,70%,50%)] to-[hsl(221,70%,40%)] bg-clip-text text-transparent">
              AI You Can Trust
            </span>
            <br />
            <span className="text-[hsl(221,70%,30%)]">for Customer Service</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.28, type: "spring", stiffness: 100 }}
            className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-8"
          >
            Holbox AI transforms every answer into a transparent, <b>truth-anchored</b> experience. No more hallucinated responses—just reliable, cited, enterprise-ready AI for your customers and support teams.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.23, duration: 0.24, type: "spring", stiffness: 110 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
           
          </motion.div>
        </div>

        {/* Features grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={gridVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 "
        >
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                transition={{ duration: 0.22, type: "spring", stiffness: 120 }}
                className="glass-card p-6 rounded-2xl border border-[hsl(221,70%,90%)] shadow-lg hover:shadow-2xl transition-all duration-300 relative backdrop-blur"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(255,255,255,0.85) 60%, rgba(221,230,255,0.70) 100%)"
                }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-gradient-to-br from-[hsl(221,70%,50%)] to-[hsl(221,70%,40%)] rounded-xl shadow">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        
      </div>
    </section>
  )
}
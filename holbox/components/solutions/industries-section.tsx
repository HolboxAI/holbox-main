"use client"

import { useState } from "react"
import { Heart, Factory, ShoppingBag, DollarSign, Car, Building, Monitor, Truck } from "lucide-react"
import HealthcareDetails from "@/components/solutions/industries/healthcare-details"
import ManufacturingDetails from "@/components/solutions/industries/manufacturing-details"
import RetailDetails from "@/components/solutions/industries/retail-details"
import FinanceDetails from "@/components/solutions/industries/finance-details"
import AutomotiveDetails from "@/components/solutions/industries/automotive-details"
import HospitalityDetails from "@/components/solutions/industries/hospitality-details"
import MediaDetails from "@/components/solutions/industries/media-details"
import LogisticsDetails from "@/components/solutions/industries/logistics-details"
import { Inter } from "next/font/google"
import { motion, AnimatePresence } from "framer-motion"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const industries = [
  {
    id: "healthcare",
    title: "Healthcare & Life-sciences",
    shortTitle: "Healthcare",
    icon: Heart,
    description:
      "Transforming patient care and medical research with AI-powered diagnostics and treatment optimization",
    component: HealthcareDetails,
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    shortTitle: "Manufacturing",
    icon: Factory,
    description:
      "Optimizing production lines and quality control through intelligent automation and predictive maintenance",
    component: ManufacturingDetails,
  },
  {
    id: "retail",
    title: "Retail & E-commerce",
    shortTitle: "Retail",
    icon: ShoppingBag,
    description: "Enhancing customer experiences with personalized recommendations and inventory optimization",
    component: RetailDetails,
  },
  {
    id: "finance",
    title: "Finance & Banking",
    shortTitle: "Finance",
    icon: DollarSign,
    description: "Revolutionizing financial services with fraud detection, risk analysis, and automated trading",
    component: FinanceDetails,
  },
  {
    id: "automotive",
    title: "Automotive",
    shortTitle: "Automotive",
    icon: Car,
    description: "Driving innovation in autonomous vehicles, predictive maintenance, and smart manufacturing",
    component: AutomotiveDetails,
  },
  {
    id: "hospitality",
    title: "Hospitality",
    shortTitle: "Hospitality",
    icon: Building,
    description: "Enhancing guest experiences through personalized services and operational efficiency",
    component: HospitalityDetails,
  },
  {
    id: "media",
    title: "Media & Entertainment",
    shortTitle: "Media",
    icon: Monitor,
    description: "Revolutionizing content creation, distribution, and audience engagement with AI-driven insights",
    component: MediaDetails,
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    shortTitle: "Logistics",
    icon: Truck,
    description: "Optimizing delivery routes, inventory management, and supply chain visibility",
    component: LogisticsDetails,
  },
]

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0])

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <>
      <section className={`${inter.className} py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto`}>
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Industries We're Revolutionizing
            <span className="block primary-text mt-2">with GenAI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how our cutting-edge Generative AI solutions are transforming businesses across diverse sectors,
            driving innovation and efficiency at scale.
          </p>
        </motion.div>

        {/* Industry Tabs */}
        <div className="mb-8">
          {/* Desktop Tabs */}
          <div className="hidden lg:flex bg-white rounded-2xl p-2 shadow-lg border border-gray-100 overflow-x-auto">
            {industries.map((industry) => {
              const IconComponent = industry.icon
              const isActive = activeIndustry.id === industry.id

              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry)}
                  className={`relative flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 whitespace-nowrap min-w-fit ${
                    isActive
                      ? "primary-light-bg primary-text shadow-md"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium text-sm">{industry.shortTitle}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 primary-bg opacity-10 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Mobile Dropdown */}
          <div className="lg:hidden">
            <select
              value={activeIndustry.id}
              onChange={(e) => {
                const selected = industries.find((ind) => ind.id === e.target.value)
                if (selected) setActiveIndustry(selected)
              }}
              className="w-full p-4 bg-white border border-gray-200 rounded-xl text-gray-900 font-medium shadow-sm focus:ring-2 focus:primary-ring focus:border-transparent"
            >
              {industries.map((industry) => (
                <option key={industry.id} value={industry.id}>
                  GenAI for {industry.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Industry Header */}
          <div className="primary-light-bg px-8 py-12 border-b border-gray-100">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-white rounded-2xl shadow-lg primary-text">
                <activeIndustry.icon className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <motion.h3
                  key={activeIndustry.id}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                >
                  GenAI for <span className="primary-text">{activeIndustry.title}</span>
                </motion.h3>
                <motion.p
                  key={`${activeIndustry.id}-desc`}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-lg text-gray-600 leading-relaxed max-w-3xl"
                >
                  {activeIndustry.description}
                </motion.p>
              </div>
            </div>
          </div>

          {/* Industry Details */}
          <div className="p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <activeIndustry.component />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

       
      </section>

      <style jsx>{`
        /* Custom CSS Variables */
        :root {
          --primary-h: 221;
          --primary-s: 70%;
          --primary-l: 50%;
          --primary: hsl(var(--primary-h), var(--primary-s), var(--primary-l));
          --primary-light: hsl(var(--primary-h), var(--primary-s), 90%);
          --primary-dark: hsl(var(--primary-h), var(--primary-s), 30%);
          --primary-bg: hsl(var(--primary-h), var(--primary-s), 95%);
        }

        /* Custom Classes */
        .primary-text {
          color: var(--primary);
        }

        .primary-dark-text {
          color: var(--primary-dark);
        }

        .primary-bg {
          background-color: var(--primary);
        }

        .primary-bg-light {
          background-color: var(--primary-bg);
        }

        .primary-dark-bg {
          background-color: var(--primary-dark);
        }

        .primary-light-bg {
          background-color: var(--primary-light);
        }

        .primary-ring {
          --tw-ring-color: var(--primary);
        }
      `}</style>
    </>
  )
}

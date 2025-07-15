"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  FileText,
  GraduationCap,
  Handshake,
  PieChart,
} from "lucide-react"

// Define the structure for a use case item
interface UseCase {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  gradient: string; // Tailwind gradient classes
  bgColor: string;  // Tailwind background gradient classes
}

// Data for the different use cases
const useCases: UseCase[] = [
  {
    id: 1,
    title: "Intelligent Document Processing",
    description:
      "Automatically extract, analyze, and categorize information from documents, emails, and reports with AI-powered understanding.",
    icon: FileText,
    features: ["OCR & Text Extraction", "Smart Categorization", "Data Validation", "Workflow Automation"],
    gradient: "from-[hsl(221,70%,50%)] to-[hsl(221,70%,40%)]", // Main color with a slightly darker shade
    bgColor: "from-[hsl(221,70%,95%)] to-[hsl(221,70%,90%)]", // Very light shades for the card background
  },
  {
    id: 2,
    title: "Personalized Learning Assistant",
    description:
      "Provide employees with customized training recommendations and just-in-time learning based on their role and performance.",
    icon: GraduationCap,
    features: ["Skill Assessment", "Custom Learning Paths", "Progress Tracking", "Micro-Learning"],
    gradient: "from-[hsl(221,70%,50%)] to-[hsl(221,70%,40%)]",
    bgColor: "from-[hsl(221,70%,95%)] to-[hsl(221,70%,90%)]",
  },
  {
    id: 3,
    title: "Smart Meeting Facilitator",
    description:
      "Enhance meeting productivity with AI-powered agenda creation, real-time transcription, and automated action items.",
    icon: Handshake,
    features: ["Agenda Generation", "Live Transcription", "Action Item Tracking", "Meeting Insights"],
    gradient: "from-[hsl(221,70%,50%)] to-[hsl(221,70%,40%)]",
    bgColor: "from-[hsl(221,70%,95%)] to-[hsl(221,70%,90%)]",
  },
  {
    id: 4,
    title: "Predictive Analytics Dashboard",
    description:
      "Leverage AI to forecast trends, identify opportunities, and provide data-driven insights for strategic decision making.",
    icon: PieChart,
    features: ["Trend Analysis", "Risk Assessment", "Performance Metrics", "Predictive Modeling"],
    gradient: "from-[hsl(221,70%,50%)] to-[hsl(221,70%,40%)]",
    bgColor: "from-[hsl(221,70%,95%)] to-[hsl(221,70%,90%)]",
  },
];

// Main React component for the Use Cases Section
export default function UseCasesSection() {
  // State to track which card is currently being hovered over
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
            Smart Assistant Use Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered solutions transform everyday work processes and boost productivity across your
            organization
          </p>
        </motion.div>

        {/* Grid of Use Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredCard(useCase.id)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div
                  className={`relative overflow-hidden rounded-3xl  border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 h-full`}
                >
                  {/* Background Pattern for visual interest */}
                  <div className="absolute inset-0 opacity-30">
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        background: [
                          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                          "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                          "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                          "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                        ],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                  </div>

                  {/* Main Content of the Card */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Icon with hover animation */}
                    <motion.div
                      animate={{
                        scale: hoveredCard === useCase.id ? 1.1 : 1,
                        rotate: hoveredCard === useCase.id ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${useCase.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-9 h-9 text-white" strokeWidth={2.2} />
                    </motion.div>

                    {/* Title and Description */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{useCase.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{useCase.description}</p>

                    {/* Features List */}
                    <motion.div
                      initial={{ opacity: 0.8 }}
                      animate={{ opacity: hoveredCard === useCase.id ? 1 : 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2"
                    >
                      {useCase.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          {/* Small circular indicator for each feature */}
                          <div className={`w-2 h-2 bg-gradient-to-r ${useCase.gradient} rounded-full`}></div>
                          <span className="text-gray-700 font-medium text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                  </div>

                  {/* Hover Glow Effect overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === useCase.id ? 0.1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${useCase.gradient} pointer-events-none`}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
}
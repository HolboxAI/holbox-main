import { Lightbulb, Cog, TrendingUp, Shield } from "lucide-react"

const services = [
  {
    number: "01",
    title: "GenAI Consulting",
    description:
      "Strategic guidance on implementing generative AI solutions tailored to your business needs and objectives.",
    icon: Lightbulb,
    color: "blueShade1", // Using shades derived from the exact color
  },
  {
    number: "02",
    title: "AI Integration",
    description: "Seamless integration of AI technologies into existing workflows and systems for maximum efficiency.",
    icon: Cog,
    color: "blueShade2",
  },
  {
    number: "03",
    title: "Performance Optimization",
    description: "Advanced analytics and optimization strategies to enhance AI model performance and ROI.",
    icon: TrendingUp,
    color: "blueShade3",
  },
  {
    number: "04",
    title: "AI Governance",
    description: "Comprehensive frameworks for responsible AI deployment, ensuring compliance and ethical standards.",
    icon: Shield,
    color: "blueShade4",
  },
]

// Strictly using hsl(221, 70%, 50%) and variations derived from it for consistency
const colorVariants = {
  blueShade1: {
    bg: "bg-[hsl(221,70%,50%)]", // Base blue
    hoverBg: "hover:bg-[hsl(221,70%,40%)]", // 10% darker
    borderHover: "hover:border-[hsl(221,70%,80%)]", // 30% lighter for border
    shadowHover: "hover:shadow-[hsl(221,70%,95%)]", // 45% lighter for subtle shadow
    iconColor: "text-[hsl(221,70%,30%)]", // 20% darker for subtle icon
    iconHoverColor: "group-hover:text-[hsl(221,70%,20%)]", // 30% darker for hover icon
  },
  blueShade2: {
    bg: "bg-[hsl(221,70%,45%)]", // Slightly darker base blue
    hoverBg: "hover:bg-[hsl(221,70%,35%)]",
    borderHover: "hover:border-[hsl(221,70%,75%)]",
    shadowHover: "hover:shadow-[hsl(221,70%,92%)]",
    iconColor: "text-[hsl(221,70%,25%)]",
    iconHoverColor: "group-hover:text-[hsl(221,70%,15%)]",
  },
  blueShade3: {
    bg: "bg-[hsl(221,70%,40%)]", // Even darker base blue
    hoverBg: "hover:bg-[hsl(221,70%,30%)]",
    borderHover: "hover:border-[hsl(221,70%,70%)]",
    shadowHover: "hover:shadow-[hsl(221,70%,90%)]",
    iconColor: "text-[hsl(221,70%,20%)]",
    iconHoverColor: "group-hover:text-[hsl(221,70%,10%)]",
  },
  blueShade4: {
    bg: "bg-[hsl(221,70%,35%)]", // Darkest base blue for a vibrant accent
    hoverBg: "hover:bg-[hsl(221,70%,25%)]",
    borderHover: "hover:border-[hsl(221,70%,65%)]",
    shadowHover: "hover:shadow-[hsl(221,70%,88%)]",
    iconColor: "text-[hsl(221,70%,15%)]",
    iconHoverColor: "group-hover:text-[hsl(221,70%,5%)]",
  },
}

export default function WhatWeOffer() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(221,70%,50%)] to-[hsl(221,70%,40%)]">
              Offer?
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI solutions designed to accelerate your digital transformation and drive sustainable business
            growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon
            const colors = colorVariants[service.color as keyof typeof colorVariants]

            return (
              <div
                key={index}
                className={`group relative bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${colors.borderHover} ${colors.shadowHover}`}
              >
                {/* Number indicator */}
                <div className="flex items-start space-x-6 mb-6">
                  <div
                    className={`flex-shrink-0 w-16 h-16 ${colors.bg} ${colors.hoverBg} rounded-2xl flex items-center justify-center text-white font-bold text-xl transition-colors duration-300 group-hover:scale-110 transform`}
                  >
                    {service.number}
                  </div>
                  <div className="flex-shrink-0 mt-2">
                    <Icon className={`w-8 h-8 ${colors.iconColor} ${colors.iconHoverColor} transition-colors duration-300`} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Hover effect overlay - adjusted for light theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[hsl(221,70%,99%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
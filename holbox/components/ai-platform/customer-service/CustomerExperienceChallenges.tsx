"use client";

import { useEffect, useState } from "react";
import { 
  Clock, 
  MessageSquare, 
  Search, 
  Globe, 
  Bot, 
  DollarSign, 
  TrendingDown, 
  UserX, 
  Users, 
  ChevronsDown,
  CheckCircle,
  Zap,
  Shield,
  Headphones,
  BarChart3,
  PieChart,
  Frown,
  AlertTriangle,
  UserMinus,
} from "lucide-react";
import { motion } from "framer-motion";
// Define the structure for a journey step
interface JourneyStep {
  icon: React.ElementType;
  title: string;
  description: string;
  isSolution?: boolean;
}

// Updated journey steps based on Holbox AI content
const journeySteps: JourneyStep[] = [
  {
    icon: Clock,
    title: "Lengthy Hold Times",
    description: "Customers endure frustrating wait times and repetitive interactions with basic chatbots that can't resolve their specific issues.",
  },
  {
    icon: MessageSquare,
    title: "Generic Communication",
    description: "Templated responses and impersonal interactions leave customers feeling unheard and undervalued in their service experience.",
  },
  {
    icon: Search,
    title: "Complex Navigation",
    description: "Customers struggle to navigate complex websites and find relevant information or products through poor search functionality.",
  },
  {
    icon: Globe,
    title: "Limited Channel Access",
    description: "Reaching support through preferred channels or during desired hours isn't always possible, creating accessibility barriers.",
  },
  {
    icon: Bot,
    title: "Repetitive Bot Interactions",
    description: "Basic chatbots provide scripted responses that fail to understand context or provide meaningful assistance to customers.",
  },
  {
    icon: CheckCircle,
    title: "AI-Powered Resolution",
    description: "Intelligent AI agents provide human-like assistance, resolving 90% of queries instantly with personalized, context-aware responses.",
    isSolution: true,
  },
];

// Updated efficiency metrics based on business impact
const efficiencyMetrics = [
  {
    icon: BarChart3,
    title: "Revenue Loss",
    description:
      "Inefficient processes and information overload directly impact your bottom line through lost productivity and operational costs.",
    gradient: "from-[hsl(221,70%,85%)] to-[hsl(221,70%,97%)]",
  },
  {
    icon: PieChart,
    title: "Slower Decision Making",
    description:
      "Limited skill access and slow processes hinder innovation, market responsiveness, and competitive advantage in your industry.",
    gradient: "from-[hsl(221,70%,90%)] to-[hsl(221,70%,98%)]",
  },
  {
    icon: AlertTriangle,
    title: "Customer Dissatisfaction",
    description:
      "Impersonal interactions and long wait times lead to customer frustration, negative reviews, and ultimately lost sales opportunities.",
     gradient: "from-[hsl(221,70%,85%)] to-[hsl(221,70%,97%)]",
  },
  {
    icon: UserMinus,
    title: "Employee Disengagement",
    description:
      "Frustrated employees handling repetitive tasks are significantly less productive and more likely to leave your organization.",
     gradient: "from-[hsl(221,70%,85%)] to-[hsl(221,70%,97%)]",
  },
];



export default function CustomerExperienceChallenges() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [metricsVisible, setMetricsVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState(false);

  // Define HSL colors for consistency
  const primaryBlue = 'hsl(221, 70%, 50%)';
  const primaryBlueLight = 'hsl(221, 70%, 75%)';
  const primaryBlueDark = 'hsl(221, 70%, 30%)';
  const lightBlueBg = 'hsl(221, 70%, 98%)';
  const darkBlueText = 'hsl(221, 70%, 15%)';
  const grayText = 'hsl(221, 20%, 35%)';
  const veryLightGray = 'hsl(221, 10%, 90%)';

  // Solution specific colors
  const solutionGreen = 'hsl(120, 70%, 45%)';
  const solutionGreenDark = 'hsl(120, 70%, 30%)';
  const lightSolutionGreenBg = 'hsl(120, 70%, 95%)';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate steps sequentially
            journeySteps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 200);
            });
            
            // Animate metrics section
            setTimeout(() => {
              setMetricsVisible(true);
            }, journeySteps.length * 200 + 500);
            
            // Animate benefits section
            setTimeout(() => {
              setBenefitsVisible(true);
            }, journeySteps.length * 200 + 1000);
            
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("journey-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="journey-section"
      className="py-20 bg-gradient-to-br relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, ${lightBlueBg}, #ffffff)`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ color: darkBlueText }}
          >
            The Customer Service{" "}
            <span
              style={{
                background: `linear-gradient(to right, ${primaryBlueDark}, ${primaryBlue})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Challenge
            </span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: grayText }}
          >
            Modern businesses face mounting customer service challenges that directly impact revenue, 
            customer satisfaction, and operational efficiency.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col items-center relative max-w-6xl mx-auto">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            const isStepVisible = visibleSteps.includes(index);
            const isSolution = step.isSolution;
            const isLeftColumn = index % 2 === 0;

            return (
              <div
                key={index}
                className="flex items-center w-full my-6 relative"
              >
                {/* Vertical Connector Line */}
                {index > 0 && (
                  <div
                    className="absolute w-0.5 transform origin-top transition-transform duration-700 ease-out z-0"
                    style={{
                      left: '50%',
                      height: 'calc(100% + 3rem)',
                      transform: `translateX(-50%) scaleY(${isStepVisible ? 1 : 0})`,
                      background: isSolution 
                        ? `linear-gradient(to bottom, ${primaryBlue}, ${solutionGreen})`
                        : `linear-gradient(to bottom, ${primaryBlueLight}, ${primaryBlue})`,
                      transitionDelay: `${(index - 1) * 200 + 300}ms`,
                      top: '-1.5rem'
                    }}
                  />
                )}

                {/* Content Card */}
                <div
                  className={`w-5/12 p-6 rounded-2xl shadow-lg border text-center transition-all duration-700 z-10 backdrop-blur-sm hover:shadow-xl ${
                    isLeftColumn ? 'pr-8' : 'pl-8 ml-auto'
                  } ${
                    isSolution
                      ? 'bg-white border-green-200 shadow-green-100'
                      : 'bg-white border-gray-200'
                  } ${
                    isStepVisible 
                      ? "opacity-100 translate-x-0" 
                      : `opacity-0 ${isLeftColumn ? "-translate-x-12" : "translate-x-12"}`
                  }`}
                  style={{
                    transitionDelay: `${index * 200 + 150}ms`,
                  }}
                >
                  <h3
                    className={`font-semibold mb-3 text-xl ${
                      isSolution ? 'text-green-700' : 'text-gray-800'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-base leading-relaxed ${
                      isSolution ? 'text-green-600' : 'text-gray-600'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Central Icon */}
                <div
                  className={`absolute w-16 h-16 rounded-full flex items-center justify-center border-3 shadow-lg z-20 transition-all duration-700 ${
                    isSolution
                      ? 'bg-green-500 border-green-400 shadow-green-200'
                      : 'bg-white border-blue-300 shadow-blue-100'
                  } ${
                    isStepVisible 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-75"
                  }`}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) scale(${isStepVisible ? 1 : 0.75})`,
                    transitionDelay: `${index * 200}ms`,
                    borderWidth: '3px',
                  }}
                >
                  <Icon
                    className={`w-8 h-8 ${
                      isSolution ? "text-white" : "text-blue-600"
                    }`}
                    style={{ 
                      color: isSolution ? 'white' : primaryBlue,
                      strokeWidth: 2
                    }}
                  />
                  {isSolution && (
                    <div 
                      className="absolute inset-0 rounded-full animate-ping opacity-30"
                      style={{ 
                        background: `radial-gradient(circle, ${solutionGreen} 0%, transparent 70%)` 
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
          
          {/* Scroll Indicator */}
          <div 
            className={`mt-8 transition-opacity duration-500 ${
              visibleSteps.length === journeySteps.length ? 'opacity-100' : 'opacity-0'
            }`} 
            style={{transitionDelay: `${journeySteps.length * 200 + 300}ms`}}
          >
            <ChevronsDown className="w-8 h-8 text-gray-400 animate-bounce" />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="relative ml-4 pl-8 border-l-2 border-gray-200">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isStepVisible = visibleSteps.includes(index);
              const isSolution = step.isSolution;

              return (
                <div
                  key={index}
                  className={`mb-8 relative transition-all duration-700 ${
                    isStepVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Icon */}
                  <div className="absolute -left-4 top-0 transform -translate-x-1/2">
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-full border-2 shadow-md ${
                        isSolution
                          ? 'bg-green-500 border-green-400'
                          : 'bg-white border-blue-300'
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isSolution ? "text-white" : "text-blue-600"
                        }`}
                        style={{ 
                          color: isSolution ? 'white' : primaryBlue,
                          strokeWidth: 2
                        }}
                      />
                    </div>
                  </div>
                  
                  <div
                    className={`p-5 rounded-xl shadow-md border backdrop-blur-sm ${
                      isSolution
                        ? 'bg-white border-green-200'
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <h3
                      className={`font-semibold mb-2 text-lg ${
                        isSolution ? 'text-green-700' : 'text-gray-800'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isSolution ? 'text-green-600' : 'text-gray-600'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

         <div className="mt-24 text-center">
      <h2
        className="text-3xl sm:text-4xl font-bold mb-6"
        style={{ color: darkBlueText }}
      >
        The{" "}
        <span
          style={{
            background: `linear-gradient(to right, hsl(221,70%,30%), ${primaryBlue})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Cost
        </span>{" "}
        of Inefficiency
      </h2>
      <p
        className="text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
        style={{ color: grayText }}
      >
        The hidden costs of inefficient customer service compound daily,
        affecting every aspect of your business operations.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {efficiencyMetrics.map((metric, index) => {
          const MetricIcon = metric.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 36, scale: 0.94 }}
              animate={metricsVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.48,
                type: "spring",
                stiffness: 82,
                delay: metricsVisible ? 0.15 + index * 0.07 : 0,
              }}
              className="group p-6 rounded-xl shadow-lg border bg-white hover:shadow-2xl transition-all duration-700 relative overflow-hidden"
              style={{
                borderColor: "hsl(221,70%,85%)",
                boxShadow: metricsVisible
                  ? "0 8px 32px 0 rgba(50,90,180,0.08)"
                  : undefined,
              }}
            >
              {/* Icon background glassy/gradient */}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto
                bg-gradient-to-br ${metric.gradient} shadow
                group-hover:scale-105 transition-all duration-300
                `}
              >
                <MetricIcon
                  className="w-8 h-8"
                  style={{ color: primaryBlue }}
                  strokeWidth={2}
                />
              </div>
              <h3 className="font-semibold mb-3 text-lg" style={{ color: darkBlueText }}>
                {metric.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: grayText }}>
                {metric.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>

        
      </div>

      {/* Background Elements */}
     
      
      
    </section>
  );
}
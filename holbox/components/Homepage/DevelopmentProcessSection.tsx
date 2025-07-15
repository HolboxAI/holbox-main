"use client"

import { useEffect, useState } from "react"

export default function DevelopmentProcessSection() {
  const [isVisible, setIsVisible] = useState(false)

  const processSteps = [
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dca230f3c582b5778e2fc0_Export%20for%20website%20(1).svg",
      title: "Identify the Business Problem",
      description:
        "Understand the specific business challenges or opportunities where generative AI can provide a solution. Assess the feasibility and potential impact of applying generative AI to this problem.",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dca1ecbfccf1f0bab8ca9b_Export%20for%20website.svg",
      title: "Define Project Scope and Objectives",
      description:
        "Clearly define what the AI solution aims to achieve, including specific goals and metrics for success. Establish scope, including which processes will be affected and the expected outcomes.",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dca08cf8af0783f363193d_2.svg",
      title: "Data Collection and Preparation",
      description:
        "Identify and collect relevant data sources needed to train the AI model. This may include text, images, videos, or other data types depending on the application. Clean and preprocess the data to ensure it is suitable for training.",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dca08b7079139a2997aca2_3.svg",
      title: "Select and Design the AI Model",
      description:
        "Choose the right type of generative AI model (e.g., GANs, VAEs, transformer-based models) based on the problem and data. Design the model architecture and select algorithms that best fit the project objectives.",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dca08b2e6db7912db2ae9f_4.svg",
      title: "Training and Testing",
      description:
        "Train the model using the prepared dataset, adjusting parameters to optimize performance. Regularly test the model during training to evaluate its performance against predefined metrics, using separate validation and test datasets.",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dca08b2fc7eee45825fd83_5.svg",
      title: "Evaluation and Refinement",
      description:
        "Evaluate the model comprehensively using quantitative metrics (accuracy, precision, recall) and qualitative assessments (user feedback, usability tests). Iterate on the model based on feedback and performance, refining and retraining as necessary to meet the project objectives.",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dca08f08a5e0578da0bb7c_6.svg",
      title: "Integration and Deployment",
      description:
        "Integrate the AI model into the existing enterprise systems and workflows, ensuring compatibility and smooth operation. Deploy the model in a controlled environment initially, to monitor its performance and impact on processes.",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dca08b015b030c6b2658a4_7.svg",
      title: "Monitoring and Maintenance",
      description:
        "Continuously monitor the model's performance and the quality of its outputs in real-world applications. Update the model periodically to incorporate new data, improve its accuracy, and adapt to changing conditions.",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dca08bc4a9d9dabd96f485_8.svg",
      title: "Ethics and Compliance",
      description:
        "Ensure the solution adheres to ethical guidelines and industry standards, particularly regarding data privacy, security, and fairness. Comply with relevant regulations and laws related to AI and data protection.",
    },
    {
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dca08b8e1a3673b84f4de5_9.svg",
      title: "Feedback Loop and Continuous Improvement",
      description:
        "Establish mechanisms to collect feedback from users and stakeholders. Use insights gained to make continuous improvements to the AI solution, adapting to new requirements and technological advancements.",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("development-process-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="development-process-section" className="bg-white py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div
          className={`text-center mb-8 lg:mb-10 transform transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
            <span className="inline-block animate-fade-in-up">The Process Our Developers Follow to Create</span>
            <br />
            <span style={{ color: 'hsl(221, 70%, 50%)' }}>
              Generative AI Solutions
            </span>
          </h2>
        </div>

        <div
          className={`mb-8 lg:mb-10 flex justify-center transform transition-all duration-1000 ease-out delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="max-w-5xl w-full">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 sm:p-6 border-2 border-gray-200 hover:border-blue-200 transition-all duration-500 relative">
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100/70 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-100/70 rounded-full animate-pulse animation-delay-500"></div>

              <img
                src="/genai_solution.jpg"
                alt="Development process flow diagram showing the 6 key stages of generative AI solution creation"
                className="w-full h-[400px] object-cover object-center rounded-md transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl transform transition-all duration-1000 ease-out delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
          >
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center ">
                      <img
                        src={step.icon || "/placeholder.svg"}
                        alt={`${step.title} icon`}
                        className="w-14 h-14 text-white"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }

          .animation-delay-200 {
            animation-delay: 0.2s;
          }

          .animation-delay-400 {
            animation-delay: 0.4s;
          }

          .animation-delay-500 {
            animation-delay: 0.5s;
          }

          @media (max-width: 640px) {
            .animate-fade-in-up {
              animation-duration: 0.6s;
            }
          }
        `}</style>
    </section>
  )
}

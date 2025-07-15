"use client"

import { useState, useEffect, useRef } from "react"
import { Check, Phone, Wifi, Signal } from "lucide-react"
import { GridBackground } from "@/components/ui/gridbackground"

interface ChatMessage {
  id: number
  sender: "user" | "ai"
  message: string
  timestamp: string
  isTyping?: boolean
}

const chatSequence: ChatMessage[] = [
  {
    id: 1,
    sender: "user",
    message: "Hi, I need help with my recent order",
    timestamp: "9:41 AM",
  },
  {
    id: 2,
    sender: "ai",
    message: "Hello! I'd be happy to help you with your order. Could you please provide your order number?",
    timestamp: "9:41 AM",
  },
  {
    id: 3,
    sender: "user",
    message: "It's #ORD-2024-1234",
    timestamp: "9:42 AM",
  },
  {
    id: 4,
    sender: "ai",
    message:
      "Perfect! I found your order. It was shipped yesterday and should arrive by tomorrow. I've sent tracking details to your email.",
    timestamp: "9:42 AM",
  },
]

export default function CustomerServiceSection() {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([])
  const [currentTyping, setCurrentTyping] = useState<number | null>(null)
  const [animationCycle, setAnimationCycle] = useState(0)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to the latest message
  useEffect(() => {
    if (chatContainerRef.current) {
      const scrollHeight = chatContainerRef.current.scrollHeight
      const containerHeight = 340 // Available chat height
      if (scrollHeight > containerHeight) {
        chatContainerRef.current.style.transform = `translateY(-${scrollHeight - containerHeight}px)`
      } else {
        chatContainerRef.current.style.transform = `translateY(0px)`
      }
    }
  }, [visibleMessages, currentTyping])

  useEffect(() => {
    const runAnimation = () => {
      setVisibleMessages([])
      setCurrentTyping(null)

      chatSequence.forEach((message, index) => {
        setTimeout(() => {
          if (message.sender === "ai" && index > 0) {
            // Show typing indicator for AI messages
            setCurrentTyping(message.id)
            setTimeout(() => {
              setCurrentTyping(null)
              setVisibleMessages((prev) => [...prev, message])
            }, 1500)
          } else {
            setVisibleMessages((prev) => [...prev, message])
          }
        }, index * 2500)
      })
    }

    runAnimation()
    const interval = setInterval(() => {
      setAnimationCycle((prev) => prev + 1)
      runAnimation()
    }, 12000)

    return () => clearInterval(interval)
  }, [])

  const valueProps = [
    "Intelligent responses that understand context and intent",
    "Seamless escalation to human agents when needed",
    "24/7 availability with consistent service quality",
  ]

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden" style={{ backgroundColor: "var(--surface)" }}>
      
      {/* Grid Background */}
      <GridBackground className="z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-8 px-4 lg:px-22 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 tracking-tight">
                Why You Need <span style={{ color: "var(--primary)" }}>GenAI-Powered</span> Customer Service
              </h2>

              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Upgrade your customer service experience beyond ordinary chatbots. Elevate your standards with a
                comprehensive, AI-driven customer service automation platform designed to efficiently address a wide
                range of inquiries, ensuring your customers receive top-notch assistance effortlessly.
              </p>
            </div>

            <div className="space-y-5">
              {valueProps.map((prop, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "var(--primary)" }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium">{prop}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Mobile Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Shadow */}
              <div className="absolute inset-0 bg-black/20 blur-3xl transform translate-y-8 scale-95 rounded-[3rem]"></div>

              {/* Phone Frame */}
              <div className="relative w-80 h-[600px] bg-gray-900 rounded-[3rem] p-1 shadow-2xl">
                {/* Inner Frame */}
                <div className="w-full h-full bg-black rounded-[2.8rem] p-1">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Dynamic Island */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full z-10"></div>

                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-8 py-4 pt-8 bg-white">
                      <span className="text-sm font-semibold text-gray-900">9:41</span>
                      <div className="flex items-center space-x-2">
                        <Signal className="w-4 h-4 text-gray-900" />
                        <Wifi className="w-4 h-4 text-gray-900" />
                        {/* Improved Battery Icon */}
                        <div className="relative w-6 h-3">
                          <div className="absolute inset-0 border-2 border-gray-900 rounded-sm"></div>
                          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gray-900 rounded-sm m-[1px]"></div>
                          <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-[2px] h-[6px] bg-gray-900 rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    {/* Chat Header */}
                    <div
                      className="px-6 py-4 text-white relative"
                      style={{
                        background: `linear-gradient(135deg, var(--primary), var(--primary-dark))`,
                      }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="w-9 h-9 rounded-full bg-white p-1.5 shadow-lg">
                            <img src="/holboxai_logo.jpg" alt="Holbox AI" className="w-full h-full object-contain" />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-base">Holbox AI Assistant</h3>
                        </div>
                        <Phone className="w-4 h-4 text-white/80" />
                      </div>
                    </div>

                    {/* Chat Messages Container with Auto-Scroll */}
                    <div
                      className="relative"
                      style={{
                        backgroundColor: "var(--primary-bg)",
                        height: "340px",
                        overflow: "hidden",
                      }}
                    >
                      {/* Messages Container with Transform Animation */}
                      <div
                        ref={chatContainerRef}
                        className="p-4 space-y-3 transition-transform duration-700 ease-out"
                        style={{
                          transform: "translateY(0px)",
                        }}
                      >
                        {visibleMessages.map((message, index) => (
                          <div
                            key={message.id}
                            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} animate-slide-up`}
                            style={{
                              animation: `slideUp 0.4s ease-out ${index * 0.2}s both`,
                            }}
                          >
                            <div className="flex items-end space-x-2 max-w-[85%]">
                              {message.sender === "ai" && (
                                <div className="w-7 h-7 rounded-full bg-white p-1 flex items-center justify-center flex-shrink-0 shadow-sm">
                                  <img
                                    src="/holboxai_logo.jpg"
                                    alt="Holbox AI"
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                              )}
                              <div>
                                <div
                                  className={`px-3 py-2 rounded-2xl shadow-sm ${
                                    message.sender === "user"
                                      ? "rounded-br-md text-white"
                                      : "rounded-bl-md text-gray-800 bg-white border"
                                  }`}
                                  style={{
                                    backgroundColor: message.sender === "user" ? "var(--primary)" : "white",
                                    borderColor: message.sender === "ai" ? "var(--border)" : "transparent",
                                  }}
                                >
                                  <p className="text-sm leading-relaxed">{message.message}</p>
                                </div>
                                <p
                                  className={`text-xs mt-1 px-1 ${
                                    message.sender === "user" ? "text-right" : "text-left"
                                  }`}
                                  style={{ color: "var(--secondary)" }}
                                >
                                  {message.timestamp}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}

                        {/* Enhanced Typing Indicator */}
                        {currentTyping && (
                          <div className="flex justify-start">
                            <div className="flex items-end space-x-2">
                              <div className="w-7 h-7 rounded-full bg-white p-1 flex items-center justify-center shadow-sm">
                                <img
                                  src="/holboxai_logo.jpg"
                                  alt="Holbox AI"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div
                                className="bg-white px-3 py-2 rounded-2xl rounded-bl-md shadow-sm border"
                                style={{ borderColor: "var(--border)" }}
                              >
                                <div className="flex items-center space-x-1">
                                  <div
                                    className="w-2 h-2 rounded-full animate-bounce"
                                    style={{
                                      backgroundColor: "var(--primary)",
                                      animationDelay: "0s",
                                    }}
                                  ></div>
                                  <div
                                    className="w-2 h-2 rounded-full animate-bounce"
                                    style={{
                                      backgroundColor: "var(--primary)",
                                      animationDelay: "0.2s",
                                    }}
                                  ></div>
                                  <div
                                    className="w-2 h-2 rounded-full animate-bounce"
                                    style={{
                                      backgroundColor: "var(--primary)",
                                      animationDelay: "0.4s",
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Typing Area */}
                    <div
                      className="border-t p-4"
                      style={{
                        backgroundColor: "var(--primary-bg)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className="flex-1 rounded-full px-4 py-2 border"
                          style={{
                            backgroundColor: "white",
                            borderColor: "var(--border)",
                          }}
                        >
                          <span className="text-sm" style={{ color: "var(--secondary)" }}>
                            Type a message...
                          </span>
                        </div>
                        <button
                          className="w-8 h-8 rounded-full flex items-center justify-center shadow-sm"
                          style={{ backgroundColor: "var(--primary)" }}
                        >
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-900 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }

        .animate-bounce {
          animation: bounce 1.4s infinite ease-in-out both;
        }
      `}</style>
    </section>
  )
}

"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { Play, Pause, Sparkles, Wand2, Eye, RefreshCw, ImageIcon, Video, Zap } from "lucide-react"

interface AnimationStep {
  id: number
  type: "typing" | "generating" | "image" | "video"
  prompt?: string
  content?: string
  duration: number
}

const animationSteps: AnimationStep[] = [
  {
    id: 1,
    type: "typing",
    prompt: "Generate image: A sunset over futuristic city skyline",
    duration: 3000,
  },
  {
    id: 2,
    type: "generating",
    duration: 2000,
  },
  {
    id: 3,
    type: "image",
    content: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop",
    duration: 3000,
  },
  {
    id: 4,
    type: "typing",
    prompt: "Generate video: A dog surfing on a tropical wave",
    duration: 3000,
  },
  {
    id: 5,
    type: "generating",
    duration: 2000,
  },
  {
    id: 6,
    type: "video",
    content:"/video.mp4" ,
    duration: 4000,
  },
]

export default function AIGenerationDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [typedText, setTypedText] = useState("")
  const [generationProgress, setGenerationProgress] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    if (!isPlaying) return

    const step = animationSteps[currentStep]
    let timeoutId: NodeJS.Timeout

    if (step.type === "typing" && step.prompt) {
      setTypedText("")
      setGenerationProgress(0)

      let charIndex = 0
      const typeChar = () => {
        if (charIndex <= step.prompt!.length) {
          setTypedText(step.prompt!.substring(0, charIndex))
          charIndex++
          if (charIndex <= step.prompt!.length) {
            setTimeout(typeChar, 50)
          }
        }
      }
      typeChar()

      timeoutId = setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % animationSteps.length)
      }, step.duration)
    } else if (step.type === "generating") {
      setGenerationProgress(0)

      const progressInterval = setInterval(() => {
        setGenerationProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + 5
        })
      }, 50)

      timeoutId = setTimeout(() => {
        clearInterval(progressInterval)
        setCurrentStep((prev) => (prev + 1) % animationSteps.length)
      }, step.duration)
    } else {
      timeoutId = setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % animationSteps.length)
      }, step.duration)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [currentStep, isPlaying])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const resetAnimation = () => {
    setCurrentStep(0)
    setTypedText("")
    setGenerationProgress(0)
  }

  const currentStepData = animationSteps[currentStep]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

      

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column - Feature Explanation */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="w-8 h-8 text-blue-600" />
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-800">Create Anything You Can Imagine</h2>
              </motion.div>

              <motion.p
                className="text-lg leading-relaxed text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Our advanced AI models can generate high-quality images and videos from simple text descriptions. Watch
                as your words transform into stunning visual content in seconds.
              </motion.p>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {[
                {
                  icon: Wand2,
                  title: "Express Your Ideas",
                  desc: "Simply describe what you want to create. Our AI understands natural language and creative concepts.",
                  color: "bg-blue-600",
                },
                {
                  icon: Zap,
                  title: "AI Magic Happens",
                  desc: "Our neural networks process your request and generate unique content tailored to your vision.",
                  color: "bg-purple-600",
                },
                {
                  icon: Eye,
                  title: "Watch It Come to Life",
                  desc: "Get professional-quality images and videos in seconds, ready to amaze and inspire.",
                  color: "bg-indigo-600",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className={`flex-shrink-0 w-10 h-10 rounded-full ${step.color} flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <motion.div
              className="grid grid-cols-2 gap-4 pt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {[
                {
                  icon: ImageIcon,
                  title: "Image Generation",
                  desc: "High-resolution images from text",
                  color: "text-blue-600",
                },
                {
                  icon: Video,
                  title: "Video Creation",
                  desc: "Dynamic videos from descriptions",
                  color: "text-purple-600",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    y: -5,
                  }}
                >
                  <motion.div >
                    <feature.icon className={`w-6 h-6 mb-2 ${feature.color}`} />
                  </motion.div>
                  <h4 className="font-semibold mb-1 text-gray-800">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Animation Frame */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xl relative overflow-hidden"
              whileHover={{
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 hover:opacity-20 transition-opacity duration-500" />

              {/* Control Panel */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center space-x-2">
                  <motion.div
                    className="w-3 h-3 bg-red-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <motion.div
                    className="w-3 h-3 bg-yellow-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <motion.button
                    onClick={togglePlayPause}
                    className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={isPlaying ? "pause" : "play"}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </motion.div>
                    </AnimatePresence>
                  </motion.button>
                  <motion.button
                    onClick={resetAnimation}
                    className="p-2 rounded-lg bg-gray-600 hover:bg-gray-700 transition-colors text-white"
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <RefreshCw className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Content Area */}
              <div className="aspect-video rounded-xl overflow-hidden relative bg-gradient-to-br from-gray-100 to-gray-200">
                <AnimatePresence mode="wait">
                  {/* Typing State */}
                  {currentStepData.type === "typing" && (
                    <motion.div
                      key="typing"
                      className="absolute inset-0 flex items-center justify-center p-8"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.2 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <div className="text-center w-full">
                        <motion.div
                          className="bg-white rounded-lg p-6 mb-4 border border-gray-200 shadow-sm"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          <p className="text-sm mb-3 text-gray-500">AI Prompt:</p>
                          <p className="font-mono text-lg text-gray-800">
                            {typedText}
                            <motion.span
                              className="text-blue-600"
                              animate={{ opacity: [1, 0, 1] }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                            >
                              |
                            </motion.span>
                          </p>
                        </motion.div>
                        <motion.div
                          className="flex items-center justify-center space-x-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          >
                            <Sparkles className="w-8 h-8 text-blue-600" />
                          </motion.div>
                          <span className="text-sm text-gray-600">Ready to generate...</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  {/* Generating State */}
                  {currentStepData.type === "generating" && (
                    <motion.div
                      key="generating"
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.2 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <div className="text-center w-full px-8">
                        <div className="mb-6">
                          <motion.div
                            className="relative w-20 h-20 mx-auto mb-4"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <motion.div
                              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              style={{
                                background: `conic-gradient(from 0deg, transparent, #3b82f6, #8b5cf6, transparent)`,
                              }}
                            />
                            <div className="absolute inset-2 rounded-full bg-white"></div>
                            <motion.div
                              className="absolute inset-0 flex items-center justify-center"
                              animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                            >
                              <Sparkles className="w-8 h-8 text-blue-600" />
                            </motion.div>
                          </motion.div>
                          <motion.p
                            className="font-semibold mb-2 text-gray-800"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                          >
                            Generating your content...
                          </motion.p>
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
                            <motion.div
                              className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                              initial={{ width: "0%" }}
                              animate={{ width: `${generationProgress}%` }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                          </div>
                          <motion.p
                            className="text-sm text-gray-600"
                            key={generationProgress}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {generationProgress}% complete
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Image State */}
                  {currentStepData.type === "image" && (
                    <motion.div
                      key="image"
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 1.1, rotateY: 90 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <div className="relative w-full h-full">
                        <motion.img
                          src={currentStepData.content || "/placeholder.svg"}
                          alt="Generated content"
                          className="w-full h-full object-cover rounded-xl"
                          initial={{ scale: 1.1 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          onLoad={() => {
                            // Add a subtle glow effect when image loads
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        />
                        <motion.div
                          className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        >
                          <p className="text-sm font-medium text-gray-800 flex items-center">
                            <motion.span
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="mr-2"
                            >
                              ✨
                            </motion.span>
                            Image generated successfully!
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  {currentStepData.type === "video" && (
                    <motion.div
                      key="video"
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                      exit={{ opacity: 0, scale: 1.1, rotateX: 90 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <div className="relative w-full h-full">
                        <motion.video
                          src={currentStepData.content}
                          autoPlay
                          muted
                          loop
                          className="w-full h-full object-cover rounded-xl"
                          initial={{ scale: 1.1 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        />
                        <motion.div
                          className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        >
                          <p className="text-sm font-medium text-gray-800 flex items-center">
                            <motion.span
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                              className="mr-2"
                            >
                              🎬
                            </motion.span>
                            Video generated successfully!
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

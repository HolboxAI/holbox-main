"use client"

import { Inter } from "next/font/google"
import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const themeColor = "hsl(221, 70%, 50%)"

export default function BlogPageComponent() {
  return (
    <div className={`${inter.className} bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen`}>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block mb-8">
              <span
                className="px-4 py-2 text-sm font-semibold uppercase tracking-wider rounded-full backdrop-blur-sm border"
                style={{
                  color: themeColor,
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  borderColor: "hsl(221, 70%, 80%)",
                  boxShadow: "0 4px 20px rgba(59, 130, 246, 0.15)",
                }}
              >
                ✨ BLOG
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-8 leading-tight">
              Articles & Resources
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover insights, tutorials, and thought leadership in AI, machine learning, and cutting-edge technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Blog Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-[1.01]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left Image */}
                <div className="relative h-72 lg:h-full min-h-[500px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
                  <Image
                    src="https://cdn.prod.website-files.com/65e02d3b3747e9786280f929/6620f6bc94f7dbb974bfcebd_dog-wearing-glasses.jpeg"
                    alt="Dog wearing glasses"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-slate-700 rounded-full shadow-lg">
                      Featured Article
                    </span>
                  </div>
                </div>

                {/* Right Content */}
                <div className="p-8 lg:p-12 xl:p-16 flex flex-col justify-center bg-gradient-to-br from-white to-slate-50/50">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 text-sm text-slate-500">
                      <Calendar size={16} />
                      <span>April 18, 2024</span>
                      <span>•</span>
                      <Clock size={16} />
                      <span>8 min read</span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                      Stable Diffusion 3 API Goes Live: Everything You Need to Know
                    </h2>

                    <p className="text-lg text-slate-600 leading-relaxed">
                      Stability AI has implemented numerous innovations in Stable Diffusion 3 with the integration of
                      the Multimodal Diffusion Transformer (MMDiT) bringing a transformative approach to text
                      understanding within image generation.
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-blue-100">
                            <Image
                              src="https://cdn.prod.website-files.com/65e02d3b3747e9786280f929/6620f9133bd41de32e4ea7aa_DSC_0968~2.jpg"
                              alt="Nikhil Ezhava"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">Nikhil Ezhava</p>
                          <p className="text-sm text-slate-500">AI Research Lead</p>
                        </div>
                      </div>
                      <button
                        className="flex items-center space-x-2 px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                        style={{
                          background: themeColor,
                          color: "#fff",
                        }}
                      >
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Latest Articles</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ background: themeColor }}></div>
          </motion.div>

          {/* Cards Grid Placeholder */}
          <div className="text-center text-slate-500 italic">[Insert Cards Here if Needed]</div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mt-16"
          >
            <button
              className="px-8 py-4 text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{
                background: themeColor,
              }}
            >
              View All Articles
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

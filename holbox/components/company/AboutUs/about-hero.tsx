import { Brain, Zap, Target } from "lucide-react"

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-[hsl(221,70%,98%)] py-20 lg:py-32"> {/* Light theme background gradient */}
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[hsl(221,70%,90%)] rounded-full blur-3xl"></div> {/* Light blue blur */}
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[hsl(221,70%,85%)] rounded-full blur-3xl"></div> {/* Slightly darker light blue blur */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl"></div> {/* White blur */}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"> {/* Dark text for heading */}
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(221,70%,50%)] to-[hsl(221,70%,40%)]"> {/* Primary blue gradient for HolboxAI */}
                  HolboxAI
                </span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed"> {/* Darker text for paragraphs */}
                Since 2023, HolboxAI has been at the forefront of the{" "}
                <span className="font-semibold text-gray-900">generative AI industry</span>, delivering{" "}
                <span className="font-semibold text-gray-900">cutting-edge consulting services</span> that transform
                businesses through intelligent automation and AI-driven solutions.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed"> {/* Darker text for paragraphs */}
                We specialize in bridging the gap between complex AI technologies and practical business applications,
                helping organizations unlock their full potential in the digital age.
              </p>
            </div>

            {/* Timeline */}
            <div className="flex items-center space-x-4 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[hsl(221,70%,50%)] rounded-full"></div> {/* Primary blue dot */}
                <span className="text-sm font-medium text-gray-600">Founded 2023</span> {/* Darker text */}
              </div>
              <div className="w-16 h-px bg-gray-300"></div> {/* Light gray line */}
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[hsl(221,70%,40%)] rounded-full"></div> {/* Slightly darker blue dot */}
                <span className="text-sm font-medium text-gray-600">Leading AI Innovation</span> {/* Darker text */}
              </div>
            </div>
          </div>

          {/* AI Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white to-[hsl(221,70%,95%)] rounded-3xl p-8 lg:p-12 shadow-lg"> {/* Light background gradient for illustration container */}
              {/* Abstract AI visualization */}
              <div className="space-y-6">
                <div className="flex justify-center space-x-4">
                  <div className="w-16 h-16 bg-[hsl(221,70%,50%)] rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300"> {/* Primary blue box */}
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-16 h-16 bg-[hsl(221,70%,40%)] rounded-2xl flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-300"> {/* Slightly darker blue box */}
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-[hsl(221,70%,30%)] rounded-3xl flex items-center justify-center hover:scale-110 transition-transform duration-300"> {/* Even darker blue box */}
                    <Target className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Connection lines - adjusted to blue shades */}
                <div className="relative">
                  <svg className="w-full h-24" viewBox="0 0 200 100">
                    <path
                      d="M50 20 Q100 50 150 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-[hsl(221,70%,60%)]" // Lighter blue line
                    />
                    <path
                      d="M50 80 Q100 50 150 80"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-[hsl(221,70%,70%)]" // Even lighter blue line
                    />
                  </svg>
                </div>
              </div>

              {/* Floating elements - adjusted to blue shades */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[hsl(221,70%,80%)] rounded-full animate-pulse"></div> {/* Light blue floating element */}
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[hsl(221,70%,70%)] rounded-full animate-pulse delay-1000"></div> {/* Slightly darker light blue floating element */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
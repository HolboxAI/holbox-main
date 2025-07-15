"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mail,
  Calendar,
  FileText,
  Bell,
  BarChart3,
  CheckCircle2,
  Clock,
  Users,
  TrendingUp,
  Sparkles,
  ArrowRight,
  MessageSquare,
  AlertTriangle,
  Star,
  Target,
  Zap,
} from "lucide-react"

const ANIMATION_DURATION = 4000 // 4 seconds per state for smoother viewing
const TOTAL_STATES = 5

export default function SmartAssistantSection() {
  const [currentState, setCurrentState] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prev) => (prev + 1) % TOTAL_STATES)
    }, ANIMATION_DURATION)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Animation Container */}
        <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg">
          <AnimatePresence mode="wait">
            {currentState === 0 && <ClutteredState key="cluttered" />}
            {currentState === 1 && <ActivationState key="activation" />}
            {currentState === 2 && <CleanupState key="cleanup" />}
            {currentState === 3 && <SuggestionState key="suggestion" />}
            {currentState === 4 && <OrganizedState key="organized" />}
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tighter">
              Why Businesses Need <br />
              <span style={{ color: 'hsl(221, 70%, 50%)' }}> Smart Assistant</span> for Employees?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              In today's fast-paced work environment, navigating through information overload, tackling repetitive
              tasks, overcoming decision paralysis, and addressing expertise bottlenecks can be daunting challenges.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              That's where smart employee assistants step in. By harnessing the power of advanced technology, these
              assistants offer invaluable support, enabling your team to streamline workflows, make informed decisions
              swiftly, and unlock their full potential.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--primary-bg)" }}
              >
                <Zap className="w-5 h-5" style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Streamline Workflows</h3>
                <p className="text-gray-600">
                  Automatically organizes scattered information and eliminates repetitive manual tasks
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--primary-bg)" }}
              >
                <Target className="w-5 h-5" style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Overcome Decision Paralysis</h3>
                <p className="text-gray-600">
                  Provides intelligent suggestions and contextual insights for faster decision-making
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--primary-bg)" }}
              >
                <TrendingUp className="w-5 h-5" style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Unlock Full Potential</h3>
                <p className="text-gray-600">
                  Creates a focused, distraction-free workspace that empowers employees to excel
                </p>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  )
}

function ClutteredState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="absolute inset-0 p-6"
    >
      <motion.div
        animate={{
          x: [0, -8, 8, 0],
          y: [0, 3, -3, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-6 left-6"
      >
        <div className="p-4 w-56 bg-red-50 border border-red-200 rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-red-500" />
              <span className="text-sm font-semibold text-red-700">Inbox Overload</span>
            </div>
            <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded-full">47</span>
          </div>
          <div className="text-xs text-red-600 space-y-1">
            <div>• Client proposal urgent</div>
            <div>• Budget approval needed</div>
            <div>• Meeting reschedule x5</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{
          rotate: [12, 15, 9, 12],
          scale: [1, 1.02, 0.98, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-10"
      >
        <div className="p-4 w-48 bg-yellow-50 border border-yellow-200 rounded-xl shadow-md transform rotate-12">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-yellow-600" />
            <span className="text-sm font-semibold text-yellow-700">Overdue Tasks</span>
          </div>
          <div className="text-xs text-yellow-700 space-y-1">
            <div>📊 Q2 Report - 2 days late</div>
            <div>📋 Performance Review</div>
            <div>🎯 Strategy Planning</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          y: [0, -2, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-24 left-10"
      >
        <div className="p-4 w-52 bg-orange-50 border border-orange-200 rounded-xl shadow-md">
          <div className="flex items-center space-x-2 mb-2">
            <Bell className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-orange-700">Notifications</span>
          </div>
          <div className="text-xs text-orange-600 space-y-1">
            <div>🔔 Slack: 23 unread</div>
            <div>📧 Teams: 15 mentions</div>
            <div>📱 Calendar: 8 conflicts</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{
          x: [0, 4, -4, 0],
          rotate: [-6, -8, -4, -6],
        }}
        transition={{
          duration: 3.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 right-6"
      >
        <div className="p-4 w-44 bg-purple-50 border border-purple-200 rounded-xl shadow-md transform -rotate-6">
          <div className="flex items-center space-x-2 mb-2">
            <Calendar className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-semibold text-purple-700">Schedule Chaos</span>
          </div>
          <div className="text-xs text-purple-600 space-y-1">
            <div>⏰ 3 overlapping meetings</div>
            <div>🚫 Double-booked 2-3 PM</div>
            <div>❓ 5 unconfirmed calls</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
          <div className="text-3xl mb-3">😵‍💫</div>
          <div className="text-sm font-medium text-gray-700">Information Overload</div>
          <div className="text-xs text-gray-500 mt-1">Employee Productivity: 32%</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ActivationState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="absolute inset-0 p-6"
    >
      <div className="absolute inset-0 opacity-20">
        <ClutteredState />
      </div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.3, 1],
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative">
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full blur-2xl"
            style={{ backgroundColor: "var(--primary)" }}
          />

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full blur-xl"
            style={{ backgroundColor: "var(--primary)" }}
          />

          {/* Main icon */}
          <div
            className="relative w-24 h-24 rounded-full flex items-center justify-center shadow-2xl"
            style={{ backgroundColor: "var(--primary)" }}
          >
            <Sparkles className="w-12 h-12 text-white" />
          </div>
        </div>
      </motion.div>

      {/* Enhanced activation text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg">
          <div className="text-xl font-bold mb-2" style={{ color: "var(--primary)" }}>
            Holbox AI Assistant
          </div>
          <div className="text-sm text-gray-600 mb-3">Analyzing workspace patterns...</div>
          <div className="flex items-center justify-center space-x-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-4 h-4 border-2 border-t-transparent rounded-full"
              style={{ borderColor: "var(--primary)", borderTopColor: "transparent" }}
            />
            <span className="text-xs" style={{ color: "var(--primary)" }}>
              Processing 47 items
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// State 3: Enhanced Cleanup Process
function CleanupState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="absolute inset-0 p-6"
    >
      {/* Organizing emails with smooth animation */}
      <motion.div
        initial={{ x: -300, y: 80, rotate: 25, opacity: 0 }}
        animate={{ x: 24, y: 24, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-6 left-6"
      >
        <div className="p-4 w-56 bg-green-50 border border-green-200 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-700">Emails Organized</span>
            </div>
            <CheckCircle2 className="w-4 h-4 text-green-500" />
          </div>
          <div className="text-xs text-green-600 space-y-1">
            <div>✅ Priority: 3 urgent items</div>
            <div>📁 Categorized: 44 sorted</div>
            <div>🎯 Action needed: 2 items</div>
          </div>
        </div>
      </motion.div>

      {/* Grouping tasks */}
      <motion.div
        initial={{ x: 300, y: -80, rotate: -25, opacity: 0 }}
        animate={{ x: 24, y: 100, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        className="absolute top-24 left-6"
      >
        <div
          className="p-4 w-56 rounded-xl shadow-lg border"
          style={{ backgroundColor: "var(--primary-bg)", borderColor: "var(--border)" }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4" style={{ color: "var(--primary)" }} />
              <span className="text-sm font-semibold" style={{ color: "var(--primary-dark)" }}>
                Tasks Prioritized
              </span>
            </div>
            <Star className="w-4 h-4" style={{ color: "var(--primary)" }} />
          </div>
          <div className="text-xs space-y-1" style={{ color: "var(--primary-dark)" }}>
            <div>🔥 High: Q2 Report (Due today)</div>
            <div>⚡ Medium: Performance reviews</div>
            <div>📅 Low: Strategy planning</div>
          </div>
        </div>
      </motion.div>

      {/* Calendar optimization */}
      <motion.div
        initial={{ x: -200, y: 300, rotate: 30, opacity: 0 }}
        animate={{ x: 24, y: 176, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        className="absolute top-44 left-6"
      >
        <div className="p-4 w-56 bg-purple-50 border border-purple-200 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">Schedule Optimized</span>
            </div>
            <TrendingUp className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-xs text-purple-600 space-y-1">
            <div>🔄 Conflicts resolved: 8</div>
            <div>⏰ Optimal time blocks created</div>
            <div>🎯 Focus time: 3 hours blocked</div>
          </div>
        </div>
      </motion.div>

      {/* AI working indicator with enhanced animation */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute top-1/2 right-12 transform -translate-y-1/2"
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: "var(--primary)" }}
        >
          <Sparkles className="w-8 h-8 text-white" />
        </div>
      </motion.div>

      {/* Progress indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-lg">
          <div className="text-sm font-medium text-gray-700 mb-2">Organizing workspace...</div>
          <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ backgroundColor: "var(--primary)" }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// State 4: Enhanced AI Suggestions
function SuggestionState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="absolute inset-0 p-6"
    >
      {/* Organized items in background */}
      <div className="absolute top-6 left-6 space-y-3">
        <div className="p-3 w-48 bg-green-50 border border-green-200 rounded-lg shadow-sm">
          <div className="flex items-center space-x-2">
            <Mail className="w-3 h-3 text-green-600" />
            <span className="text-xs font-medium">3 Priority Emails</span>
          </div>
        </div>
        <div
          className="p-3 w-48 rounded-lg shadow-sm border"
          style={{ backgroundColor: "var(--primary-bg)", borderColor: "var(--border)" }}
        >
          <div className="flex items-center space-x-2">
            <FileText className="w-3 h-3" style={{ color: "var(--primary)" }} />
            <span className="text-xs font-medium">Today's Focus Tasks</span>
          </div>
        </div>
        <div className="p-3 w-48 bg-purple-50 border border-purple-200 rounded-lg shadow-sm">
          <div className="flex items-center space-x-2">
            <Calendar className="w-3 h-3 text-purple-600" />
            <span className="text-xs font-medium">Optimized Schedule</span>
          </div>
        </div>
      </div>

      {/* Enhanced AI Suggestion Panel */}
      <motion.div
        initial={{ scale: 0, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="p-8 w-96 bg-white border-2 rounded-2xl shadow-2xl"
          style={{ borderColor: "var(--primary-light)" }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "var(--primary)" }}
            >
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-gray-900 text-lg">Smart Suggestions</span>
              <div className="text-xs text-gray-500">Based on your patterns</div>
            </div>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center justify-between p-4 rounded-xl cursor-pointer hover:shadow-md transition-all duration-300"
              style={{ backgroundColor: "var(--primary-bg)" }}
            >
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5" style={{ color: "var(--primary)" }} />
                <div>
                  <div className="text-sm font-medium">Schedule Client A Meeting</div>
                  <div className="text-xs text-gray-500">Best time: 2:30 PM today</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4" style={{ color: "var(--primary)" }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center justify-between p-4 bg-green-50 rounded-xl cursor-pointer hover:bg-green-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-5 h-5 text-green-600" />
                <div>
                  <div className="text-sm font-medium">Auto-generate Q2 Summary</div>
                  <div className="text-xs text-gray-500">Save 2 hours of work</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-green-600" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center justify-between p-4 bg-purple-50 rounded-xl cursor-pointer hover:bg-purple-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <Target className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="text-sm font-medium">Focus Block: Deep Work</div>
                  <div className="text-xs text-gray-500">3 hours tomorrow morning</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-purple-600" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// State 5: Enhanced Final Organized State
function OrganizedState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="absolute inset-0 p-6"
    >
      {/* Clean, organized layout with enhanced content */}
      <div className="grid grid-cols-2 gap-6 h-full">
        {/* Left column */}
        <div className="space-y-4">
          {/* Enhanced Task Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-gray-900 text-lg">Today's Focus</span>
                <span className="inline-flex items-center rounded-full border border-transparent bg-green-100 text-green-700 px-3 py-1 text-sm font-semibold">
                  3 priority tasks
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-2 bg-green-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="text-sm font-medium text-gray-700">Client A meeting prep</div>
                    <div className="text-xs text-gray-500">Due: 2:00 PM today</div>
                  </div>
                </div>
                <div
                  className="flex items-center space-x-3 p-2 rounded-lg"
                  style={{ backgroundColor: "var(--primary-bg)" }}
                >
                  <Clock className="w-5 h-5" style={{ color: "var(--primary)" }} />
                  <div>
                    <div className="text-sm font-medium text-gray-700">Q2 report review</div>
                    <div className="text-xs text-gray-500">Auto-generated draft ready</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-purple-50 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-purple-500" />
                  <div>
                    <div className="text-sm font-medium text-gray-700">Team standup</div>
                    <div className="text-xs text-gray-500">Agenda prepared</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Key Insights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <div
              className="p-5 rounded-xl shadow-lg border"
              style={{ backgroundColor: "var(--primary-bg)", borderColor: "var(--border)" }}
              
            >
              <div className="flex items-center space-x-3 mb-3">
                <TrendingUp className="w-5 h-5" style={{ color: "var(--primary)" }} />
                <span className="font-bold" style={{ color: "var(--primary-dark)" }}>
                  Productivity Insight
                </span>
              </div>
              <p className="text-sm mb-2" style={{ color: "var(--primary-dark)" }}>
                You're 40% more productive when meetings are scheduled after 2 PM
              </p>
              <div className="text-xs text-gray-600">📈 Current efficiency: 87% (↑23% from last week)</div>
            </div>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          {/* Enhanced Calendar View */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-gray-900 text-lg">Optimized Schedule</span>
                <Calendar className="w-5 h-5 text-gray-500" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-green-800">Client A Strategy Call</div>
                    <div className="text-xs text-green-600">High priority • Prep completed</div>
                  </div>
                  <span className="text-sm font-semibold text-green-600">2:00 PM</span>
                </div>
                <div
                  className="flex items-center justify-between p-3 rounded-lg"
                  style={{ backgroundColor: "var(--primary-bg)" }}
                >
                  <div>
                    <div className="text-sm font-medium" style={{ color: "var(--primary-dark)" }}>
                      Team Standup
                    </div>
                    <div className="text-xs" style={{ color: "var(--primary)" }}>
                      Agenda auto-generated
                    </div>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: "var(--primary)" }}>
                    4:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-purple-800">Focus Block</div>
                    <div className="text-xs text-purple-600">Deep work • No interruptions</div>
                  </div>
                  <span className="text-sm font-semibold text-purple-600">9:00 AM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Priority Emails */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-gray-900 text-lg">Priority Inbox</span>
                <span className="inline-flex items-center rounded-full border border-transparent bg-red-100 text-red-700 px-3 py-1 text-sm font-semibold">
                  3 urgent
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-700">Client proposal feedback</div>
                  <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Urgent</span>
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-700">Q2 budget approval</div>
                  <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded">Today</span>
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-700">Project timeline update</div>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Review</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Success indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-6 right-6"
      >
        <div className="flex items-center space-x-3 bg-green-100 text-green-800 px-4 py-3 rounded-full shadow-lg">
          <CheckCircle2 className="w-5 h-5" />
          <div>
            <div className="text-sm font-semibold">Workspace Optimized</div>
            <div className="text-xs">Productivity increased by 87%</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

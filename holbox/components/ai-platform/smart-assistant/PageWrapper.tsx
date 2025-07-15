"use client"

import GenerativeAISection from "./GenerativeAISection"
import EmployeeChallengesSection from "./EmployeeChallengesSection"
import KnowledgeSourceSection from "./KnowledgeSourceSection"
import UseCasesSection from "./UseCasesSection"

export default function PageWrapper() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      {/* Sections */}
      <GenerativeAISection />
      <EmployeeChallengesSection />
      {/* <KnowledgeSourceSection /> */}
      <UseCasesSection />
    </div>
  )
}

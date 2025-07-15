import CostOfInefficiency from "@/components/ai-platform/customer-service/CostOfInefficiency";
import CustomerExperienceChallenges from "@/components/ai-platform/customer-service/CustomerExperienceChallenges";
import GenAIBenefits from "@/components/ai-platform/customer-service/GenAiBenefits";
import HeroSection from "@/components/ai-platform/customer-service/HeroSection";
import ResolutionTimeReduction from "@/components/ai-platform/customer-service/ResolutionTimeReduction";
import SmartAssistantOnboarding from "@/components/ai-platform/customer-service/SmartAssistantOnboarding";
import WhyHolbox from "@/components/ai-platform/customer-service/WhyHolbox";
import { Inter } from "next/font/google";
import React from "react";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const CustomerServicePage = () => {
  return (
    <main className={`${inter.className} min-h-screen bg-white`}>
      <HeroSection />
      <CustomerExperienceChallenges />
      {/* <CostOfInefficiency /> */}
      <GenAIBenefits />
      <SmartAssistantOnboarding />
      <ResolutionTimeReduction />
      <WhyHolbox />
    </main>
  );
};

export default CustomerServicePage;

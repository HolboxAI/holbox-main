"use client";
import HeroSection from "@/components/Homepage/hero-section";
import CustomerServiceSection from "@/components/Homepage/Customer-service";
import SmartAssistantSection from "@/components/Homepage/smart-assistent";
import ArchitectureSection from "@/components/Homepage/Enterprise";
import SolutionsServicesSection from "@/components/Homepage/solutions";
import DevelopmentProcessSection from "@/components/Homepage/DevelopmentProcessSection";
import EngagementModelsSection from "@/components/Homepage/EngagementModelsSection";
import GetStartedSection from "@/components/Homepage/GetStartedSection";
import AboutSection from "@/components/Homepage/AboutSection";
import FeaturesSection  from "@/components/Homepage/FeatureSection";
import AIGenerationDemo from "@/components/Homepage/generation";
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection/>

      <CustomerServiceSection />
      <SmartAssistantSection />
      <AIGenerationDemo/>
      <ArchitectureSection />
      <SolutionsServicesSection />
      <FeaturesSection/>
      <DevelopmentProcessSection/>  
      <EngagementModelsSection/>
      <GetStartedSection/>
    </main>
  )
}

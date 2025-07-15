"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Battery,
  DollarSign,
  Heart,
  Sprout,
  TrendingDown,
  AlertCircle,
   // Import LucideIcon type for clarity
} from "lucide-react";
import type { LucideIcon, LucideIcon as LucideSvgIcon } from "lucide-react";

// Define interfaces for better TypeScript typing
interface Asset {
  icon: LucideIcon; // Type for Lucide icon components
  title: string;
  description: string;
  color: string; // Tailwind gradient classes for icon/progress
  bgColor: string; // Tailwind background color for the card
  borderColor: string; // Tailwind border color for the card
  textColor: string; // Tailwind text color for the title
  drainColor: string; // Tailwind background color for the drain animation
  initialValue?: number; // Optional initial value, defaults to 100
}

interface AssetCardProps {
  asset: Asset;
  currentValue: number;
  drainPercentage: number;
  isDraining: boolean;
}

interface LossIndicatorProps {
  totalLoss: number;
}

interface SummaryCardProps {
  value: string;
  label: string;
  color: string;
  border: string;
}

// Data for the assets being drained by inefficiency
const assets: Asset[] = [
  {
    icon: Battery,
    title: "Lost Productivity",
    description: "Time and resources drain away through inefficient processes",
    color: "from-[hsl(221,70%,50%)] to-[hsl(221,70%,40%)]", // Main theme blue
    bgColor: "bg-[hsl(221,70%,95%)]", // Very light theme blue
    borderColor: "border-[hsl(221,70%,90%)]", // Light theme blue border
    textColor: "text-[hsl(221,70%,30%)]", // Darker theme blue text
    drainColor: "bg-[hsl(221,70%,70%)]", // Medium theme blue for drain
  },
  {
    icon: DollarSign,
    title: "Missed Revenue",
    description: "Opportunities slip away due to poor customer experience",
    color: "from-[hsl(221,70%,50%)] to-[hsl(221,70%,40%)]", // Main theme blue
    bgColor: "bg-[hsl(221,70%,95%)]",
    borderColor: "border-[hsl(221,70%,90%)]",
    textColor: "text-[hsl(221,70%,30%)]",
    drainColor: "bg-[hsl(221,70%,70%)]",
  },
  {
    icon: TrendingDown,
    title: "Rising Costs",
    description: "Operational expenses increase with inefficient systems",
    color: "from-[hsl(221,70%,50%)] to-[hsl(221,70%,40%)]", // Changed to main theme blue
    bgColor: "bg-[hsl(221,70%,95%)]", // Very light theme blue
    borderColor: "border-[hsl(221,70%,90%)]", // Light theme blue border
    textColor: "text-[hsl(221,70%,30%)]", // Darker theme blue text
    drainColor: "bg-[hsl(221,70%,70%)]", // Medium theme blue for drain
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    description: "Trust and loyalty erode with each poor interaction",
    color: "from-[hsl(221,70%,50%)] to-[hsl(221,70%,40%)]", // Main theme blue
    bgColor: "bg-[hsl(221,70%,95%)]",
    borderColor: "border-[hsl(221,70%,90%)]",
    textColor: "text-[hsl(221,70%,30%)]",
    drainColor: "bg-[hsl(221,70%,70%)]",
  },
  {
    icon: Sprout,
    title: "Team Morale",
    description: "Employee satisfaction drops with repetitive, frustrating tasks",
    color: "from-[hsl(221,70%,50%)] to-[hsl(221,70%,40%)]", // Main theme blue
    bgColor: "bg-[hsl(221,70%,95%)]",
    borderColor: "border-[hsl(221,70%,90%)]",
    textColor: "text-[hsl(221,70%,30%)]",
    drainColor: "bg-[hsl(221,70%,70%)]",
  },
];

export default function CostOfInefficiency() {
  const [isDraining, setIsDraining] = useState(false);
  // Initialize asset values to 100 for all assets
  const [assetValues, setAssetValues] = useState<number[]>(assets.map(() => 100));
  const [totalLoss, setTotalLoss] = useState(0);
  const sectionRef = useRef<HTMLElement>(null); // Ref for observing the section

  useEffect(() => {
    // Intersection Observer to trigger drain animation when section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isDraining) {
            setIsDraining(true); // Start draining animation
            const drainInterval = setInterval(() => {
              setAssetValues((prevValues) => {
                const newValues = prevValues.map((value, index) => {
                  const drainRate = 0.8 + index * 0.2; // Different drain rates
                  return Math.max(0, value - drainRate); // Ensure value doesn't go below 0
                });

                // Calculate total percentage lost across all assets
                const totalLost = newValues.reduce((sum, value) => {
                  return sum + (100 - value);
                }, 0);
                setTotalLoss(totalLost);

                // Stop draining when all assets are near zero
                if (newValues.every((v) => v <= 5)) {
                  clearInterval(drainInterval);
                }
                return newValues;
              });
            }, 100); // Update every 100ms
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    // Observe the section
    if (sectionRef.current) observer.observe(sectionRef.current);
    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, [isDraining]); // Dependency array: re-run if isDraining changes

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-[hsl(221,70%,95%)] overflow-hidden"> {/* Updated section background */}
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            The{" "}
            <span className="bg-gradient-to-r from-[hsl(221,70%,50%)] to-[hsl(221,70%,40%)] bg-clip-text text-transparent"> {/* Changed to main theme blue gradient */}
              Cost of Inefficiency
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Watch how poor customer service continuously drains your most valuable business assets.
          </p>
        </div>

        {/* Responsive Grid for Assets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {assets.map((asset, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <AssetCard
                asset={asset}
                currentValue={assetValues[index]}
                drainPercentage={(100 - assetValues[index])}
                isDraining={isDraining}
              />
            </motion.div>
          ))}
        </div>

        {/* Loss Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-sm mx-auto mb-16"
        >
          <LossIndicator totalLoss={totalLoss} />
        </motion.div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Using the consistent blue theme for loss metrics */}
          <SummaryCard value={`$${Math.round(totalLoss * 1000).toLocaleString()}`} label="Monthly Revenue Loss" color="text-[hsl(221,70%,40%)]" border="border-[hsl(221,70%,90%)]" />
          <SummaryCard value={`${Math.round(totalLoss / 2)}%`} label="Customer Churn Increase" color="text-[hsl(221,70%,40%)]" border="border-[hsl(221,70%,90%)]" />
          <SummaryCard value={`${Math.round(totalLoss * 0.8)} hrs`} label="Weekly Time Wasted" color="text-[hsl(221,70%,40%)]" border="border-[hsl(221,70%,90%)]" />
        </div>

        {/* CTA (appears only if totalLoss is significant) */}
        {totalLoss > 300 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-[hsl(221,70%,50%)] to-[hsl(221,70%,40%)] rounded-2xl p-8 max-w-2xl mx-auto text-white"> {/* Main theme blue gradient for CTA background */}
              <h3 className="text-2xl font-bold mb-4">Stop the Drain Now!</h3>
              <p className="text-[hsl(221,70%,80%)] mb-6"> {/* Lighter theme blue for paragraph */}
                Don&apos;t let inefficiency continue bleeding your valuable resources.
                Transform your customer service with AI-powered automation.
              </p>
              <button className="px-8 py-4 bg-white text-[hsl(221,70%,50%)] font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition duration-300"> {/* Main theme blue for button text */}
                Get AI Solution
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// AssetCard Sub-component
function AssetCard({ asset, currentValue, drainPercentage, isDraining }: AssetCardProps) {
  const Icon = asset.icon; // Lucide icon component
  return (
    <div className={`relative ${asset.bgColor} ${asset.borderColor} border-2 rounded-2xl p-6 shadow-md`}>
      <div className="text-center mb-4">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${asset.color} mb-3`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className={`font-bold text-lg ${asset.textColor}`}>{asset.title}</h3>
      </div>
      <div className="w-full mb-4">
        <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
          <span>Value</span>
          <span>{Math.round(currentValue)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div className={`h-full bg-gradient-to-r ${asset.color} transition-all duration-300`} style={{ width: `${currentValue}%` }} />
        </div>
      </div>
      {/* Drain Animation */}
      {isDraining && drainPercentage > 0 && (
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className={`w-2 ${asset.drainColor} rounded-full animate-ping`} style={{ height: `${Math.min(drainPercentage, 50)}px` }}></div>
        </div>
      )}
      {/* Low Value Alert */}
      {currentValue < 30 && (
        <div className="absolute -top-2 -right-2">
          <div className="bg-red-500 rounded-full p-1 animate-ping"> {/* Keeping red for alert */}
            <AlertCircle className="w-4 h-4 text-white" />
          </div>
        </div>
      )}
      <div className="mt-4 text-sm text-gray-600 text-center">{asset.description}</div>
    </div>
  );
}

// LossIndicator Sub-component
function LossIndicator({ totalLoss }: LossIndicatorProps) {
  return (
    <div className="bg-gradient-to-r from-[hsl(221,70%,50%)] to-[hsl(221,70%,40%)] rounded-2xl p-6 text-white shadow-xl"> {/* Changed to main theme blue gradient */}
      <h4 className="font-bold text-lg mb-2 text-center">Total Business Impact</h4>
      <div className="text-3xl font-bold text-center">{Math.round(totalLoss)}%</div>
      <p className="text-sm opacity-90 text-center">Value Lost to Inefficiency</p>
    </div>
  );
}

// SummaryCard Sub-component
function SummaryCard({ value, label, color, border }: SummaryCardProps) {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-md border ${border}`}>
      <div className="text-center">
        <div className={`text-2xl font-bold ${color} mb-2`}>{value}</div>
        <p className="text-gray-600">{label}</p>
      </div>
    </div>
  );
}
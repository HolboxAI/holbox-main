"use client";

import Image from "next/image";
import router from "next/router";
import Link from 'next/link';

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, hsl(221, 70%, 95%), white, hsl(221, 70%, 98%))", // Light variations of the main color
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ml-8 lg:ml-12 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ color: "hsl(221, 70%, 15%)" }} // Darker shade for text
              >
                AI-Powered{" "}
                <span
                  style={{
                    color: "hsl(221, 70%, 50%)", // Your specified accent color
                  }}
                >
                  Customer Service
                </span>{" "}
                Platform
              </h1>
              <p
                className="text-xl sm:text-2xl leading-relaxed max-w-2xl"
                style={{ color: "hsl(221, 20%, 35%)" }} // Slightly lighter for paragraph
              >
                Transform your customer support with intelligent automation that
                delivers personalized, instant responses while reducing costs and
                improving satisfaction.
              </p>
            </div>

          <div className="flex flex-col sm:flex-row gap-4">
      <Link href="/contact" >
        <button
          className="px-8 py-4 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300"
          style={{ backgroundColor: "hsl(221, 70%, 50%)" }}
        >
          Get Started Today
        </button>
      </Link>

      <a
        href="https://demo.holbox.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 border-2 font-semibold rounded-xl transition-all duration-300 text-center"
        style={{
          borderColor: "hsl(221, 70%, 65%)",
          color: "hsl(221, 70%, 50%)",
        }}
      >
        Watch Demo
      </a>
    </div>
          </div>

          {/* Hero Image */}
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              <Image
                src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dcb082a75496df3e9949e4_brix-templates-hero-image.png"
                alt="AI Customer Service Platform"
                width={600}
                height={400}
                className="relative z-10 rounded-3xl transition-all duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
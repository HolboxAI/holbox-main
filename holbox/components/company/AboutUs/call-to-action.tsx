import { ArrowRight, Sparkles } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative element */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(to bottom right, hsl(170, 70%, 40%), hsl(221, 70%, 50%))",
              }}
            >
              <Sparkles className="w-8 h-8" style={{ color: "white" }} />
            </div>
            <div
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full animate-pulse"
              style={{ backgroundColor: "hsl(48, 100%, 60%)" }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: "hsl(216, 15%, 20%)" }}
          >
            Ready to transform your business{" "}
            <span
              style={{
                color: "hsl(221, 70%, 50%)",
              }}
            >
              with AI?
            </span>
          </h2>

          <p
            className="text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "hsl(216, 15%, 45%)" }}
          >
            Let's discuss how HolboxAI can help you harness the power of
            artificial intelligence to drive innovation and achieve your
            business goals.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="/contact"
              className="group inline-flex items-center space-x-3 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-teal-200 hover:-translate-y-1 transform"
              style={{
                background:
                  "linear-gradient(to right, hsl(170, 70%, 40%), hsl(221, 70%, 50%))",
              }}
            >
              <span className="text-lg">Contact Us</span>
              <ArrowRight
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                style={{ color: "white" }}
              />
            </a>
          </div>

          {/* Supporting text */}
          <p
            className="text-sm pt-4"
            style={{ color: "hsl(216, 15%, 55%)" }}
          >
            Free consultation • Custom solutions • Expert guidance
          </p>
        </div>
      </div>
    </section>
  );
}
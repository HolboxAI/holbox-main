"use client"

import { Mail, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("company") || "No Subject",
      message: formData.get("message"),
      
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await res.json()
      if (res.ok) {
        alert("Message sent successfully!")
        form.reset()
      } else {
        alert(result.error || "Failed to send message")
      }
    } catch (error) {
      console.error("Submission error:", error)
      alert("Something went wrong. Try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[hsl(221,70%,95%)] text-[hsl(221,70%,50%)] rounded-full text-sm font-medium mb-4">
            CONTACT US
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get in touch today</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="bg-[hsl(221,70%,98%)] rounded-lg shadow-sm p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a
                        href="mailto:sales@holbox.ai"
                        className="text-[hsl(221,70%,50%)] hover:text-[hsl(221,70%,40%)] transition-colors duration-200"
                      >
                        sales@holbox.ai
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-[hsl(221,70%,98%)] rounded-lg shadow-sm p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[hsl(221,70%,50%)] rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <address className="text-gray-600 not-italic">
                        701 Tillery Street Unit 12 1850,
                        <br />
                        Austin, TX 78702
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>
              {isSubmitting && (
                <div className="mb-4 p-3 bg-[hsl(221,70%,95%)] text-[hsl(221,70%,50%)] rounded-md text-sm">
                  Sending your message, please wait...
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Carter"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(221,70%,50%)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="example@email.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(221,70%,50%)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="9876543210"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(221,70%,50%)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Facebook"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(221,70%,50%)]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Please type your message here..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[hsl(221,70%,50%)]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[hsl(221,70%,50%)] hover:bg-[hsl(221,70%,45%)] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[hsl(221,70%,50%)] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Us - HolboxAI",
            description: "Get in touch with HolboxAI. Contact us for inquiries, support, or business opportunities.",
            url: "https://holbox.ai/contact-us",
            mainEntity: {
              "@type": "Organization",
              name: "HolboxAI",
              email: "queries@holbox.ai",
              address: {
                "@type": "PostalAddress",
                streetAddress: "701 Tillery Street Unit 12 1850",
                addressLocality: "Austin",
                addressRegion: "TX",
                postalCode: "78702",
                addressCountry: "US",
              },
            },
          }),
        }}
      />
    </div>
  )
}

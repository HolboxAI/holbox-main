"use client"


const hospitalityServices = [
  {
    title: "Automated Guest Communication",
    description:
      "Generative AI can automate personalized guest communication, providing tailored recommendations, event information, and local insights.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop",
  },
  {
    title: "Dynamic Pricing Strategies",
    description:
      "Implementing generative AI enables the optimization of dynamic pricing strategies for hotel rooms and services based on real-time demand and market conditions.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300&h=200&fit=crop",
  },
  {
    title: "Virtual Concierge Services",
    description:
      "Generative AI can power virtual concierge services, assisting guests with inquiries, local recommendations, and personalized experiences.",
    image: "https://images.pexels.com/photos/3768095/pexels-photo-3768095.jpeg?w=300&h=200&fit=crop",
  },
  {
    title: "Guest Feedback Analysis",
    description:
      "Analyze guest feedback using generative AI to generate actionable insights for improving services, addressing concerns, and enhancing overall guest satisfaction.",
    image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?w=300&h=200&fit=crop",
  },
  {
    title: "Automated Reservation Confirmations and Updates",
    description:
      "Generative AI can automate the generation of reservation confirmations, updates, and reminders, streamlining the booking process.",
    image: "https://images.pexels.com/photos/7820359/pexels-photo-7820359.jpeg?w=300&h=200&fit=crop",
  },
];

export default function HospitalityDetails() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hospitalityServices.map((service, index) => {

          return (
            <div key={index} className="service-card">
              <div className="service-image-container">
                <img src={service.image || "/placeholder.svg"} alt={service.title} className="service-image" />
            
              </div>
              <div className="service-content">
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      <style jsx>{`
        .service-card {
          background-color: white;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 20px rgba(59, 130, 246, 0.15);
        }

        .service-image-container {
          position: relative;
          height: 160px;
          overflow: hidden;
        }

        .service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service-card:hover .service-image {
          transform: scale(1.05);
        }

        .service-icon-overlay {
          position: absolute;
          bottom: 0;
          right: 0;
          background-color: hsl(221, 70%, 50%);
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-top-left-radius: 0.75rem;
        }

        .service-content {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.75rem;
        }

        .service-description {
          color: #6b7280;
          font-size: 0.95rem;
          line-height: 1.5;
          flex-grow: 1;
        }
      `}</style>
    </div>
  )
}

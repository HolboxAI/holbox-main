"use client"

const financeServices = [
  {
    title: "Fraud Detection",
    description:
      "Utilize generative AI to analyze transaction patterns and detect unusual activities, enhancing fraud detection capabilities.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
  },
  {
    title: "Personalized Financial Advice",
    description:
      "Implement generative models to deliver tailored investment recommendations aligned with individual financial goals and risk preferences.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
  },
  {
    title: "Credit Scoring Automation",
    description:
      "Use generative algorithms to automate and improve the accuracy of credit scoring processes for loan approvals.",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=300&h=200&fit=crop",
  },
  {
    title: "Customer Service Chatbots",
    description:
      "Deploy generative AI-powered chatbots for efficient and personalized customer support in banking services.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=300&h=200&fit=crop",
  },
  {
    title: "Market Trend Analysis",
    description:
      "Leverage generative models to analyze market trends and make data-driven predictions for investment decisions.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=300&h=200&fit=crop",
  },
];

export default function FinanceDetails() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {financeServices.map((service, index) => {

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

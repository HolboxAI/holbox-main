"use client"

const retailServices = [
  {
    title: "Personalized Product Recommendations",
    description:
      "Generative models analyze customer data to provide personalized product recommendations, elevating the shopping experience.",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=300&h=200&fit=crop",
  },
  {
    title: "Automated Customer Support",
    description:
      "Generative AI-powered chatbots can handle customer inquiries, offer product information, and assist in the purchasing process.",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=300&h=200&fit=crop",
  },
  {
    title: "Dynamic Pricing Optimization",
    description:
      "Employ generative algorithms to analyze market trends and competitor pricing, enabling dynamic pricing adjustments for maximizing revenue.",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=300&h=200&fit=crop",
  },
  {
    title: "Fraud Detection",
    description:
      "Leverage generative models to identify patterns indicative of fraudulent activities, enhancing security and trust in online transactions.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
  },
  {
    title: "Inventory Management Forecasting",
    description:
      "Implement generative algorithms to predict demand and optimize inventory levels, reducing the risk of stockouts or overstock situations.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=300&h=200&fit=crop",
  },
  {
    title: "Style Recommendations",
    description:
      "Implement generative AI for personalized style recommendations, enhancing the online shopping experience for fashion consumers.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&h=200&fit=crop",
  },
  {
    title: "Virtual Fashion Try-ons",
    description:
      "Generative models can create virtual try-on experiences, allowing customers to visualize clothing items before purchase.",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=300&h=200&fit=crop",
  },
];

export default function RetailDetails() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {retailServices.map((service, index) => {

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

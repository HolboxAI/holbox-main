"use client"

const manufacturingServices = [
  {
    title: "Predictive Maintenance",
    description:
      "Implement generative AI to predict equipment failures and optimize maintenance schedules, reducing downtime in manufacturing processes.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop",
  },
  {
    title: "Supply Chain Optimization",
    description:
      "Leverage generative models to optimize supply chain logistics, predicting demand and improving overall efficiency.",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=300&h=200&fit=crop",
  },
  {
    title: "Production Process Optimization",
    description:
      "Deploy generative AI to analyze and optimize manufacturing processes, improving efficiency and reducing costs.",
    image: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=300&h=200&fit=crop",
  },
  {
    title: "Maintenance Assistant",
    description:
      "Empower technicians with an interactive GenAI-powered assistant that offers step-by-step troubleshooting guidance based on real-time data and expert knowledge.",
    image: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?w=300&h=200&fit=crop",
  },
  {
    title: "Automated Quality Control Documentation",
    description:
      "Generative AI can generate detailed documentation for quality control inspections, ensuring accuracy and compliance.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=200&fit=crop",
  },
];

export default function ManufacturingDetails() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {manufacturingServices.map((service, index) => {

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

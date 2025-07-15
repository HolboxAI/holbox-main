"use client"

const logisticsServices = [
  {
    title: "Route Optimization",
    description:
      "Use generative AI to optimize delivery routes, reducing transportation costs and improving efficiency in logistics operations.",
    image: "https://images.pexels.com/photos/32385315/pexels-photo-32385315/free-photo-of-container-ship-in-hamburg-harbor-at-sunset.jpeg?w=300&h=200&fit=crop",
  },
  {
    title: "Demand Forecasting",
    description:
      "Leverage generative models for accurate demand forecasting, optimizing inventory levels and reducing stockouts.",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?w=300&h=200&fit=crop",
  },
  {
    title: "Supply Chain Visibility",
    description:
      "Implement generative algorithms for real-time visibility into the supply chain, improving coordination and responsiveness.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&h=200&fit=crop",
  },
  {
    title: "Warehouse Automation",
    description:
      "Utilize generative AI for automating warehouse processes, including inventory tracking and order fulfillment.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=300&h=200&fit=crop",
  },
];


export default function LogisticsDetails() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {logisticsServices.map((service, index) => {

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

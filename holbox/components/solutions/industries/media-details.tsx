"use client"

const mediaServices = [
  {
    title: "Content Creation",
    description:
      "Leverage generative AI for automated content creation in media, including news articles, blog posts, and video scripts.",
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=300&h=200&fit=crop",
  },
  {
    title: "Personalized News Recommendations",
    description:
      "Use generative models to analyze user preferences and provide personalized news recommendations.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=300&h=200&fit=crop",
  },
  {
    title: "Speech-to-text Transcription",
    description:
      "Utilize generative AI for accurate and efficient speech-to-text transcription in media production.",
    image: "https://images.pexels.com/photos/5717259/pexels-photo-5717259.jpeg?w=300&h=200&fit=crop",
  },
  {
    title: "Interactive Storytelling",
    description:
      "Implement generative AI for creating interactive and personalized storytelling experiences in digital media.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=200&fit=crop",
  },
];
export default function MediaDetails() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mediaServices.map((service, index) => {

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

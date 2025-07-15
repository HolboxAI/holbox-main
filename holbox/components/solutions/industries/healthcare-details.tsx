"use client"

const healthcareServices = [
  {
    title: "Assistance in Drug Discovery",
    description:
      "Generative AI can analyze vast datasets and assist in the discovery of potential drugs and treatment options.",
    image: "https://images.pexels.com/photos/8533045/pexels-photo-8533045.jpeg?w=300&h=200&fit=crop",
  },
  {
    title: "Automated Telemedicine Notes",
    description:
      "Implement generative AI to automate the generation of telemedicine notes, capturing key details of virtual patient consultations and improving documentation.",
    image: "https://images.pexels.com/photos/5407220/pexels-photo-5407220.jpeg?w=300&h=200&fit=crop",
  },
  {
    title: "Patient Data Analysis",
    description:
      "Generative models can automate the generation of reports based on patient data analysis, summarizing key findings for medical professionals.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&h=200&fit=crop",
  },
  {
    title: "Clinical Decision Support",
    description:
      "Generative AI can assist healthcare providers by analyzing patient data and offering evidence-based recommendations for diagnosis and treatment plans.",
    image: "https://images.pexels.com/photos/4021817/pexels-photo-4021817.jpeg?w=300&h=200&fit=crop",
  },
  {
    title: "Automated Literature Review",
    description:
      "Utilize generative AI to automate the review of medical research papers, articles, and documents, summarizing content and extracting key insights to support pharmaceutical research.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
  },
  {
    title: "Patient Engagement Chatbots",
    description:
      "Implement generative AI-powered chatbots for patient engagement, answering queries, providing medication info, and offering support throughout treatment.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop",
  },
  {
    title: "Virtual Drug Trial",
    description:
      "Generative AI speeds up drug development by simulating drug effects on virtual patients, predicting outcomes and side effects to reduce testing time and cost.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&h=200&fit=crop",
  },
  {
    title: "Genomic Editing",
    description:
      "GenAI streamlines genomic editing by identifying optimal therapeutic targets and CRISPR sites, enhancing personalized medicine and therapy innovation.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
  },
];


export default function HealthcareDetails() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {healthcareServices.map((service, index) => {

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

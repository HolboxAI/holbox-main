import { ReactNode, useState } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
}

export function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const dataMap = {
    'NL2SQL': {
      benefits: [
        'Reduce SQL development time by 85%',
        'Enable non-technical users to query data',
        'Increase data accessibility across teams',
        'Accelerate business intelligence workflows',
        'Eliminate query syntax errors',
      ],
      useCases: [
        'Ad-hoc data analysis by business users',
        'Quick dashboard creation',
        'Data exploration without SQL knowledge',
        'Automated reporting systems',
        'Interactive data querying in meetings',
      ]
    },
    'Health Scribe': {
      benefits: [
        'Reduce documentation time by 75%',
        'Improve accuracy of medical records',
        'Ensure compliance with healthcare regulations',
        'Free up time for patient care',
        'Reduce transcription costs',
      ],
      useCases: [
        'Patient consultations and follow-ups',
        'Medical rounds and team discussions',
        'Surgical procedure documentation',
        'Medical research interviews',
        'Remote patient monitoring notes',
      ]
    },
    'Face Recognition': {
      benefits: [
        '99.8% identification accuracy',
        'Process up to 30 faces simultaneously',
        'Works in varying lighting conditions',
        'Privacy-preserving technology',
        'Seamless integration with existing systems',
      ],
      useCases: [
        'Secure facility access control',
        'Attendance tracking systems',
        'Customer recognition for VIP service',
        'Security monitoring and alerts',
        'Contactless authentication',
      ]
    },
    'PDF Extractor': {
      benefits: [
        'Reduce document review time by 90%',
        'Extract key information automatically',
        'Process hundreds of pages in seconds',
        'Support for 25+ languages',
        'Maintain document context in responses',
      ],
      useCases: [
        'Legal document review and analysis',
        'Research paper information extraction',
        'Contract clause identification',
        'Financial report summarization',
        'Technical documentation Q&A',
      ]
    },
    'Virtual Try-On': {
      benefits: [
        'Reduce return rates by up to 40%',
        'Increase conversion rates by 25%',
        'Eliminate need for multiple photo shoots',
        'Support for all clothing categories',
        'Realistic fabric simulation',
      ],
      useCases: [
        'E-commerce product visualization',
        'Fashion design prototyping',
        'Virtual fashion shows',
        'Personalized shopping experiences',
        'Inventory-free retail displays',
      ]
    }
  };

  const featureData = dataMap[title as keyof typeof dataMap];

  return (
    <>
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
          height: 380px;
          width: 100%;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.5s ease-out;
          transform-style: preserve-3d;
          cursor: pointer;
        }
        
        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }
        
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          transform: translateZ(0);
          will-change: transform;
        }
        
        .flip-card-front {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .flip-card-back {
          background: linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(238, 242, 255, 0.95) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(129, 140, 248, 0.2);
          transform: rotateY(180deg);
        }
        
        .smooth-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(129, 140, 248, 0.3) transparent;
        }
        
        .smooth-scroll::-webkit-scrollbar {
          width: 4px;
        }
        
        .smooth-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .smooth-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(129, 140, 248, 0.3);
          border-radius: 2px;
        }
        
        .benefit-item {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .benefit-item:nth-child(1) { animation-delay: 0.1s; }
        .benefit-item:nth-child(2) { animation-delay: 0.2s; }
        .benefit-item:nth-child(3) { animation-delay: 0.3s; }
        .benefit-item:nth-child(4) { animation-delay: 0.4s; }
        .benefit-item:nth-child(5) { animation-delay: 0.5s; }
        
        .use-case-item {
          opacity: 0;
          animation: slideInLeft 0.5s ease-out forwards;
        }
        
        .use-case-item:nth-child(1) { animation-delay: 0.1s; }
        .use-case-item:nth-child(2) { animation-delay: 0.2s; }
        .use-case-item:nth-child(3) { animation-delay: 0.3s; }
        .use-case-item:nth-child(4) { animation-delay: 0.4s; }
        .use-case-item:nth-child(5) { animation-delay: 0.5s; }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .flip-indicator {
          transition: transform 0.3s ease-out;
        }
        
        .flip-card:hover .flip-indicator {
          transform: scale(1.1);
        }
        
        .pulse-dot {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
      
      <div className="flip-card" onClick={flipCard}>
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
          {/* Front Side */}
          <div className="flip-card-front">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full -translate-y-8 translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-indigo-100/20 to-cyan-100/20 rounded-full translate-y-6 -translate-x-6"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl text-blue-600">{icon}</div>
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full pulse-dot"></div>
                  <div className="w-1.5 h-1.5 bg-blue-300 rounded-full pulse-dot" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-1.5 h-1.5 bg-blue-200 rounded-full pulse-dot" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-800 leading-tight">{title}</h3>
              <p className="text-sm mb-4 text-gray-600 leading-relaxed">{description}</p>
              
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center mb-3">
                  <div className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-2"></div>
                  <h4 className="font-semibold text-sm text-gray-700">
                    Benefits of {title}
                  </h4>
                </div>
                
                <ul className="text-xs text-gray-600 space-y-2">
                  {featureData?.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start benefit-item">
                      <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-200/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-600 font-medium">View Use Cases</span>
                  <div className="flex items-center space-x-2">
                    <div className="flip-indicator w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md" style={{backgroundColor: 'hsl(221, 70%, 50%)'}}>
                      ↻
                    </div>
                    <div className="text-xs text-gray-400">Flip</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="flip-card-back">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-18 h-18 bg-gradient-to-br from-indigo-100/20 to-blue-100/20 rounded-full -translate-y-9 -translate-x-9"></div>
            <div className="absolute bottom-0 right-0 w-14 h-14 bg-gradient-to-tl from-purple-100/15 to-pink-100/15 rounded-full translate-y-7 translate-x-7"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl text-indigo-600">{icon}</div>
                <div className="px-2 py-1 bg-indigo-100/70 text-indigo-700 text-xs font-medium rounded-full">
                  Use Cases
                </div>
              </div>

              <p className="text-base font-semibold mb-4 text-gray-800">{title}</p>
              
              <div className="flex-1 overflow-hidden">
                <div className="space-y-2.5 max-h-48 overflow-y-auto smooth-scroll">
                  {featureData?.useCases.map((item, idx) => (
                    <div key={idx} className="flex items-start p-2.5 bg-white/60 rounded-lg border border-gray-100/50 use-case-item">
                      <div className="w-5 h-5 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2.5 flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-xs text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-gray-200/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-indigo-600 font-medium">Back to Benefits</span>
                  <div className="flex items-center space-x-2">
                    <div className="text-xs text-gray-400">Flip</div>
                    <div className="flip-indicator w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md" style={{backgroundColor: 'hsl(221, 70%, 50%)'}}>
                      ↺
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Demo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">Smooth Flip Card</h1>
        <FeatureCard
          title="NL2SQL"
          description="Transform natural language into SQL queries instantly with AI-powered conversion"
          icon="🔍"
          index={0}
        />
        <p className="text-center text-gray-600 mt-4 text-sm">Click the card to flip it!</p>
      </div>
    </div>
  );
}
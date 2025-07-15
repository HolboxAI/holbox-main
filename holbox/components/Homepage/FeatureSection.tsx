
import { useRef } from 'react';
import { FeatureCard } from './FeatureCard';
import { 
 Database, 
 Mic, 
 UserCheck, 
 FileText, 
 Image
} from 'lucide-react';

export default function FeaturesSection() {
  const ref = useRef(null);
const features = [
  {
    title: 'NL2SQL',
    description:
      'Convert natural language queries into SQL statements using advanced AI. Get instant results and visualizations from your database without writing complex SQL code.',
    icon: <Database size={24} /> // Replace with your preferred icon
  },
  {
    title: 'Health Scribe',
    description:
      'Transcribe medical audio recordings and get instant answers to medical queries. Perfect for healthcare professionals looking to save time on documentation.',
    icon: <Mic size={24} /> // Replace with your preferred icon
  },
  {
    title: 'Face Recognition',
    description:
      'Real-time face detection and identification system with advanced security features. Identify individuals in images or video streams with high accuracy and low latency.',
    icon: <UserCheck size={24} /> // Replace with your preferred icon
  },
  {
    title: 'PDF Extractor',
    description:
      'Upload PDFs and chat with your documents to extract insights, answer questions, and summarize content without manual reading or searching.',
    icon: <FileText size={24} /> // Replace with your preferred icon
  },
  {
    title: 'Virtual Try-On',
    description:
      'Try garments on digital models using just product images. Visualize how clothing items look on different body types without physical samples.',
    icon: <Image size={24} /> // Replace with your preferred icon
  }
];


  return (
    <section 
      id="features" 
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, var(--surface) 0%, var(--primary-bg) 50%, var(--primary-light) 100%)' }}
      ref={ref}
    >
      {/* Background decorative elements with theme colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 -right-20 w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{ background: 'linear-gradient(135deg, var(--primary)/10, var(--accent)/10)' }}
        ></div>
        <div 
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ background: 'linear-gradient(45deg, var(--accent)/10, var(--primary)/10)' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl animate-pulse delay-500"
          style={{ background: 'linear-gradient(90deg, var(--primary)/5, var(--accent)/5)' }}
        ></div>
        
       
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div 
            className="inline-block mb-6 px-6 py-2 rounded-full font-semibold text-sm tracking-wide uppercase transform hover:scale-105 transition-transform duration-300"
            style={{ 
              backgroundColor: 'var(--primary-light)',
              color: 'var(--primary-dark)'
            }}
          >
            Our Products
          </div>
          
          <h2 className="relative group cursor-default mb-6">
            {/* Background text effect */}
            <span className="absolute inset-0 text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20 bg-clip-text text-transparent blur-sm transform scale-105">
              Powerful Capabilities
            </span>
            
            {/* Main text with gradient */}
            <span className="relative text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight bg-gradient-to-r from-gray-900 via-[var(--primary-dark)] to-[var(--primary)] bg-clip-text text-transparent">
              Powerful 
              <span className="relative inline-block ml-2">
            <span style={{ color: 'hsl(221, 70%, 50%)' }}>
                  Capabilities
                </span>
                {/* Underline animation */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: 'linear-gradient(90deg, var(--primary), var(--accent))' }}
                ></div>
              </span>
            </span>
            
           
          </h2>
          
          <p className="text-lg leading-relaxed transform hover:text-gray-800 transition-colors duration-300" style={{ color: 'var(--secondary)' }}>
           Empowering every industry with accessible, powerful, and secure AI — tailored for real-world impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

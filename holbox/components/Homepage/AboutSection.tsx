
import { useRef, useState } from 'react';
import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  })};
export default function AboutSection() {
  const ref = useRef(null);
  const [hoveredKeyword, setHoveredKeyword] = useState<string | null>(null);

 const keywords = [
  {
    id: 'llm',
    name: 'LLMs',
    description: 'Powerful language models that create, understand, and evolve human-like text for smarter systems.'
  },
  {
    id: 'vision',
    name: 'Vision',
    description: 'Generative visual intelligence that learns from and creates meaningful image-based insights.'
  },
  {
    id: 'speech',
    name: 'Speech',
    description: 'Natural voice interaction systems with real-time recognition, understanding, and synthesis.'
  },
  {
    id: 'agents',
    name: 'Agents',
    description: 'Autonomous AI agents built to adapt, learn, and act intelligently across dynamic tasks.'
  }
];


  return (
    <section 
      id="about" 
      className="py-20 relative bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 overflow-hidden"
      ref={ref}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start group">
            <div className="w-full max-w-[400px] h-[400px] relative transform transition-all duration-700 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl blur-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-700"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop"
                  alt="AI Technology"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Floating animation elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-8 left-6 w-2 h-2 bg-indigo-400 rounded-full animate-ping delay-500"></div>
                <div className="absolute top-1/3 left-4 w-4 h-4 bg-purple-400/60 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-6 animate-fade-in ">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="inline-block mb-6 px-4 py-2 text-sm font-medium rounded-full"
            style={{ 
              backgroundColor: 'hsl(221, 70%, 50% , 0.1)',
              color: 'hsl(221, 70%, 50%)'
            }}
          >
            About holbox AI
          </motion.div>
            
            <h2 className="relative group cursor-default">
              {/* Background text effect */}
              
              
              {/* Main text with gradient */}
              <span className="relative font-inter text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight animate-fade-in">
              <span className={`${inter.className} tracking-tighter font-semibold text-gray-800`}>  Pushing the Boundaries of </span>
                <span className="relative inline-block ">
                  <span className=" font-bold tracking-tighter">
                     <span className={inter.className} style={{ color: 'hsl(221, 70%, 50%)' }}>                    What's Possible
                  </span></span>
                  
                </span>
              </span>
              
         
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p className="transform hover:text-gray-800 transition-colors duration-300">
                At Holbox, we empower businesses to unlock the full potential of Generative AI by developing intelligent systems that learn, adapt, and evolve. Our expert team delivers cutting-edge AI solutions tailored to your specific goals whether it's building advanced language models, visual intelligence, voice interfaces, or autonomous agents. With a deep focus on innovation and scalability, we help you stay ahead in a rapidly evolving digital landscape.
              </p>
            </div>
            
            {/* Enhanced Keywords Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {keywords.map((keyword, index) => (
                <div
                  key={keyword.id}
                  onMouseEnter={() => setHoveredKeyword(keyword.id)}
                  onMouseLeave={() => setHoveredKeyword(null)}
                  className={`group p-5 rounded-2xl border-2 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl ${
                    hoveredKeyword === keyword.id 
                      ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl scale-105' 
                      : 'border-gray-200 hover:border-blue-300 bg-white/80 backdrop-blur-sm'
                  }`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="relative overflow-hidden">
                    <h3 className={`font-bold text-xl mb-3 transition-colors duration-300 ${
                      hoveredKeyword === keyword.id ? 'text-blue-700' : 'text-gray-900'
                    }`}>
                      {keyword.name}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                      hoveredKeyword === keyword.id ? 'text-blue-600' : 'text-gray-600'
                    }`}>
                      {keyword.description}
                    </p>
                    
                    {/* Hover effect overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 transform transition-transform duration-300 ${
                      hoveredKeyword === keyword.id ? 'translate-x-0' : 'translate-x-full'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { Box, Linkedin, Twitter } from 'lucide-react';
import { Container } from '@/components/ui/container';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
  <Link href="/" className="flex items-center space-x-2">
    <Image src="/holboxai_logo.jpg" alt="Logo" width={40} height={40} />
    <span className="text-sm font-semibold">HolboxAI</span>
  </Link>
</div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/company/about-us" className="text-sm text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link href="/company/blog" className="text-sm text-gray-600 hover:text-gray-900">Blog</Link></li>
              <li><Link href="/company/contact-us" className="text-sm text-gray-600 hover:text-gray-900">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-platform/smart-assistant" className="text-sm text-gray-600 hover:text-gray-900">
                  AI Smart Assistant
                </Link>
              </li>
              <li>
                <Link href="/ai-platform/customer-service" className="text-sm text-gray-600 hover:text-gray-900">
                  AI Customer Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500">© {currentYear} HolboxAI. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/holboxai/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
              <Linkedin size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
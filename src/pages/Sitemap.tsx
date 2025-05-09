
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Map } from 'lucide-react';

const Sitemap = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Smooth scroll function for in-page navigation on home page
  const scrollToSection = (sectionId: string) => {
    // Navigate to home page first if not already there
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center gap-3">
            <Map className="h-8 w-8 text-bmi-primary" />
            <h1 className="text-3xl font-bold text-gray-900">Sitemap</h1>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">Main Pages</h2>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-bmi-primary rounded-full"></span>
                <Link to="/" className="text-bmi-primary hover:underline">Home Page</Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-bmi-primary rounded-full"></span>
                <Link to="/disclaimer" className="text-bmi-primary hover:underline">Medical Disclaimer</Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-bmi-primary rounded-full"></span>
                <Link to="/sitemap" className="text-bmi-primary hover:underline">Sitemap</Link>
              </li>
            </ul>
            
            <h2 className="text-xl font-semibold mb-4">Home Page Sections</h2>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-bmi-secondary rounded-full"></span>
                <button 
                  onClick={() => scrollToSection('calculator')} 
                  className="text-bmi-primary hover:underline cursor-pointer"
                >
                  BMI Calculator
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-bmi-secondary rounded-full"></span>
                <button 
                  onClick={() => scrollToSection('bmi-introduction')} 
                  className="text-bmi-primary hover:underline cursor-pointer"
                >
                  About BMI
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-bmi-secondary rounded-full"></span>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="text-bmi-primary hover:underline cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
            
            <h2 className="text-xl font-semibold mb-4">Legal Pages</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-bmi-accent rounded-full"></span>
                <Link to="/privacy" className="text-bmi-primary hover:underline">Privacy Policy</Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-bmi-accent rounded-full"></span>
                <Link to="/terms" className="text-bmi-primary hover:underline">Terms of Service</Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-bmi-accent rounded-full"></span>
                <Link to="/disclaimer" className="text-bmi-primary hover:underline">Medical Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sitemap;

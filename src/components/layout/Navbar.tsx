
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Smooth scroll function for in-page navigation
  const scrollToSection = (sectionId: string) => {
    // If not on homepage, navigate to homepage with hash
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
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Scale className="h-6 w-6 text-bmi-primary" />
          <Link to="/" className="text-xl font-bold text-bmi-primary">BodyWise BMI</Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-bmi-primary transition-colors">Home</Link>
          <a 
            href="#calculator" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('calculator');
            }}
            className="text-sm font-medium hover:text-bmi-primary transition-colors cursor-pointer"
          >
            Calculator
          </a>
          <a 
            href="#bmi-introduction" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('bmi-introduction');
            }}
            className="text-sm font-medium hover:text-bmi-primary transition-colors cursor-pointer"
          >
            About BMI
          </a>
          <a 
            href="#faq" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('faq');
            }}
            className="text-sm font-medium hover:text-bmi-primary transition-colors cursor-pointer"
          >
            FAQ
          </a>
          <Button 
            className="bg-bmi-primary hover:bg-bmi-accent"
            onClick={() => scrollToSection('calculator')}
          >
            <Calculator className="mr-2 h-4 w-4" />
            Calculate Now
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          className="md:hidden p-2"
          onClick={() => scrollToSection('calculator')}
        >
          <Calculator className="h-5 w-5 text-bmi-primary" />
          <span className="sr-only">Calculate BMI</span>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;

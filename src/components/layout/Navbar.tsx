
import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Scale className="h-6 w-6 text-bmi-primary" />
          <Link to="/" className="text-xl font-bold text-bmi-primary">BodyWise BMI</Link>
        </div>
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-bmi-primary transition-colors">Home</Link>
          <Link to="/#calculator" className="text-sm font-medium hover:text-bmi-primary transition-colors">Calculator</Link>
          <Link to="/#about" className="text-sm font-medium hover:text-bmi-primary transition-colors">About BMI</Link>
          <Link to="/#faq" className="text-sm font-medium hover:text-bmi-primary transition-colors">FAQ</Link>
          <Button className="bg-bmi-primary hover:bg-bmi-accent">
            <Calculator className="mr-2 h-4 w-4" />
            Calculate Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;


import React from 'react';
import { Button } from '@/components/ui/button';
import { User, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  // Smooth scroll to specific sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-bmi-light py-16 md:py-24">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-bmi-primary/10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-20 -left-10 w-56 h-56 bg-bmi-secondary/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-bmi-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-block bg-bmi-primary/10 text-bmi-primary px-4 py-1 rounded-full mb-6">
              <span className="text-sm font-medium">Precision Health Analytics</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Body Mass Index <span className="text-bmi-primary">Calculator</span> For All Body Types
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Determine your healthy weight range with our comprehensive BMI tool, personalized for your age, gender, and body composition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                className="bg-bmi-primary hover:bg-bmi-accent text-lg px-6 py-6"
                onClick={() => scrollToSection('calculator')}
              >
                Calculate Your BMI
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                className="text-lg px-6 py-6"
                onClick={() => scrollToSection('bmi-introduction')}
              >
                Learn About BMI
              </Button>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto md:mx-0">
              <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                <p className="text-sm text-gray-500">For All</p>
                <p className="font-bold text-bmi-dark">Ages</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                <p className="text-sm text-gray-500">Multiple</p>
                <p className="font-bold text-bmi-dark">Units</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                <p className="text-sm text-gray-500">Body Type</p>
                <p className="font-bold text-bmi-dark">Adjusted</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative bg-white p-4 rounded-2xl shadow-lg border border-bmi-light max-w-sm mx-auto">
              <div className="absolute -top-3 -left-3 bg-bmi-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                3D Analysis
              </div>
              
              <div className="flex justify-center mb-4">
                <User className="h-28 w-28 text-bmi-primary" />
              </div>
              
              <div className="space-y-4 mb-4">
                <div className="h-2 bg-bmi-light rounded-full">
                  <div className="h-2 bg-bmi-primary rounded-full" style={{ width: '70%' }}></div>
                </div>
                <div className="h-2 bg-bmi-light rounded-full">
                  <div className="h-2 bg-bmi-secondary rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="h-2 bg-bmi-light rounded-full">
                  <div className="h-2 bg-bmi-accent rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <p className="text-center text-sm text-gray-500">
                Advanced body composition analysis for all body types
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-bmi-accent/20 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-bmi-primary/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

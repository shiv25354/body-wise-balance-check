
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import FAQSection from '@/components/sections/FAQSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BMICalculator from '@/components/calculator/BMICalculator';
import MobileLeaderboardBanner from '@/components/banner/MobileLeaderboardBanner';
import LeaderboardAd from '@/components/banner/LeaderboardAd';
import LargeRectangleAd from '@/components/banner/LargeRectangleAd';
import WideSkyscraperAd from '@/components/banner/WideSkyscraperAd';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Leaderboard Ad - Desktop Only */}
        {!isMobile && (
          <div className="py-6 flex justify-center bg-gray-50">
            <LeaderboardAd />
          </div>
        )}
        
        {/* Problem Section */}
        <ProblemSection />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Wide Skyscraper Ad - Desktop Only */}
            {!isMobile && (
              <div className="hidden lg:block">
                <WideSkyscraperAd position="sticky" />
              </div>
            )}
            
            {/* Calculator Section */}
            <section id="calculator" className="flex-1 py-16 md:py-24 bg-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Calculate Your <span className="text-bmi-primary">BMI</span> Now
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Get personalized results with our advanced Body Mass Index calculator
                  </p>
                </div>
                
                <BMICalculator />
                
                {/* Large Rectangle Ad - Mobile and Desktop */}
                <div className="mt-12 flex justify-center">
                  <LargeRectangleAd />
                </div>
              </div>
            </section>
          </div>
        </div>
        
        {/* Solution/Benefits Section */}
        <section id="about">
          <SolutionSection />
        </section>
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* FAQ Section */}
        <FAQSection />
      </main>
      
      <Footer />
      
      {/* Mobile Leaderboard Banner */}
      <MobileLeaderboardBanner />
    </div>
  );
};

export default Index;

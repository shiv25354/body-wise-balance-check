
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import FAQSection from '@/components/sections/FAQSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BMICalculator from '@/components/calculator/BMICalculator';
import BMIInfoSection from '@/components/sections/BMIInfoSection';
import MobileLeaderboardBanner from '@/components/banner/MobileLeaderboardBanner';
import LeaderboardAd from '@/components/banner/LeaderboardAd';
import LargeRectangleAd from '@/components/banner/LargeRectangleAd';
import WideSkyscraperAd from '@/components/banner/WideSkyscraperAd';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Add schema markup for the BMI Calculator
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Free Body Mass Index Calculator',
      'applicationCategory': 'HealthApplication',
      'operatingSystem': 'Web',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD'
      },
      'description': 'Instant BMI Calculator to check your health status. This free tool uses height and weight to give an accurate BMI and category.'
    };
    
    schemaScript.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(schemaScript);
    
    return () => {
      document.head.removeChild(schemaScript);
    };
  }, []);
  
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
                <BMICalculator />
                
                {/* Large Rectangle Ad - Mobile and Desktop */}
                <div className="mt-12 flex justify-center">
                  <LargeRectangleAd />
                </div>
              </div>
            </section>
          </div>
        </div>
        
        {/* BMI Information Section */}
        <BMIInfoSection />
        
        {/* Solution/Benefits Section */}
        <section id="about">
          <SolutionSection />
        </section>
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Leaderboard Ad - Desktop Only */}
        {!isMobile && (
          <div className="py-6 flex justify-center bg-gray-50">
            <LeaderboardAd />
          </div>
        )}
        
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

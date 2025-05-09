
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FileText } from 'lucide-react';
import MobileLeaderboardBanner from '@/components/banner/MobileLeaderboardBanner';
import LeaderboardAd from '@/components/banner/LeaderboardAd';
import { useIsMobile } from '@/hooks/use-mobile';

const TermsOfService = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="h-8 w-8 text-bmi-primary" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms of Service</h1>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-6">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Last updated: May 7, 2025
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing or using the BodyWise BMI calculator and website, you agree to be bound by these Terms of Service. If you 
                  disagree with any part of the terms, you may not access the service.
                </p>
                
                {/* Leaderboard Ad - Desktop Only */}
                {!isMobile && (
                  <div className="my-8 flex justify-center">
                    <LeaderboardAd />
                  </div>
                )}
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
                <p className="text-gray-700 mb-4">
                  BodyWise BMI provides a web-based BMI (Body Mass Index) calculator tool that allows users to calculate their BMI based on 
                  provided height, weight, and other physical characteristics. The service also provides general health information related to BMI.
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-700 mb-4">
                  When using our service, you agree to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Provide accurate information when using the BMI calculator</li>
                  <li>Use the service for lawful purposes only</li>
                  <li>Not attempt to interfere with the proper functioning of the service</li>
                  <li>Not attempt to access data not intended for you</li>
                </ul>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Medical Disclaimer</h2>
                <p className="text-gray-700 mb-4">
                  The BodyWise BMI calculator is provided for informational purposes only and is not a substitute for professional medical advice, 
                  diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may 
                  have regarding a medical condition. See our full Medical Disclaimer for more information.
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  The service and its original content, features, and functionality are owned by BodyWise BMI and are protected by international 
                  copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  In no event shall BodyWise BMI, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or 
                  other intangible losses, resulting from your access to or use of or inability to access or use the service.
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Governing Law</h2>
                <p className="text-gray-700 mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of 
                  law provisions.
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice 
                  prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about these Terms, please contact us at info@bodywisebmi.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Mobile Leaderboard Banner */}
      <MobileLeaderboardBanner />
    </div>
  );
};

export default TermsOfService;

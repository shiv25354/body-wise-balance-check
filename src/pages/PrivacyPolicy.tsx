
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Shield } from 'lucide-react';
import MobileLeaderboardBanner from '@/components/banner/MobileLeaderboardBanner';
import LeaderboardAd from '@/components/banner/LeaderboardAd';
import { useIsMobile } from '@/hooks/use-mobile';

const PrivacyPolicy = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="h-8 w-8 text-bmi-primary" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-6">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Last updated: May 7, 2025
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Introduction</h2>
                <p className="text-gray-700 mb-4">
                  BodyWise BMI ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how 
                  we collect, use, disclose, and safeguard your information when you visit our website and use our BMI calculator service.
                </p>
                
                {/* Leaderboard Ad - Desktop Only */}
                {!isMobile && (
                  <div className="my-8 flex justify-center">
                    <LeaderboardAd />
                  </div>
                )}
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  When you use our BMI calculator, we may collect the following information:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Height and weight information you enter into the calculator</li>
                  <li>Age and gender information you provide</li>
                  <li>Body type selection</li>
                  <li>Usage data including how you interact with our website</li>
                  <li>Device information such as browser type, IP address, and operating system</li>
                </ul>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>To provide and maintain the BMI calculator service</li>
                  <li>To personalize your experience and provide relevant health information</li>
                  <li>To improve our website and services</li>
                  <li>To monitor usage of our website</li>
                  <li>To detect, prevent, and address technical issues</li>
                </ul>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Cookies and Similar Technologies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies 
                  are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to 
                  refuse all cookies or to indicate when a cookie is being sent.
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Data Sharing and Disclosure</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. This does not 
                  include trusted third parties who assist us in operating our website, conducting our business, or serving our users, so 
                  long as those parties agree to keep this information confidential.
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational measures to protect the security of your personal information. However, 
                  please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Your Data Protection Rights</h2>
                <p className="text-gray-700 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>The right to access information we hold about you</li>
                  <li>The right to request correction of inaccurate information</li>
                  <li>The right to request erasure of your information</li>
                  <li>The right to object to processing of your information</li>
                  <li>The right to data portability</li>
                </ul>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
                  and updating the "Last updated" date.
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy, please contact us at info@bodywisebmi.com.
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

export default PrivacyPolicy;

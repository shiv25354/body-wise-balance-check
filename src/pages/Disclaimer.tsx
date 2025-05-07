
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FileText } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="h-8 w-8 text-bmi-primary" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Medical Disclaimer</h1>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-6">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Last updated: May 7, 2025
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">General Information</h2>
                <p className="text-gray-700 mb-4">
                  The BodyWise BMI Calculator website (the "Service") is provided for general informational purposes only. 
                  The information provided by this Service is not intended to replace professional medical advice, diagnosis, 
                  or treatment. Always seek the advice of your physician or other qualified health provider with any 
                  questions you may have regarding your health or a medical condition.
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Not Medical Advice</h2>
                <p className="text-gray-700 mb-4">
                  The information provided by our BMI calculator is not a substitute for professional medical advice. 
                  BMI is a screening tool and does not directly measure body fat or health. It does not diagnose body 
                  fatness or health and should not be used as the only means to determine someone's health or if they 
                  need to lose weight.
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Limitations of BMI</h2>
                <p className="text-gray-700 mb-4">
                  BMI calculations have several limitations, including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Not distinguishing between fat and muscle mass</li>
                  <li>Not accounting for differences in body composition based on age, gender, ethnicity, or fitness level</li>
                  <li>Not providing information about the distribution of fat in the body</li>
                  <li>May not be accurate for athletes, pregnant women, elderly individuals, or growing children</li>
                </ul>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">No Physician-Patient Relationship</h2>
                <p className="text-gray-700 mb-4">
                  Use of this Service does not create a physician-patient relationship. The information provided is not intended 
                  to be a substitute for professional medical advice, diagnosis, or treatment. Never disregard professional 
                  medical advice or delay seeking it because of something you have read or calculated on this website.
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">No Warranties</h2>
                <p className="text-gray-700 mb-4">
                  The Service is provided "as is" without any warranties, expressed or implied. We do not warrant that the 
                  Service will be error-free or uninterrupted. The information provided may not be accurate, complete, or current.
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  In no event shall BodyWise BMI, its owners, directors, employees, partners, agents, suppliers, or affiliates 
                  be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
                  loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of 
                  or inability to access or use the Service.
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Consult Healthcare Professionals</h2>
                <p className="text-gray-700 mb-4">
                  We strongly recommend that users consult with qualified healthcare professionals for:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Proper diagnosis of health conditions</li>
                  <li>Personalized health assessments</li>
                  <li>Advice on weight management and nutrition</li>
                  <li>Development of appropriate exercise regimens</li>
                  <li>Any concerns about your health status or BMI results</li>
                </ul>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about this Disclaimer, please contact us at info@bodywisebmi.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Disclaimer;

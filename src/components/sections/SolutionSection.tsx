
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const FeatureComparison = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-bmi-primary">Advanced BMI</span> Solution
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our comprehensive BMI calculator provides a more accurate and personalized health assessment.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 bg-white">Features</th>
                <th className="p-4 bg-bmi-light text-center">Standard BMI Tools</th>
                <th className="p-4 bg-bmi-primary text-white text-center">BodyWise BMI Calculator</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-white">Age-Specific Calculation</td>
                <td className="p-4 bg-white text-center">❌</td>
                <td className="p-4 bg-white text-center text-bmi-primary">
                  <CheckCircle className="h-5 w-5 inline" />
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-white">Gender Differences</td>
                <td className="p-4 bg-white text-center">❌</td>
                <td className="p-4 bg-white text-center text-bmi-primary">
                  <CheckCircle className="h-5 w-5 inline" />
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-white">Muscle Mass Consideration</td>
                <td className="p-4 bg-white text-center">❌</td>
                <td className="p-4 bg-white text-center text-bmi-primary">
                  <CheckCircle className="h-5 w-5 inline" />
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-white">Multiple Unit Systems</td>
                <td className="p-4 bg-white text-center">⚠️ Some</td>
                <td className="p-4 bg-white text-center text-bmi-primary">
                  <CheckCircle className="h-5 w-5 inline" />
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-white">Detailed Results Explanation</td>
                <td className="p-4 bg-white text-center">⚠️ Basic</td>
                <td className="p-4 bg-white text-center text-bmi-primary">
                  <CheckCircle className="h-5 w-5 inline" />
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-white">Health Recommendations</td>
                <td className="p-4 bg-white text-center">❌</td>
                <td className="p-4 bg-white text-center text-bmi-primary">
                  <CheckCircle className="h-5 w-5 inline" />
                </td>
              </tr>
              <tr>
                <td className="p-4 bg-white">Visual Results Representation</td>
                <td className="p-4 bg-white text-center">⚠️ Basic</td>
                <td className="p-4 bg-white text-center text-bmi-primary">
                  <CheckCircle className="h-5 w-5 inline" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-bmi-light">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">For All Age Groups</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Specialized calculations for children, teenagers, adults, and seniors with age-appropriate reference ranges.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-bmi-light">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Gender-Specific Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Different body composition norms for males and females for more accurate health assessment.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-bmi-light">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Body Type Adjusted</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Special considerations for athletic, muscular, and other body compositions when interpreting results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeatureComparison;

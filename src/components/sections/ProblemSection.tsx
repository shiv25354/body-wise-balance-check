
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Weight, Scale, User } from 'lucide-react';

const ProblemSection = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-bmi-primary">Standard BMI</span> Calculators Fall Short
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Traditional BMI calculators don't account for important factors that impact your body composition and health assessment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-bmi-light shadow-md transition-transform hover:translate-y-[-5px]">
            <CardContent className="pt-6">
              <div className="mb-4 bg-bmi-light p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <User className="h-8 w-8 text-bmi-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">One-Size Approach</h3>
              <p className="text-gray-600">
                Most calculators use a single formula for everyone, ignoring differences in age, gender, and muscle mass.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-bmi-primary font-medium">Our solution: Age & gender adjustments</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-bmi-light shadow-md transition-transform hover:translate-y-[-5px]">
            <CardContent className="pt-6">
              <div className="mb-4 bg-bmi-light p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <Weight className="h-8 w-8 text-bmi-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Muscle vs. Fat Confusion</h3>
              <p className="text-gray-600">
                Athletes and muscular individuals often get labeled as "overweight" due to BMI not distinguishing between muscle and fat.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-bmi-primary font-medium">Our solution: Body type consideration</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-bmi-light shadow-md transition-transform hover:translate-y-[-5px]">
            <CardContent className="pt-6">
              <div className="mb-4 bg-bmi-light p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <Scale className="h-8 w-8 text-bmi-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Limited Context</h3>
              <p className="text-gray-600">
                Standard calculators provide a number without explaining what it means for your specific situation and health goals.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-bmi-primary font-medium">Our solution: Personalized interpretation</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;

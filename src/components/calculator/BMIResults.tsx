import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { downloadBMIPDF } from '@/lib/pdf-generator';
import { Save as SaveIcon } from 'lucide-react';

interface BMIResultsProps {
  bmi: number;
  category: string;
  description: string;
  age: number;
  gender: string;
  bodyType: string;
  healthyRange: { min: number; max: number } | null;
  unit: string;
  height?: { cm: number; ft: number; in: number };
  weight?: { kg: number; lbs: number };
  className?: string;
}

const BMIResults = ({ 
  bmi, 
  category, 
  description, 
  age, 
  gender, 
  bodyType, 
  healthyRange,
  unit,
  height,
  weight,
  className 
}: BMIResultsProps) => {
  // Get progress color based on BMI category
  const getProgressColor = () => {
    switch (category) {
      case 'Underweight':
      case 'Mild Thinness':
      case 'Moderate Thinness':
      case 'Severe Thinness':
        return 'bg-yellow-400';
      case 'Normal weight':
        return 'bg-green-500';
      case 'Overweight':
        return 'bg-yellow-500';
      case 'Obesity':
      case 'Obesity Class I':
        return 'bg-orange-500';
      case 'Obesity Class II':
        return 'bg-red-500';
      case 'Obesity Class III':
        return 'bg-red-600';
      default:
        return 'bg-bmi-primary';
    }
  };
  
  // Calculate progress percentage (BMI scale typically goes from 16 to 40)
  const getProgressPercentage = () => {
    let percentage = ((bmi - 16) / (40 - 16)) * 100;
    percentage = Math.max(0, Math.min(100, percentage));
    return percentage;
  };
  
  // Calculate BMI Prime
  const getBMIPrime = () => {
    return (bmi / 25).toFixed(2);
  };

  // Display Ponderal Index
  const getPonderalIndex = () => {
    // PI = weight(kg) / height³(m³)
    // Since BMI = weight(kg) / height²(m²)
    // PI = BMI / height
    const height = unit === 'metric' ? bmi / (bmi * bmi) : (bmi * 703) / ((bmi * 703) * (bmi * 703));
    return (bmi / height).toFixed(2);
  };

  // Format weight with unit
  const formatWeight = (weight: number) => {
    return `${Math.round(weight)} ${unit === 'metric' ? 'kg' : 'lbs'}`;
  };

  const handleDownloadPDF = () => {
    if (height && weight) {
      downloadBMIPDF({
        bmi,
        category,
        description,
        age,
        gender,
        bodyType,
        healthyRange,
        unit,
        height,
        weight
      });
    }
  };

  return (
    <Card className={cn("border-bmi-light shadow-lg overflow-hidden", className)}>
      <CardHeader className="bg-gradient-to-r from-bmi-secondary to-bmi-accent text-white">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-center text-2xl">Your BMI Results</CardTitle>
            <CardDescription className="text-center text-white/80">
              Based on your {age} year old {gender} profile with a {bodyType} build
            </CardDescription>
          </div>
          {height && weight && (
            <Button 
              variant="secondary" 
              size="sm"
              onClick={handleDownloadPDF}
              className="bg-white text-bmi-primary hover:bg-gray-100 whitespace-nowrap"
            >
              <SaveIcon className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pt-6 space-y-4">
        <div className="text-center">
          <div className="inline-block px-6 py-3 rounded-full bg-bmi-light mb-2">
            <span className="text-4xl font-bold text-bmi-dark">{bmi.toFixed(1)}</span>
            <span className="text-sm ml-1">kg/m²</span>
          </div>
          <h3 className="text-xl font-semibold mt-2">{category}</h3>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>16</span>
            <span>18.5</span>
            <span>25</span>
            <span>30</span>
            <span>35</span>
            <span>40</span>
          </div>
          <Progress 
            value={getProgressPercentage()} 
            className={cn("h-2", getProgressColor())}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Underweight</span>
            <span>Normal</span>
            <span>Overweight</span>
            <span>Obese</span>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Healthy BMI Range:</h4>
            <p>18.5 kg/m² - 25 kg/m²</p>
          </div>
          {healthyRange && (
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Healthy Weight Range:</h4>
              <p>
                {formatWeight(healthyRange.min)} - {formatWeight(healthyRange.max)}
              </p>
            </div>
          )}
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">BMI Prime:</h4>
            <p>{getBMIPrime()}</p>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Ponderal Index:</h4>
            <p>{getPonderalIndex()} kg/m³</p>
          </div>
        </div>
        
        <div className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm">{description}</p>
        </div>
        
        <div className="text-sm text-muted-foreground">
          <p className="mb-2">BMI Limitations to consider:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>BMI doesn't account for muscle vs. fat distribution</li>
            <li>Athletes may have a higher BMI due to muscle mass</li>
            <li>BMI may not be accurate for elderly or pregnant individuals</li>
            <li>Doesn't account for different body compositions across ethnicities</li>
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="bg-muted/30 px-6 py-4">
        <p className="text-sm text-center w-full">
          This calculator provides a general assessment. For personalized health advice, please consult with a healthcare professional.
        </p>
      </CardFooter>
    </Card>
  );
};

export default BMIResults;

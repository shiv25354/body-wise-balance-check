
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Scale } from 'lucide-react';
import GenderSelection from './GenderSelection';
import AgeSlider from './AgeSlider';
import HeightInput from './HeightInput';
import WeightInput from './WeightInput';
import BodyTypeSelection from './BodyTypeSelection';

interface BMICalculatorFormProps {
  unit: string;
  setUnit: (unit: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  age: number;
  setAge: (age: number) => void;
  height: { cm: number; ft: number; in: number };
  setHeight: (height: { cm: number; ft: number; in: number }) => void;
  weight: { kg: number; lbs: number };
  setWeight: (weight: { kg: number; lbs: number }) => void;
  bodyType: string;
  setBodyType: (bodyType: string) => void;
  updateImperialHeight: (cm: number) => void;
  updateMetricHeight: (ft: number, inches: number) => void;
  updateImperialWeight: (kg: number) => void;
  updateMetricWeight: (lbs: number) => void;
  handleCalculate: () => void;
  handleReset: () => void;
}

const BMICalculatorForm = ({
  unit,
  setUnit,
  gender,
  setGender,
  age,
  setAge,
  height,
  setHeight,
  weight,
  setWeight,
  bodyType,
  setBodyType,
  updateImperialHeight,
  updateMetricHeight,
  updateImperialWeight,
  updateMetricWeight,
  handleCalculate,
  handleReset
}: BMICalculatorFormProps) => {
  return (
    <Card className="border-bmi-light shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Scale className="h-6 w-6" />
          Calculate Your Body Mass Index
        </CardTitle>
        <CardDescription className="text-white/80">
          Enter your details below to determine your BMI and weight status. Applicable for ages 2-120.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6">
        <Tabs defaultValue="metric" value={unit} onValueChange={setUnit} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="metric">Metric (kg/cm)</TabsTrigger>
            <TabsTrigger value="imperial">Imperial (lbs/ft)</TabsTrigger>
          </TabsList>
          
          <div className="space-y-6">
            <GenderSelection gender={gender} setGender={setGender} />
            <AgeSlider age={age} setAge={setAge} />
            <HeightInput 
              unit={unit} 
              height={height} 
              setHeight={setHeight}
              updateImperialHeight={updateImperialHeight}
              updateMetricHeight={updateMetricHeight}
            />
            <WeightInput 
              unit={unit} 
              weight={weight} 
              setWeight={setWeight}
              updateImperialWeight={updateImperialWeight}
              updateMetricWeight={updateMetricWeight}
            />
            <BodyTypeSelection bodyType={bodyType} setBodyType={setBodyType} />
          </div>
        </Tabs>
      </CardContent>
      
      <CardFooter className="flex justify-between flex-col sm:flex-row gap-2">
        <Button 
          variant="outline" 
          onClick={handleReset}
          className="w-full sm:w-auto"
        >
          Reset
        </Button>
        <Button 
          onClick={handleCalculate}
          className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600"
        >
          Calculate BMI
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BMICalculatorForm;


import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Weight, Ruler, User, Scale } from 'lucide-react';
import BMIResults from './BMIResults';
import { calculateBMI, getBMICategory, getBMIDescription } from '@/lib/bmi-calculator';

const BMICalculator = () => {
  // State for calculator inputs
  const [unit, setUnit] = useState('metric');
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(30);
  const [height, setHeight] = useState({ cm: 170, ft: 5, in: 7 });
  const [weight, setWeight] = useState({ kg: 70, lbs: 154 });
  const [bodyType, setBodyType] = useState('average');
  
  // State for calculated results
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Calculate height in meters or inches based on selected unit
  const getHeightInUnit = () => {
    if (unit === 'metric') {
      return height.cm / 100; // cm to m
    } else {
      return height.ft * 12 + height.in; // total inches
    }
  };

  // Get weight in kg or lbs based on selected unit
  const getWeight = () => {
    return unit === 'metric' ? weight.kg : weight.lbs;
  };

  // Update feet and inches when cm changes
  const updateImperialHeight = (cm: number) => {
    const inches = cm / 2.54;
    const feet = Math.floor(inches / 12);
    const remainingInches = Math.round(inches % 12);
    setHeight({ ...height, ft: feet, in: remainingInches });
  };

  // Update cm when feet or inches change
  const updateMetricHeight = (ft: number, inches: number) => {
    const totalInches = ft * 12 + inches;
    const cm = Math.round(totalInches * 2.54);
    setHeight({ ...height, cm });
  };

  // Update lbs when kg changes
  const updateImperialWeight = (kg: number) => {
    const lbs = Math.round(kg * 2.20462);
    setWeight({ ...weight, lbs });
  };

  // Update kg when lbs change
  const updateMetricWeight = (lbs: number) => {
    const kg = Math.round(lbs / 2.20462);
    setWeight({ ...weight, kg });
  };

  // Handle calculation
  const handleCalculate = () => {
    const heightInUnit = getHeightInUnit();
    const weightInUnit = getWeight();
    
    const calculatedBMI = calculateBMI(weightInUnit, heightInUnit, unit);
    const bmiCategory = getBMICategory(calculatedBMI);
    const bmiDescription = getBMIDescription(calculatedBMI, age, gender, bodyType);
    
    setBmi(calculatedBMI);
    setCategory(bmiCategory);
    setDescription(bmiDescription);
    setShowResults(true);
  };
  
  // Reset the form
  const handleReset = () => {
    setAge(30);
    setHeight({ cm: 170, ft: 5, in: 7 });
    setWeight({ kg: 70, lbs: 154 });
    setGender('male');
    setBodyType('average');
    setBmi(null);
    setShowResults(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-bmi-light shadow-lg">
        <CardHeader className="bg-gradient-to-r from-bmi-primary to-bmi-secondary text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Scale className="h-6 w-6" />
            Body Mass Index Calculator
          </CardTitle>
          <CardDescription className="text-white/80">
            Calculate your BMI with precision, adjusted for age, gender and body type
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6">
          <Tabs defaultValue="metric" value={unit} onValueChange={setUnit} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="metric">Metric (kg/cm)</TabsTrigger>
              <TabsTrigger value="imperial">Imperial (lbs/ft)</TabsTrigger>
            </TabsList>
            
            <div className="space-y-6">
              {/* Gender Selection */}
              <div className="space-y-2">
                <Label>Gender</Label>
                <RadioGroup 
                  defaultValue="male" 
                  value={gender}
                  onValueChange={setGender}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Age Slider */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <Label>Age: {age} years</Label>
                </div>
                <Slider
                  value={[age]}
                  min={1}
                  max={100}
                  step={1}
                  onValueChange={(value) => setAge(value[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Child</span>
                  <span>Teen</span>
                  <span>Adult</span>
                  <span>Senior</span>
                </div>
              </div>
              
              {/* Height Input */}
              <div className="space-y-2">
                <Label className="flex items-center gap-1.5">
                  <Ruler className="h-4 w-4" />
                  Height
                </Label>
                {unit === 'metric' ? (
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={height.cm}
                      onChange={(e) => {
                        const cm = parseInt(e.target.value) || 0;
                        setHeight({ ...height, cm });
                        updateImperialHeight(cm);
                      }}
                      className="w-full"
                      min={1}
                    />
                    <span className="text-sm text-muted-foreground w-10">cm</span>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        value={height.ft}
                        onChange={(e) => {
                          const ft = parseInt(e.target.value) || 0;
                          setHeight({ ...height, ft });
                          updateMetricHeight(ft, height.in);
                        }}
                        className="w-full"
                        min={0}
                      />
                      <span className="text-sm text-muted-foreground w-6">ft</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        value={height.in}
                        onChange={(e) => {
                          const inches = parseInt(e.target.value) || 0;
                          setHeight({ ...height, in: inches });
                          updateMetricHeight(height.ft, inches);
                        }}
                        className="w-full"
                        min={0}
                        max={11}
                      />
                      <span className="text-sm text-muted-foreground w-6">in</span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Weight Input */}
              <div className="space-y-2">
                <Label className="flex items-center gap-1.5">
                  <Weight className="h-4 w-4" />
                  Weight
                </Label>
                {unit === 'metric' ? (
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={weight.kg}
                      onChange={(e) => {
                        const kg = parseInt(e.target.value) || 0;
                        setWeight({ ...weight, kg });
                        updateImperialWeight(kg);
                      }}
                      className="w-full"
                      min={1}
                    />
                    <span className="text-sm text-muted-foreground w-10">kg</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={weight.lbs}
                      onChange={(e) => {
                        const lbs = parseInt(e.target.value) || 0;
                        setWeight({ ...weight, lbs });
                        updateMetricWeight(lbs);
                      }}
                      className="w-full"
                      min={1}
                    />
                    <span className="text-sm text-muted-foreground w-10">lbs</span>
                  </div>
                )}
              </div>
              
              {/* Body Type */}
              <div className="space-y-2">
                <Label>Body Type</Label>
                <RadioGroup 
                  defaultValue="average" 
                  value={bodyType}
                  onValueChange={setBodyType}
                  className="grid grid-cols-3 gap-2"
                >
                  <div className="flex flex-col items-center p-3 border rounded-lg hover:border-bmi-primary cursor-pointer">
                    <RadioGroupItem value="slim" id="slim" className="sr-only" />
                    <Label htmlFor="slim" className="cursor-pointer text-center">
                      <User className="h-8 w-8 mx-auto mb-1" />
                      <span className="text-sm">Slim</span>
                    </Label>
                  </div>
                  
                  <div className="flex flex-col items-center p-3 border rounded-lg hover:border-bmi-primary cursor-pointer">
                    <RadioGroupItem value="average" id="average" className="sr-only" />
                    <Label htmlFor="average" className="cursor-pointer text-center">
                      <User className="h-8 w-8 mx-auto mb-1" />
                      <span className="text-sm">Average</span>
                    </Label>
                  </div>
                  
                  <div className="flex flex-col items-center p-3 border rounded-lg hover:border-bmi-primary cursor-pointer">
                    <RadioGroupItem value="muscular" id="muscular" className="sr-only" />
                    <Label htmlFor="muscular" className="cursor-pointer text-center">
                      <User className="h-8 w-8 mx-auto mb-1" />
                      <span className="text-sm">Muscular</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
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
            className="w-full sm:w-auto bg-bmi-primary hover:bg-bmi-accent"
          >
            Calculate BMI
          </Button>
        </CardFooter>
      </Card>
      
      {showResults && bmi !== null && (
        <BMIResults 
          bmi={bmi}
          category={category}
          description={description}
          age={age}
          gender={gender}
          bodyType={bodyType}
          className="mt-6"
        />
      )}
    </div>
  );
};

export default BMICalculator;

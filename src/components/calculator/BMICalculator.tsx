
import React, { useState } from 'react';
import BMIResults from './BMIResults';
import BMICalculatorForm from './BMICalculatorForm';
import { calculateBMI, getBMICategory, getBMIDescription, getHealthyWeightRange } from '@/lib/bmi-calculator';

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
  const [healthyRange, setHealthyRange] = useState<{ min: number, max: number } | null>(null);
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
    const healthyWeightRange = getHealthyWeightRange(heightInUnit, unit);
    
    setBmi(calculatedBMI);
    setCategory(bmiCategory);
    setDescription(bmiDescription);
    setHealthyRange(healthyWeightRange);
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
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">BMI Calculator</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          The Body Mass Index (BMI) calculator can be used to calculate BMI value and corresponding weight status while taking age into consideration.
        </p>
        <p className="mt-2 text-gray-600">
          BMI is a measurement of a person's leanness or corpulence based on their height and weight, intended to quantify tissue mass.
        </p>
      </div>
      
      <BMICalculatorForm
        unit={unit}
        setUnit={setUnit}
        gender={gender}
        setGender={setGender}
        age={age}
        setAge={setAge}
        height={height}
        setHeight={setHeight}
        weight={weight}
        setWeight={setWeight}
        bodyType={bodyType}
        setBodyType={setBodyType}
        updateImperialHeight={updateImperialHeight}
        updateMetricHeight={updateMetricHeight}
        updateImperialWeight={updateImperialWeight}
        updateMetricWeight={updateMetricWeight}
        handleCalculate={handleCalculate}
        handleReset={handleReset}
      />
      
      {showResults && bmi !== null && (
        <BMIResults 
          bmi={bmi}
          category={category}
          description={description}
          age={age}
          gender={gender}
          bodyType={bodyType}
          healthyRange={healthyRange}
          unit={unit}
          className="mt-6"
        />
      )}
    </div>
  );
};

export default BMICalculator;

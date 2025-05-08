
// Calculate BMI based on weight and height
export const calculateBMI = (
  weight: number, 
  height: number, 
  unit: string
): number => {
  if (weight <= 0 || height <= 0) {
    return 0;
  }
  
  if (unit === 'metric') {
    // Formula: weight (kg) / [height (m)]²
    return weight / (height * height);
  } else {
    // Formula: 703 × weight (lbs) / [height (in)]²
    return (703 * weight) / (height * height);
  }
};

// Get BMI category based on BMI value
export const getBMICategory = (bmi: number): string => {
  if (bmi < 16) {
    return 'Severe Thinness';
  } else if (bmi < 17) {
    return 'Moderate Thinness';
  } else if (bmi < 18.5) {
    return 'Mild Thinness';
  } else if (bmi < 25) {
    return 'Normal weight';
  } else if (bmi < 30) {
    return 'Overweight';
  } else if (bmi < 35) {
    return 'Obesity Class I';
  } else if (bmi < 40) {
    return 'Obesity Class II';
  } else {
    return 'Obesity Class III';
  }
};

// Get BMI description based on BMI value, age, gender and body type
export const getBMIDescription = (
  bmi: number,
  age: number,
  gender: string,
  bodyType: string
): string => {
  // Base description
  let description = `Your BMI is ${bmi.toFixed(1)}, which is classified as ${getBMICategory(bmi)}. `;

  // Add age-specific context
  if (age < 18) {
    description += "For teenagers and children, BMI is assessed differently than for adults. The results should be interpreted by a healthcare provider considering age-specific percentiles. ";
  } else if (age > 65) {
    description += "For seniors, BMI ranges may differ slightly as body composition changes with age. A slightly higher BMI (23-28) may be acceptable for older adults. ";
  }

  // Add gender-specific context
  if (gender === 'female') {
    description += "Women naturally have higher body fat percentages than men. For women, a healthy body fat percentage is typically 21-33% compared to 8-19% for men. ";
  }

  // Add body type context
  if (bodyType === 'muscular') {
    description += "Since you have a muscular build, your BMI may overestimate your body fat as muscle is denser than fat. Consider body fat percentage measurements for a more accurate assessment. ";
  } else if (bodyType === 'slim') {
    description += "With a naturally slim build, you may have less muscle mass, which can affect how your BMI relates to your overall health. ";
  }

  // Add general health advice
  if (bmi < 18.5) {
    description += "Consider consulting with a healthcare professional about healthy ways to gain weight if needed.";
  } else if (bmi >= 18.5 && bmi < 25) {
    description += "This is considered a healthy weight range. Maintain your health with regular physical activity and a balanced diet.";
  } else if (bmi >= 25 && bmi < 30) {
    description += "Consider consulting with a healthcare professional about strategies for achieving a healthy weight through gradual, sustainable changes.";
  } else {
    description += "It's recommended to speak with a healthcare provider about potential health risks and strategies for achieving a healthier weight.";
  }

  return description;
};

// Get healthy weight range based on height and unit
export const getHealthyWeightRange = (
  height: number,
  unit: string
): { min: number; max: number } => {
  if (unit === 'metric') {
    // For metric: height in meters
    const minWeight = 18.5 * (height * height);
    const maxWeight = 24.9 * (height * height);
    return { min: Math.round(minWeight), max: Math.round(maxWeight) };
  } else {
    // For imperial: height in inches, 703 conversion factor
    const minWeight = (18.5 * (height * height)) / 703;
    const maxWeight = (24.9 * (height * height)) / 703;
    return { min: Math.round(minWeight), max: Math.round(maxWeight) };
  }
};

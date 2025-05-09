
import jsPDF from 'jspdf';

interface BMIDataForPDF {
  bmi: number;
  category: string;
  description: string;
  age: number;
  gender: string;
  bodyType: string;
  healthyRange: { min: number; max: number } | null;
  unit: string;
  height: { cm: number; ft: number; in: number };
  weight: { kg: number; lbs: number };
}

export const generateBMIPDF = (data: BMIDataForPDF) => {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.getWidth();
  
  // Add title
  pdf.setFontSize(20);
  pdf.setTextColor(41, 128, 185); // Primary BMI color
  pdf.text('BodyWise BMI Results', pageWidth / 2, 20, { align: 'center' });
  
  // Add logo placeholder
  pdf.setFontSize(10);
  pdf.setTextColor(100, 100, 100);
  pdf.text('BodyWise BMI Calculator', pageWidth / 2, 30, { align: 'center' });
  
  // Add date
  const today = new Date();
  pdf.setFontSize(10);
  pdf.text(`Generated on: ${today.toLocaleDateString()}`, pageWidth / 2, 38, { align: 'center' });
  
  // Add BMI result
  pdf.setFontSize(16);
  pdf.setTextColor(0, 0, 0);
  pdf.text('Your BMI Results', 20, 50);
  
  pdf.setFontSize(14);
  pdf.text(`BMI: ${data.bmi.toFixed(1)} kg/m²`, 20, 60);
  
  pdf.setFontSize(14);
  pdf.text(`Category: ${data.category}`, 20, 70);
  
  // Add user data
  pdf.setFontSize(12);
  pdf.text('Your Details:', 20, 85);
  
  pdf.setFontSize(10);
  pdf.text(`Age: ${data.age} years`, 30, 95);
  pdf.text(`Gender: ${data.gender.charAt(0).toUpperCase() + data.gender.slice(1)}`, 30, 105);
  pdf.text(`Body Type: ${data.bodyType.charAt(0).toUpperCase() + data.bodyType.slice(1)}`, 30, 115);

  // Height and weight based on unit
  if (data.unit === 'metric') {
    pdf.text(`Height: ${data.height.cm} cm`, 30, 125);
    pdf.text(`Weight: ${data.weight.kg} kg`, 30, 135);
  } else {
    pdf.text(`Height: ${data.height.ft}' ${data.height.in}"`, 30, 125);
    pdf.text(`Weight: ${data.weight.lbs} lbs`, 30, 135);
  }
  
  // Add healthy range info
  if (data.healthyRange) {
    pdf.setFontSize(12);
    pdf.text('Healthy Weight Range:', 20, 150);
    
    pdf.setFontSize(10);
    const unit = data.unit === 'metric' ? 'kg' : 'lbs';
    pdf.text(`${Math.round(data.healthyRange.min)} ${unit} - ${Math.round(data.healthyRange.max)} ${unit}`, 30, 160);
  }

  // Add BMI description (with word wrap)
  pdf.setFontSize(12);
  pdf.text('What This Means For You:', 20, 175);
  
  const splitDescription = pdf.splitTextToSize(data.description, pageWidth - 40);
  pdf.setFontSize(10);
  pdf.text(splitDescription, 20, 185);

  // Add disclaimer
  pdf.setFontSize(8);
  pdf.setTextColor(150, 150, 150);
  pdf.text('Disclaimer: This BMI calculation is for informational purposes only and not a substitute', 20, 270);
  pdf.text('for professional medical advice. Please consult with a healthcare professional for personal advice.', 20, 275);

  return pdf;
};

export const downloadBMIPDF = (data: BMIDataForPDF) => {
  const pdf = generateBMIPDF(data);
  pdf.save('bodywise-bmi-results.pdf');
};

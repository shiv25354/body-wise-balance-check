
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Weight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WeightInputProps {
  unit: string;
  weight: { kg: number; lbs: number };
  setWeight: (weight: { kg: number; lbs: number }) => void;
  updateImperialWeight: (kg: number) => void;
  updateMetricWeight: (lbs: number) => void;
}

const WeightInput = ({ 
  unit, 
  weight, 
  setWeight, 
  updateImperialWeight, 
  updateMetricWeight 
}: WeightInputProps) => {
  const { toast } = useToast();

  const handleWeightChange = (value: string, isMetric: boolean) => {
    const numValue = parseFloat(value);
    
    if (isNaN(numValue) || numValue <= 0) {
      return; // Don't update with invalid values
    }
    
    if (isMetric) {
      // Updating kg value
      const kg = numValue;
      setWeight({ ...weight, kg });
      updateImperialWeight(kg);
    } else {
      // Updating lbs value
      const lbs = numValue;
      setWeight({ ...weight, lbs });
      updateMetricWeight(lbs);
    }
  };

  return (
    <div className="space-y-2">
      <Label className="flex items-center gap-1.5 font-medium">
        <Weight className="h-5 w-5" />
        Weight
      </Label>
      {unit === 'metric' ? (
        <div className="flex items-center gap-2">
          <Input
            type="number"
            value={weight.kg || ''}
            onChange={(e) => handleWeightChange(e.target.value, true)}
            className="w-full"
            min={1}
            step="0.1"
            placeholder="Enter weight"
            aria-label="Weight in kilograms"
          />
          <span className="text-sm text-muted-foreground w-10">kg</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Input
            type="number"
            value={weight.lbs || ''}
            onChange={(e) => handleWeightChange(e.target.value, false)}
            className="w-full"
            min={1}
            step="0.1"
            placeholder="Enter weight"
            aria-label="Weight in pounds"
          />
          <span className="text-sm text-muted-foreground w-10">lbs</span>
        </div>
      )}
    </div>
  );
};

export default WeightInput;

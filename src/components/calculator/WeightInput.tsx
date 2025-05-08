
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Weight } from 'lucide-react';

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
  return (
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
  );
};

export default WeightInput;

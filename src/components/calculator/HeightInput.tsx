
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Ruler } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface HeightInputProps {
  unit: string;
  height: { cm: number; ft: number; in: number };
  setHeight: (height: { cm: number; ft: number; in: number }) => void;
  updateImperialHeight: (cm: number) => void;
  updateMetricHeight: (ft: number, inches: number) => void;
}

const HeightInput = ({ 
  unit, 
  height, 
  setHeight, 
  updateImperialHeight, 
  updateMetricHeight 
}: HeightInputProps) => {
  const { toast } = useToast();

  const handleCmChange = (value: string) => {
    const cm = parseFloat(value);
    
    if (isNaN(cm) || cm <= 0) {
      return; // Don't update with invalid values
    }
    
    setHeight({ ...height, cm });
    updateImperialHeight(cm);
  };

  const handleFtChange = (value: string) => {
    const ft = parseFloat(value);
    
    if (isNaN(ft) || ft < 0) {
      return; // Don't update with invalid values
    }
    
    setHeight({ ...height, ft });
    updateMetricHeight(ft, height.in);
  };

  const handleInChange = (value: string) => {
    const inches = parseFloat(value);
    
    if (isNaN(inches) || inches < 0 || inches >= 12) {
      return; // Don't update with invalid values or values >= 12 inches
    }
    
    setHeight({ ...height, in: inches });
    updateMetricHeight(height.ft, inches);
  };

  return (
    <div className="space-y-2">
      <Label className="flex items-center gap-1.5 font-medium">
        <Ruler className="h-5 w-5" />
        Height
      </Label>
      {unit === 'metric' ? (
        <div className="flex items-center gap-2">
          <Input
            type="number"
            value={height.cm || ''}
            onChange={(e) => handleCmChange(e.target.value)}
            className="w-full"
            min={1}
            step="0.1"
            placeholder="Enter height"
            aria-label="Height in centimeters"
          />
          <span className="text-sm text-muted-foreground w-10">cm</span>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <Input
              type="number"
              value={height.ft || ''}
              onChange={(e) => handleFtChange(e.target.value)}
              className="w-full"
              min={0}
              placeholder="Feet"
              aria-label="Height in feet"
            />
            <span className="text-sm text-muted-foreground w-6">ft</span>
          </div>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              value={height.in || ''}
              onChange={(e) => handleInChange(e.target.value)}
              className="w-full"
              min={0}
              max={11}
              placeholder="Inches"
              aria-label="Height in inches"
            />
            <span className="text-sm text-muted-foreground w-6">in</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeightInput;

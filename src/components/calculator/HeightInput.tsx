
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Ruler } from 'lucide-react';

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
  return (
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
  );
};

export default HeightInput;

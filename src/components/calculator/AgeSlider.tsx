
import React from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

interface AgeSliderProps {
  age: number;
  setAge: (age: number) => void;
}

const AgeSlider = ({ age, setAge }: AgeSliderProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <Label>Age: {age} years</Label>
      </div>
      <Slider
        value={[age]}
        min={2}
        max={120}
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
  );
};

export default AgeSlider;
